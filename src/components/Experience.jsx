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
        <div style={{ display: 'flex', gap: '3rem', marginBottom: '3rem', alignItems: 'center' }}>
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
                  <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    <div style={{ width: '80px', height: '80px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff', borderRadius: '50%', overflow: 'hidden' }}>
                      <img 
                        src={iitmLogo}
                        alt="IIT Madras" 
                        style={{ width: '60px', height: '60px', objectFit: 'contain' }} 
                        onError={(e) => e.target.style.display = 'none'} 
                      />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.6rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                        Data Science
                      </h3>
                      <div style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                        IIT Madras
                      </div>
                      <div style={{ display: 'flex', gap: '1.5rem', fontSize: '1rem', color: 'var(--text-muted)' }}>
                        <span>Chennai, India</span>
                        <span>Present</span>
                      </div>
                    </div>
                  </div>

                  {/* Adamas University */}
                  <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    <div style={{ width: '80px', height: '80px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff', borderRadius: '50%', overflow: 'hidden' }}>
                      <img 
                        src={adamasLogo}
                        alt="Adamas University" 
                        style={{ width: '60px', height: '60px', objectFit: 'contain' }} 
                        onError={(e) => e.target.style.display = 'none'} 
                      />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.6rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                        Computer Science Engineering (CSE)
                      </h3>
                      <div style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                        Adamas University
                      </div>
                      <div style={{ display: 'flex', gap: '1.5rem', fontSize: '1rem', color: 'var(--text-muted)' }}>
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
                <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
                  <div style={{ color: 'var(--text-primary)', marginTop: '6px' }}>
                    <Briefcase size={32} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.6rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                      Data Scientist & ML Engineer
                    </h3>
                    <div style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                      Independent & Academic Projects
                    </div>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1rem', maxWidth: '800px' }}>
                      I specialize in building systems that go past the model. I focus on architecting real-time data pipelines, deploying scalable ML services, and crafting the full-stack layers that make intelligent systems accessible and usable.
                    </p>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8', margin: 0, maxWidth: '800px' }}>
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