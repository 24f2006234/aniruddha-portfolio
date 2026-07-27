import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Sun, Moon } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import "../styles/Navbar.css";

const navLinks = [
  { label: "About", to: "about" },
  { label: "Skills", to: "skills" },
  { label: "Projects", to: "projects" },
  { label: "Contact", to: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");
  const { isDark, toggleTheme } = useTheme();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.div
        className="scroll-progress-bar"
        style={{
          scaleX,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: "var(--text-primary)",
          transformOrigin: "0%",
          zIndex: 999999
        }}
      />
      <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
        <div className="navbar-inner">
          <div className="navbar-left">
            <Link to="hero" smooth duration={600} className="navbar-logo" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }} onClick={() => setMenuOpen(false)}>
              <img src="/profile.jpg" alt="Logo" style={{ width: "36px", height: "36px", borderRadius: "50%", objectFit: "cover", border: '2px solid var(--border-light)' }} />
            </Link>
          </div>

          <div className="navbar-center">
            <ul className="navbar-links">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    smooth
                    duration={600}
                    offset={0}
                    spy
                    onSetActive={() => setActive(link.to)}
                    className={active === link.to ? "active" : ""}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="navbar-right">
            <a
              href="/resume.pdf"
              download="resume.pdf"
              className="navbar-cv"
              title="Download Resume"
            >
              Resume
            </a>

            <button
              className="theme-toggle"
              onClick={toggleTheme}
              title={isDark ? "Light mode" : "Dark mode"}
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun size={18} style={{ strokeWidth: 2 }} />
              ) : (
                <Moon size={18} style={{ strokeWidth: 2 }} />
              )}
            </button>

            <button
              className={`navbar-hamburger${menuOpen ? " open" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`navbar-mobile${menuOpen ? " open" : ""}`}>
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth
              duration={600}
              offset={0}
              spy
              className={active === link.to ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/resume.pdf"
            download="resume.pdf"
            className="navbar-mobile-cv"
            title="Download CV"
          >
            Resume
          </a>
        </div>
      </nav>
    </>
  );
}
