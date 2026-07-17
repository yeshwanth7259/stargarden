import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { newBlogsData } from '../data/blogsData';

const AllBlogs = ({ onNavigate }) => {
  const allBlogsData = newBlogsData.map((blog) => ({
    id: blog.id,
    img: blog.img,
    tag: blog.tag,
    date: blog.date,
    title: blog.title,
    excerpt: blog.excerpt,
    isFullArticle: true,
    targetRoute: `dynamic-blog-${blog.id}`
  }));

  // Pagination logic (optional, but good for 20 items)
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(allBlogsData.length / itemsPerPage);

  const paginatedBlogs = allBlogsData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="bg-[#f8fcf8] min-h-screen pb-20 font-sans">
      
      {/* Animated Banner Header */}
      <div className="relative w-full h-[50vh] min-h-[400px] max-h-[500px] mb-16 overflow-hidden pt-24">
        {/* Background Image */}
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img src="/assets/project-residential.png" alt="Blog Banner" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
        </motion.div>

        {/* Text Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-[#a3e635] font-bold text-[0.75rem] tracking-[0.25em] uppercase mb-4 block"
          >
            STAR GARDENS INSIGHTS
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif text-white font-bold mb-6 drop-shadow-lg"
          >
            Our Blog
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md font-light"
          >
            Discover expert tips, landscaping ideas, and inspiring stories to help you cultivate beautiful, sustainable spaces.
          </motion.p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10">

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedBlogs.map((blog, idx) => (
            <motion.div 
              key={blog.id} 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white rounded-[1.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col group"
            >
              <div className="h-[260px] relative overflow-hidden">
                <img 
                  src={blog.img} 
                  alt={blog.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-center shadow-md border border-white/20">
                  <span className="block text-[0.65rem] font-bold text-[#1b8b22] uppercase tracking-wider">{blog.tag}</span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                {/* Removed date */}
                <h3 className="text-xl font-bold text-slate-800 mb-4 leading-snug group-hover:text-[#1b8b22] transition-colors line-clamp-2">{blog.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow line-clamp-3">{blog.excerpt}</p>
                
                <button 
                  onClick={() => {
                    if (blog.isFullArticle && blog.targetRoute) {
                      onNavigate(blog.targetRoute);
                    } else {
                      // Optional: Alert or placeholder logic for the 17 new articles
                      alert("Full article coming soon!");
                    }
                  }} 
                  className="inline-flex items-center justify-between w-full font-bold text-[#1b8b22] text-[0.85rem] mt-auto uppercase tracking-wide border-t border-gray-100 pt-5 hover:text-[#0a5c13] transition-colors"
                >
                  Read Article <i className='bx bx-right-arrow-alt text-xl transition-transform group-hover:translate-x-2'></i>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-16">
            <button 
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-200 text-slate-500 hover:bg-[#65a30d] hover:text-white hover:border-[#65a30d] disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-slate-500 disabled:hover:border-gray-200 transition-colors"
            >
              <i className='bx bx-chevron-left text-xl'></i>
            </button>
            
            {[...Array(totalPages)].map((_, i) => (
              <button 
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${currentPage === i + 1 ? 'bg-[#65a30d] text-white border-[#65a30d]' : 'border border-gray-200 text-slate-600 hover:border-[#65a30d] hover:text-[#65a30d]'}`}
              >
                {i + 1}
              </button>
            ))}

            <button 
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-200 text-slate-500 hover:bg-[#65a30d] hover:text-white hover:border-[#65a30d] disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-slate-500 disabled:hover:border-gray-200 transition-colors"
            >
              <i className='bx bx-chevron-right text-xl'></i>
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default AllBlogs;
