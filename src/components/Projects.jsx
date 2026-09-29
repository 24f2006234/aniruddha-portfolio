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
              style={{
                background: 'transparent',
                border: '2px solid var(--border-light)',
                borderRadius: '8px',
                padding: '8px 8px 12px 8px',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
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
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'contain',
                      objectPosition: 'center',
                      borderRadius: '4px',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.1)'
                    }} 
                  />
                ) : (
                  <IconComponent size={48} color={'#94a3b8'} />
                )}
              </div>

              {/* Content */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', padding: '0 4px' }}>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: '500', color: 'var(--text-primary)', margin: 0, letterSpacing: '-0.02em', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {project.title}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0, whiteSpace: 'nowrap' }}>
                    {project.year}
                  </p>
                </div>

                {project.description && (
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.4' }}>
                    {project.description}
                  </p>
                )}

                {project.metric && (
                  <p style={{ fontSize: '0.85rem', color: 'var(--accent-primary, #60A5FA)', margin: 0, fontWeight: 500, display: 'flex', alignItems: 'flex-start', gap: '0.4rem', marginTop: '0.2rem' }}>
                    <Sparkles size={14} style={{ marginTop: '2px', flexShrink: 0 }} /> 
                    <span>{project.metric}</span>
                  </p>
                )}

                <div style={{ paddingTop: '0.5rem' }}>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: 0, fontWeight: 500, lineHeight: '1.4' }}>
                    {project.tech.join(' • ')}
                  </p>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.8rem', color: 'var(--text-primary)', background: 'var(--bg-secondary)', padding: '4px 10px', borderRadius: '4px', textDecoration: 'none', transition: 'background 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.background = 'var(--border-light)'} onMouseLeave={(e) => e.currentTarget.style.background = 'var(--bg-secondary)'}>
                      <FaGithub size={14} /> GitHub
                    </a>
                  )}
                  {project.link && project.link !== '#' && (
                    <a href={project.link} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.8rem', color: 'var(--text-primary)', background: 'var(--bg-secondary)', padding: '4px 10px', borderRadius: '4px', textDecoration: 'none', transition: 'background 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.background = 'var(--border-light)'} onMouseLeave={(e) => e.currentTarget.style.background = 'var(--bg-secondary)'}>
                      <FaExternalLinkAlt size={12} /> Live Demo
                    </a>
                  )}
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
