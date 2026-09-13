import { ArrowUpRight } from "lucide-react";
import FadeIn from "./FadeIn";
import { blogs } from "../data/portfolio";

export default function Blog() {
  return (
    <section id="blog" className="content-section">
      <div className="sticky-header">
        <h2>Writing</h2>
      </div>

      <FadeIn>
        <h2 className="content-section-label">
          <span>05.</span> Writing & Insights
        </h2>
      </FadeIn>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {blogs.map((blog, i) => (
          <FadeIn key={i} delay={i * 0.07}>
            <a
              href={blog.url || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card"
            >
              <div className="project-card-header">
                <div className="project-name">
                  <span>{blog.title}</span>
                  <ArrowUpRight size={14} style={{ opacity: 0.8 }} />
                </div>
                <span className="project-status">{blog.date}</span>
              </div>

              <p className="project-desc">{blog.description}</p>

              <div className="project-tags">
                <span className="tag" style={{ opacity: 0.8 }}>
                  {blog.readTime}
                </span>
                {blog.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
