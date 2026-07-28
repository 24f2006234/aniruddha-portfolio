import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
              
              <div className="hero-socials-minimal" style={{ marginTop: '1.25rem' }}>
                <AnimatedSocialIcon href={personalInfo.github} title="GitHub" icon={FaGithub} />
                <AnimatedSocialIcon href={`mailto:${personalInfo.email}`} title="Email" icon={FaEnvelope} />
                <AnimatedSocialIcon href={personalInfo.linkedin} title="LinkedIn" icon={FaLinkedin} />
                <AnimatedSocialIcon href="#" title="Discord" icon={FaDiscord} />
                
                <span className="hero-divider" style={{ margin: "0 0.25rem", opacity: 0.5 }}>|</span>
                
                <AnimatedSocialIcon 
                  href="/Aniruddha_Resume.pdf" 
                  title="View Resume" 
                  icon={FaFileAlt} 
                  className="resume-link" 
                  style={{ gap: '6px', fontSize: '0.9rem', fontWeight: 500 }}
                >
                  <span>Resume</span>
                </AnimatedSocialIcon>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function AnimatedSocialIcon({ href, title, icon: Icon, className, style, children }) {
  return (
    <motion.a 
      href={href}
      target="_blank"
      rel="noreferrer"
      whileHover={{ y: -2, backgroundColor: "var(--bg-secondary)" }}
      whileTap={{ scale: 0.9, backgroundColor: "var(--border-light)" }}
      className={className}
      style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '8px', 
        padding: '0.4rem 0.8rem', 
        borderRadius: '8px', 
        color: 'var(--text-secondary)',
        textDecoration: 'none',
        fontSize: '0.9rem',
        fontWeight: '500',
        transition: 'color 0.2s ease',
        ...style 
      }}
    >
      <Icon size={16} />
      <span>{title}</span>
      {children}
    </motion.a>
  );
}
