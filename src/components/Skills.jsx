import React from "react";
import { motion } from "framer-motion";
import {
  SiPython, SiTypescript, SiJavascript, SiCplusplus,
  SiReact, SiNextdotjs, SiTailwindcss, SiThreedotjs,
  SiNodedotjs, SiExpress, SiFlask, SiFastapi,
  SiPandas, SiPytorch, SiScikitlearn, SiGooglegemini,
  SiSupabase, SiFirebase, SiSqlite, SiVercel, SiGooglecloud, SiGit,
} from "react-icons/si";
import { Bot, Cpu, Database, Mic, Network, Search, Sigma, Webhook } from "lucide-react";
import { skills } from "../data/portfolioData";

// Brand colours where they read on both themes. Black or very dark logos
// (Next.js, Express, Vercel, pandas...) follow the text colour instead.
const NEUTRAL = "var(--text-primary)";
const ICONS = {
  Python: [SiPython, "#3776AB"],
  TypeScript: [SiTypescript, "#3178C6"],
  JavaScript: [SiJavascript, "#F7DF1E"],
  "C++": [SiCplusplus, "#00599C"],
  SQL: [Database, "#4479A1"],
  React: [SiReact, "#61DAFB"],
  "Next.js": [SiNextdotjs, NEUTRAL],
  "Tailwind CSS": [SiTailwindcss, "#06B6D4"],
  "Three.js": [SiThreedotjs, NEUTRAL],
  "Node.js": [SiNodedotjs, "#339933"],
  Express: [SiExpress, NEUTRAL],
  FastAPI: [SiFastapi, "#009688"],
  Flask: [SiFlask, NEUTRAL],
  "REST APIs": [Network, NEUTRAL],
  Webhooks: [Webhook, NEUTRAL],
  PyTorch: [SiPytorch, "#EE4C2C"],
  "scikit-learn": [SiScikitlearn, "#F7931E"],
  pandas: [SiPandas, NEUTRAL],
  "Feature engineering": [Sigma, NEUTRAL],
  "Tool calling": [Bot, NEUTRAL],
  "Groq · Llama 3.3": [Cpu, "#F55036"],
  "Gemini API": [SiGooglegemini, "#8E75B2"],
  "Sarvam Voice AI": [Mic, NEUTRAL],
  "Web search APIs": [Search, NEUTRAL],
  Supabase: [SiSupabase, "#3ECF8E"],
  Firebase: [SiFirebase, "#FFCA28"],
  SQLite: [SiSqlite, "#0F80CC"],
  Vercel: [SiVercel, NEUTRAL],
  "Google Cloud": [SiGooglecloud, "#4285F4"],
  Git: [SiGit, "#F05032"],
};

function SkillPill({ skill }) {
  const [Icon, color] = ICONS[skill] || [];
  return (
    <li className="skill-pill-custom">
      {Icon && <Icon size={14} color={color} aria-hidden="true" />}
      {skill}
    </li>
  );
}

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="section-title">Skills</h2>
        </motion.div>

        <div className="skills-bento">
          {Object.entries(skills).map(([category, items], i) => (
            <motion.div
              key={category}
              className="skill-group"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <h3>{category}</h3>
              <ul className="skill-list">
                {items.map((skill) => (
                  <SkillPill key={skill} skill={skill} />
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
