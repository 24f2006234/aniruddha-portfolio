import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import * as LucideIcons from "lucide-react";
import { Sparkles, Video } from "lucide-react";
import { 
  SiReact, SiWebgl, SiVite, SiPython, SiFlask, SiCplusplus,
  SiScikitlearn, SiPytorch, SiOpencv
} from "react-icons/si";
import { projects } from "../data/portfolioData";

const techIcons = {
  "React": <SiReact color="#61DAFB" />,
  "WebGL": <SiWebgl color="#990000" />,
  "Vite": <SiVite color="#646CFF" />,
  "Python": <SiPython color="#3776AB" />,
  "Flask": <SiFlask color="var(--text-primary)" />,
  "C++": <SiCplusplus color="#00599C" />,
  "Scikit-Learn": <SiScikitlearn color="#F7931E" />,
  "Gemini API": <Sparkles color="#8E24AA" size={14} />,
  "PyTorch": <SiPytorch color="#EE4C2C" />,
  "OpenCV": <SiOpencv color="#5C3EE8" />,
  "MediaPipe": <Video color="#009688" size={14} />
};

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="container" style={{ margin: '0 auto' }}>
        
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'left', marginBottom: '2rem' }}
        >
          <h2 className="section-title">Projects</h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
          {projects.map((project, i) => {
            const IconComponent = project.iconName ? LucideIcons[project.iconName] : LucideIcons.Folder;
            return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, boxShadow: 'var(--shadow-md)' }}
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-light)',
                borderRadius: '24px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: 'var(--shadow-sm)',
                transition: 'all 0.3s ease',
              }}
              className="project-card-sleek"
            >
              {/* Image Header Placeholder / Gradient */}
              <div style={{ 
                height: '220px', 
                background: 'var(--bg-secondary)', 
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden'
              }}
              className="project-img-wrapper"
              >
                <div className="sleek-gradient" style={{ opacity: 0.3 }} />
                {project.image ? (
                  <motion.img 
                    src={project.image} 
                    alt={project.title} 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      zIndex: 1,
                    }} 
                  />
                ) : (
                  <IconComponent size={64} color={project.color || 'var(--text-primary)'} style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))', zIndex: 1 }} />
                )}
              </div>

              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--text-primary)', margin: '0 0 0.25rem 0', lineHeight: 1.2 }}>{project.title}</h3>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500 }}>{project.year}</span>
                  </div>
                  
                  <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <a href={project.link || "#"} target="_blank" rel="noreferrer" style={{ color: 'var(--text-primary)', opacity: 0.7, transition: 'opacity 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.opacity = 1} onMouseLeave={(e) => e.currentTarget.style.opacity = 0.7}>
                      <FaGithub size={20} />
                    </a>
                    <a href={project.link || "#"} target="_blank" rel="noreferrer" style={{ color: 'var(--text-primary)', opacity: 0.7, transition: 'opacity 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.opacity = 1} onMouseLeave={(e) => e.currentTarget.style.opacity = 0.7}>
                      <FaExternalLinkAlt size={18} />
                    </a>
                  </div>
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', margin: '0 0 2rem 0', flexGrow: 1 }}>
                  {project.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {project.tech.map((t, ti) => (
                    <span key={ti} style={{ 
                      fontSize: '0.75rem', padding: '0.4rem 0.8rem', 
                      background: 'var(--bg-primary)', border: '1px solid var(--border-light)', 
                      borderRadius: '8px', color: 'var(--text-primary)',
                      display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600
                    }}>
                      {techIcons[t] && <span style={{ display: 'flex', alignItems: 'center' }}>{techIcons[t]}</span>}
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
