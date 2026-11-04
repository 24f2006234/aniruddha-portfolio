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

// Monochrome icons keep the section calm; colour is reserved for the accent.
const ICONS = {
  Python: SiPython,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  "C++": SiCplusplus,
  SQL: Database,
  React: SiReact,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  "Three.js": SiThreedotjs,
  "Node.js": SiNodedotjs,
  Express: SiExpress,
  FastAPI: SiFastapi,
  Flask: SiFlask,
  "REST APIs": Network,
  Webhooks: Webhook,
  PyTorch: SiPytorch,
  "scikit-learn": SiScikitlearn,
  pandas: SiPandas,
  "Feature engineering": Sigma,
  "Tool calling": Bot,
  "Groq · Llama 3.3": Cpu,
  "Gemini API": SiGooglegemini,
  "Sarvam Voice AI": Mic,
  "Web search APIs": Search,
  Supabase: SiSupabase,
  Firebase: SiFirebase,
  SQLite: SiSqlite,
  Vercel: SiVercel,
  "Google Cloud": SiGooglecloud,
  Git: SiGit,
};

function SkillPill({ skill }) {
  const Icon = ICONS[skill];
  return (
    <li className="skill-pill-custom">
      {Icon && <Icon size={14} aria-hidden="true" />}
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
