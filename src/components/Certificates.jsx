import React from "react";
import { motion } from "framer-motion";
import { FileBadge, CheckCircle2, ExternalLink } from "lucide-react";
import { certifications } from "../data/portfolioData";
import "../styles/Projects.css";

export default function Certificates() {
  const certificates = certifications.filter(c => c.icon !== 'award');
  if (certificates.length === 0) return null;

  return (
    <section id="certificates">
      <div className="container" style={{ margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'left', marginBottom: '2rem' }}
        >
          <h2 className="section-title">My Certificates</h2>
        </motion.div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '1.25rem', 
          width: '100%' 
        }}>
          {certificates.map((cert, i) => (
            <motion.a
              key={i}
              href={cert.url || cert.image || '#'}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02, backgroundColor: 'var(--bg-secondary)' }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              style={{ 
                textDecoration: 'none', 
                padding: '1.25rem', 
                background: 'color-mix(in srgb, var(--bg-secondary) 40%, transparent)',
                border: '1px solid var(--border-light)',
                borderRadius: '12px',
                display: 'flex',
                gap: '1rem',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Logo */}
              <div style={{ 
                width: '56px', 
                height: '56px', 
                flexShrink: 0,
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                background: '#fff', 
                borderRadius: '8px',
                padding: '4px',
                border: '1px solid rgba(0,0,0,0.05)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
              }}>
                {cert.image ? (
                  <img src={cert.image} alt="Certificate" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                ) : (
                  <FileBadge size={28} color="var(--text-secondary)" />
                )}
              </div>

              {/* Content */}
              <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.25rem' }}>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: '600', color: 'var(--text-primary)', margin: 0, lineHeight: 1.3, wordBreak: 'break-word' }}>
                    {cert.title}
                  </h3>
                  <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'color-mix(in srgb, #4ADE80 15%, transparent)', padding: '4px', borderRadius: '50%' }} title="Unlocked Skill">
                    <CheckCircle2 size={16} color="#4ADE80" strokeWidth={2.5} />
                  </div>
                </div>
                
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', margin: 0, fontWeight: 500 }}>
                  {cert.issuer}
                </p>
                {cert.credentialId && (
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', margin: '0.25rem 0 0 0' }}>
                    ID: {cert.credentialId}
                  </p>
                )}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
