import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaSpotify } from 'react-icons/fa';

export default function SpotifyNowPlaying() {
  const [data, setData] = useState({ loading: true, error: null });

  useEffect(() => {
    async function fetchSpotify() {
      try {
        const res = await fetch('/api/spotify');
        if (!res.ok) {
          throw new Error('Failed to fetch Spotify data');
        }
        const json = await res.json();
        setData({ loading: false, data: json });
      } catch (err) {
        setData({ loading: false, error: err.message });
      }
    }

    fetchSpotify();
    
    // Poll every 10 seconds for real-time updates
    const interval = setInterval(fetchSpotify, 10000);
    return () => clearInterval(interval);
  }, []);

  if (data.loading) {
    return (
      <div className="spotify-widget-clean skeleton" style={{ height: '80px', width: '100%', borderRadius: '12px' }}></div>
    );
  }

  if (data.error || (data.data && data.data.error)) {
    return (
      <div className="spotify-widget-clean" style={{ padding: '1rem', background: 'var(--bg-secondary)', borderRadius: '12px', border: '1px solid var(--border-light)' }}>
        <p style={{ color: 'var(--clr-red)', fontSize: '0.9rem', margin: 0 }}>
          Spotify Error: {data.error || data.data?.error || "Unknown Error"}
        </p>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', marginTop: '0.5rem' }}>
          Make sure you are running with `vercel dev` and your .env variables are set!
        </p>
      </div>
    );
  }

  const { isPlaying, title, artist, albumImageUrl, songUrl } = data.data;

  if (!title) {
    return (
      <div className="spotify-banner" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-light)', cursor: 'default' }}>
        <div className="spotify-banner-content">
          <div className="spotify-album-art" style={{ background: 'var(--bg-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <FaSpotify size={48} color="var(--text-muted)" />
          </div>
          <div className="spotify-text-details">
            <div className="spotify-status">
              <FaSpotify size={20} color="var(--text-muted)" />
              <span style={{ color: 'var(--text-muted)' }}>Offline</span>
            </div>
            <div className="spotify-title" style={{ color: 'var(--text-secondary)' }}>Not Listening</div>
            <div className="spotify-artist" style={{ color: 'var(--text-muted)' }}>Spotify</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <a 
      href={songUrl || '#'} 
      target="_blank" 
      rel="noopener noreferrer"
      className="spotify-banner"
    >
      {/* Blurred background image */}
      {albumImageUrl && (
        <div 
          className="spotify-banner-bg"
          style={{ backgroundImage: `url(${albumImageUrl})` }}
        ></div>
      )}
      
      {/* Gradient overlay to ensure text readability */}
      <div className="spotify-banner-overlay"></div>

      {/* Content */}
      <div className="spotify-banner-content">
        {/* Album Cover */}
        <div className="spotify-album-art">
          {albumImageUrl ? (
            <img src={albumImageUrl} alt={title} />
          ) : (
            <div className="spotify-placeholder"></div>
          )}
          
          {/* Animated Equalizer Icon when playing */}
          {isPlaying && (
            <div className="spotify-equalizer">
              <motion.div animate={{ height: ["6px", "16px", "6px"] }} transition={{ repeat: Infinity, duration: 0.8 }} className="eq-bar" />
              <motion.div animate={{ height: ["12px", "6px", "12px"] }} transition={{ repeat: Infinity, duration: 0.8 }} className="eq-bar" />
              <motion.div animate={{ height: ["8px", "18px", "8px"] }} transition={{ repeat: Infinity, duration: 0.8 }} className="eq-bar" />
            </div>
          )}
        </div>

        {/* Text Details */}
        <div className="spotify-text-details">
          <div className="spotify-status">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="#1DB954">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15.001 10.62 18.72 12.9c.36.181.54.78.241 1.14zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
            </svg>
            <span>{isPlaying ? 'Currently Playing' : 'Recently Played'}</span>
          </div>
          <div className="spotify-title">{title}</div>
          <div className="spotify-artist">{artist}</div>
        </div>
      </div>
    </a>
  );
}
