import React from 'react';
import { motion } from 'framer-motion';

const Blog = ({ onNavigate, onOpenQuote }) => {
  const blogs = [
    { img: '/assets/blog-1.jpg', month: 'APR', day: '28', title: 'Top 10 Indoor Plants for Office Spaces & Their Benefits' },
    { img: '/assets/blog-2.jpg', month: 'MAY', day: '05', title: 'Vertical Gardens: The Future of Sustainable Spaces' },
    { img: '/assets/blog-3.jpg', month: 'MAY', day: '12', title: 'Terrace Garden Ideas for Small Urban Spaces' }
  ];

  return (
    <>
      <section className="py-20 bg-white" id="blog">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div>
              <span className="text-[#1b8b22] font-bold text-[0.65rem] tracking-widest uppercase mb-3 block">FROM OUR BLOG</span>
              <h2 className="text-4xl md:text-5xl font-serif text-slate-800 font-medium">Tips, Ideas & Inspiration</h2>
            </div>
            <div>
              <button onClick={() => onNavigate('all-blogs')} className="uppercase text-[#1b8b22] font-bold text-[0.7rem] tracking-widest inline-flex items-center gap-1 group transition-all hover:text-[#0b4d11] cursor-pointer">
                VIEW ALL BLOGS <i className='bx bx-right-arrow-alt text-lg transition-transform group-hover:translate-x-1'></i>
              </button>
            </div>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {blogs.map((blog, idx) => (
              <motion.div 
                key={idx} 
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                className="bg-white rounded-[1.5rem] overflow-hidden border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg shadow-sm flex flex-col"
              >
                <div className="h-[240px] relative shrink-0">
                  <img src={blog.img} alt={blog.title} className="w-full h-full object-cover" />
                  {/* Removed date box */}
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-slate-800 mb-6 leading-snug flex-grow">{blog.title}</h3>
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      if(blog.title.includes('Top 10 Indoor Plants')) {
                        onNavigate('dynamic-blog-1');
                      } else if(blog.title.includes('Vertical Gardens')) {
                        onNavigate('dynamic-blog-2');
                      } else if(blog.title.includes('Terrace Garden Ideas')) {
                        onNavigate('dynamic-blog-3');
                      }
                    }}
                    className="inline-flex items-center gap-1 font-bold text-[#1b8b22] text-[0.8rem] group mt-auto cursor-pointer hover:text-[#0b4d11] transition-colors text-left"
                  >
                    Read More <i className='bx bx-right-arrow-alt text-lg transition-transform group-hover:translate-x-1'></i>
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="flex justify-center mt-12">
            <button
              onClick={() => onNavigate('all-blogs')}
              className="bg-transparent border-2 border-[#1b8b22] text-[#1b8b22] hover:bg-[#1b8b22] hover:text-white transition-colors font-bold uppercase tracking-wider py-4 px-10 rounded-full inline-flex items-center gap-2 group cursor-pointer"
            >
              Explore All Blogs <i className='bx bx-right-arrow-alt text-xl transition-transform group-hover:translate-x-1'></i>
            </button>
          </div>
        </div>
      </section>

      {/* Full Width Call to Action */}
      <section className="relative w-full py-10 lg:py-12 bg-cover bg-center mt-20" style={{ backgroundImage: "url('/assets/cta-bg.jpg')" }}>
        {/* Dark overlay to make text pop */}
        <div className="absolute inset-0 bg-black/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#062411]/90 via-black/50 to-[#062411]/90"></div>
        
        <div className="max-w-[1500px] mx-auto px-6 lg:px-10 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            
            <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
              <div className="w-[4.5rem] h-[4.5rem] rounded-full border border-[#65a30d] flex items-center justify-center text-4xl text-[#65a30d] shrink-0 bg-black/40 shadow-lg">
                <i className='bx bx-calendar-event'></i>
              </div>
              <div>
                <h2 className="text-white text-4xl md:text-5xl font-serif font-medium mb-2 tracking-wide">Ready to Transform Your Space?</h2>
                <p className="text-gray-300 text-[0.95rem] m-0 font-medium">Book a free consultation with our landscape experts today.</p>
              </div>
            </div>
            
            <button 
              onClick={(e) => {
                e.preventDefault();
                if(onOpenQuote) onOpenQuote();
              }}
              className="bg-[#65a30d] hover:bg-[#4d8208] transition-colors text-white uppercase text-[0.8rem] font-bold tracking-wider py-4 px-8 rounded-lg inline-flex items-center gap-2 group shrink-0 shadow-lg cursor-pointer"
            >
              BOOK SITE VISIT <i className='bx bx-right-arrow-alt text-xl transition-transform group-hover:translate-x-1'></i>
            </button>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
