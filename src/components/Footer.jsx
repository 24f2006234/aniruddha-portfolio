import React from "react";
import { Link } from "react-scroll";
import { personalInfo } from "../data/portfolioData";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { ArrowUp } from "lucide-react";
import uiCompanyLogo from "../assets/the ui company.png";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
      <div className="container">
        
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '3rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '3rem', marginBottom: '2rem' }}>
          
          {/* Brand & Blurb */}
          <div style={{ flex: '1 1 300px' }}>
            <Link to="hero" smooth duration={800} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer', marginBottom: '1.5rem', width: 'fit-content' }}>
              <img src="/aniru.png" alt="Logo" style={{ width: "40px", height: "40px", borderRadius: "12px", objectFit: "cover" }} />
              <span style={{ fontFamily: 'var(--heading)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
                {personalInfo.name}
              </span>
            </Link>
            <p style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: "1.6", maxWidth: '400px', marginBottom: '2rem' }}>
              Architecting real-time data pipelines, deploying scalable ML services, and crafting the full-stack layers that make intelligent systems accessible.
            </p>
            
            {/* Socials */}
            <div style={{ display: 'flex', gap: '1.25rem' }}>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" style={{ color: 'var(--text-primary)', opacity: 0.6, transition: 'opacity 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.opacity = 1} onMouseLeave={(e) => e.currentTarget.style.opacity = 0.6}>
                <FaGithub size={22} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" style={{ color: 'var(--text-primary)', opacity: 0.6, transition: 'opacity 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.opacity = 1} onMouseLeave={(e) => e.currentTarget.style.opacity = 0.6}>
                <FaLinkedin size={22} />
              </a>
              <a href={`mailto:${personalInfo.email}`} style={{ color: 'var(--text-primary)', opacity: 0.6, transition: 'opacity 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.opacity = 1} onMouseLeave={(e) => e.currentTarget.style.opacity = 0.6}>
                <FaEnvelope size={22} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap' }}>
            <div>
              <h4 style={{ color: 'var(--text-primary)', fontWeight: 600, marginBottom: '1.5rem' }}>Navigation</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {['About', 'Skills', 'Experience', 'Projects'].map((item) => (
                  <li key={item}>
                    <Link to={item.toLowerCase()} smooth duration={800} style={{ color: 'var(--text-secondary)', cursor: 'pointer', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '2rem' }}>
          
          <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", margin: 0 }}>
            &copy; {year} {personalInfo.name}. All rights reserved.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>Designed & developed by</span>
            <a 
              href="https://the-ui-company.vercel.app/" 
              target="_blank" 
              rel="noreferrer" 
              style={{ display: 'flex', alignItems: 'center', opacity: 0.8, transition: 'opacity 0.2s' }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = 1} 
              onMouseLeave={(e) => e.currentTarget.style.opacity = 0.8}
            >
              <img src={uiCompanyLogo} alt="The UI Company" style={{ height: '22px', objectFit: 'contain', filter: 'brightness(0) invert(1)', opacity: '0.8' }} />
            </a>
          </div>

          <Link to="hero" smooth duration={800} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem', cursor: 'pointer', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
            Back to Top <ArrowUp size={16} />
          </Link>
          
        </div>

      </div>
    </footer>
  );
}
