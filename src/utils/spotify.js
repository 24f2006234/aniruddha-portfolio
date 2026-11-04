// A Spotify search link always resolves, unlike a hand-copied track ID.
export const spotifySearchUrl = (title, artist) =>
  `https://open.spotify.com/search/${encodeURIComponent(`${title} ${artist}`)}`;
