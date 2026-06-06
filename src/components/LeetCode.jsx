import { motion } from "framer-motion";
import { ExternalLink, Code2, TrendingUp, Flame, CheckCircle } from "lucide-react";
import FadeIn from "./FadeIn";
import { leetcode } from "../data/portfolio";

const statIcons = [CheckCircle, Code2, Flame, TrendingUp];

export default function LeetCode() {
  return (
    <section id="leetcode" style={{ paddingBottom: "6rem" }}>
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
          <span style={{ fontFamily: "var(--font-mono)", color: "var(--green)", marginRight: "10px", fontSize: "0.85em", fontWeight: 400 }}>07.</span>
          Coding Journey
          <span style={{ flex: 1, height: "1px", background: "var(--slate-dark)", marginLeft: "20px", maxWidth: "200px" }} />
        </h2>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div
          style={{
            background: "var(--navy-light)",
            border: "1px solid rgba(100,255,218,0.08)",
            borderRadius: "8px",
            padding: "2.5rem",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              flexWrap: "wrap",
              gap: "1.5rem",
              marginBottom: "2rem",
            }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "0.5rem" }}>
                <Code2 size={22} style={{ color: "var(--green)" }} />
                <h3 style={{ color: "var(--white)", fontWeight: 600, fontSize: "1.2rem" }}>
                  LeetCode Practice
                </h3>
              </div>
              <p style={{ color: "var(--slate)", fontSize: "14px", lineHeight: 1.7, maxWidth: "480px" }}>
                {leetcode.message}
              </p>
            </div>
            <a
              href={leetcode.profile}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-green"
              style={{ flexShrink: 0 }}
            >
              View Profile ↗
            </a>
          </div>

          {/* Stats grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
              gap: "1rem",
            }}
          >
            {leetcode.stats.map((stat, i) => {
              const Icon = statIcons[i];
              return (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.03 }}
                  style={{
                    background: "rgba(10,25,47,0.5)",
                    border: "1px solid rgba(100,255,218,0.06)",
                    borderRadius: "6px",
                    padding: "1.25rem",
                    textAlign: "center",
                  }}
                >
                  <Icon size={20} style={{ color: stat.color, marginBottom: "0.5rem" }} />
                  <div
                    style={{
                      fontSize: "clamp(20px,3vw,28px)",
                      fontWeight: 700,
                      color: stat.color,
                      marginBottom: "0.25rem",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "var(--slate)",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Progress bars */}
          <div style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              { label: "SQL & Database Problems", pct: 72, color: "#81b4fe" },
              { label: "Data Structures & Algorithms", pct: 58, color: "#64ffda" },
              { label: "String & Array Problems", pct: 65, color: "#ffd700" },
            ].map((bar) => (
              <div key={bar.label}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "6px",
                    fontFamily: "var(--font-mono)",
                    fontSize: "12px",
                    color: "var(--slate)",
                  }}
                >
                  <span>{bar.label}</span>
                  <span style={{ color: bar.color }}>{bar.pct}%</span>
                </div>
                <div
                  style={{
                    height: "4px",
                    background: "rgba(255,255,255,0.05)",
                    borderRadius: "2px",
                    overflow: "hidden",
                  }}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${bar.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
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
      </FadeIn>
    </section>
  );
}
