import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Medal, ChevronLeft, ChevronRight, X } from "lucide-react";
import { certifications } from "../data/portfolioData";

function AchievementCard({ cert, i, rank, name, onImageClick }) {
  const [current, setCurrent] = useState(0);
  const gallery = cert.gallery || [];
  const RankIcon = rank.toLowerCase().includes("1st place") ? Trophy : Medal;

  const step = (dir) => (e) => {
    e.stopPropagation();
    setCurrent((prev) => (prev + dir + gallery.length) % gallery.length);
  };

  const photoAlt = `${name} - photo ${current + 1} of ${gallery.length}`;

  return (
    <motion.article
      className="award-card"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ delay: i * 0.08, duration: 0.5 }}
    >
      {gallery.length > 0 && (
        <div className="award-media">
          <button
            type="button"
            className="zoom"
            onClick={() => onImageClick(gallery[current], photoAlt)}
            aria-label={`Enlarge ${photoAlt}`}
          >
            <img src={gallery[current]} alt={photoAlt} loading="lazy" decoding="async" />
          </button>

          {gallery.length > 1 && (
            <>
              <button type="button" className="carousel-btn prev" onClick={step(-1)} aria-label="Previous photo">
                <ChevronLeft size={18} aria-hidden="true" />
              </button>
              <button type="button" className="carousel-btn next" onClick={step(1)} aria-label="Next photo">
                <ChevronRight size={18} aria-hidden="true" />
              </button>
              <div className="carousel-dots" aria-hidden="true">
                {gallery.map((_, idx) => (
                  <span key={idx} className={idx === current ? "on" : ""} />
                ))}
              </div>
            </>
          )}
        </div>
      )}

      <div className="award-body">
        <span className="chip" style={{ width: "fit-content" }}>
          <RankIcon size={12} aria-hidden="true" /> {rank}
        </span>
        <h3>{name}</h3>
        <div className="award-issuer">
          {cert.image && <img className="award-issuer-logo" src={cert.image} alt="" loading="lazy" />}
          <span>{cert.issuer}</span>
        </div>
      </div>
    </motion.article>
  );
}

function Lightbox({ src, alt, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <motion.div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <button type="button" className="lightbox-close" onClick={onClose} aria-label="Close">
        <X size={22} aria-hidden="true" />
      </button>
      <motion.img
        src={src}
        alt={alt}
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={(e) => e.stopPropagation()}
      />
    </motion.div>
  );
}

export default function Achievements() {
  const achievements = certifications.filter((c) => c.icon === "award");
  const [selected, setSelected] = useState(null);

  if (achievements.length === 0) return null;

  return (
    <section id="achievements">
      <AnimatePresence>
        {selected && <Lightbox src={selected.src} alt={selected.alt} onClose={() => setSelected(null)} />}
      </AnimatePresence>

      <div className="container">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="section-title">Achievements</h2>
        </motion.div>

        <div className="projects-grid">
          {achievements.map((cert, i) => {
            const parts = cert.title.split(" — ");
            const rank = parts.length > 1 ? parts[0] : "Award";
            const name = parts.length > 1 ? parts.slice(1).join(" — ") : cert.title;
            return (
              <AchievementCard
                key={cert.title}
                cert={cert}
                i={i}
                rank={rank}
                name={name}
                onImageClick={(src, alt) => setSelected({ src, alt })}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
