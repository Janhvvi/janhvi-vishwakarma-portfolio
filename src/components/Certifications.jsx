import { ArrowUpRight } from "lucide-react";
import FadeIn from "./FadeIn";
import { certifications } from "../data/portfolio";

export default function Certifications() {
  return (
    <section id="certifications" style={{ paddingBottom: "6rem" }}>
      <div className="sticky-header">
        <h2>Certifications</h2>
      </div>

      <div className="card-list">
        {certifications.map((cert, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <a
              href={cert.url || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="card-item"
              style={{ display: "grid", textDecoration: "none" }}
            >
              {/* Left Column: Issuer & Date */}
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
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span style={{ fontSize: "1.2rem" }}>{cert.icon}</span>
                  <span>{cert.date}</span>
                </div>
                <div style={{ fontSize: "10px", marginTop: "4px", opacity: 0.8 }}>{cert.issuer}</div>
              </header>

              {/* Right Column: Content */}
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
                  <span>{cert.title}</span>
                  {cert.url && cert.url !== "#" && (
                    <ArrowUpRight size={14} className="arrow-icon" style={{ marginLeft: "4px", flexShrink: 0 }} />
                  )}
                </h3>

                <p
                  style={{
                    fontSize: "13.5px",
                    color: "var(--slate)",
                    lineHeight: 1.5,
                    margin: 0,
                  }}
                >
                  {cert.description}
                </p>
              </div>
            </a>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
