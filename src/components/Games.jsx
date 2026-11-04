import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Gamepad2, Headphones } from "lucide-react";
import { gamesData } from "../data/gamesData";
import SpotifyNowPlaying from "./SpotifyNowPlaying";
import { spotifySearchUrl } from "../utils/spotify";
import "../styles/Games.css";

const ease = [0.22, 1, 0.36, 1];

// Shown only if the Spotify API is unreachable (local dev or an outage).
// Links are Spotify searches, so they always resolve.
const fallbackSongs = [
  {
    title: "If The Sun Burns Out Tonight",
    artist: "VALORANT, Grabbitz, Oli Sykes, Courtney LaPlante",
    albumImageUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/2d/7d/d8/2d7dd83c-21c2-f453-88b6-fe7009ae6a04/823375376644_Cover.jpg/600x600bb.jpg",
  },
  {
    title: "Moves Like Jagger",
    artist: "Maroon 5, Christina Aguilera",
    albumImageUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/61/53/15/61531592-3e8b-1e85-b434-73a991d8143c/14UMGIM27067.rgb.jpg/600x600bb.jpg",
  },
  {
    title: "Want to Want Me",
    artist: "Jason Derulo",
    albumImageUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/f9/27/0b/f9270b80-9a2f-f7cc-a4e2-2f77372ede3c/093624927594.jpg/600x600bb.jpg",
  },
  {
    title: "Somewhere Only We Know",
    artist: "Keane",
    albumImageUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/89/a6/f7/89a6f7be-a0e0-2524-a13b-6b5df7b7534a/06UMGIM24399.rgb.jpg/600x600bb.jpg",
  },
  {
    title: "Hey, Soul Sister",
    artist: "Train",
    albumImageUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/fa/e8/28/fae8283a-ad10-a642-1d41-a4b3402da4ba/884977817027.jpg/600x600bb.jpg",
  },
].map((s) => ({ ...s, songUrl: spotifySearchUrl(s.title, s.artist) }));

const tabs = [
  { id: "songs", label: "Songs", icon: Headphones },
  { id: "games", label: "Games", icon: Gamepad2 },
];

function TopTracks() {
  const [state, setState] = useState({ loading: true, tracks: [] });

  useEffect(() => {
    let isMounted = true;
    (async () => {
      try {
        const res = await fetch(`/api/top-tracks?_t=${Date.now()}`);
        if (!res.ok) throw new Error(`Failed to fetch top tracks: ${res.status}`);
        const json = await res.json();
        if (json.error) throw new Error(json.error);
        if (isMounted) {
          setState({ loading: false, tracks: json.tracks?.length ? json.tracks : fallbackSongs });
        }
      } catch {
        if (isMounted) setState({ loading: false, tracks: fallbackSongs });
      }
    })();
    return () => {
      isMounted = false;
    };
  }, []);

  if (state.loading) {
    return (
      <ol className="track-list" aria-busy="true" aria-label="Loading top tracks">
        {[0, 1, 2, 3, 4].map((n) => (
          <li key={n} className="track-row is-skeleton">
            <span className="skeleton-block track-rank-skeleton" />
            <span className="skeleton-block track-cover" />
            <span className="track-text">
              <span className="skeleton-block skeleton-line" />
              <span className="skeleton-block skeleton-line short" />
            </span>
          </li>
        ))}
      </ol>
    );
  }

  return (
    <ol className="track-list">
      {state.tracks.map((song, i) => (
        <motion.li
          key={song.title + i}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: i * 0.04, ease }}
        >
          <a
            href={song.songUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="track-row"
            aria-label={`${song.title} by ${song.artist}, open in Spotify`}
          >
            <span className="track-rank">{String(i + 1).padStart(2, "0")}</span>
            {song.albumImageUrl ? (
              <img className="track-cover" src={song.albumImageUrl} alt="" loading="lazy" />
            ) : (
              <span className="track-cover" />
            )}
            <span className="track-text">
              <span className="track-title">{song.title}</span>
              <span className="track-artist">{song.artist}</span>
            </span>
            <ArrowUpRight className="track-go" size={16} aria-hidden="true" />
          </a>
        </motion.li>
      ))}
    </ol>
  );
}

function GamesGrid() {
  return (
    <ul className="games-grid">
      {gamesData.map((game, i) => (
        <motion.li
          key={game.title}
          className="game-card"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: i * 0.03, ease }}
        >
          <div className="game-poster">
            <img
              src={game.image}
              alt={`${game.title} cover art`}
              loading="lazy"
              onError={(e) => {
                e.currentTarget.style.visibility = "hidden";
              }}
            />
          </div>
          <div className="game-caption">
            <span className="game-title">{game.title}</span>
            {game.tag && <span className="game-tag">{game.tag}</span>}
          </div>
        </motion.li>
      ))}
    </ul>
  );
}

export default function Games() {
  const [activeTab, setActiveTab] = useState("songs");

  return (
    <div className="interests-page">
      <div className="container">
        <motion.header
          className="interests-hero"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
        >
          <p className="interests-eyebrow">Off the clock</p>
          <h1 className="interests-title">Interests</h1>
          <p className="interests-lede">
            What I listen to and play when I'm not building. The music below comes live from my Spotify.
          </p>
        </motion.header>

        <div className="interests-tabs" role="tablist" aria-label="Interests">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                id={`tab-${tab.id}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${tab.id}`}
                className={`interests-tab${isActive ? " is-active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {isActive && (
                  <motion.span
                    layoutId="interests-tab-bg"
                    className="interests-tab-bg"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <Icon size={16} aria-hidden="true" />
                {tab.label}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            id={`panel-${activeTab}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeTab}`}
            className="interests-panel"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease }}
          >
            {activeTab === "songs" ? (
              <>
                <SpotifyNowPlaying />
                <div className="interests-subhead">
                  <h2>Top tracks this month</h2>
                </div>
                <TopTracks />
              </>
            ) : (
              <>
                <div className="interests-subhead">
                  <h2>Games I've loved</h2>
                  <p>Picked for their storytelling, mechanics and art direction.</p>
                </div>
                <GamesGrid />
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
