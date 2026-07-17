import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Brands from './components/Brands';
import Services from './components/Services';
import Projects from './components/Projects';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import About from './components/About';
import Corporate from './components/Corporate';
import Contact from './components/Contact';
import AuthModal from './components/AuthModal';
import LandscapeArchitecture from './components/LandscapeArchitecture';
import ServiceDetails from './components/ServiceDetails';
import BlogArticle from './components/BlogArticle';
import BlogArticle2 from './components/BlogArticle2';
import BlogArticle3 from './components/BlogArticle3';
import DynamicBlogArticle from './components/DynamicBlogArticle';
import AllBlogs from './components/AllBlogs';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [loggedInUser, setLoggedInUser] = useState(null);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="font-sans antialiased text-slate-800 selection:bg-[#65a30d] selection:text-white bg-white">
      {/* Fixed Header */}
      <Header 
        onOpenQuote={() => setIsQuoteOpen(true)} 
        onOpenAuth={() => setIsAuthOpen(true)}
        onNavigate={setCurrentPage} 
        currentPage={currentPage} 
        user={loggedInUser}
        onLogout={() => setLoggedInUser(null)}
      />

      {/* Main Content Sections */}
      <main>
        <AnimatePresence mode="wait">
          {currentPage === 'home' ? (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Hero />
              <Brands />
              <Projects onNavigate={setCurrentPage} />
              <WhyUs />
              <Testimonials />
              <Blog onNavigate={setCurrentPage} onOpenQuote={() => setIsQuoteOpen(true)} />
            </motion.div>
          ) : currentPage === 'corporate' ? (
            <motion.div
              key="corporate"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Corporate onNavigate={setCurrentPage} />
            </motion.div>
          ) : currentPage === 'landscape-architecture' ? (
            <motion.div
              key="landscape-architecture"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <LandscapeArchitecture onNavigate={setCurrentPage} />
            </motion.div>
          ) : currentPage === 'services' ? (
            <motion.div
              key="services"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Services onNavigate={setCurrentPage} />
            </motion.div>
          ) : currentPage.startsWith('service-') ? (
            <motion.div
              key="service-details"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ServiceDetails serviceId={currentPage.replace('service-', '')} onNavigate={setCurrentPage} />
            </motion.div>
          ) : currentPage === 'blog-article' ? (
            <motion.div
              key="blog-article"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <BlogArticle onNavigate={setCurrentPage} />
            </motion.div>
          ) : currentPage === 'blog-article-2' ? (
            <motion.div
              key="blog-article-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <BlogArticle2 onNavigate={setCurrentPage} />
            </motion.div>
          ) : currentPage === 'blog-article-3' ? (
            <motion.div
              key="blog-article-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <BlogArticle3 onNavigate={setCurrentPage} />
            </motion.div>
          ) : currentPage.startsWith('dynamic-blog-') ? (
            <motion.div
              key="dynamic-blog"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <DynamicBlogArticle 
                articleId={currentPage.replace('dynamic-blog-', '')} 
                onNavigate={setCurrentPage} 
              />
            </motion.div>
          ) : currentPage === 'all-blogs' ? (
            <motion.div
              key="all-blogs"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <AllBlogs onNavigate={setCurrentPage} />
            </motion.div>
          ) : currentPage === 'contact' ? (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Contact />
            </motion.div>
          ) : (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <About onNavigate={setCurrentPage} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer onNavigate={setCurrentPage} />
      
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
      <AuthModal 
        isOpen={isAuthOpen} 
        onClose={() => setIsAuthOpen(false)} 
        onLogin={(userData) => setLoggedInUser(userData)}
      />

      {/* Floating WhatsApp */}
      <div className="fixed bottom-8 right-8 z-[100] flex items-center justify-center">
        {/* Ping animation ring */}
        <div className="absolute w-full h-full bg-[#25d366] rounded-full animate-ping opacity-75"></div>
        {/* Main button */}
        <a href="https://wa.me/9108336666" target="_blank" rel="noopener noreferrer" className="relative w-[70px] h-[70px] bg-[#25d366] text-white border-[3px] border-white rounded-full flex items-center justify-center text-4xl shadow-2xl transition-transform hover:scale-110 hover:-translate-y-1">
          <i className='bx bxl-whatsapp'></i>
        </a>
      </div>
    </div>
  )
}

export default App
