import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Award, CheckCircle2 } from "lucide-react";
import FadeIn from "./FadeIn";
import { leetcode } from "../data/portfolio";

export default function LeetCode() {
  const easyPct = Math.round((leetcode.easy / leetcode.totalSolved) * 100);
  const mediumPct = Math.round((leetcode.medium / leetcode.totalSolved) * 100);
  const hardPct = Math.round((leetcode.hard / leetcode.totalSolved) * 100);

  return (
    <section id="leetcode" className="content-section">
      <div className="sticky-header">
        <h2>LeetCode</h2>
      </div>

      <FadeIn>
        <h2 className="content-section-label">
          <span>07.</span> LeetCode & Problem Solving
        </h2>
      </FadeIn>

      <FadeIn>
        <div className="glass-card">
          <div className="project-card-header">
            <div className="project-name">
              <Code2 size={18} style={{ color: "var(--accent)" }} />
              <span>Algorithmic Practice & Problem Solving</span>
            </div>
            <a
              href={leetcode.profile}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-btn"
              style={{ padding: "4px 12px", fontSize: "11px" }}
            >
              <span>View Profile</span>
              <ArrowUpRight size={12} />
            </a>
          </div>

          <p className="project-desc">{leetcode.message}</p>

          {/* Ranking & Highlight Pill */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px", flexWrap: "wrap" }}>
            <span className="tag" style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
              <Award size={13} />
              <span>Global Ranking: #{leetcode.ranking}</span>
            </span>
            <span className="tag" style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
              <CheckCircle2 size={13} />
              <span>600+ Submissions</span>
            </span>
          </div>

          {/* Stats 4-Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(110px, 1fr))",
              gap: "10px",
              marginBottom: "20px",
            }}
          >
            {leetcode.stats.map((stat) => (
              <div
                key={stat.label}
                style={{
                  background: "var(--bg)",
                  border: "1px solid var(--border)",
                  borderRadius: "10px",
                  padding: "12px 8px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "22px",
                    fontWeight: 700,
                    color: stat.color,
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: "11px",
                    color: "var(--text-muted)",
                    marginTop: "3px",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Practice Focus Breakdown Bars */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              { label: "Easy Problems Solved", count: `${leetcode.easy} Solved`, pct: easyPct, color: "#22c55e" },
              { label: "Medium Problems Solved", count: `${leetcode.medium} Solved`, pct: mediumPct, color: "#f59e0b" },
              { label: "Hard Problems Solved", count: `${leetcode.hard} Solved`, pct: hardPct, color: "#ef4444" },
            ].map((bar) => (
              <div key={bar.label}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "5px",
                    fontFamily: "var(--font-mono)",
                    fontSize: "11.5px",
                    color: "var(--text-secondary)",
                  }}
                >
                  <span>{bar.label}</span>
                  <span style={{ color: bar.color }}>{bar.count}</span>
                </div>
                <div
                  style={{
                    height: "5px",
                    background: "var(--border)",
                    borderRadius: "9999px",
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
                      borderRadius: "9999px",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
