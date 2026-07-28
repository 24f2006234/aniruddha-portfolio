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

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
          {projects.map((project, i) => {
            const IconComponent = project.iconName ? LucideIcons[project.iconName] : LucideIcons.Folder;
            return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              style={{
                background: 'transparent',
                border: '1px solid var(--border-light)',
                borderRadius: '8px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: 'inset 0 0 4px rgba(0,0,0,0.02)',
                position: 'relative'
              }}
            >
              {/* Image Header */}
              <div style={{ 
                height: '200px', 
                background: 'var(--bg-secondary)', 
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                borderBottom: '1px solid var(--border-light)',
                overflow: 'hidden'
              }}>
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover'
                    }} 
                  />
                ) : (
                  <IconComponent size={48} color={'var(--text-muted)'} />
                )}
              </div>

              <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: '500', color: 'var(--text-primary)', margin: 0, letterSpacing: '-0.02em' }}>{project.title}</h3>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                    {project.year}
                  </span>
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', margin: '0 0 1.25rem 0', flexGrow: 1 }}>
                  {project.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                  {project.tech.map((t, ti) => (
                    <span key={ti} style={{ 
                      fontSize: '0.7rem', padding: '0.2rem 0.5rem', 
                      background: 'var(--bg-secondary)', border: '1px solid var(--border-light)', 
                      borderRadius: '4px', color: 'var(--text-secondary)',
                      display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 500
                    }}>
                      {techIcons[t] && <span style={{ display: 'flex', alignItems: 'center' }}>{techIcons[t]}</span>}
                      {t}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                  <a 
                    href={project.link || "#"} 
                    target="_blank" rel="noreferrer"
                    style={{ 
                      display: 'flex', alignItems: 'center', gap: '0.4rem',
                      fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: 500,
                      textDecoration: 'none', transition: 'opacity 0.2s'
                    }}
                  >
                    <FaExternalLinkAlt size={12} style={{ color: 'var(--text-muted)' }} /> Live
                  </a>
                  <a 
                    href={project.link || "#"} 
                    target="_blank" rel="noreferrer"
                    style={{ 
                      display: 'flex', alignItems: 'center', gap: '0.4rem',
                      fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: 500,
                      textDecoration: 'none', transition: 'opacity 0.2s'
                    }}
                  >
                    <FaGithub size={14} style={{ color: 'var(--text-muted)' }} /> Source
                  </a>
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
