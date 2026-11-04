import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

function Section({ title, children }) {
  return (
    <div className="pm-section">
      <h3 className="pm-section-title">{title}</h3>
      {children}
    </div>
  );
}

function List({ items }) {
  return (
    <ul className="project-points pm-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function ProjectModal({ project, onClose }) {
  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  const d = project.details || {};
  const titleId = `pm-title-${project.slug}`;

  // Lock page scroll, move focus into the dialog, and restore both on close.
  useEffect(() => {
    const previouslyFocused = document.activeElement;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = overflow;
      previouslyFocused?.focus?.();
    };
  }, []);

  // Escape closes; Tab stays inside the dialog.
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;
      const nodes = dialogRef.current.querySelectorAll(FOCUSABLE);
      if (nodes.length === 0) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <motion.div
      className="pm-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
    >
      <motion.div
        ref={dialogRef}
        className="pm-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.98 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <button ref={closeRef} type="button" className="pm-close" onClick={onClose} aria-label="Close project details">
          <X size={18} aria-hidden="true" />
        </button>

        {project.image && (
          <div className="pm-cover">
            <img src={project.image} alt={`${project.title} interface screenshot`} />
          </div>
        )}

        <div className="pm-content">
          <header className="pm-header">
            <div className="pm-meta">
              <span>{project.year}</span>
              {project.context && (
                <>
                  <span aria-hidden="true">·</span>
                  <span>{project.context}</span>
                </>
              )}
            </div>
            <h2 id={titleId} className="pm-title">{project.title}</h2>
            {project.tagline && <p className="pm-tagline">{project.tagline}</p>}

            <div className="project-links pm-links">
              {project.link && (
                <a href={project.link} target="_blank" rel="noreferrer" className="btn btn-solid">
                  <ArrowUpRight size={14} aria-hidden="true" /> Live demo
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer" className="btn">
                  <FaGithub size={14} aria-hidden="true" /> Source code
                </a>
              )}
            </div>
          </header>

          {project.metrics?.length > 0 && (
            <dl className="pm-metrics">
              {project.metrics.map((m) => (
                <div key={m.label} className="pm-metric">
                  <dt>{m.label}</dt>
                  <dd>{m.value}</dd>
                </div>
              ))}
            </dl>
          )}

          <div className="pm-grid">
            <div className="pm-main">
              {d.overview && (
                <Section title="Overview">
                  <p className="pm-text">{d.overview}</p>
                </Section>
              )}
              {project.role && (
                <div className="pm-role">
                  <h3 className="pm-section-title">
                    My role <span className="pm-role-title">· {project.role.title}</span>
                  </h3>
                  <List items={project.role.points} />
                </div>
              )}
              {d.problem && (
                <Section title="The problem">
                  <p className="pm-text">{d.problem}</p>
                </Section>
              )}
              {d.approach?.length > 0 && (
                <Section title="Approach">
                  <List items={d.approach} />
                </Section>
              )}
              {d.results?.length > 0 && (
                <Section title="Results">
                  <List items={d.results} />
                </Section>
              )}
              {d.architecture?.length > 0 && (
                <Section title="Architecture">
                  <dl className="pm-arch">
                    {d.architecture.map((a) => (
                      <div key={a.label} className="pm-arch-row">
                        <dt>{a.label}</dt>
                        <dd>{a.text}</dd>
                      </div>
                    ))}
                  </dl>
                </Section>
              )}
              {d.highlights?.length > 0 && (
                <Section title="Highlights">
                  <List items={d.highlights} />
                </Section>
              )}
              {d.next?.length > 0 && (
                <Section title="What's next">
                  <List items={d.next} />
                </Section>
              )}
            </div>

            <aside className="pm-side">
              <Section title="Tech stack">
                {d.stack ? (
                  <div className="pm-stack">
                    {Object.entries(d.stack).map(([group, items]) => (
                      <div key={group}>
                        <div className="pm-stack-label">{group}</div>
                        <div className="chip-list">
                          {items.map((t) => (
                            <span className="chip" key={t}>{t}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="chip-list">
                    {project.tech.map((t) => (
                      <span className="chip" key={t}>{t}</span>
                    ))}
                  </div>
                )}
              </Section>
            </aside>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
