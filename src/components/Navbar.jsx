import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Sun, Moon, ChevronDown } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { personalInfo } from "../data/portfolioData";
import "../styles/Navbar.css";

const navLinks = [
  { label: "About", to: "about" },
  { label: "Skills", to: "skills" },
  { label: "Projects", to: "projects" },
  { label: "Contact", to: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar-wrapper ${scrolled ? "scrolled" : ""}`}>
      <nav className="navbar-clean container">
        {/* Logo - Left side */}
        <div className="navbar-logo-clean">
          <a href="/#hero" className="logo-link">
            <img 
              src="/aniru.png" 
              alt="Logo" 
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
                  className="nav-link-clean"
                >
                  {link.label}
                </a>
              </li>
            ))}
            
            <li className="navbar-dropdown-clean">
              <span className="nav-link-clean dropdown-trigger-clean" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                More <ChevronDown size={14} />
              </span>
              <ul className="dropdown-menu-clean">
                <li>
                  <Link to="/games" className="dropdown-item-clean" style={{ cursor: "pointer" }}>
                    Games
                  </Link>
                </li>
                <li><a href="/#entertainment" className="dropdown-item-clean">Entertainment</a></li>
              </ul>
            </li>
          </ul>

          <div className="navbar-controls-clean">
            <a
              href="/resume.pdf"
              download="resume.pdf"
              className="navbar-resume-clean"
              title="Download Resume"
            >
              Resume
            </a>

            <button
              className="theme-toggle-clean"
              onClick={toggleTheme}
              title={isDark ? "Light mode" : "Dark mode"}
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun size={18} strokeWidth={2} />
              ) : (
                <Moon size={18} strokeWidth={2} />
              )}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
