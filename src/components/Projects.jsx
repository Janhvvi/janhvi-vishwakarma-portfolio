import FadeIn from "./FadeIn";
import { projects } from "../data/portfolio";
import { ArrowUpRight, ExternalLink, Terminal, BookOpen, ChefHat } from "lucide-react";

function GithubIcon({ size = 14 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

const icons = [Terminal, BookOpen, ChefHat];

export default function Projects() {
  return (
    <section id="projects" style={{ paddingBottom: "6rem" }}>
      <div className="sticky-header">
        <h2>Projects</h2>
      </div>

      <div className="card-list">
        {projects.map((proj, i) => {
          const Icon = icons[i % icons.length];
          const primaryLink = proj.live || proj.github || "#";

          return (
            <FadeIn key={proj.id} delay={i * 0.1}>
              <a
                href={primaryLink}
                target="_blank"
                rel="noopener noreferrer"
                className="card-item"
                style={{ display: "grid", textDecoration: "none" }}
              >
                {/* Left: Blended tech badge */}
                <div className="project-badge-column">
                  <div
                    className="project-badge-container"
                    style={{
                      width: "120px",
                      height: "72px",
                      borderRadius: "6px",
                      background: "rgba(30, 41, 59, 0.4)",
                      border: "1px solid rgba(148, 163, 184, 0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.2s ease-in-out",
                    }}
                  >
                    <Icon size={22} className="badge-icon" style={{ color: "var(--slate-dark)", transition: "color 0.2s ease-in-out" }} />
                  </div>
                </div>

                {/* Right: Info */}
                <div>
                  <h3
                    className="card-title"
                    style={{
                      fontSize: "16px",
                      fontWeight: 600,
                      margin: "0 0 0.5rem 0",
                      display: "inline-flex",
                      alignItems: "baseline",
                      lineHeight: 1.2,
                    }}
                  >
                    <span>{proj.title}</span>
                    <ArrowUpRight size={14} className="arrow-icon" style={{ marginLeft: "4px", flexShrink: 0 }} />
                  </h3>

                  <p
                    style={{
                      fontSize: "13.5px",
                      color: "var(--slate)",
                      lineHeight: 1.5,
                      margin: "0 0 0.75rem 0",
                    }}
                  >
                    {proj.description}
                  </p>

                  {/* Links Row */}
                  {(proj.github || proj.live) && (
                    <div
                      style={{
                        display: "flex",
                        gap: "12px",
                        alignItems: "center",
                        marginBottom: "0.75rem",
                      }}
                      onClick={(e) => e.stopPropagation()} // Prevent double clicks on link
                    >
                      {proj.github && proj.github !== "#" && (
                        <a
                          href={proj.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="View Source on GitHub"
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "4px",
                            fontSize: "12px",
                            color: "var(--slate)",
                            textDecoration: "none",
                            fontFamily: "var(--font-mono)",
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--green)")}
                          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--slate)")}
                        >
                          <GithubIcon size={14} />
                          <span>Code</span>
                        </a>
                      )}
                      {proj.live && (
                        <a
                          href={proj.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="View Live Demo"
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "4px",
                            fontSize: "12px",
                            color: "var(--slate)",
                            textDecoration: "none",
                            fontFamily: "var(--font-mono)",
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--green)")}
                          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--slate)")}
                        >
                          <ExternalLink size={14} />
                          <span>Demo</span>
                        </a>
                      )}
                    </div>
                  )}

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {proj.tech.map((t) => (
                      <span key={t} className="skill-pill">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </FadeIn>
          );
        })}
      </div>

      <style>{`
        .project-badge-column {
          display: none;
        }
        @media (min-width: 768px) {
          .project-badge-column {
            display: block;
          }
        }
        .card-item:hover .project-badge-container {
          border-color: rgba(94, 234, 212, 0.2) !important;
          background-color: rgba(30, 41, 59, 0.6) !important;
        }
        .card-item:hover .badge-icon {
          color: var(--green) !important;
        }
      `}</style>
    </section>
  );
}
