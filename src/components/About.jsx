import FadeIn from "./FadeIn";
import { about } from "../data/portfolio";

export default function About() {
  return (
    <section id="about" style={{ paddingBottom: "6rem" }}>
      <FadeIn>
        <h2
          className="section-heading numbered-heading"
          data-number="01"
          style={{
            fontFamily: "inherit",
            fontSize: "clamp(22px,4vw,28px)",
            fontWeight: 600,
            color: "var(--white)",
            display: "flex",
            alignItems: "center",
            whiteSpace: "nowrap",
            marginBottom: "40px",
          }}
        >
          <span style={{ fontFamily: "var(--font-mono)", color: "var(--green)", marginRight: "10px", fontSize: "0.85em", fontWeight: 400 }}>01.</span>
          About Me
          <span style={{ flex: 1, height: "1px", background: "var(--slate-dark)", marginLeft: "20px", maxWidth: "240px" }} />
        </h2>
      </FadeIn>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "3fr 2fr",
          gap: "3rem",
          alignItems: "start",
        }}
        className="about-grid"
      >
        {/* Text */}
        <div>
          {about.paragraphs.map((p, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <p
                dangerouslySetInnerHTML={{ __html: p }}
                style={{
                  color: "var(--slate)",
                  lineHeight: 1.75,
                  fontSize: "clamp(14px,2vw,17px)",
                  marginBottom: "1.25rem",
                }}
              />
            </FadeIn>
          ))}

          <FadeIn delay={0.4}>
            <p style={{ color: "var(--slate)", lineHeight: 1.75, fontSize: "clamp(14px,2vw,17px)", marginBottom: "1rem" }}>
              Technologies I've been working with recently:
            </p>
            <ul
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "6px 12px",
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
                    color: "var(--slate-light)",
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

        {/* Image placeholder / badge column */}
        <FadeIn delay={0.3} direction="left">
          <div style={{ position: "relative" }}>
            {/* Avatar placeholder */}
            <div
              style={{
                width: "100%",
                aspectRatio: "1",
                maxWidth: "280px",
                background: "var(--navy-light)",
                borderRadius: "4px",
                border: "1px solid var(--green-border, rgba(100,255,218,0.15))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: "0.75rem",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Decorative initials */}
              <span
                style={{
                  fontSize: "72px",
                  fontWeight: 700,
                  color: "rgba(100,255,218,0.15)",
                  lineHeight: 1,
                  letterSpacing: "-4px",
                }}
              >
                JV
              </span>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  color: "var(--slate-dark)",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                }}
              >
                Backend Developer
              </span>

              {/* Corner accent */}
              <div
                style={{
                  position: "absolute",
                  bottom: "12px",
                  right: "12px",
                  width: "40px",
                  height: "40px",
                  border: "2px solid var(--green)",
                  borderRadius: "2px",
                  opacity: 0.3,
                }}
              />
            </div>

            {/* Offset border decoration */}
            <div
              style={{
                position: "absolute",
                top: "16px",
                left: "16px",
                width: "100%",
                maxWidth: "280px",
                aspectRatio: "1",
                border: "2px solid var(--green)",
                borderRadius: "4px",
                zIndex: -1,
                opacity: 0.25,
              }}
            />
          </div>
        </FadeIn>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
