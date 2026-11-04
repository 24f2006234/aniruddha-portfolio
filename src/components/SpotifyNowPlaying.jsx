import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaSpotify } from "react-icons/fa";
import { ArrowUpRight, Disc3 } from "lucide-react";
import { spotifySearchUrl } from "../utils/spotify";

// Shown only if the API is unreachable (local dev or an outage).
const fallbackTrack = {
  isPlaying: false,
  title: "Lovers On The Moon",
  artist: "AJ Mitchell",
  albumImageUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/a7/93/a0/a793a0b5-2e33-d0be-3887-77b5a4704638/886449601998.jpg/600x600bb.jpg",
  songUrl: spotifySearchUrl("Lovers On The Moon", "AJ Mitchell"),
};

export default function SpotifyNowPlaying() {
  const [state, setState] = useState({ loading: true, track: null });

  useEffect(() => {
    let isMounted = true;

    async function fetchSpotify() {
      try {
        const res = await fetch(`/api/spotify?_t=${Date.now()}`);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const json = await res.json();
        if (!isMounted) return;
        const usable = !json.error && (json.title || json.isPlaying);
        setState({ loading: false, track: usable ? json : fallbackTrack });
      } catch {
        if (isMounted) setState({ loading: false, track: fallbackTrack });
      }
    }

    fetchSpotify();
    // Poll so "now playing" stays current while the page is open.
    const interval = setInterval(fetchSpotify, 15000);
    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  if (state.loading) {
    return (
      <div className="np-card is-skeleton" aria-busy="true" aria-label="Loading Spotify">
        <span className="skeleton-block np-art" />
        <span className="np-text">
          <span className="skeleton-block skeleton-line short" />
          <span className="skeleton-block skeleton-line tall" />
          <span className="skeleton-block skeleton-line" />
        </span>
      </div>
    );
  }

  const track = state.track || fallbackTrack;
  const { isPlaying, albumImageUrl } = track;
  const title = track.title || "Nothing playing";
  const artist = track.artist || "Spotify";
  const songUrl = track.songUrl || "https://open.spotify.com";

  return (
    <motion.a
      href={songUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`np-card${isPlaying ? " is-playing" : ""}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      aria-label={`${isPlaying ? "Now playing" : "Recently played"}: ${title} by ${artist}. Open in Spotify`}
    >
      {albumImageUrl && <span className="np-backdrop" style={{ backgroundImage: `url(${albumImageUrl})` }} />}

      <span className="np-art">
        {albumImageUrl ? <img src={albumImageUrl} alt="" loading="lazy" /> : <Disc3 size={40} aria-hidden="true" />}
        {isPlaying && (
          <span className="np-eq" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
          </span>
        )}
      </span>

      <span className="np-text">
        <span className="np-status">
          {isPlaying ? <span className="np-live-dot" /> : <FaSpotify size={14} className="np-spotify" />}
          {isPlaying ? "Now playing" : "Recently played"}
        </span>
        <span className="np-title">{title}</span>
        <span className="np-artist">{artist}</span>
      </span>

      <span className="np-open" aria-hidden="true">
        <span>Open in Spotify</span>
        <ArrowUpRight size={15} />
      </span>
    </motion.a>
  );
}
