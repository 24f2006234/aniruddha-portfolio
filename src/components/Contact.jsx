import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Check } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiDiscord } from "react-icons/si";
import { personalInfo } from "../data/portfolioData";

const links = [
  { label: "Email", href: `mailto:${personalInfo.email}`, icon: Mail, accent: "var(--clr-red)" },
  { label: "LinkedIn", href: personalInfo.linkedin, icon: FaLinkedin, accent: "var(--clr-blue)", external: true },
  { label: "GitHub", href: personalInfo.github, icon: FaGithub, accent: "var(--clr-purple)", external: true },
  {
    label: personalInfo.phone,
    href: `tel:${personalInfo.phone.replace(/\s/g, "")}`,
    icon: Phone,
    accent: "var(--clr-green)",
  },
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
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="section-title contact-title">Let's Connect</h2>
          <p className="contact-lede">I'm currently seeking software engineering internships.</p>

          <div className="contact-pills">
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="contact-pill"
                  style={{ "--pill-accent": link.accent }}
                  {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}
                >
                  <Icon size={18} aria-hidden="true" /> {link.label}
                </a>
              );
            })}
            <button
              type="button"
              onClick={copyDiscord}
              className="contact-pill"
              style={{ "--pill-accent": "var(--clr-orange)" }}
              aria-label={`Copy Discord username ${personalInfo.discord}`}
            >
              {copied ? <Check size={18} aria-hidden="true" /> : <SiDiscord size={18} aria-hidden="true" />}
              {copied ? "Copied" : `@${personalInfo.discord}`}
            </button>
          </div>
          <span className="sr-only" aria-live="polite">{copied ? "Discord username copied" : ""}</span>
        </motion.div>
      </div>
    </section>
  );
}
