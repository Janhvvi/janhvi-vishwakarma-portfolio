import FadeIn from "./FadeIn";
import { experience } from "../data/portfolio";
import { ArrowUpRight } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="content-section">
      <div className="sticky-header">
        <h2>Experience</h2>
      </div>

      <FadeIn>
        <h2 className="content-section-label">
          <span>02.</span> Experience
        </h2>
      </FadeIn>

      <div className="timeline">
        {experience.map((job, i) => {
          const isCurrent = i === 0;
          return (
            <FadeIn key={i} delay={i * 0.1}>
              <div className={`timeline-item ${isCurrent ? "timeline-item--current" : ""}`}>
                <div className="timeline-dot" />
                <div className="timeline-body">
                  <div className="timeline-role">{job.role}</div>
                  <div className="timeline-company">
                    <span className="timeline-company-name">{job.company}</span> · {job.period}
                  </div>

                  <ul style={{ listStyle: "none", padding: 0, margin: "0 0 12px 0" }}>
                    {job.highlights.map((h, idx) => (
                      <li
                        key={idx}
                        style={{
                          fontSize: "13.5px",
                          color: "var(--text-secondary)",
                          lineHeight: 1.6,
                          marginBottom: "6px",
                          position: "relative",
                          paddingLeft: "16px",
                        }}
                      >
                        <span style={{ position: "absolute", left: 0, color: "var(--accent)", fontSize: "10px" }}>▹</span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="timeline-tags">
                    {job.tech.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
