import { motion } from "framer-motion";
import { GitFork, ExternalLink, Terminal, BookOpen, ChefHat } from "lucide-react";
import FadeIn from "./FadeIn";
import { projects } from "../data/portfolio";

const icons = [Terminal, BookOpen, ChefHat];

export default function Projects() {
  return (
    <section id="projects" style={{ paddingBottom: "6rem" }}>
      <FadeIn>
        <h2
          style={{
            fontSize: "clamp(22px,4vw,28px)",
            fontWeight: 600,
            color: "var(--white)",
            display: "flex",
            alignItems: "center",
            whiteSpace: "nowrap",
            marginBottom: "12px",
          }}
        >
          <span style={{ fontFamily: "var(--font-mono)", color: "var(--green)", marginRight: "10px", fontSize: "0.85em", fontWeight: 400 }}>03.</span>
          Featured Projects
          <span style={{ flex: 1, height: "1px", background: "var(--slate-dark)", marginLeft: "20px", maxWidth: "200px" }} />
        </h2>
        <p style={{ color: "var(--slate)", fontSize: "14px", fontFamily: "var(--font-mono)", marginBottom: "40px" }}>
          A selection of things I've built
        </p>
      </FadeIn>

      <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
        {projects.map((proj, i) => {
          const Icon = icons[i];
          const isEven = i % 2 === 0;

          return (
            <FadeIn key={proj.id} delay={0.1 * i}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "2rem",
                  alignItems: "center",
                }}
                className="project-row"
              >
                {/* Image side */}
                <div style={{ order: isEven ? 1 : 2 }}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      background: "var(--navy-light)",
                      border: "1px solid rgba(100,255,218,0.1)",
                      borderRadius: "8px",
                      aspectRatio: "16/10",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "1rem",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    {/* Decorative grid bg */}
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage:
                          "radial-gradient(circle at 1px 1px, rgba(100,255,218,0.05) 1px, transparent 0)",
                        backgroundSize: "24px 24px",
                      }}
                    />
                    <Icon
                      size={48}
                      style={{ color: "rgba(100,255,218,0.25)", position: "relative" }}
                    />
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "11px",
                        color: "var(--slate-dark)",
                        letterSpacing: "0.15em",
                        position: "relative",
                      }}
                    >
                      {proj.title.toUpperCase()}
                    </span>
                  </motion.div>
                </div>

                {/* Text side */}
                <div
                  style={{
                    order: isEven ? 2 : 1,
                    textAlign: isEven ? "right" : "left",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      color: "var(--green)",
                      fontSize: "13px",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Featured Project
                  </p>
                  <h3
                    style={{
                      fontSize: "clamp(18px,3vw,24px)",
                      fontWeight: 600,
                      color: "var(--white)",
                      marginBottom: "1.25rem",
                    }}
                  >
                    {proj.title}
                  </h3>

                  <div
                    style={{
                      background: "var(--navy-light)",
                      border: "1px solid rgba(100,255,218,0.05)",
                      borderRadius: "6px",
                      padding: "1.5rem",
                      marginBottom: "1.5rem",
                      boxShadow: "0 10px 30px -15px rgba(2,12,27,0.7)",
                    }}
                  >
                    <p
                      style={{
                        color: "var(--slate)",
                        lineHeight: 1.7,
                        fontSize: "clamp(13px,2vw,15px)",
                      }}
                    >
                      {proj.description}
                    </p>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "8px",
                      justifyContent: isEven ? "flex-end" : "flex-start",
                      marginBottom: "1.5rem",
                    }}
                  >
                    {proj.tech.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "12px",
                          color: "var(--slate)",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div
                    style={{
                      display: "flex",
                      gap: "1rem",
                      justifyContent: isEven ? "flex-end" : "flex-start",
                    }}
                  >
                    {proj.github && (
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "var(--slate-light)" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--green)")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--slate-light)")}
                      >
                        <GitFork size={20} />
                      </a>
                    )}
                    {proj.live && (
                      <a
                        href={proj.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "var(--slate-light)" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--green)")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--slate-light)")}
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>

      <style>{`
        @media (max-width: 680px) {
          .project-row { grid-template-columns: 1fr !important; }
          .project-row > div:first-child { order: 1 !important; }
          .project-row > div:last-child { order: 2 !important; text-align: left !important; }
          .project-row > div:last-child > div[style*="flex-end"],
          .project-row > div:last-child > div:last-child { justify-content: flex-start !important; }
        }
      `}</style>
    </section>
  );
}
