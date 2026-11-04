import React from "react";
import { Link } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Mail, ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { personalInfo } from "../data/portfolioData";

const NAV = [
  { label: "About", to: "about" },
  { label: "Projects", to: "projects" },
  { label: "Skills", to: "skills" },
  { label: "Education", to: "education" },
  { label: "Contact", to: "contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const onHome = useLocation().pathname === "/";

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="/#hero" className="footer-brand-link" aria-label={`${personalInfo.name}, back to top`}>
              <img src="/aniru.webp" alt="" width="36" height="36" loading="lazy" />
              <span>{personalInfo.name}</span>
            </a>
            <p className="footer-blurb">{personalInfo.title}</p>
            <div className="footer-socials">
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="icon-btn" aria-label="GitHub">
                <FaGithub size={16} aria-hidden="true" />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="icon-btn" aria-label="LinkedIn">
                <FaLinkedin size={16} aria-hidden="true" />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="icon-btn" aria-label="Email">
                <Mail size={16} aria-hidden="true" />
              </a>
            </div>
          </div>

          <nav className="footer-nav" aria-label="Footer">
            <h4>Navigation</h4>
            <ul>
              {NAV.map((item) => (
                <li key={item.to}>
                  {onHome ? (
                    <Link to={item.to} smooth duration={800}>{item.label}</Link>
                  ) : (
                    <a href={`/#${item.to}`}>{item.label}</a>
                  )}
                </li>
              ))}
              <li>
                <RouterLink to="/interests">Interests</RouterLink>
              </li>
            </ul>
          </nav>
        </div>

        <div className="footer-bottom">
          <p>&copy; {year} {personalInfo.name}</p>
          <a href="/#hero" className="back-to-top-btn">
            Back to top <ArrowUp size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
