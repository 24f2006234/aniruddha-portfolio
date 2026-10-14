import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaSpotify, FaExternalLinkAlt } from "react-icons/fa";
import { Radio, Disc3 } from "lucide-react";

// Curated fallback track if the API is unreachable (e.g., local dev or offline)
const fallbackTrack = {
  isPlaying: false,
  title: "Lovers On The Moon",
  artist: "AJ Mitchell",
  albumImageUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/a7/93/a0/a793a0b5-2e33-d0be-3887-77b5a4704638/886449601998.jpg/600x600bb.jpg",
  songUrl: "https://open.spotify.com/artist/01Xgg4h07n845K25WbK7pS",
  isFallback: true
};

export default function SpotifyNowPlaying() {
  const [data, setData] = useState({ loading: true, data: null, error: null });

  useEffect(() => {
    let isMounted = true;

    async function fetchSpotify() {
      try {
        const res = await fetch(`/api/spotify?_t=${Date.now()}`);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const json = await res.json();
        if (isMounted) {
          if (json.error) {
            setData({ loading: false, data: fallbackTrack, error: json.error });
          } else if (!json.title && !json.isPlaying) {
            // Nothing returned, use fallback as spotlight
            setData({ loading: false, data: { ...fallbackTrack, isOffline: true }, error: null });
          } else {
            setData({ loading: false, data: json, error: null });
          }
        }
      } catch (err) {
        if (isMounted) {
          // Gracefully fall back to preview track instead of showing raw error
          setData({ loading: false, data: fallbackTrack, error: err.message });
        }
      }
    }

    fetchSpotify();

    // Poll every 15 seconds for real-time live playback updates
    const interval = setInterval(fetchSpotify, 15000);
    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  if (data.loading) {
    return (
      <div className="spotify-skeleton-card">
        <div 
          style={{ 
            width: "110px", 
            height: "110px", 
            borderRadius: "14px", 
            background: "rgba(255, 255, 255, 0.08)",
            flexShrink: 0
          }} 
        />
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <div style={{ width: "120px", height: "14px", borderRadius: "6px", background: "rgba(255, 255, 255, 0.08)" }} />
          <div style={{ width: "70%", height: "28px", borderRadius: "8px", background: "rgba(255, 255, 255, 0.08)" }} />
          <div style={{ width: "40%", height: "16px", borderRadius: "6px", background: "rgba(255, 255, 255, 0.08)" }} />
        </div>
      </div>
    );
  }

  const track = data.data || fallbackTrack;
  const isPlaying = track.isPlaying;
  const title = track.title || "No Track Available";
  const artist = track.artist || "Spotify";
  const albumImageUrl = track.albumImageUrl;
  const songUrl = track.songUrl || "https://open.spotify.com";

  return (
    <div className="spotify-hero-container">
      {/* Ambient Radial Backlight */}
      <div 
        className="spotify-hero-glow"
        style={{
          background: isPlaying
            ? "radial-gradient(60% 60% at 30% 50%, rgba(29, 185, 84, 0.28) 0%, transparent 80%)"
            : "radial-gradient(60% 60% at 30% 50%, rgba(29, 185, 84, 0.16) 0%, rgba(99, 102, 241, 0.1) 60%, transparent 80%)"
        }}
      />

      <motion.a
        href={songUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="spotify-banner-card"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        title={`Listen to "${title}" on Spotify`}
      >
        {/* Blurred Album Artwork Background */}
        {albumImageUrl && (
          <div
            className="spotify-backdrop-blur"
            style={{ backgroundImage: `url(${albumImageUrl})` }}
          />
        )}

        <div className="spotify-card-content">
          {/* Cover Art + Vinyl Peek Decoration */}
          <div className="spotify-art-container">
            {/* Vinyl disc element */}
            <div className="spotify-vinyl-disc" />

            {/* Main Album Art */}
            <div className="spotify-art-wrapper">
              {albumImageUrl ? (
                <img
                  src={albumImageUrl}
                  alt={title}
                  className="spotify-art-img"
                  loading="lazy"
                />
              ) : (
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "var(--bg-secondary)"
                  }}
                >
                  <Disc3 size={48} color="var(--text-muted)" />
                </div>
              )}

              {/* Dynamic 4-Bar Audio Equalizer (Active when Playing) */}
              {isPlaying && (
                <div className="spotify-live-eq" title="Streaming audio now">
                  <div className="live-eq-bar" />
                  <div className="live-eq-bar" />
                  <div className="live-eq-bar" />
                  <div className="live-eq-bar" />
                </div>
              )}
            </div>
          </div>

          {/* Track Details */}
          <div className="spotify-details">
            <div className={`spotify-status-badge ${isPlaying ? "streaming" : "offline"}`}>
              {isPlaying ? (
                <>
                  <span className="interests-kicker-dot" />
                  <span>Now Streaming</span>
                </>
              ) : (
                <>
                  <FaSpotify size={16} color="#1DB954" />
                  <span>Recently Played</span>
                </>
              )}
            </div>

            <h3 className="spotify-track-title" title={title}>
              {title}
            </h3>

            <p className="spotify-track-artist" title={artist}>
              {artist}
            </p>
          </div>

          {/* Action CTA Button */}
          <div className="spotify-cta-action">
            <span className="spotify-cta-pill">
              <FaSpotify size={15} />
              <span>Listen</span>
              <FaExternalLinkAlt size={10} style={{ opacity: 0.8 }} />
            </span>
          </div>
        </div>
      </motion.a>
    </div>
  );
}
