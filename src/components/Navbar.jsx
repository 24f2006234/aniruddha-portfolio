import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Sun, Moon, ChevronDown, Menu, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { personalInfo } from "../data/portfolioData";
import "../styles/Navbar.css";

const navLinks = [
  { label: "About", to: "about" },
  { label: "Projects", to: "projects" },
  { label: "Skills", to: "skills" },
  { label: "Education", to: "education" },
  { label: "Contact", to: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const [activeId, setActiveId] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the mobile menu on Escape.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Highlight the nav link for the section currently in view.
  useEffect(() => {
    const targets = navLinks.map((l) => document.getElementById(l.to)).filter(Boolean);
    if (targets.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActiveId(e.target.id));
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return (
    <header className={`navbar-wrapper ${scrolled ? "scrolled" : ""}`}>
      <nav className="navbar-clean container">
        {/* Logo - Left side */}
        <div className="navbar-logo-clean">
          <a href="/#hero" className="logo-link" aria-label="Aniruddha Das, home">
            <img 
              src="/aniru.webp" 
              alt="" 
              className="logo-img"
              style={{ width: "40px", height: "40px", borderRadius: "10px", objectFit: "cover" }}
            />
          </a>
        </div>

        {/* Navigation Links + Controls - Right side */}
        <div className="navbar-right-clean">
          <ul className="navbar-links-clean">
            {navLinks.map((link) => (
              <li key={link.to}>
                <a
                  href={`/#${link.to}`}
                  className={`nav-link-clean ${activeId === link.to ? "active" : ""}`}
                  aria-current={activeId === link.to ? "true" : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
            
            <li className="navbar-dropdown-clean">
              <span className="nav-link-clean dropdown-trigger-clean" tabIndex={0} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                More <ChevronDown size={14} aria-hidden="true" />
              </span>
              <ul className="dropdown-menu-clean">
                <li>
                  <Link to="/interests" className="dropdown-item-clean" style={{ cursor: "pointer" }}>
                    Interests
                  </Link>
                </li>
              </ul>
            </li>
          </ul>

          <div className="navbar-controls-clean">
            <a
              href={personalInfo.resume}
              target="_blank"
              rel="noreferrer"
              className="navbar-resume-clean"
              title="View resume"
            >
              Resume
            </a>

            <button
              className="theme-toggle-clean"
              onClick={toggleTheme}
              title={isDark ? "Light mode" : "Dark mode"}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? (
                <Sun size={18} strokeWidth={2} aria-hidden="true" />
              ) : (
                <Moon size={18} strokeWidth={2} aria-hidden="true" />
              )}
            </button>

            <button
              type="button"
              className="nav-menu-btn"
              onClick={() => setMenuOpen((o) => !o)}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div id="mobile-nav" className="mobile-nav">
          <ul className="container">
            {navLinks.map((link) => (
              <li key={link.to}>
                <a
                  href={`/#${link.to}`}
                  className={activeId === link.to ? "active" : ""}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <Link to="/interests" onClick={() => setMenuOpen(false)}>
                Interests
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
