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

        <div style={{ width: '100%' }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.8' }}
          >
            <p style={{ marginBottom: '1.5rem' }}>
              I am a 19-year-old <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>Data Scientist</span> and <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>Full-Stack Developer</span> driven by building intelligent, data-driven systems. Through my dual degree in Data Science and Computer Science Engineering, I've built a strong foundation in algorithmic complexity, statistics, and system architecture.
            </p>
            <p>
              I specialize in developing <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>predictive intelligence layers</span> and applying machine learning to real-world problems, translating complex data into scalable solutions. My full-stack background lets me carry that work end-to-end, from model to deployed application.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
