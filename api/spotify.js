export const config = {
  runtime: 'edge',
};

const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const NOW_PLAYING_ENDPOINT = "https://api.spotify.com/v1/me/player/currently-playing";
const RECENTLY_PLAYED_ENDPOINT = "https://api.spotify.com/v1/me/player/recently-played?limit=1";

export default async function handler(req) {
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
    // 1. Get a fresh access token
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

    // 2. Fetch currently playing track
    const nowPlayingRes = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    if (nowPlayingRes.status === 204 || nowPlayingRes.status > 400) {
      // 3. Fallback: If nothing is playing, fetch recently played
      const recentRes = await fetch(RECENTLY_PLAYED_ENDPOINT, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      
      if (recentRes.status === 204 || recentRes.status > 400) {
        return new Response(JSON.stringify({ isPlaying: false }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        });
      }

      const recentData = await recentRes.json();
      if (!recentData.items || recentData.items.length === 0) {
        return new Response(JSON.stringify({ isPlaying: false }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        });
      }
      
      const track = recentData.items[0].track;
      return new Response(JSON.stringify({
        isPlaying: false,
        title: track.name,
        artist: track.artists.map((_artist) => _artist.name).join(", "),
        albumImageUrl: track.album.images[0]?.url,
        songUrl: track.external_urls.spotify,
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const nowPlayingData = await nowPlayingRes.json();
    const track = nowPlayingData.item;
    
    if (!track) {
        return new Response(JSON.stringify({ isPlaying: false }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        });
    }

    return new Response(JSON.stringify({
      isPlaying: nowPlayingData.is_playing,
      title: track.name,
      artist: track.artists.map((_artist) => _artist.name).join(", "),
      albumImageUrl: track.album.images[0]?.url,
      songUrl: track.external_urls.spotify,
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
    
  } catch (error) {
    console.error("Spotify API Error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
