import { Code2, Server, Database, Cloud, Workflow, Sparkles } from "lucide-react";
import FadeIn from "./FadeIn";
import { skills } from "../data/portfolio";

const iconMap = {
  code: Code2,
  server: Server,
  database: Database,
  cloud: Cloud,
  workflow: Workflow,
  sparkles: Sparkles,
};

export default function Skills() {
  return (
    <section id="skills" style={{ paddingBottom: "6rem" }}>
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
          <span style={{ fontFamily: "var(--font-mono)", color: "var(--green)", marginRight: "10px", fontSize: "0.85em", fontWeight: 400 }}>04.</span>
          Skills & Technologies
          <span style={{ flex: 1, height: "1px", background: "var(--slate-dark)", marginLeft: "20px", maxWidth: "200px" }} />
        </h2>
      </FadeIn>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "1.25rem",
        }}
      >
        {skills.map((group, i) => {
          const Icon = iconMap[group.icon] || Code2;
          return (
            <FadeIn key={group.category} delay={i * 0.08}>
              <div
                style={{
                  background: "var(--navy-light)",
                  border: "1px solid rgba(100,255,218,0.06)",
                  borderRadius: "8px",
                  padding: "1.5rem",
                  transition: "border-color 0.2s, transform 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(100,255,218,0.2)";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(100,255,218,0.06)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "1.25rem",
                  }}
                >
                  <Icon size={18} style={{ color: "var(--green)" }} />
                  <span
                    style={{
                      color: "var(--white)",
                      fontWeight: 600,
                      fontSize: "15px",
                    }}
                  >
                    {group.category}
                  </span>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {group.items.map((item) => (
                    <span key={item} className="skill-pill">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
