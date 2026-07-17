// src/pages/BlogList.jsx
// The /blog index page — lists all articles as cards, grouped visually,
// linking to /blog/:slug for each one.

import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import blogPosts from "../data/blogPosts";

export default function BlogList() {
  return (
    <>
      <SEO
        title="Gardening & Landscaping Blog"
        description="Practical guides on indoor plants, vertical gardens, terrace gardens, landscaping, and plants on hire — from Star Gardens, Bangalore's landscaping experts since 1982."
        path="/blog"
      />

      <main style={styles.page}>
        <header style={styles.header}>
          <p style={styles.eyebrow}>Star Gardens Blog</p>
          <h1 style={styles.h1}>Ideas &amp; guides for greener spaces</h1>
          <p style={styles.subtitle}>
            Practical advice on indoor plants, vertical gardens, terrace &amp;
            balcony gardening, and landscaping — from a team that's been
            doing this since 1982.
          </p>
        </header>

        <div style={styles.grid}>
          {blogPosts.map((post) => (
            <Link key={post.id} to={`/blog/${post.slug}`} style={styles.card}>
              <span style={styles.category}>{post.category}</span>
              <h2 style={styles.cardTitle}>{post.title}</h2>
              <p style={styles.cardDesc}>{post.metaDescription}</p>
              <span style={styles.readMore}>
                Read article <span aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}

const styles = {
  page: {
    maxWidth: 1100,
    margin: "0 auto",
    padding: "48px 24px 80px",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    color: "#1f2a1f",
  },
  header: { maxWidth: 680, marginBottom: 48 },
  eyebrow: {
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    fontSize: 13,
    fontWeight: 600,
    color: "#3f7d3f",
    marginBottom: 8,
  },
  h1: { fontSize: "clamp(28px, 4vw, 42px)", lineHeight: 1.15, margin: "0 0 12px" },
  subtitle: { fontSize: 17, lineHeight: 1.6, color: "#4a554a" },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: 24,
  },
  card: {
    display: "flex",
    flexDirection: "column",
    padding: 24,
    borderRadius: 14,
    border: "1px solid #e2e8de",
    textDecoration: "none",
    color: "inherit",
    background: "#fbfbf8",
    transition: "box-shadow 0.15s ease, transform 0.15s ease",
  },
  category: {
    fontSize: 12,
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    color: "#3f7d3f",
    marginBottom: 10,
  },
  cardTitle: { fontSize: 19, lineHeight: 1.35, margin: "0 0 10px" },
  cardDesc: {
    fontSize: 14.5,
    lineHeight: 1.55,
    color: "#5a655a",
    marginBottom: 16,
    flexGrow: 1,
  },
  readMore: { fontSize: 14, fontWeight: 600, color: "#2e6b2e" },
};
