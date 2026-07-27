import React from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { personalInfo } from "../data/portfolioData";
import "../styles/Contact.css";

export default function Contact() {
  return (
    <section id="contact" style={{ paddingTop: "4rem", paddingBottom: "2rem" }}>
      <div className="container">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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
          </div>

        </motion.div>

      </div>
    </section>
  );
}
