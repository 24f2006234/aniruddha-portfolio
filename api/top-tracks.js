/* global process */
export const config = {
  runtime: 'edge',
};

const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const TOP_TRACKS_ENDPOINT = "https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=5";

export default async function handler() {
  const clientId = (process.env.SPOTIFY_CLIENT_ID || '').trim();
  const clientSecret = (process.env.SPOTIFY_CLIENT_SECRET || '').trim();
  const refreshToken = (process.env.SPOTIFY_REFRESH_TOKEN || '').trim();

  if (!clientId || !clientSecret || !refreshToken) {
    return new Response(JSON.stringify({ error: "Missing Spotify credentials" }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const basic = btoa(`${clientId}:${clientSecret}`);

  try {
    const tokenResponse = await fetch(TOKEN_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Basic ${basic}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: refreshToken,
      }).toString(),
    });

    if (!tokenResponse.ok) {
      throw new Error(`Failed to refresh token: ${tokenResponse.statusText}`);
    }

    const { access_token } = await tokenResponse.json();

    const topTracksRes = await fetch(TOP_TRACKS_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    if (!topTracksRes.ok) {
      return new Response(JSON.stringify({ tracks: [] }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const topTracksData = await topTracksRes.json();
    
    const tracks = (topTracksData.items || []).map((track) => ({
      title: track.name,
      artist: track.artists.map((_artist) => _artist.name).join(", "),
      albumImageUrl: track.album.images[1]?.url || track.album.images[0]?.url,
      songUrl: track.external_urls.spotify,
    }));

    return new Response(JSON.stringify({ tracks }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
    
  } catch (error) {
    console.error("Spotify Top Tracks Error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
