import React from "react";
import { motion } from "framer-motion";
import { education } from "../data/portfolioData";

export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="section-title">Education</h2>
        </motion.div>

        <div className="edu-list">
          {education.map((item, i) => (
            <motion.div
              className="edu-item"
              key={item.school}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="edu-logo">
                <img src={item.logo} alt="" loading="lazy" />
              </div>
              <div className="edu-body">
                <h3>{item.school}</h3>
                <div className="edu-degree">{item.degree}</div>
                <div className="edu-meta">
                  <span>{item.duration}</span>
                  {item.cgpa && <span className="chip">CGPA {item.cgpa}</span>}
                  {item.note && <span className="chip">{item.note}</span>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
