import React, { useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { projects } from "../data/portfolioData";
import ProjectModal from "./ProjectModal";

// The full stack is listed in each case study; cards show a short preview.
const MAX_CHIPS = 4;

export default function Projects() {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();

  const activeSlug = searchParams.get("project");
  const activeProject = projects.find((p) => p.slug === activeSlug);

  // Opening pushes a history entry, so the browser Back button closes the modal.
  const openProject = (slug) => {
    setSearchParams({ project: slug }, { state: { fromCard: true } });
  };

  const closeProject = useCallback(() => {
    if (location.state?.fromCard) {
      navigate(-1);
    } else {
      // Opened from a shared link: drop the param without leaving the page.
      setSearchParams({}, { replace: true });
    }
  }, [location.state, navigate, setSearchParams]);

  return (
    <section id="projects">
      <AnimatePresence>
        {activeProject && (
          <ProjectModal key={activeProject.slug} project={activeProject} onClose={closeProject} />
        )}
      </AnimatePresence>

      <div className="container projects-container">
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
              className={`project-card is-clickable${project.featured ? " featured" : ""}`}
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
                    {/* Stretched button: its ::after covers the whole card. */}
                    <button
                      type="button"
                      className="project-open"
                      onClick={() => openProject(project.slug)}
                      aria-haspopup="dialog"
                    >
                      {project.title}
                    </button>
                  </h3>
                  <span className="project-year">{project.year}</span>
                </div>

                <p className="project-desc">{project.description}</p>

                {project.highlight && <p className="project-highlight">{project.highlight}</p>}

                {project.role && (
                  <p className="project-role">
                    <span>My role</span> {project.role.title}
                  </p>
                )}

                <div className="chip-list">
                  {project.tech.slice(0, MAX_CHIPS).map((t) => (
                    <span className="chip" key={t}>{t}</span>
                  ))}
                  {project.tech.length > MAX_CHIPS && (
                    <span className="chip chip-more">+{project.tech.length - MAX_CHIPS}</span>
                  )}
                </div>

                <div className="project-links">
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noreferrer" className="btn btn-solid">
                      <ArrowUpRight size={14} aria-hidden="true" /> Live demo
                    </a>
                  )}
                  {/* With a live demo next to it, Source collapses to an icon to keep one row. */}
                  {project.github &&
                    (project.link ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="icon-btn"
                        aria-label={`${project.title} source code`}
                        title="Source code"
                      >
                        <FaGithub size={16} aria-hidden="true" />
                      </a>
                    ) : (
                      <a href={project.github} target="_blank" rel="noreferrer" className="btn">
                        <FaGithub size={14} aria-hidden="true" /> Source
                      </a>
                    ))}
                  <span className="project-more" aria-hidden="true">
                    Case study <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
