import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { personalInfo } from "../data/portfolioData";
import "../styles/Hero.css";

const ease = [0.22, 1, 0.36, 1];

const stats = [
  { value: "6×", label: "Hackathon winner & finalist" },
  { value: "4×", label: "First place" },
  { value: "2", label: "AI products live" },
];

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <motion.div
          className="hero-id"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
        >
          <img
            src="/aniru.webp"
            alt={`Portrait of ${personalInfo.name}`}
            className="hero-avatar"
            width="56"
            height="56"
            fetchPriority="high"
          />
          <div className="hero-id-text">
            <h1 className="hero-name">{personalInfo.name}</h1>
            <p className="hero-role">
              {personalInfo.title} · {personalInfo.location.replace("Greater ", "").replace(" Area", "")}
            </p>
          </div>
          <span className="status-pill hero-status">Open to internships</span>
        </motion.div>

        <motion.p
          className="hero-headline"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease }}
        >
          I build AI agents, machine learning services{" "}
          <span>and the backend APIs that put them into production.</span>
        </motion.p>

        <motion.dl
          className="hero-stats"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.16, ease }}
        >
          {stats.map((s) => (
            <div key={s.label} className="hero-stat">
              <dt>{s.label}</dt>
              <dd>{s.value}</dd>
            </div>
          ))}
        </motion.dl>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.24, ease }}
        >
          <a href={personalInfo.resume} target="_blank" rel="noreferrer" className="btn btn-solid btn-lg">
            <Download size={16} aria-hidden="true" /> Resume
          </a>
          <a href="#projects" className="btn btn-lg">
            View projects <ArrowDown size={16} aria-hidden="true" />
          </a>
          <span className="hero-actions-divider" aria-hidden="true" />
          <a href={personalInfo.github} target="_blank" rel="noreferrer" className="icon-btn" aria-label="GitHub" title="GitHub">
            <FaGithub size={17} aria-hidden="true" />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="icon-btn" aria-label="LinkedIn" title="LinkedIn">
            <FaLinkedin size={17} aria-hidden="true" />
          </a>
          <a href={`mailto:${personalInfo.email}`} className="icon-btn" aria-label="Email" title="Email">
            <Mail size={17} aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
