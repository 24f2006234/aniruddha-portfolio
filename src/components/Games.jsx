import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSpotify } from "react-icons/fa";
import { gamesData } from "../data/gamesData";
import SpotifyNowPlaying from "./SpotifyNowPlaying";
import "../styles/Games.css";

const fallbackSongs = [
  { 
    title: "Bohemian Rhapsody", 
    artist: "Queen", 
    albumImageUrl: "https://i.scdn.co/image/ab67616d0000b273e8b066f70c206551210d902b",
    songUrl: "https://open.spotify.com/track/3z8h0TU7ReDPLIbEnYhWZb"
  },
  { 
    title: "Hotel California", 
    artist: "Eagles", 
    albumImageUrl: "https://i.scdn.co/image/ab67616d0000b273b64ce69b61fb224dc6fc6f0e",
    songUrl: "https://open.spotify.com/track/40riOy7x9W7GXjyNd4pjBa"
  },
  { 
    title: "Stairway to Heaven", 
    artist: "Led Zeppelin", 
    albumImageUrl: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a982d086afc69",
    songUrl: "https://open.spotify.com/track/5CQ30WqJwcep0pYcV4CGNp"
  },
  { 
    title: "Imagine", 
    artist: "John Lennon", 
    albumImageUrl: "https://i.scdn.co/image/ab67616d0000b273c886ab8e72395640798ce0fb",
    songUrl: "https://open.spotify.com/track/7pKfPomKeDpSNpzFm0FDCR"
  },
  { 
    title: "Smells Like Teen Spirit", 
    artist: "Nirvana", 
    albumImageUrl: "https://i.scdn.co/image/ab67616d0000b273e175a19e530c898d167d39bf",
    songUrl: "https://open.spotify.com/track/1f3yAtsJtY87CTmM8RLnxf"
  },
];

export default function Games() {
  const [activeTab, setActiveTab] = useState("games");
  const [topTracks, setTopTracks] = useState({ loading: true, data: [], error: null });
  const [isFallback, setIsFallback] = useState(false);

  React.useEffect(() => {
    async function fetchTopTracks() {
      try {
        const res = await fetch(`/api/top-tracks?_t=${Date.now()}`);
        if (!res.ok) {
          const errText = await res.text();
          throw new Error(`Failed to fetch top tracks: ${errText}`);
        }
        const json = await res.json();
        
        if (json.error) {
           throw new Error(json.error);
        }
        
        setTopTracks({ loading: false, data: json.tracks || [], error: null });
        setIsFallback(false);
      } catch (err) {
        console.warn("Falling back to manual tracks due to API error:", err.message);
        setTopTracks({ loading: false, data: fallbackSongs, error: err.message });
        setIsFallback(true);
      }
    }
    fetchTopTracks();
  }, []);

  return (
    <div className="interests-page">
      <div className="container interests-layout">
        <aside className="interests-sidebar">
          <nav className="sidebar-nav">
            <button 
              className={`sidebar-link ${activeTab === 'games' ? 'active' : ''}`}
              onClick={() => setActiveTab('games')}
            >
              Games
            </button>
            <button 
              className={`sidebar-link ${activeTab === 'songs' ? 'active' : ''}`}
              onClick={() => setActiveTab('songs')}
            >
              Songs
            </button>
          </nav>
        </aside>

        <div className="interests-content">
          {activeTab === 'games' && (
            <section id="games" className="interests-section-block fade-in-section">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              >
                <h2 className="section-title">Games I like</h2>
                <p className="games-subtitle">
                  A collection of titles with phenomenal storytelling, mechanics, and art direction that I've enjoyed playing.
                </p>
              </motion.div>

              <div className="games-grid">
                {gamesData.map((game, i) => (
                  <motion.div
                    key={i}
                    className="game-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.05, ease: [0.4, 0, 0.2, 1] }}
                    title={game.title}
                  >
                    <div className="game-card-inner">
                      <img src={game.image} alt={game.title} className="game-img" loading="lazy" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          )}

          {activeTab === 'songs' && (
            <section id="songs" className="interests-section-block fade-in-section">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              >
                <h2 className="section-title">Songs I like</h2>
                <p className="games-subtitle">
                  My top tracks and playlists, brought in directly from Spotify.
                </p>
              </motion.div>

              <div style={{ marginBottom: '2rem' }}>
                <SpotifyNowPlaying />
              </div>

              <div className="songs-list">
                <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
                  {isFallback ? 'Top Tracks (Manual)' : 'Top Tracks This Month'}
                </h3>
                
                {topTracks.loading ? (
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontStyle: 'italic' }}>Loading top tracks from Spotify...</div>
                ) : (
                  <>
                    {isFallback && (
                      <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginBottom: '1rem', fontStyle: 'italic' }}>
                        (Spotify API needs 'user-top-read' scope. Showing manual list.)
                      </div>
                    )}
                    {topTracks.data.length === 0 && !isFallback ? (
                      <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>No top tracks found.</div>
                    ) : (
                      topTracks.data.map((song, i) => (
                        <motion.div
                          key={i}
                          className="song-card premium-song-card"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: i * 0.05, ease: [0.4, 0, 0.2, 1] }}
                          onClick={() => window.open(song.songUrl, '_blank')}
                        >
                          <div className="song-rank">{i + 1}</div>
                          <div className="song-image-container">
                            {song.albumImageUrl ? (
                              <img 
                                src={song.albumImageUrl} 
                                alt={song.title} 
                                className="song-cover-art"
                              />
                            ) : (
                              <div className="song-cover-placeholder"></div>
                            )}
                            <div className="song-play-overlay">
                              <svg viewBox="0 0 24 24" fill="white" width="24" height="24"><path d="M8 5v14l11-7z"/></svg>
                            </div>
                          </div>
                          <div className="song-info">
                            <h3 className="song-title" title={song.title}>{song.title}</h3>
                            <p className="song-artist" title={song.artist}>{song.artist}</p>
                          </div>
                          <div className="song-action">
                            <FaSpotify color="#1DB954" size={24} />
                          </div>
                        </motion.div>
                      ))
                    )}
                  </>
                )}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
