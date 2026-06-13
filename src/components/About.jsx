import FadeIn from "./FadeIn";
import { about } from "../data/portfolio";

export default function About() {
  return (
    <section id="about" style={{ paddingBottom: "6rem" }}>
      <div className="sticky-header">
        <h2>About</h2>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
        {about.paragraphs.map((p, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <p
              dangerouslySetInnerHTML={{ __html: p }}
              style={{
                color: "var(--slate)",
                lineHeight: 1.625,
                fontSize: "clamp(14px, 2vw, 15px)",
                margin: 0,
              }}
            />
          </FadeIn>
        ))}

        <FadeIn delay={0.4}>
          <p
            style={{
              color: "var(--slate)",
              lineHeight: 1.625,
              fontSize: "clamp(14px, 2vw, 15px)",
              marginTop: "0.5rem",
              marginBottom: "1rem",
            }}
          >
            Here are a few technologies I've been working with recently:
          </p>
          <ul
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
              gap: "8px 12px",
              listStyle: "none",
              padding: 0,
              margin: 0,
            }}
          >
            {about.currentStack.map((tech) => (
              <li
                key={tech}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "13px",
                  color: "var(--slate)",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span style={{ color: "var(--green)", fontSize: "10px" }}>▹</span>
                {tech}
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
