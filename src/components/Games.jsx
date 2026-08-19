import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSpotify } from "react-icons/fa";
import { gamesData } from "../data/gamesData";
import SpotifyNowPlaying from "./SpotifyNowPlaying";
import "../styles/Games.css";

export default function Games() {
  const [activeTab, setActiveTab] = useState("games");
  const [topTracks, setTopTracks] = useState([]);
  const [loadingTracks, setLoadingTracks] = useState(true);

  useEffect(() => {
    async function fetchTopTracks() {
      try {
        const res = await fetch('/api/top-tracks');
        if (res.ok) {
          const data = await res.json();
          setTopTracks(data.tracks || []);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoadingTracks(false);
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
                <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Top Tracks (This Month)</h3>
                {loadingTracks ? (
                  <div className="spotify-widget-clean skeleton" style={{ height: '80px', width: '100%', borderRadius: '12px' }}></div>
                ) : (
                  topTracks.map((song, i) => (
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
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
