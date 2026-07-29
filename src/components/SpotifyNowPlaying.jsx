import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

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
    return null; // Not playing and no recent track
  }

  return (
    <a 
      href={songUrl || '#'} 
      target="_blank" 
      rel="noopener noreferrer"
      style={{
        display: 'block',
        position: 'relative',
        borderRadius: '16px',
        overflow: 'hidden',
        textDecoration: 'none',
        transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        boxShadow: 'var(--shadow-md)',
        cursor: 'pointer',
        minHeight: '200px',
      }}
      className="spotify-banner"
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px) scale(1.01)';
        e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'none';
        e.currentTarget.style.boxShadow = 'var(--shadow-md)';
      }}
    >
      {/* Blurred background image */}
      {albumImageUrl && (
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: `url(${albumImageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(20px) brightness(0.4)',
          transform: 'scale(1.2)',
          zIndex: 0
        }}></div>
      )}
      
      {/* Gradient overlay to ensure text readability */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 100%)',
        zIndex: 1
      }}></div>

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        display: 'flex',
        alignItems: 'flex-end',
        padding: '2rem',
        gap: '1.5rem',
        height: '100%',
        minHeight: '200px'
      }}>
        {/* Album Cover */}
        <div style={{ position: 'relative', width: '120px', height: '120px', flexShrink: 0, borderRadius: '12px', overflow: 'hidden', boxShadow: '0 8px 24px rgba(0,0,0,0.5)' }}>
          {albumImageUrl ? (
            <img 
              src={albumImageUrl} 
              alt={title} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          ) : (
            <div style={{ width: '100%', height: '100%', background: 'var(--bg-surface)' }}></div>
          )}
          
          {/* Animated Equalizer Icon when playing */}
          {isPlaying && (
            <div style={{
              position: 'absolute',
              bottom: '8px',
              right: '8px',
              background: 'rgba(0,0,0,0.7)',
              backdropFilter: 'blur(4px)',
              borderRadius: '6px',
              padding: '6px',
              display: 'flex',
              gap: '3px',
              alignItems: 'flex-end',
              height: '24px'
            }}>
              <motion.div animate={{ height: ["6px", "16px", "6px"] }} transition={{ repeat: Infinity, duration: 0.8 }} style={{ width: '4px', background: '#1DB954', borderRadius: '2px' }} />
              <motion.div animate={{ height: ["12px", "6px", "12px"] }} transition={{ repeat: Infinity, duration: 0.8 }} style={{ width: '4px', background: '#1DB954', borderRadius: '2px' }} />
              <motion.div animate={{ height: ["8px", "18px", "8px"] }} transition={{ repeat: Infinity, duration: 0.8 }} style={{ width: '4px', background: '#1DB954', borderRadius: '2px' }} />
            </div>
          )}
        </div>

        {/* Text Details */}
        <div style={{ flex: 1, minWidth: 0, color: '#ffffff' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="#1DB954">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15.001 10.62 18.72 12.9c.36.181.54.78.241 1.14zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
            </svg>
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'rgba(255,255,255,0.8)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              {isPlaying ? 'Currently Playing' : 'Recently Played'}
            </span>
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', lineHeight: 1.2, marginBottom: '0.25rem' }}>
            {title}
          </div>
          <div style={{ fontSize: '1.1rem', fontWeight: 500, color: 'rgba(255,255,255,0.7)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {artist}
          </div>
        </div>
      </div>
    </a>
  );
}
