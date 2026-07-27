import React from "react";
import { motion } from "framer-motion";
import { Terminal, Cpu, Cloud, Database } from "lucide-react";
import "../styles/globals.css";

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'left', marginBottom: '2rem' }}
        >
          <h2 className="section-title">About</h2>
        </motion.div>

        <div style={{ maxWidth: '800px' }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--text-primary)', marginTop: '2px', fontSize: '1rem' }}>•</span>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  <strong style={{ color: 'var(--text-primary)' }}>Dual-Degree Student:</strong> Data Science at IIT Madras & CSE at Adamas University.
                </div>
              </li>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--text-primary)', marginTop: '2px', fontSize: '1rem' }}>•</span>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  <strong style={{ color: 'var(--text-primary)' }}>Core Focus:</strong> Architecting real-time data pipelines, scalable ML services, and full-stack layers.
                </div>
              </li>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--text-primary)', marginTop: '2px', fontSize: '1rem' }}>•</span>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  <strong style={{ color: 'var(--text-primary)' }}>Recent Work:</strong> Live aviation telemetry, ML candidate matching, and applied ML on Google Cloud.
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
