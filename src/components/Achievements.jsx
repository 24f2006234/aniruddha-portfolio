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

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(1.5rem, 5vw, 2.5rem)', width: '100%' }}>
          {achievements.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start', padding: '0.5rem 0' }}
            >
              <div style={{ 
                width: '48px', 
                height: '48px', 
                flexShrink: 0, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                background: '#fff', 
                borderRadius: '8px',
                border: '1px solid var(--border-light)',
                overflow: 'hidden',
                padding: '4px'
              }}>
                {cert.image ? (
                  <img src={cert.image} alt="Achievement" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                ) : (
                  <Award size={24} color="var(--primary)" />
                )}
              </div>
              <div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '500', color: 'var(--text-primary)', margin: '0 0 0.15rem 0', lineHeight: 1.2 }}>{cert.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', margin: 0 }}>{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
