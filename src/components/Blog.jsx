import { Clock, ArrowUpRight, Tag } from "lucide-react";
import FadeIn from "./FadeIn";
import { blogs } from "../data/portfolio";

function BlogCard({ blog, delay = 0 }) {
  return (
    <FadeIn delay={delay}>
      <a
        href={blog.url}
        target="_blank"
        rel="noopener noreferrer"
        className="blog-card"
        style={{ display: "block", textDecoration: "none" }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem" }}>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {blog.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  color: "var(--green)",
                  background: "rgba(100,255,218,0.07)",
                  padding: "2px 8px",
                  borderRadius: "4px",
                  border: "1px solid rgba(100,255,218,0.12)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
          <ArrowUpRight size={16} style={{ color: "var(--slate-dark)", flexShrink: 0 }} />
        </div>

        <h3
          style={{
            color: "var(--white)",
            fontWeight: 600,
            fontSize: "clamp(14px,2vw,17px)",
            lineHeight: 1.4,
            marginBottom: "0.75rem",
            transition: "color 0.2s",
          }}
          className="blog-title"
        >
          {blog.title}
        </h3>

        <p
          style={{
            color: "var(--slate)",
            fontSize: "clamp(13px,2vw,14px)",
            lineHeight: 1.65,
            marginBottom: "1rem",
          }}
        >
          {blog.description}
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            fontFamily: "var(--font-mono)",
            fontSize: "12px",
            color: "var(--slate-dark)",
          }}
        >
          <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <Clock size={12} />
            {blog.readTime}
          </span>
          <span>{blog.date}</span>
        </div>

        <style>{`.blog-card:hover .blog-title { color: var(--green); }`}</style>
      </a>
    </FadeIn>
  );
}

export default function Blog() {
  return (
    <section id="blog" style={{ paddingBottom: "6rem" }}>
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
          <span style={{ fontFamily: "var(--font-mono)", color: "var(--green)", marginRight: "10px", fontSize: "0.85em", fontWeight: 400 }}>05.</span>
          Writing & Thoughts
          <span style={{ flex: 1, height: "1px", background: "var(--slate-dark)", marginLeft: "20px", maxWidth: "200px" }} />
        </h2>
        <p style={{ color: "var(--slate)", fontSize: "14px", fontFamily: "var(--font-mono)", marginBottom: "40px" }}>
          Technical articles, learnings, and explorations — coming soon to Medium
        </p>
      </FadeIn>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.25rem",
        }}
      >
        {blogs.map((blog, i) => (
          <BlogCard key={i} blog={blog} delay={i * 0.07} />
        ))}
      </div>

      <FadeIn delay={0.4}>
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <a
            href="#"
            className="btn-green"
            target="_blank"
            rel="noopener noreferrer"
          >
            View All Articles ↗
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
