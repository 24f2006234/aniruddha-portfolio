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
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-light)',
                borderRadius: '20px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 8px 32px rgba(0,0,0,0.04)',
                position: 'relative'
              }}
            >
              {/* Image Header with Custom Background */}
              <div style={{ 
                height: '220px', 
                background: `linear-gradient(135deg, ${project.color || 'var(--clr-blue)'}22, var(--bg-surface))`, 
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                borderBottom: '1px solid var(--border-light)',
                padding: '1.5rem',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: 'radial-gradient(var(--border-light) 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
                  opacity: 0.5
                }} />
                {project.image ? (
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    src={project.image} 
                    alt={project.title} 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'contain',
                      zIndex: 1,
                      filter: 'drop-shadow(0 16px 24px rgba(0,0,0,0.15))'
                    }} 
                  />
                ) : (
                  <IconComponent size={64} color={project.color || 'var(--text-primary)'} style={{ zIndex: 1 }} />
                )}
              </div>

              <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: 'var(--text-primary)', margin: 0, lineHeight: 1.2 }}>{project.title}</h3>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600, background: 'var(--bg-secondary)', padding: '0.2rem 0.6rem', borderRadius: '50px' }}>
                    {project.year}
                  </span>
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.6', margin: '0 0 1.5rem 0', flexGrow: 1 }}>
                  {project.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                  {project.tech.map((t, ti) => (
                    <span key={ti} style={{ 
                      fontSize: '0.7rem', padding: '0.25rem 0.6rem', 
                      background: 'transparent', border: '1px solid var(--border-light)', 
                      borderRadius: '50px', color: 'var(--text-secondary)',
                      display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600
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
                    className="btn-primary"
                    style={{ flex: 1, width: 'auto', padding: '0.6rem', fontSize: '0.85rem' }}
                  >
                    View Live <FaExternalLinkAlt size={12} />
                  </a>
                  <a 
                    href={project.link || "#"} 
                    target="_blank" rel="noreferrer"
                    className="btn-outline"
                    style={{ flex: 1, width: 'auto', padding: '0.6rem', fontSize: '0.85rem' }}
                  >
                    Source <FaGithub size={14} />
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
