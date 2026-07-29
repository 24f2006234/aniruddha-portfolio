import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gamesData } from "../data/gamesData";
import SpotifyNowPlaying from "./SpotifyNowPlaying";
import "../styles/Games.css";

const songsData = [
  { title: "Bohemian Rhapsody", artist: "Queen" },
  { title: "Hotel California", artist: "Eagles" },
  { title: "Stairway to Heaven", artist: "Led Zeppelin" },
  { title: "Imagine", artist: "John Lennon" },
  { title: "Smells Like Teen Spirit", artist: "Nirvana" },
];

export default function Games() {
  const [activeTab, setActiveTab] = useState("games");

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
                <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Top Tracks (Manual)</h3>
                {songsData.map((song, i) => (
                  <motion.div
                    key={i}
                    className="song-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.05, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <div className="song-info">
                      <h3 className="song-title">{song.title}</h3>
                      <p className="song-artist">{song.artist}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
