import { ExternalLink, Award } from "lucide-react";
import FadeIn from "./FadeIn";
import { certifications } from "../data/portfolio";

export default function Certifications() {
  return (
    <section id="certifications" style={{ paddingBottom: "6rem" }}>
      <FadeIn>
        <h2
          style={{
            fontSize: "clamp(22px,4vw,28px)",
            fontWeight: 600,
            color: "var(--white)",
            display: "flex",
            alignItems: "center",
            whiteSpace: "nowrap",
            marginBottom: "40px",
          }}
        >
          <span style={{ fontFamily: "var(--font-mono)", color: "var(--green)", marginRight: "10px", fontSize: "0.85em", fontWeight: 400 }}>06.</span>
          Certifications
          <span style={{ flex: 1, height: "1px", background: "var(--slate-dark)", marginLeft: "20px", maxWidth: "200px" }} />
        </h2>
      </FadeIn>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "1.25rem",
        }}
      >
        {certifications.map((cert, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div className="cert-card">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "1rem",
                }}
              >
                <span style={{ fontSize: "2rem" }}>{cert.icon}</span>
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--slate-dark)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--green)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--slate-dark)")}
                >
                  <ExternalLink size={16} />
                </a>
              </div>

              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "12px",
                  color: "var(--green)",
                  marginBottom: "0.5rem",
                }}
              >
                {cert.issuer} · {cert.date}
              </p>

              <h3
                style={{
                  color: "var(--white)",
                  fontWeight: 600,
                  fontSize: "clamp(14px,2vw,16px)",
                  lineHeight: 1.4,
                  marginBottom: "0.75rem",
                }}
              >
                {cert.title}
              </h3>

              <p
                style={{
                  color: "var(--slate)",
                  fontSize: "13px",
                  lineHeight: 1.65,
                }}
              >
                {cert.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
