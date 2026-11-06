import React from "react";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease }}
        >
          <h2 className="section-title">About</h2>
        </motion.div>

        <motion.div
          className="about-copy"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
        >
          <p>
            I'm pursuing a BS in Data Science at IIT Madras and a B.Tech in Computer Science Engineering
            at Adamas University. My work focuses on <strong>backend systems and applied AI</strong>.
          </p>
          <p>
            On team projects, I usually build the APIs, agent workflows and model services. I care about
            measuring results and handling failures, from API rate limits to unsafe tool calls.
            I'm looking for <strong>backend or AI/ML internships</strong>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
