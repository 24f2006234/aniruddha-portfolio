import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Check, Download } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiDiscord } from "react-icons/si";
import { personalInfo } from "../data/portfolioData";

const ease = [0.22, 1, 0.36, 1];

const links = [
  { label: "LinkedIn", href: personalInfo.linkedin, icon: FaLinkedin, external: true },
  { label: "GitHub", href: personalInfo.github, icon: FaGithub, external: true },
  { label: personalInfo.phone, href: `tel:${personalInfo.phone.replace(/\s/g, "")}`, icon: Phone },
];

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
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease }}
        >
          <h2 className="section-title">Contact</h2>
        </motion.div>

        <motion.div
          className="cta-card"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
        >
          <h3 className="cta-title">
            Looking for a backend or AI/ML intern? <span>Let's talk.</span>
          </h3>
          <p className="cta-sub">Email is the quickest way to reach me, and my resume has the full details.</p>

          <div className="cta-actions">
            <a href={`mailto:${personalInfo.email}`} className="btn btn-solid btn-lg">
              <Mail size={16} aria-hidden="true" /> {personalInfo.email}
            </a>
            <a href={personalInfo.resume} target="_blank" rel="noreferrer" className="btn btn-lg">
              <Download size={16} aria-hidden="true" /> Resume
            </a>
          </div>

          <ul className="cta-links">
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <li key={link.href}>
                  <a href={link.href} {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}>
                    <Icon size={15} aria-hidden="true" /> {link.label}
                  </a>
                </li>
              );
            })}
            <li>
              <button type="button" onClick={copyDiscord} aria-label={`Copy Discord username ${personalInfo.discord}`}>
                {copied ? <Check size={15} aria-hidden="true" /> : <SiDiscord size={15} aria-hidden="true" />}
                {copied ? "Copied" : `@${personalInfo.discord}`}
              </button>
            </li>
          </ul>
          <span className="sr-only" aria-live="polite">{copied ? "Discord username copied" : ""}</span>
        </motion.div>
      </div>
    </section>
  );
}
