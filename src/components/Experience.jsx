import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "./FadeIn";
import { experience } from "../data/portfolio";

export default function Experience() {
  const [active, setActive] = useState(0);
  const job = experience[active];

  return (
    <section id="experience" style={{ paddingBottom: "6rem" }}>
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
          <span style={{ fontFamily: "var(--font-mono)", color: "var(--green)", marginRight: "10px", fontSize: "0.85em", fontWeight: 400 }}>02.</span>
          Where I've Worked
          <span style={{ flex: 1, height: "1px", background: "var(--slate-dark)", marginLeft: "20px", maxWidth: "240px" }} />
        </h2>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div style={{ display: "flex", gap: "2rem", minHeight: "340px" }} className="exp-container">
          {/* Tab list */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              borderLeft: "2px solid var(--slate-dark)",
              flexShrink: 0,
              minWidth: "160px",
            }}
          >
            {experience.map((job, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                style={{
                  background: active === i ? "var(--green-tint, rgba(100,255,218,0.07))" : "none",
                  border: "none",
                  borderLeft: active === i ? "2px solid var(--green)" : "2px solid transparent",
                  marginLeft: "-2px",
                  padding: "0.75rem 1.25rem",
                  color: active === i ? "var(--green)" : "var(--slate)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "13px",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "all 0.2s",
                  whiteSpace: "nowrap",
                }}
              >
                {job.company}
              </button>
            ))}
          </div>

          {/* Content panel */}
          <div style={{ flex: 1 }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.25 }}
              >
                <h3
                  style={{
                    fontSize: "clamp(16px,3vw,20px)",
                    fontWeight: 600,
                    color: "var(--white)",
                    marginBottom: "0.25rem",
                  }}
                >
                  {job.role}{" "}
                  <span style={{ color: "var(--green)" }}>@ {job.company}</span>
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "13px",
                    color: "var(--slate)",
                    marginBottom: "1.5rem",
                  }}
                >
                  {job.period}
                </p>

                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.5rem 0" }}>
                  {job.highlights.map((h, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        gap: "12px",
                        marginBottom: "0.75rem",
                        color: "var(--slate)",
                        fontSize: "clamp(13px,2vw,15px)",
                        lineHeight: 1.65,
                      }}
                    >
                      <span style={{ color: "var(--green)", flexShrink: 0, marginTop: "4px", fontSize: "12px" }}>▹</span>
                      {h}
                    </li>
                  ))}
                </ul>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {job.tech.map((t) => (
                    <span key={t} className="skill-pill">{t}</span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </FadeIn>

      <style>{`
        @media (max-width: 600px) {
          .exp-container { flex-direction: column !important; gap: 1rem !important; }
          .exp-container > div:first-child {
            flex-direction: row !important;
            border-left: none !important;
            border-bottom: 2px solid var(--slate-dark);
            overflow-x: auto;
          }
          .exp-container > div:first-child button {
            border-left: none !important;
            margin-left: 0 !important;
            border-bottom: 2px solid transparent;
            margin-bottom: -2px;
          }
        }
      `}</style>
    </section>
  );
}
