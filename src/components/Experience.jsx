import FadeIn from "./FadeIn";
import { experience } from "../data/portfolio";
import { ArrowUpRight } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" style={{ paddingBottom: "6rem" }}>
      <div className="sticky-header">
        <h2>Experience</h2>
      </div>

      <div className="card-list">
        {experience.map((job, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <a
              href={job.url || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="card-item"
              style={{ display: "grid", textDecoration: "none" }}
            >
              {/* Date Column */}
              <header
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  fontWeight: 600,
                  color: "var(--slate-dark)",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  paddingTop: "4px",
                }}
              >
                {job.period}
              </header>

              {/* Info Column */}
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
                  <span>
                    {job.role} · <span style={{ color: "var(--green)" }}>{job.company}</span>
                  </span>
                  {job.url && job.url !== "#" && (
                    <ArrowUpRight size={14} className="arrow-icon" style={{ marginLeft: "4px", flexShrink: 0 }} />
                  )}
                </h3>

                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1rem 0" }}>
                  {job.highlights.map((h, idx) => (
                    <li
                      key={idx}
                      style={{
                        fontSize: "13.5px",
                        color: "var(--slate)",
                        lineHeight: 1.5,
                        marginBottom: "6px",
                        position: "relative",
                        paddingLeft: "14px",
                      }}
                    >
                      <span style={{ position: "absolute", left: 0, color: "var(--slate-dark)", fontSize: "10px" }}>▹</span>
                      {h}
                    </li>
                  ))}
                </ul>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {job.tech.map((t) => (
                    <span key={t} className="skill-pill">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
