import React from "react";
import { motion } from "framer-motion";
import { gamesData } from "../data/gamesData";
import "../styles/Games.css";

export default function Games() {
  return (
    <section id="games" className="games-section fade-in-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <h2 className="section-title">Games I like</h2>
          <p className="games-subtitle">
            A collection of titles with phenomenal storytelling, mechanics, and art direction that I've enjoyed playing.
          </p>
        </motion.div>

        <div className="games-grid">
          {gamesData.map((game, i) => (
            <motion.div
              key={i}
              className="game-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.4, 0, 0.2, 1] }}
              title={game.title}
            >
              <div className="game-card-inner">
                <img src={game.image} alt={game.title} className="game-img" loading="lazy" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
