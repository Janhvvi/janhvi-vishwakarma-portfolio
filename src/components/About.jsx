import FadeIn from "./FadeIn";
import { about } from "../data/portfolio";

export default function About() {
  return (
    <section id="about" className="content-section">
      <div className="sticky-header">
        <h2>About</h2>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
        {about.paragraphs.map((p, i) => (
          <FadeIn key={i} delay={i * 0.08}>
            <p
              dangerouslySetInnerHTML={{ __html: p }}
              style={{
                color: "var(--text-secondary)",
                lineHeight: 1.75,
                fontSize: "15px",
                margin: 0,
              }}
            />
          </FadeIn>
        ))}

        <FadeIn delay={0.35}>
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: "13.5px",
              marginTop: "8px",
              marginBottom: "12px",
              fontWeight: 500,
            }}
          >
            Technologies I frequently engineer with:
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
              gap: "8px 16px",
            }}
          >
            {about.currentStack.map((tech) => (
              <div
                key={tech}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "13px",
                  color: "var(--accent)",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span style={{ fontSize: "11px", opacity: 0.8 }}>▹</span>
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
