import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ease = [0.22, 1, 0.36, 1];

// Opens the project's case study modal (handled in Projects.jsx).
function ProjectLink({ slug, children }) {
  return (
    <Link to={`?project=${slug}`} state={{ fromCard: true }} className="about-link">
      {children}
    </Link>
  );
}

const facts = [
  { label: "Focus", value: "Backend APIs, LLM agents, ML services" },
  { label: "Education", value: "IIT Madras (BS Data Science) · Adamas University (B.Tech CSE)" },
  { label: "Track record", value: "6× hackathon winner & finalist, 4× first place" },
  { label: "Looking for", value: "Software engineering internships in backend or AI/ML" },
];

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease }}
        >
          <h2 className="section-title">About</h2>
        </motion.div>

        <motion.div
          className="about-copy"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
        >
          <p>
            I'm a full-stack engineer focused on <strong>backend systems and applied AI</strong>, pursuing a dual
            degree in Data Science at IIT Madras and Computer Science Engineering at Adamas University.
          </p>
          <p>
            Most of my work sits where models meet production. <ProjectLink slug="vardaan">Vardaan</ProjectLink> is a
            voice AI agent that gets tasks done over a real phone call, in 11 languages; it won first place at Aki
            Hacks × Hacktoberfest '26. <ProjectLink slug="checkpost">Checkpost</ProjectLink> is a policy firewall that
            stops AI agents from running destructive or costly actions.{" "}
            <ProjectLink slug="aerogrid">AeroGrid</ProjectLink> tracks live flights over India and predicts arrival
            times to within about nine minutes on average.
          </p>
          <p>
            On team projects I usually own the <strong>backend and the AI layer</strong>: API design, tool-calling
            loops, model serving and the safeguards around them. I measure what I build, and I design for the
            unglamorous cases, like an upstream API rate-limiting you in the middle of a demo.
          </p>
        </motion.div>

        <motion.dl
          className="about-facts"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease }}
        >
          {facts.map((f) => (
            <div key={f.label} className="about-fact">
              <dt>{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
