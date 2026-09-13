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
    <section id="skills" className="content-section">
      <div className="sticky-header">
        <h2>Skills</h2>
      </div>

      <FadeIn>
        <h2 className="content-section-label">
          <span>04.</span> Skills & Technologies
        </h2>
      </FadeIn>

      <div className="skills-grid">
        {skills.map((group, i) => {
          const Icon = iconMap[group.icon] || Code2;
          return (
            <FadeIn key={group.category} delay={i * 0.06}>
              <div className="skill-card">
                <div className="skill-card-header">
                  <Icon size={17} style={{ color: "var(--accent)" }} />
                  <span className="skill-card-title">{group.category}</span>
                </div>

                <div className="skill-tags">
                  {group.items.map((item) => (
                    <span key={item} className="tag">
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
