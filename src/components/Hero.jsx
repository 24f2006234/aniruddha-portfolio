import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "../data/portfolioData";
import { Copy, Check, BadgeCheck } from "lucide-react";
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
          <img src="/banner.png" alt="Hero Banner" className="hero-banner-img" />
          <div className="hero-banner-overlay" />
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
              <h1 className="hero-profile-name" aria-label={personalInfo.name}>
                {personalInfo.name}
                <BadgeCheck size={26} color="#ffffff" fill="#1d9bf0" style={{ marginLeft: '8px', marginTop: '4px' }} />
              </h1>
              <p className="hero-profile-title">20, {personalInfo.title}, IND</p>
            </div>
          </div>

          <div className="hero-socials-minimal" style={{ marginTop: '0.75rem', marginBottom: '1.5rem', marginLeft: '-0.25rem' }}>
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
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function AnimatedSocialIcon({ href, title, icon: Icon, className, style }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a 
      href={href}
      target="_blank"
      rel="noreferrer"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileTap={{ scale: 0.95 }}
      className={className}
      style={{ 
        display: 'flex', 
        alignItems: 'center', 
        padding: '0.4rem',
        borderRadius: '50px', 
        color: hovered ? 'var(--text-h)' : 'var(--text-secondary)',
        backgroundColor: hovered ? "var(--bg-secondary)" : "transparent",
        textDecoration: 'none',
        fontSize: '0.9rem',
        fontWeight: '500',
        transition: 'background-color 0.3s ease, color 0.3s ease',
        overflow: 'hidden',
        ...style 
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '24px', height: '24px', flexShrink: 0 }}>
        <Icon size={16} />
      </div>
      <AnimatePresence>
        {hovered && (
          <motion.span
            initial={{ width: 0, opacity: 0, marginLeft: 0 }}
            animate={{ width: 'auto', opacity: 1, marginLeft: 6 }}
            exit={{ width: 0, opacity: 0, marginLeft: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            style={{ whiteSpace: 'nowrap', paddingRight: '8px' }}
          >
            {title}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.a>
  );
}
