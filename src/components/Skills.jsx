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
  const bentoClass = category.toLowerCase().replace(/[^a-z]/g, "");
  const bentoColor = "var(--text-primary)";

  return (
    <motion.div
      className={`skill-bento-card card-${bentoClass}`}
      style={{
        "--bento-color": bentoColor,
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, delay: i * 0.08 }}
    >
      <div className="skill-card-glass" />
      <div className="skill-card-content">
        <div className="skill-cat-header">
          <h3 className="skill-cat-name">{category}</h3>
        </div>

        <div className="skill-pills" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
          {items.map((skill, si) => (
            <SkillPill key={si} skill={skill} bentoColor={bentoColor} delay={0.1 + si * 0.03} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function SkillPill({ skill, bentoColor, delay }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay }}
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '40px',
        padding: '16px',
        background: 'var(--bg-surface)',
        border: '1px solid var(--border-light)',
        borderRadius: '10px',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        transform: hovered ? 'scale(1.1)' : 'scale(1)',
        backgroundColor: hovered ? 'var(--bg-secondary)' : 'var(--bg-surface)',
        borderColor: hovered ? bentoColor : 'var(--border-light)'
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {getSkillIcon(skill) ? getSkillIcon(skill) : <span style={{ fontSize: '12px' }}>{skill}</span>}
      
      {/* Custom Tooltip */}
      {hovered && (
        <div style={{
          position: 'absolute',
          bottom: '120%',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'var(--text-primary)',
          color: 'var(--bg-primary)',
          padding: '4px 8px',
          borderRadius: '4px',
          fontSize: '0.75rem',
          fontWeight: 600,
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
          zIndex: 10
        }}>
          {skill}
          <div style={{
            position: 'absolute',
            top: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            borderWidth: '4px',
            borderStyle: 'solid',
            borderColor: 'var(--text-primary) transparent transparent transparent'
          }} />
        </div>
      )}
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
