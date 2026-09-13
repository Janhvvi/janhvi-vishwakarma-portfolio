import { ArrowUpRight, Award, ExternalLink } from "lucide-react";
import FadeIn from "./FadeIn";
import { certifications } from "../data/portfolio";

export default function Certifications() {
  return (
    <section id="certifications" className="content-section">
      <div className="sticky-header">
        <h2>Certifications</h2>
      </div>

      <FadeIn>
        <h2 className="content-section-label">
          <span>05.</span> Certifications & Credentials
        </h2>
      </FadeIn>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {certifications.map((cert, i) => (
          <FadeIn key={i} delay={i * 0.08}>
            <a
              href={cert.url || "https://www.linkedin.com/in/janhvi-vishwakarma-b59032239/"}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card"
              style={{ textDecoration: "none" }}
            >
              <div className="project-card-header">
                <div className="project-name">
                  <span style={{ fontSize: "1.1rem", marginRight: "4px" }}>{cert.icon}</span>
                  <span>{cert.title}</span>
                  <ArrowUpRight size={15} style={{ opacity: 0.8, marginLeft: "4px" }} />
                </div>
                <span className="project-status">{cert.issuer}</span>
              </div>

              <div className="project-subtitle" style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <span>{cert.date}</span>
                <span>•</span>
                <span style={{ color: "var(--accent)", fontSize: "11.5px" }}>View Credential ↗</span>
              </div>

              <p className="project-desc" style={{ marginBottom: 0 }}>
                {cert.description}
              </p>
            </a>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
