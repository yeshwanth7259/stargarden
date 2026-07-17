// src/components/SEO.jsx
// Sets document title, meta description, canonical URL, Open Graph tags,
// and JSON-LD structured data for each page. No extra library required —
// works with plain React using useEffect.

import { useEffect } from "react";

const SITE_URL = "https://www.stargardens.in";
const SITE_NAME = "Star Gardens";
const DEFAULT_IMAGE =
  "https://static.wixstatic.com/media/51e03e_dd79b4b74ccd4a9f8f332165686c8cb8~mv2.jpg";

function setMetaTag(attr, key, content) {
  if (!content) return;
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLinkTag(rel, href) {
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function setJsonLd(id, data) {
  let el = document.getElementById(id);
  if (!el) {
    el = document.createElement("script");
    el.type = "application/ld+json";
    el.id = id;
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

/**
 * SEO — drop this at the top of any page component.
 *
 * <SEO
 *   title="Page Title"
 *   description="Meta description under 160 characters"
 *   path="/blog/some-slug"
 *   image="https://..."          (optional)
 *   article={{                    (optional — adds Article structured data)
 *     headline, description, datePublished, dateModified, author
 *   }}
 * />
 */
export default function SEO({ title, description, path = "/", image, article }) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
    const url = `${SITE_URL}${path}`;
    const img = image || DEFAULT_IMAGE;

    document.title = fullTitle;

    setMetaTag("name", "description", description);
    setLinkTag("canonical", url);

    // Open Graph
    setMetaTag("property", "og:title", fullTitle);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:url", url);
    setMetaTag("property", "og:image", img);
    setMetaTag("property", "og:type", article ? "article" : "website");
    setMetaTag("property", "og:site_name", SITE_NAME);

    // Twitter
    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", fullTitle);
    setMetaTag("name", "twitter:description", description);
    setMetaTag("name", "twitter:image", img);

    // Structured data
    if (article) {
      setJsonLd("ld-article", {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: article.headline,
        description: article.description,
        image: img,
        datePublished: article.datePublished,
        dateModified: article.dateModified || article.datePublished,
        author: {
          "@type": "Organization",
          name: SITE_NAME,
          url: SITE_URL,
        },
        publisher: {
          "@type": "Organization",
          name: SITE_NAME,
          logo: {
            "@type": "ImageObject",
            url: DEFAULT_IMAGE,
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": url,
        },
      });
    } else {
      const existing = document.getElementById("ld-article");
      if (existing) existing.remove();
    }
  }, [title, description, path, image, article]);

  return null; // this component renders nothing visible
}
