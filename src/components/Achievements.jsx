import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Trophy, Medal, ChevronLeft, ChevronRight, X } from "lucide-react";
import { certifications } from "../data/portfolioData";
import "../styles/Projects.css";

function getRankStyles(rankText) {
  const lower = rankText.toLowerCase();
  
  // Tier 1: Gold
  if (lower.includes("1st place") || lower.includes("winner")) {
    return { color: '#FBBF24', bg: 'rgba(251, 191, 36, 0.15)', border: 'rgba(251, 191, 36, 0.4)', icon: Award };
  } 
  // Tier 2: Silver
  else if (lower.includes("runner-up") || lower.includes("2nd place")) {
    return { color: '#94A3B8', bg: 'rgba(148, 163, 184, 0.15)', border: 'rgba(148, 163, 184, 0.4)', icon: Award };
  } 
  // Tier 3: Bronze (for Finalist, 3rd place, etc)
  else {
    return { color: '#D97706', bg: 'rgba(217, 119, 6, 0.15)', border: 'rgba(217, 119, 6, 0.4)', icon: Award };
  }
}

function AchievementCard({ cert, i, rankStyles, RankIcon, rank, name, onImageClick }) {
  const [currentImg, setCurrentImg] = useState(0);

  const nextImg = (e) => {
    e.stopPropagation();
    if (cert.gallery) {
      setCurrentImg((prev) => (prev + 1) % cert.gallery.length);
    }
  };

  const prevImg = (e) => {
    e.stopPropagation();
    if (cert.gallery) {
      setCurrentImg((prev) => (prev - 1 + cert.gallery.length) % cert.gallery.length);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ delay: i * 0.1, duration: 0.5 }}
      whileHover={{ backgroundColor: 'var(--bg-secondary)', transition: { duration: 0.2 } }}
      style={{
        background: 'transparent',
        border: '2px solid var(--border-light)',
        borderRadius: '8px',
        padding: '8px 8px 12px 8px',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: 'inset 0 0 4px rgba(0,0,0,0.04)',
        position: 'relative'
      }}
    >
      {/* Thumbnail Carousel */}
      <div className="project-image-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: cert.gallery ? 'var(--bg-primary)' : '#fff', borderRadius: '4px', overflow: 'hidden', padding: cert.gallery ? '0' : '8px', height: '220px', position: 'relative' }}>
        {cert.gallery ? (
          <div style={{ position: 'relative', width: '100%', height: '100%', borderRadius: '4px', overflow: 'hidden', background: '#000', cursor: 'zoom-in' }} onClick={() => onImageClick(cert.gallery[currentImg])}>
            <AnimatePresence mode="wait">
              <motion.img 
                key={currentImg}
                src={cert.gallery[currentImg]} 
                alt="Achievement" 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
              />
            </AnimatePresence>
            
            {/* Controls */}
            {cert.gallery.length > 1 && (
              <>
                <button onClick={prevImg} style={{ position: 'absolute', left: 4, top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.6)', color: '#fff', border: 'none', borderRadius: '50%', width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 2, padding: 0 }}>
                  <ChevronLeft size={18} />
                </button>
                <button onClick={nextImg} style={{ position: 'absolute', right: 4, top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.6)', color: '#fff', border: 'none', borderRadius: '50%', width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 2, padding: 0 }}>
                  <ChevronRight size={18} />
                </button>
                
                {/* Dots */}
                <div style={{ position: 'absolute', bottom: 8, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '6px', zIndex: 2 }}>
                  {cert.gallery.map((_, idx) => (
                    <div key={idx} style={{ width: 6, height: 6, borderRadius: '50%', background: idx === currentImg ? '#fff' : 'rgba(255,255,255,0.4)', transition: 'background 0.2s' }} />
                  ))}
                </div>
              </>
            )}
          </div>
        ) : cert.image ? (
          <img 
            src={cert.image} 
            alt="Achievement" 
            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', cursor: 'zoom-in' }} 
            onClick={() => onImageClick(cert.image)}
          />
        ) : (
          <RankIcon size={48} color={rankStyles.color} />
        )}
      </div>

      {/* Content */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', padding: '0 4px', marginTop: '0.75rem' }}>
        <div style={{ 
          display: 'inline-flex', 
          alignItems: 'center', 
          gap: '4px', 
          padding: '2px 8px', 
          background: rankStyles.bg, 
          border: `1px solid ${rankStyles.border}`, 
          borderRadius: '50px', 
          width: 'fit-content', 
          color: rankStyles.color, 
          fontSize: '0.75rem', 
          fontWeight: '600' 
        }}>
          <RankIcon size={12} strokeWidth={2.5} /> {rank}
        </div>
        
        <h3 style={{ fontSize: '1.1rem', fontWeight: '500', color: 'var(--text-primary)', margin: 0, lineHeight: 1.2 }}>
          {name}
        </h3>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '2px' }}>
          {cert.image && (
            <div style={{ width: '18px', height: '18px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff', borderRadius: '2px', padding: '1px' }}>
               <img src={cert.image} alt={cert.issuer} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
            </div>
          )}
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>
            {cert.issuer}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function ImageModal({ src, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: 'rgba(0, 0, 0, 0.85)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        cursor: 'zoom-out'
      }}
      onClick={onClose}
    >
      <button 
        onClick={onClose}
        style={{
          position: 'absolute',
          top: '2rem',
          right: '2rem',
          background: 'rgba(255, 255, 255, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          color: '#fff',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 10000
        }}
      >
        <X size={24} />
      </button>
      <motion.img 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        src={src} 
        alt="Enlarged Achievement" 
        style={{ 
          maxWidth: '100%', 
          maxHeight: '100%', 
          objectFit: 'contain',
          borderRadius: '8px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
          cursor: 'default'
        }} 
        onClick={(e) => e.stopPropagation()}
      />
    </motion.div>
  );
}

export default function Achievements() {
  const achievements = certifications.filter(c => c.icon === 'award');
  const [selectedImage, setSelectedImage] = useState(null);

  if (achievements.length === 0) return null;

  return (
    <section id="achievements">
      <AnimatePresence>
        {selectedImage && <ImageModal src={selectedImage} onClose={() => setSelectedImage(null)} />}
      </AnimatePresence>

      <div className="container" style={{ margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'left', marginBottom: '2rem' }}
        >
          <h2 className="section-title">My Achievements</h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {achievements.map((cert, i) => {
            const parts = cert.title.split(' — ');
            const rank = parts.length > 1 ? parts[0] : 'Achievement';
            const name = parts.length > 1 ? parts.slice(1).join(' — ') : cert.title;
            const rankStyles = getRankStyles(rank);
            const RankIcon = rankStyles.icon;

            return (
              <AchievementCard 
                key={i} 
                cert={cert} 
                i={i} 
                rankStyles={rankStyles} 
                RankIcon={RankIcon} 
                rank={rank} 
                name={name} 
                onImageClick={setSelectedImage}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
