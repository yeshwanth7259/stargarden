// src/App.example.jsx
// This shows how to wire the blog into your existing React app's router.
// Copy the <Route> lines into your real App.jsx / router config —
// don't just drop this whole file in if you already have routes for
// Home, About, Services, etc.

import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogList from "./pages/BlogList";
import BlogPost from "./pages/BlogPost";

// import your existing pages here too, e.g.:
// import Home from "./pages/Home";
// import AboutUs from "./pages/AboutUs";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* your existing routes stay as they are, e.g.: */}
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/about-us" element={<AboutUs />} /> */}

        {/* add these two for the blog */}
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  );
}

/*
  Install react-router-dom if you don't already have it:
    npm install react-router-dom

  If you're using Next.js instead of plain React + react-router,
  the file layout is different — see the "NEXT.JS NOTE" section
  in README.md.
*/
