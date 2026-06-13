import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Flame, CheckCircle, Award } from "lucide-react";
import FadeIn from "./FadeIn";
import { leetcode } from "../data/portfolio";

export default function LeetCode() {
  return (
    <section id="leetcode" style={{ paddingBottom: "6rem" }}>
      <div className="sticky-header">
        <h2>LeetCode</h2>
      </div>

      <div className="card-list">
        <FadeIn>
          <a
            href={leetcode.profile}
            target="_blank"
            rel="noopener noreferrer"
            className="card-item"
            style={{ display: "grid", textDecoration: "none" }}
          >
            {/* Left: Blended tech badge */}
            <div className="project-badge-column">
              <div
                className="project-badge-container"
                style={{
                  width: "120px",
                  height: "72px",
                  borderRadius: "6px",
                  background: "rgba(30, 41, 59, 0.4)",
                  border: "1px solid rgba(148, 163, 184, 0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.2s ease-in-out",
                }}
              >
                <Code2 size={24} className="badge-icon" style={{ color: "var(--slate-dark)", transition: "color 0.2s ease-in-out" }} />
              </div>
            </div>

            {/* Right: Practice Stats & Details */}
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
                <span>LeetCode Coding Journey</span>
                <ArrowUpRight size={14} className="arrow-icon" style={{ marginLeft: "4px", flexShrink: 0 }} />
              </h3>

              <p
                style={{
                  fontSize: "13.5px",
                  color: "var(--slate)",
                  lineHeight: 1.5,
                  margin: "0 0 1.25rem 0",
                }}
              >
                {leetcode.message}
              </p>

              {/* Stats grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
                  gap: "10px",
                  marginBottom: "1.25rem",
                }}
              >
                {leetcode.stats.map((stat, i) => {
                  return (
                    <div
                      key={stat.label}
                      style={{
                        background: "rgba(15, 23, 42, 0.3)",
                        border: "1px solid rgba(148, 163, 184, 0.04)",
                        borderRadius: "6px",
                        padding: "0.75rem 0.5rem",
                        textAlign: "center",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "16px",
                          fontWeight: 700,
                          color: stat.color,
                          fontFamily: "var(--font-mono)",
                        }}
                      >
                        {stat.value}
                      </div>
                      <div
                        style={{
                          fontSize: "10px",
                          color: "var(--slate)",
                          marginTop: "2px",
                        }}
                      >
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Progress bars */}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {[
                  { label: "SQL & Database Problems", pct: 72, color: "#cbd5e1" },
                  { label: "Data Structures & Algorithms", pct: 58, color: "var(--green)" },
                  { label: "String & Array Problems", pct: 65, color: "#94a3b8" },
                ].map((bar) => (
                  <div key={bar.label}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "4px",
                        fontFamily: "var(--font-mono)",
                        fontSize: "11px",
                        color: "var(--slate)",
                      }}
                    >
                      <span>{bar.label}</span>
                      <span style={{ color: bar.color }}>{bar.pct}%</span>
                    </div>
                    <div
                      style={{
                        height: "3px",
                        background: "rgba(255, 255, 255, 0.05)",
                        borderRadius: "2px",
                        overflow: "hidden",
                      }}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${bar.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        style={{
                          height: "100%",
                          background: bar.color,
                          borderRadius: "2px",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </a>
        </FadeIn>
      </div>

      <style>{`
        .project-badge-column {
          display: none;
        }
        @media (min-width: 768px) {
          .project-badge-column {
            display: block;
          }
        }
        .card-item:hover .project-badge-container {
          border-color: rgba(94, 234, 212, 0.2) !important;
          background-color: rgba(30, 41, 59, 0.6) !important;
        }
        .card-item:hover .badge-icon {
          color: var(--green) !important;
        }
      `}</style>
    </section>
  );
}
