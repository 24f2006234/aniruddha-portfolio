import React from "react";
import { motion } from "framer-motion";
import { FileBadge, ArrowUpRight } from "lucide-react";
import { certifications } from "../data/portfolioData";

export default function Certificates() {
  const certificates = certifications.filter((c) => c.icon !== "award");
  if (certificates.length === 0) return null;

  return (
    <section id="certificates">
      <div className="container">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="section-title">Certifications</h2>
        </motion.div>

        <div className="cert-grid">
          {certificates.map((cert, i) => {
            const href = cert.url || cert.image;
            const Tag = href ? motion.a : motion.div;
            const linkProps = href ? { href, target: "_blank", rel: "noreferrer" } : {};
            return (
              <Tag
                key={cert.title}
                className="cert-card"
                {...linkProps}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
              >
                <div className="cert-logo">
                  {cert.image ? (
                    <img src={cert.image} alt={`${cert.issuer} logo`} loading="lazy" />
                  ) : (
                    <FileBadge size={26} color="#555" aria-hidden="true" />
                  )}
                </div>
                <div className="cert-text">
                  <h3>{cert.title}</h3>
                  <p>{cert.issuer}</p>
                </div>
                {href && <ArrowUpRight size={16} aria-hidden="true" />}
              </Tag>
            );
          })}
        </div>
      </div>
    </section>
  );
}
