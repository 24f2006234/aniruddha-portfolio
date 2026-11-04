import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="section-title">About</h2>
        </motion.div>

        <motion.div
          className="about-copy"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p>
            I am a <strong>Full-Stack &amp; AI/ML Engineer</strong> pursuing a dual degree in Data Science at IIT Madras
            and Computer Science Engineering at Adamas University. The pairing gives me a working base in statistics,
            algorithms and system design.
          </p>
          <p>
            I build <strong>predictive and data-driven systems</strong> and take them end to end: model, API and a
            responsive interface that people can actually use.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
