import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Sun, Moon, ChevronDown } from "lucide-react";
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
  const { isDark, toggleTheme } = useTheme();

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
          <Link to="hero" smooth duration={600} className="logo-link">
            <img 
              src="/profile.jpg" 
              alt="Aniruddha Das" 
              className="logo-img"
            />
          </Link>
        </div>

        {/* Navigation Links + Controls - Right side */}
        <div className="navbar-right-clean">
          <ul className="navbar-links-clean">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  smooth
                  duration={600}
                  offset={-20}
                  spy
                  activeClass="active"
                  className="nav-link-clean"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            
            <li className="navbar-dropdown-clean">
              <span className="nav-link-clean dropdown-trigger-clean" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                More <ChevronDown size={14} />
              </span>
              <ul className="dropdown-menu-clean">
                <li><a href="#games" className="dropdown-item-clean">Games</a></li>
                <li><a href="#entertainment" className="dropdown-item-clean">Entertainment</a></li>
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
