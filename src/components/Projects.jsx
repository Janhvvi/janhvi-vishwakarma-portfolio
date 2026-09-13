import FadeIn from "./FadeIn";
import { projects } from "../data/portfolio";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="content-section">
      <div className="sticky-header">
        <h2>Projects</h2>
      </div>

      <FadeIn>
        <h2 className="content-section-label">
          <span>03.</span> Featured Projects
        </h2>
      </FadeIn>

      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {projects.map((proj, i) => {
          const primaryLink = proj.live || proj.github || "#";

          return (
            <FadeIn key={proj.id} delay={i * 0.1}>
              <div className="glass-card">
                <div className="project-card-header">
                  <a
                    href={primaryLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-name"
                  >
                    <span>{proj.title}</span>
                    <ArrowUpRight size={15} style={{ opacity: 0.8 }} />
                  </a>

                  <span className="project-status">
                    {proj.featured ? "Featured" : "Completed"}
                  </span>
                </div>

                <p className="project-desc">{proj.description}</p>

                {proj.features && proj.features.length > 0 && (
                  <ul className="project-features">
                    {proj.features.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="project-feature-item">
                        <span className="project-feature-bullet">▹</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="project-tags">
                  {proj.tech.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
