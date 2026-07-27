import React from "react";
import { motion } from "framer-motion";
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
          style={{ textAlign: 'left', marginBottom: '3rem' }}
        >
          <h2 className="section-title">My Achievements</h2>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', maxWidth: '800px' }}>
          {achievements.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}
            >
              <div style={{ fontSize: '1.8rem', fontWeight: '800', color: 'var(--text-muted)', minWidth: '40px', lineHeight: 1 }}>
                {(i + 1).toString().padStart(2, '0')}.
              </div>
              <div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--text-primary)', margin: '0 0 0.5rem 0', lineHeight: 1.2 }}>{cert.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', margin: 0 }}>{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
