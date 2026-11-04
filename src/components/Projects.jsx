import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/portfolioData";

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="section-title">Projects</h2>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              className={`project-card${project.featured ? " featured" : ""}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              {project.image && (
                <div className="project-thumb">
                  <img
                    src={project.image}
                    alt={`${project.title} interface screenshot`}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              )}

              <div className="project-body">
                <div className="project-title-row">
                  <h3>
                    {project.title}
                    {project.featured && <span className="chip featured-chip">Featured</span>}
                  </h3>
                  <span className="project-year">{project.year}</span>
                </div>

                <p className="project-desc">{project.description}</p>

                {project.bullets?.length > 0 && (
                  <ul className="project-points">
                    {project.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}

                <div className="chip-list">
                  {project.tech.map((t) => (
                    <span className="chip" key={t}>{t}</span>
                  ))}
                </div>

                <div className="project-links">
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noreferrer" className="btn btn-solid">
                      <ArrowUpRight size={14} aria-hidden="true" /> Live demo
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="btn">
                      <FaGithub size={14} aria-hidden="true" /> Source
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
