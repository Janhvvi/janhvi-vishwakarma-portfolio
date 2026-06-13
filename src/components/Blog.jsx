import { ArrowUpRight } from "lucide-react";
import FadeIn from "./FadeIn";
import { blogs } from "../data/portfolio";

export default function Blog() {
  return (
    <section id="blog" style={{ paddingBottom: "6rem" }}>
      <div className="sticky-header">
        <h2>Writing</h2>
      </div>

      <div className="card-list">
        {blogs.map((blog, i) => (
          <FadeIn key={i} delay={i * 0.07}>
            <a
              href={blog.url || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="card-item"
              style={{ display: "grid", textDecoration: "none" }}
            >
              {/* Left Column: Date / Metadata */}
              <header
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  fontWeight: 600,
                  color: "var(--slate-dark)",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  paddingTop: "4px",
                }}
              >
                <div>{blog.date}</div>
                <div style={{ fontSize: "10px", marginTop: "4px", opacity: 0.8 }}>{blog.readTime}</div>
              </header>

              {/* Right Column: Title & Body */}
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
                  <span>{blog.title}</span>
                  <ArrowUpRight size={14} className="arrow-icon" style={{ marginLeft: "4px", flexShrink: 0 }} />
                </h3>

                <p
                  style={{
                    fontSize: "13.5px",
                    color: "var(--slate)",
                    lineHeight: 1.5,
                    margin: "0 0 0.75rem 0",
                  }}
                >
                  {blog.description}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {blog.tags.map((tag) => (
                    <span key={tag} className="skill-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
