import { GraduationCap, Award } from "lucide-react";
import FadeIn from "./FadeIn";
import { education } from "../data/portfolio";

export default function Education() {
  return (
    <section id="education" className="content-section">
      <div className="sticky-header">
        <h2>Education</h2>
      </div>

      <FadeIn>
        <h2 className="content-section-label">
          <span>06.</span> Education
        </h2>
      </FadeIn>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {education.map((edu, i) => (
          <FadeIn key={i} delay={i * 0.08}>
            <div className="glass-card">
              <div className="project-card-header">
                <div className="project-name">
                  <GraduationCap size={18} style={{ color: "var(--accent)" }} />
                  <span>{edu.degree}</span>
                </div>
                <span className="project-status">{edu.aggregate}</span>
              </div>

              <div className="project-subtitle">
                {edu.institution} · {edu.period}
              </div>

              <p className="project-desc" style={{ marginBottom: 0 }}>
                {edu.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
