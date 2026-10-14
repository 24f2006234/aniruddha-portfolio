import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSpotify, FaPlay, FaExternalLinkAlt } from "react-icons/fa";
import { Gamepad2, Headphones, Sparkles, TrendingUp, Radio } from "lucide-react";
import { gamesData } from "../data/gamesData";
import SpotifyNowPlaying from "./SpotifyNowPlaying";
import "../styles/Games.css";

// Curated high-fidelity top tracks matching Aniruddha's Spotify rotation
const fallbackSongs = [
  { 
    title: "If The Sun Burns Out Tonight", 
    artist: "VALORANT, Grabbitz, Oli Sykes, Courtney LaPlante", 
    albumImageUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/2d/7d/d8/2d7dd83c-21c2-f453-88b6-fe7009ae6a04/823375376644_Cover.jpg/600x600bb.jpg",
    songUrl: "https://open.spotify.com/track/4PzV9zM985u9L9Zz8fFp1F"
  },
  { 
    title: "Moves Like Jagger – Studio Recording", 
    artist: "Maroon 5, Christina Aguilera", 
    albumImageUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/61/53/15/61531592-3e8b-1e85-b434-73a991d8143c/14UMGIM27067.rgb.jpg/600x600bb.jpg",
    songUrl: "https://open.spotify.com/track/7L531D79bL6fHh8c67n0jO"
  },
  { 
    title: "Want to Want Me", 
    artist: "Jason Derulo", 
    albumImageUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/f9/27/0b/f9270b80-9a2f-f7cc-a4e2-2f77372ede3c/093624927594.jpg/600x600bb.jpg",
    songUrl: "https://open.spotify.com/track/0nJW01T7XtvILxQgC5J7Wh"
  },
  { 
    title: "Somewhere Only We Know", 
    artist: "Keane", 
    albumImageUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/89/a6/f7/89a6f7be-a0e0-2524-a13b-6b5df7b7534a/06UMGIM24399.rgb.jpg/600x600bb.jpg",
    songUrl: "https://open.spotify.com/track/0ll8uFnc0nONO8CNTy9Cra"
  },
  { 
    title: "Hey, Soul Sister", 
    artist: "Train", 
    albumImageUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/fa/e8/28/fae8283a-ad10-a642-1d41-a4b3402da4ba/884977817027.jpg/600x600bb.jpg",
    songUrl: "https://open.spotify.com/track/4HlFJVHowRAx29LmZIg9Y7"
  },
];

