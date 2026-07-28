import React from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { certifications } from "../data/portfolioData";
import "../styles/Projects.css";

export default function Achievements() {
  const achievements = certifications.filter(c => c.icon === 'award');
  if (achievements.length === 0) return null;

  return (
    <section id="achievements">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'left', marginBottom: '2rem' }}
        >
          <h2 className="section-title">My Achievements</h2>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(1.5rem, 5vw, 2.5rem)', maxWidth: '800px' }}>
          {achievements.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              style={{ display: 'flex', gap: 'clamp(1rem, 3vw, 1.5rem)', alignItems: 'flex-start', background: 'var(--bg-surface)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border-light)' }}
            >
              <div style={{ 
                minWidth: '50px', 
                height: '50px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                background: cert.image ? 'transparent' : 'var(--bg-secondary)', 
                borderRadius: '8px',
                overflow: 'hidden'
              }}>
                {cert.image ? (
                  <img src={cert.image} alt="Achievement" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                  <Award size={28} color="var(--primary)" />
                )}
              </div>
              <div>
                <h3 style={{ fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', fontWeight: '700', color: 'var(--text-primary)', margin: '0 0 0.5rem 0', lineHeight: 1.2 }}>{cert.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)', margin: 0 }}>{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
