import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase } from "lucide-react";
import iitmLogo from "../assets/iitm.png";
import adamasLogo from "../assets/adamas.png";

export default function Experience() {
  const [activeTab, setActiveTab] = useState("Education");

  return (
    <section id="experience">
      <div className="container">
        {/* Headings as Tabs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', marginBottom: '2rem', alignItems: 'center' }}>
          <h2 
            onClick={() => setActiveTab('Education')}
            className="section-title"
            style={{ 
              cursor: 'pointer', 
              color: activeTab === 'Education' ? 'var(--text-primary)' : 'var(--text-muted)',
              margin: 0,
              transition: 'color 0.3s ease'
            }}
          >
            Education
          </h2>
          <h2 
            onClick={() => setActiveTab('Experience')}
            className="section-title"
            style={{ 
              cursor: 'pointer', 
              color: activeTab === 'Experience' ? 'var(--text-primary)' : 'var(--text-muted)',
              margin: 0,
              transition: 'color 0.3s ease'
            }}
          >
            Experience
          </h2>
        </div>

        <div style={{ minHeight: '300px' }}>
          <AnimatePresence mode="wait">
            {activeTab === 'Education' && (
              <motion.div 
                key="education" 
                initial={{ opacity: 0, x: -20 }} 
                animate={{ opacity: 1, x: 0 }} 
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                  {/* IIT Madras */}
                  <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                    <div style={{ width: '48px', height: '48px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff', borderRadius: '8px', border: '1px solid var(--border-light)', overflow: 'hidden', padding: '4px' }}>
                      <img 
                        src={iitmLogo}
                        alt="IIT Madras" 
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
                        onError={(e) => e.target.style.display = 'none'} 
                      />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.1rem', fontWeight: '500', color: 'var(--text-primary)', marginBottom: '0.15rem' }}>
                        Data Science
                      </h3>
                      <div style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>
                        IIT Madras
                      </div>
                      <div style={{ display: 'flex', gap: '1rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                        <span>Chennai, India</span>
                        <span>Present</span>
                      </div>
                    </div>
                  </div>

                  {/* Adamas University */}
                  <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                    <div style={{ width: '48px', height: '48px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff', borderRadius: '8px', border: '1px solid var(--border-light)', overflow: 'hidden', padding: '4px' }}>
                      <img 
                        src={adamasLogo}
                        alt="Adamas University" 
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
                        onError={(e) => e.target.style.display = 'none'} 
                      />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.1rem', fontWeight: '500', color: 'var(--text-primary)', marginBottom: '0.15rem' }}>
                        Computer Science Engineering (CSE)
                      </h3>
                      <div style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>
                        Adamas University
                      </div>
                      <div style={{ display: 'flex', gap: '1rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                        <span>Kolkata, India</span>
                        <span>Present</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'Experience' && (
              <motion.div 
                key="experience" 
                initial={{ opacity: 0, x: -20 }} 
                animate={{ opacity: 1, x: 0 }} 
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                  <div style={{ color: 'var(--text-muted)', marginTop: '4px', background: 'var(--bg-secondary)', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
                    <Briefcase size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: '500', color: 'var(--text-primary)', marginBottom: '0.15rem' }}>
                      Data Scientist & ML Engineer
                    </h3>
                    <div style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                      Independent & Academic Projects
                    </div>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1rem', width: '100%' }}>
                      I specialize in building systems that go past the model. I focus on architecting real-time data pipelines, deploying scalable ML services, and crafting the full-stack layers that make intelligent systems accessible and usable.
                    </p>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', margin: 0, width: '100%' }}>
                      My recent work spans across developing live aviation telemetry applications, engineering ML-driven candidate matching systems, and deploying applied Machine Learning solutions on Google Cloud Platform.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}