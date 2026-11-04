import React from "react";
import { motion } from "framer-motion";
import { Download, Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { personalInfo } from "../data/portfolioData";
import "../styles/Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <motion.div
          className="hero-banner-wrapper"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <img src="/banner.webp" alt="" className="hero-banner-img" fetchPriority="high" />
          <div className="hero-banner-overlay" />
        </motion.div>

        <motion.div
          className="hero-profile-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="hero-profile-top">
            <img
              src="/aniru.webp"
              alt={`Portrait of ${personalInfo.name}`}
              className="hero-profile-img"
              width="88"
              height="88"
            />
            <div className="hero-profile-text">
              <h1 className="hero-profile-name">{personalInfo.name}</h1>
              <p className="hero-profile-title">{personalInfo.title}</p>
            </div>
          </div>

          <div className="hero-meta">
            <span>
              <MapPin size={14} aria-hidden="true" /> {personalInfo.location}
            </span>
            <span className="status-pill">Open to internships</span>
          </div>

          <div className="hero-actions">
            <a href={personalInfo.resume} target="_blank" rel="noreferrer" className="btn btn-solid">
              <Download size={15} aria-hidden="true" /> Resume
            </a>
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="icon-btn" aria-label="GitHub" title="GitHub">
              <FaGithub size={16} aria-hidden="true" />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="icon-btn" aria-label="LinkedIn" title="LinkedIn">
              <FaLinkedin size={16} aria-hidden="true" />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="icon-btn" aria-label="Email" title="Email">
              <Mail size={16} aria-hidden="true" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
