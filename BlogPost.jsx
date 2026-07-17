// src/pages/BlogPost.jsx
// The /blog/:slug page — renders a single article with full SEO tags,
// an internal "related articles" block (good for SEO + time-on-site),
// and a CTA back to the contact page.

import { useParams, Link, Navigate } from "react-router-dom";
import SEO from "../components/SEO";
import blogPosts from "../data/blogPosts";

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    // Unknown slug — send to blog index instead of a dead page
    return <Navigate to="/blog" replace />;
  }

  const related = blogPosts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  const fallbackRelated =
    related.length > 0
      ? related
      : blogPosts.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <>
      <SEO
        title={post.title}
        description={post.metaDescription}
        path={`/blog/${post.slug}`}
        article={{
          headline: post.title,
          description: post.metaDescription,
          datePublished: "2026-07-17",
        }}
      />

      <main style={styles.page}>
        <nav style={styles.breadcrumb}>
          <Link to="/blog" style={styles.breadcrumbLink}>
            Blog
          </Link>{" "}
          / <span>{post.category}</span>
        </nav>

        <span style={styles.category}>{post.category}</span>
        <h1 style={styles.h1}>{post.title}</h1>
        <p style={styles.meta}>{post.readTime}</p>

        <article
          style={styles.article}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div style={styles.cta}>
          <h3 style={styles.ctaTitle}>Want this done for you?</h3>
          <p style={styles.ctaText}>
            Star Gardens designs, installs, and maintains gardens and
            landscapes across Bangalore, Karnataka &amp; Andhra Pradesh.
          </p>
          <a href="/contactus" style={styles.ctaButton}>
            Get a Free Consultation
          </a>
        </div>

        {fallbackRelated.length > 0 && (
          <section style={styles.related}>
            <h3 style={styles.relatedTitle}>Related articles</h3>
            <div style={styles.relatedGrid}>
              {fallbackRelated.map((p) => (
                <Link key={p.id} to={`/blog/${p.slug}`} style={styles.relatedCard}>
                  {p.title}
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
    </>
  );
}

const styles = {
  page: {
    maxWidth: 760,
    margin: "0 auto",
    padding: "40px 24px 80px",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    color: "#1f2a1f",
  },
  breadcrumb: { fontSize: 14, color: "#7a857a", marginBottom: 20 },
  breadcrumbLink: { color: "#3f7d3f", textDecoration: "none" },
  category: {
    fontSize: 12,
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    color: "#3f7d3f",
  },
  h1: { fontSize: "clamp(26px, 4vw, 38px)", lineHeight: 1.2, margin: "10px 0 6px" },
  meta: { fontSize: 14, color: "#7a857a", marginBottom: 32 },
  article: { fontSize: 17, lineHeight: 1.75 },
  cta: {
    marginTop: 48,
    padding: 28,
    borderRadius: 16,
    background: "#eef4ea",
    textAlign: "center",
  },
  ctaTitle: { margin: "0 0 8px", fontSize: 20 },
  ctaText: { margin: "0 0 18px", color: "#4a554a", fontSize: 15 },
  ctaButton: {
    display: "inline-block",
    padding: "12px 24px",
    borderRadius: 8,
    background: "#2e6b2e",
    color: "#fff",
    fontWeight: 600,
    fontSize: 15,
    textDecoration: "none",
  },
  related: { marginTop: 56 },
  relatedTitle: { fontSize: 18, marginBottom: 16 },
  relatedGrid: { display: "flex", flexDirection: "column", gap: 12 },
  relatedCard: {
    padding: "14px 18px",
    borderRadius: 10,
    border: "1px solid #e2e8de",
    color: "#1f2a1f",
    textDecoration: "none",
    fontSize: 15,
    fontWeight: 500,
  },
};
