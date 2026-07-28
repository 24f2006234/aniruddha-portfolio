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

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {projects.map((project, i) => {
            const IconComponent = project.iconName ? LucideIcons[project.iconName] : LucideIcons.Folder;
            return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ backgroundColor: 'var(--bg-secondary)', transition: { duration: 0.2 } }}
              onClick={() => { if(project.link) window.open(project.link, '_blank'); }}
              style={{
                cursor: 'pointer',
                background: 'transparent',
                border: '2px solid var(--border-light)',
                borderRadius: '8px',
                padding: '8px 8px 12px 8px',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: 'inset 0 0 4px rgba(0,0,0,0.04)',
                position: 'relative'
              }}
            >
              {/* Thumbnail */}
              <div className="project-image-container">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    style={{ 
                      maxWidth: '100%', 
                      maxHeight: '100%', 
                      objectFit: 'contain',
                      borderRadius: '4px',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.1)'
                    }} 
                  />
                ) : (
                  <IconComponent size={48} color={'#94a3b8'} />
                )}
              </div>

              {/* Content */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', padding: '0 4px' }}>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: '500', color: 'var(--text-primary)', margin: 0, letterSpacing: '-0.02em', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {project.title}
                  </h3>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}
                      >
                        <FaExternalLinkAlt size={14} />
                      </a>
                    )}
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}
                      >
                        <FaGithub size={16} />
                      </a>
                    )}
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', marginTop: '0.25rem' }}>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>
                    {project.year}
                  </p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: 0, fontWeight: 500, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '60%' }}>
                    {project.tech.slice(0, 3).join(' • ')}{project.tech.length > 3 ? ' +' : ''}
                  </p>
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
