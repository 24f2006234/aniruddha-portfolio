import React, { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Code2, Palette, Cog, Database, Wrench, Brain } from "lucide-react";
import { 
  SiPython, SiTypescript, SiJavascript, SiCplusplus, 
  SiReact, SiVite, SiTailwindcss, SiWebgl, 
  SiNodedotjs, SiExpress, SiFlask, SiFastapi, 
  SiPandas, SiGit, SiGooglecloud, SiPytorch, SiScikitlearn 
} from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { skills } from "../data/portfolioData";
import "../styles/Skills.css";

const categoryIcons = {
  Languages: <Code2 size={24} strokeWidth={1.5} />,
  Frontend: <Palette size={24} strokeWidth={1.5} />,
  Backend: <Cog size={24} strokeWidth={1.5} />,
  Database: <Database size={24} strokeWidth={1.5} />,
  "Tools / Platforms": <Wrench size={24} strokeWidth={1.5} />,
  "Core CS": <Brain size={24} strokeWidth={1.5} />,
  "ML / Data": <Brain size={24} strokeWidth={1.5} />,
};

const getSkillIcon = (skill) => {
  const map = {
    "Python": <SiPython color="#3776AB" />,
    "TypeScript": <SiTypescript color="#3178C6" />,
    "JavaScript": <SiJavascript color="#F7DF1E" />,
    "C++": <SiCplusplus color="#00599C" />,
    "React": <SiReact color="#61DAFB" />,
    "Vite": <SiVite color="#646CFF" />,
    "Tailwind CSS": <SiTailwindcss color="#06B6D4" />,
    "WebGL": <SiWebgl color="#990000" />,
    "Node.js": <SiNodedotjs color="#339933" />,
    "Express": <SiExpress color="var(--text-primary)" />,
    "Flask": <SiFlask color="var(--text-primary)" />,
    "FastAPI": <SiFastapi color="#009688" />,
    "Pandas": <SiPandas color="#150458" />,
    "Git": <SiGit color="#F05032" />,
    "Google Cloud Platform": <SiGooglecloud color="#4285F4" />,
    "PyTorch": <SiPytorch color="#EE4C2C" />,
    "scikit-learn": <SiScikitlearn color="#F7931E" />,
    "SQL": <FaDatabase color="#4479A1" />
  };
  return map[skill];
};

function BentoCard({ category, items, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: i * 0.05 }}
      style={{
        background: 'transparent',
        border: '1px solid var(--border-light)',
        borderRadius: '8px',
        padding: '1.25rem',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: 'inset 0 0 4px rgba(0,0,0,0.02)'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
        <h3 style={{ fontSize: '1rem', fontWeight: '500', color: 'var(--text-primary)', margin: 0 }}>{category}</h3>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
        {items.map((skill, si) => (
          <SkillPill key={si} skill={skill} delay={0.05 + si * 0.02} />
        ))}
      </div>
    </motion.div>
  );
}

function SkillPill({ skill, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.2 }}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        fontSize: '0.75rem',
        padding: '0.25rem 0.6rem',
        background: 'var(--bg-secondary)',
        border: '1px solid var(--border-light)',
        borderRadius: '4px',
        color: 'var(--text-secondary)',
        fontWeight: 500,
        transition: 'all 0.2s ease',
        cursor: 'default'
      }}
      whileHover={{ y: -2, backgroundColor: 'var(--border-light)', color: 'var(--text-primary)' }}
    >
      <span style={{ fontSize: '14px', display: 'flex', alignItems: 'center' }}>
        {getSkillIcon(skill) ? getSkillIcon(skill) : null}
      </span>
      {skill}
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <motion.div
          className="skills-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'left', marginBottom: '2rem' }}
        >
          <h2 className="section-title">My Technical Skills</h2>
        </motion.div>

        <div className="skills-bento">
          {Object.entries(skills).map(([category, items], i) => (
            <BentoCard 
              key={category}
              category={category}
              items={items}
              i={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
