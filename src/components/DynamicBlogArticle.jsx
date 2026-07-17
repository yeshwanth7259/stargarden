import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { newBlogsData } from '../data/blogsData';

const DynamicBlogArticle = ({ articleId, onNavigate }) => {
  const blog = newBlogsData.find((b) => b.id === articleId);

  // Scroll to top and set document title on load
  useEffect(() => {
    window.scrollTo(0, 0);
    if (blog) {
      document.title = blog.metaTitle;
    }
  }, [blog]);

  if (!blog) {
    return (
      <div className="bg-[#f8fcf8] min-h-screen pt-48 pb-20 flex flex-col items-center justify-center font-sans text-slate-800">
        <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
        <button 
          onClick={() => onNavigate('home')}
          className="bg-[#65a30d] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#4d7c0f] transition-colors"
        >
          Go Back Home
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#f8fcf8] min-h-screen pt-48 pb-20 font-sans text-slate-800">
      <div className="max-w-[800px] mx-auto px-6">
        
        {/* Back Button */}
        <button 
          onClick={() => onNavigate('all-blogs')}
          className="inline-flex items-center gap-2 text-[#65a30d] font-bold text-sm hover:text-[#4d7c0f] transition-colors mb-8 cursor-pointer"
        >
          <i className='bx bx-left-arrow-alt text-xl'></i> Back to Blogs
        </button>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="w-full h-[400px] rounded-3xl overflow-hidden shadow-xl mb-10"
        >
          <img src={blog.img} alt={blog.title} className="w-full h-full object-cover" />
        </motion.div>

        {/* Article Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
          <div className="flex gap-4 items-center mb-6">
            <span className="bg-[#f4fbf4] text-[#1b8b22] px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase border border-[#1b8b22]/20">{blog.tag}</span>
            {/* Removed date */}
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 leading-[1.2] mb-8">
            {blog.title}
          </h1>
        </motion.div>

        {/* Article Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
          className="prose prose-lg prose-slate max-w-none prose-headings:font-serif prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:leading-relaxed prose-a:text-[#65a30d] prose-img:rounded-3xl prose-img:shadow-2xl prose-li:text-slate-600"
        >
          <div dangerouslySetInnerHTML={{ __html: blog.content }} />

          <hr className="my-12 border-gray-200" />
          
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100 mb-12">
            <h3 className="text-2xl font-bold font-serif mb-4 text-slate-900">Need Professional Landscaping?</h3>
            <p className="mb-6 text-slate-600 text-lg">Our experts are ready to transform your space into a stunning green paradise.</p>
            <a 
              href="https://wa.me/9108336666" target="_blank" rel="noopener noreferrer"
              className="inline-block bg-[#65a30d] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#4d7c0f] transition-colors"
            >
              Contact Us Today
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DynamicBlogArticle;
