import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
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
          style={{ textAlign: 'left', marginBottom: '3rem' }}
        >
          <h2 className="section-title">Projects</h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-light)',
                borderRadius: '16px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
              }}
            >
              {/* Image Header Placeholder / Gradient */}
              <div style={{ 
                height: '240px', 
                background: project.image ? `linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-surface) 100%)` : `linear-gradient(135deg, ${project.color || 'var(--primary)'}22, var(--bg-secondary))`, 
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                borderBottom: '1px solid var(--border-light)',
                padding: project.image ? '1.5rem' : '0'
              }}>
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'contain',
                      borderRadius: '8px',
                      filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.15))'
                    }} 
                  />
                ) : (
                  <span style={{ fontSize: '4rem', filter: 'grayscale(0.5) opacity(0.8)' }}>{project.icon}</span>
                )}
              </div>

              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: 'var(--text-primary)', margin: 0 }}>{project.title}</h3>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500 }}>{project.year}</span>
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.5', margin: '0 0 1.5rem 0', flexGrow: 1 }}>
                  {project.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  {project.tech.map((t, ti) => (
                    <span key={ti} style={{ 
                      fontSize: '0.75rem', padding: '0.25rem 0.6rem', 
                      background: 'var(--bg-secondary)', border: '1px solid var(--border-light)', 
                      borderRadius: '4px', color: 'var(--text-secondary)' 
                    }}>
                      {t}
                    </span>
                  ))}
                </div>

                <div style={{ borderTop: '1px solid var(--border-light)', display: 'grid', gridTemplateColumns: '1fr 1fr', marginTop: 'auto' }}>
                  <a 
                    href={project.link || "#"} 
                    target="_blank" rel="noreferrer"
                    style={{ 
                      padding: '1rem', textAlign: 'center', borderRight: '1px solid var(--border-light)',
                      color: 'var(--text-primary)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500,
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                      transition: 'background 0.2s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = 'var(--bg-secondary)'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                  >
                    Live link <FaExternalLinkAlt size={12} />
                  </a>
                  <a 
                    href={project.link || "#"} 
                    target="_blank" rel="noreferrer"
                    style={{ 
                      padding: '1rem', textAlign: 'center', 
                      color: 'var(--text-primary)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500,
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                      transition: 'background 0.2s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = 'var(--bg-secondary)'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                  >
                    GitHub <FaGithub size={14} />
                  </a>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
