import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Check } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiDiscord } from "react-icons/si";
import { personalInfo } from "../data/portfolioData";

const pillStyle = {
  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
  padding: '0.75rem 1.5rem', background: 'var(--bg-surface)',
  border: '1px solid var(--border-light)', borderRadius: '99px',
  color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 500,
  transition: 'all 0.2s ease', cursor: 'pointer', fontSize: '1rem', fontFamily: 'inherit',
};

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const copyDiscord = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.discord);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch { /* clipboard unavailable */ }
  };

  return (
    <section id="contact" style={{ paddingTop: "4rem", paddingBottom: "2rem" }}>
      <div className="container">
        
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: 'left' }}
        >
          <h2 className="section-title" style={{ marginBottom: "0.5rem" }}>Let's Connect</h2>
          <p style={{ color: "var(--text-secondary)", marginBottom: "2rem", fontSize: "1.1rem" }}>
            I'm currently seeking software engineering internships.
          </p>

          <div style={{ display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem' }}>
            <a
              href={`mailto:${personalInfo.email}`}
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.75rem 1.5rem', background: 'var(--bg-surface)',
                border: '1px solid var(--border-light)', borderRadius: '99px',
                color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 500,
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--clr-red)'; e.currentTarget.style.color = 'var(--clr-red)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-light)'; e.currentTarget.style.color = 'var(--text-primary)'; }}
            >
              <Mail size={18} /> Email
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.75rem 1.5rem', background: 'var(--bg-surface)',
                border: '1px solid var(--border-light)', borderRadius: '99px',
                color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 500,
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--clr-blue)'; e.currentTarget.style.color = 'var(--clr-blue)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-light)'; e.currentTarget.style.color = 'var(--text-primary)'; }}
            >
              <FaLinkedin size={18} /> LinkedIn
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.75rem 1.5rem', background: 'var(--bg-surface)',
                border: '1px solid var(--border-light)', borderRadius: '99px',
                color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 500,
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--clr-purple)'; e.currentTarget.style.color = 'var(--clr-purple)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-light)'; e.currentTarget.style.color = 'var(--text-primary)'; }}
            >
              <FaGithub size={18} /> GitHub
            </a>
            <a
              href={`tel:${personalInfo.phone.replace(/s/g, "")}`}
              style={pillStyle}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--clr-green)'; e.currentTarget.style.color = 'var(--clr-green)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-light)'; e.currentTarget.style.color = 'var(--text-primary)'; }}
            >
              <Phone size={18} /> {personalInfo.phone}
            </a>
            <button
              type="button"
              onClick={copyDiscord}
              style={pillStyle}
              aria-label={`Copy Discord username ${personalInfo.discord}`}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--clr-orange)'; e.currentTarget.style.color = 'var(--clr-orange)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-light)'; e.currentTarget.style.color = 'var(--text-primary)'; }}
            >
              {copied ? <Check size={18} /> : <SiDiscord size={18} />} {copied ? 'Copied' : `@${personalInfo.discord}`}
            </button>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