export default function Games() {
  const [activeTab, setActiveTab] = useState("songs");
  const [topTracks, setTopTracks] = useState({ loading: true, data: [], error: null });
  const [isFallback, setIsFallback] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function fetchTopTracks() {
      try {
        const res = await fetch(`/api/top-tracks?_t=${Date.now()}`);
        if (!res.ok) {
          throw new Error(`Failed to fetch top tracks: ${res.status}`);
        }
        const json = await res.json();
        
        if (json.error) {
          throw new Error(json.error);
        }
        
        if (isMounted) {
          if (json.tracks && json.tracks.length > 0) {
            setTopTracks({ loading: false, data: json.tracks, error: null });
            setIsFallback(false);
          } else {
            setTopTracks({ loading: false, data: fallbackSongs, error: null });
            setIsFallback(true);
          }
        }
      } catch (err) {
        if (isMounted) {
          // Gracefully load curated favorites if Spotify API scope or token is missing
          setTopTracks({ loading: false, data: fallbackSongs, error: err.message });
          setIsFallback(true);
        }
      }
    }

    fetchTopTracks();
    return () => { isMounted = false; };
  }, []);

  const navItems = [
    { 
      id: "songs", 
      label: "Music", 
      icon: Headphones, 
      badge: "Spotify",
      count: "Live"
    },
    { 
      id: "games", 
      label: "Games", 
      icon: Gamepad2, 
      badge: "Curated",
      count: `${gamesData.length} Titles` 
    },
  ];

  return (
    <div className="interests-page">
      <div className="container interests-layout">
        
        {/* Navigation Switcher */}
        <aside className="interests-sidebar">
          <nav className="sidebar-nav-card" aria-label="Interests Navigation">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  className={`sidebar-tab-btn ${isActive ? "active" : ""}`}
                  onClick={() => setActiveTab(item.id)}
                  aria-pressed={isActive}
                >
                  {/* Sliding animated background pill */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabPill"
                      className="sidebar-tab-pill-bg"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  
                  <div className="sidebar-tab-inner">
                    <span className="sidebar-tab-icon">
                      <Icon size={17} color={isActive ? "#1DB954" : "currentColor"} />
                    </span>
                    <span>{item.label}</span>
                  </div>

                  <span className="sidebar-tab-badge">
                    {item.count}
                  </span>
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Content Area */}
        <div className="interests-content">
          <AnimatePresence mode="wait">
            {activeTab === "songs" && (
              <motion.section
                key="songs-section"
                id="songs"
                className="interests-section-block"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Header */}
                <div className="interests-header-group">
                  <div className="interests-kicker">
                    <span className="interests-kicker-dot" />
                    <span>Real-Time Spotify Integration</span>
                  </div>
                  <h1 className="interests-heading">Songs I like</h1>
                  <p className="interests-subtitle">
                    A live window into my current rotation and monthly top tracks streamed directly from Spotify.
                  </p>
                </div>

                {/* Hero Now Playing / Recently Played Card */}
                <SpotifyNowPlaying />

                {/* Ranked Top Tracks Section */}
                <div className="top-tracks-section">
                  <div className="tracks-section-header">
                    <div className="tracks-section-title-wrap">
                      <TrendingUp size={19} color="#1DB954" />
                      <h2 className="tracks-section-title">
                        {isFallback ? "Heavy Rotation" : "Top Tracks This Month"}
                      </h2>
                    </div>
                    <span className="tracks-badge-tag">
                      {isFallback ? "Curated Favorites" : "Spotify API • Short Term"}
                    </span>
                  </div>

                  {topTracks.loading ? (
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                      {[1, 2, 3, 4, 5].map((n) => (
                        <div 
                          key={n} 
                          className="track-row-card"
                          style={{ height: "68px", opacity: 0.6 }}
                        >
                          <div style={{ width: "24px", height: "16px", background: "rgba(255,255,255,0.06)", borderRadius: "4px" }} />
                          <div style={{ width: "52px", height: "52px", background: "rgba(255,255,255,0.06)", borderRadius: "8px" }} />
                          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "6px" }}>
                            <div style={{ width: "50%", height: "14px", background: "rgba(255,255,255,0.06)", borderRadius: "4px" }} />
                            <div style={{ width: "30%", height: "12px", background: "rgba(255,255,255,0.04)", borderRadius: "4px" }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="tracks-list-container">
                      {topTracks.data.map((song, i) => (
                        <motion.a
                          key={song.title + i}
                          href={song.songUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="track-row-card"
                          initial={{ opacity: 0, x: -16 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                          title={`Listen to "${song.title}" on Spotify`}
                        >
                          {/* Rank slot: number transforms into play button on hover */}
                          <div className="track-rank-slot">
                            <span className="track-rank-num">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <span className="track-rank-play">
                              <FaPlay size={12} />
                            </span>
                          </div>

                          {/* Cover Art */}
                          <div className="track-cover-thumb">
                            {song.albumImageUrl ? (
                              <img
                                src={song.albumImageUrl}
                                alt={song.title}
                                loading="lazy"
                              />
                            ) : (
                              <div style={{ width: "100%", height: "100%", background: "var(--bg-secondary)" }} />
                            )}
                          </div>

                          {/* Metadata */}
                          <div className="track-meta-content">
                            <h3 className="track-song-title">
                              {song.title}
                            </h3>
                            <p className="track-song-artist">
                              {song.artist}
                            </p>
                          </div>

                          {/* Action Button */}
                          <div className="track-action-slot">
                            <span className="track-spotify-btn">
                              <FaSpotify size={14} />
                              <span>Play</span>
                              <FaExternalLinkAlt size={9} style={{ opacity: 0.7 }} />
                            </span>
                          </div>
                        </motion.a>
                      ))}
                    </div>
                  )}
                </div>
              </motion.section>
            )}

            {activeTab === "games" && (
              <motion.section
                key="games-section"
                id="games"
                className="interests-section-block"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Header */}
                <div className="interests-header-group">
                  <div className="interests-kicker" style={{ color: "#c084fc", background: "rgba(192, 132, 252, 0.1)", borderColor: "rgba(192, 132, 252, 0.25)" }}>
                    <Sparkles size={12} />
                    <span>Curated Showcase • Gaming</span>
                  </div>
                  <h1 className="interests-heading">Games I like</h1>
                  <p className="interests-subtitle">
                    A collection of standout titles with phenomenal storytelling, mechanics, atmosphere, and art direction that have shaped my appreciation for interactive design.
                  </p>
                </div>

                {/* Poster Grid */}
                <div className="games-grid-container">
                  {gamesData.map((game, i) => (
                    <motion.div
                      key={game.title + i}
                      className="game-poster-card"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                      title={game.title}
                    >
                      <img
                        src={game.image}
                        alt={game.title}
                        className="game-poster-img"
                        loading="lazy"
                      />
                      
                      {/* Scrim Gradient with Title and Tag */}
                      <div className="game-poster-scrim">
                        <h3 className="game-poster-title">
                          {game.title}
                        </h3>
                        {game.tag && (
                          <span className="game-poster-tag">
                            {game.tag}
                          </span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
