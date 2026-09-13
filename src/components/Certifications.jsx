import { ArrowUpRight, Award, ShieldCheck } from "lucide-react";
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
          <span>06.</span> Certifications & Credentials
        </h2>
      </FadeIn>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {certifications.map((cert, i) => (
          <FadeIn key={i} delay={i * 0.08}>
            <div className="glass-card">
              <div className="project-card-header">
                <div className="project-name">
                  <span style={{ fontSize: "1.1rem", marginRight: "4px" }}>{cert.icon}</span>
                  <span>{cert.title}</span>
                </div>
                <span className="project-status">{cert.issuer}</span>
              </div>

              <div className="project-subtitle">
                Issued {cert.date}
              </div>

              <p className="project-desc" style={{ marginBottom: 0 }}>
                {cert.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
