import React, { useState } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolioData";
import { Copy, Check } from "lucide-react";
import { FaGithub, FaLinkedin, FaDiscord, FaEnvelope, FaFileAlt } from "react-icons/fa";
import heroBanner from "../assets/hero.png";
import "../styles/Hero.css";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="hero" id="hero">
      <div className="container">
        {/* Banner Section */}
        <motion.div 
          className="hero-banner-wrapper"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <img src={heroBanner} alt="Hero Banner" className="hero-banner-img" />
        </motion.div>

        <motion.div
          className="hero-profile-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Top Row: Image + Text */}
          <div className="hero-profile-top">
            <img 
              src="/aniru.png" 
              alt={personalInfo.name} 
              className="hero-profile-img" 
            />
            <div className="hero-profile-text">
              <h1 className="hero-profile-name">{personalInfo.name}</h1>
              <p className="hero-profile-title">20, {personalInfo.title}, IND</p>
            </div>
          </div>

          {/* Bottom Row: Email + Socials */}
          <div className="hero-profile-bottom">
            <div className="hero-email-container" onClick={handleCopy} title="Copy email">
              <span className="hero-email">{personalInfo.email}</span>
              {copied ? <Check size={14} color="var(--clr-green)" /> : <Copy size={14} />}
            </div>
            
            <span className="hero-divider">|</span>
            
            <div className="hero-socials-minimal">
              <a href={personalInfo.github} target="_blank" rel="noreferrer" title="GitHub">
                <FaGithub size={18} />
              </a>
              <a href={`mailto:${personalInfo.email}`} title="Email">
                <FaEnvelope size={18} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" title="LinkedIn">
                <FaLinkedin size={18} />
              </a>
              <a href="#" target="_blank" rel="noreferrer" title="Discord">
                <FaDiscord size={18} />
              </a>
              <span className="hero-divider" style={{ margin: "0 0.25rem", opacity: 0.5 }}>|</span>
              <a href="/Aniruddha_Resume.pdf" target="_blank" rel="noreferrer" title="View Resume" className="resume-link" style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.9rem', fontWeight: 500 }}>
                <FaFileAlt size={18} />
                <span>Resume</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
