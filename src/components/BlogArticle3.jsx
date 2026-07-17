import React from 'react';
import { motion } from 'framer-motion';

const BlogArticle3 = ({ onNavigate }) => {
  return (
    <div className="bg-[#f8fcf8] min-h-screen pt-48 pb-20 font-sans text-slate-800">
      <div className="max-w-[800px] mx-auto px-6">
        
        {/* Back Button */}
        <button 
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-2 text-[#65a30d] font-bold text-sm hover:text-[#4d7c0f] transition-colors mb-8 cursor-pointer"
        >
          <i className='bx bx-left-arrow-alt text-xl'></i> Back to Home
        </button>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="w-full h-[400px] rounded-3xl overflow-hidden shadow-xl mb-10"
        >
          <img src="/assets/blog-3.jpg" alt="Terrace Garden Ideas" className="w-full h-full object-cover" />
        </motion.div>

        {/* Article Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
          <div className="flex gap-4 items-center mb-6">
            <span className="bg-[#f4fbf4] text-[#1b8b22] px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase border border-[#1b8b22]/20">Urban Gardening</span>
            <span className="text-slate-500 text-sm font-medium">May 12, 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 leading-[1.2] mb-8">
            Terrace Garden Ideas for Small Urban Spaces
          </h1>
        </motion.div>

        {/* Article Content */}
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-lg prose-slate max-w-none prose-headings:font-serif prose-headings:text-slate-800"
        >
          <p className="text-[1.1rem] text-slate-600 leading-relaxed mb-6">
            Living in the city often means trading sprawling backyards for compact balconies and terraces. But limited space doesn't mean you have to give up on the joy of gardening. With a bit of creativity and smart planning, even the smallest terrace can be transformed into a lush, functional green retreat. Here are some inspiring terrace garden ideas designed specifically for small urban spaces.
          </p>

          <div className="space-y-10 mt-12">
            <div>
              <h3 className="text-2xl font-bold mb-3 text-[#1b4324] flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#65a30d] text-white text-sm shrink-0">1</span> 
                Go Vertical
              </h3>
              <p className="text-slate-600 leading-relaxed ml-11">
                When floor space is limited, the walls become your best friend. Install wall-mounted planters, trellises, or hanging pots to grow climbers, herbs, and trailing plants. Vertical gardening not only saves space but also adds visual height and drama to a small terrace. Ivy, money plants, and jasmine work beautifully on vertical structures.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3 text-[#1b4324] flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#65a30d] text-white text-sm shrink-0">2</span> 
                Use Tiered Plant Stands
              </h3>
              <p className="text-slate-600 leading-relaxed ml-11">
                Tiered or ladder-style plant stands allow you to display multiple plants in a small footprint. They're perfect for grouping succulents, herbs, or flowering plants while creating an eye-catching, layered look. This setup also makes watering and maintenance easier since everything is within reach.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3 text-[#1b4324] flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#65a30d] text-white text-sm shrink-0">3</span> 
                Choose Multi-Purpose Furniture
              </h3>
              <p className="text-slate-600 leading-relaxed ml-11">
                Opt for furniture that doubles as storage or planting space. Bench seating with built-in planter boxes, foldable tables, and stackable stools help you make the most of a compact terrace without sacrificing comfort or greenery.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3 text-[#1b4324] flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#65a30d] text-white text-sm shrink-0">4</span> 
                Create a Herb Garden
              </h3>
              <p className="text-slate-600 leading-relaxed ml-11">
                A small terrace is the perfect spot for a kitchen herb garden. Basil, mint, coriander, and rosemary grow well in containers and don't need much space. Not only do they add greenery, but they also provide fresh ingredients for cooking right at your doorstep.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3 text-[#1b4324] flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#65a30d] text-white text-sm shrink-0">5</span> 
                Incorporate Hanging Baskets
              </h3>
              <p className="text-slate-600 leading-relaxed ml-11">
                Hanging baskets are ideal for terraces with limited floor space. Suspend them from railings, pergolas, or ceiling hooks to add layers of greenery without cluttering the ground. Petunias, ferns, and trailing succulents work particularly well in hanging displays.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3 text-[#1b4324] flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#65a30d] text-white text-sm shrink-0">6</span> 
                Use Lightweight Containers
              </h3>
              <p className="text-slate-600 leading-relaxed ml-11">
                Since terraces often have weight restrictions, choose lightweight planters made from materials like fiberglass, resin, or plastic instead of heavy ceramic or stone pots. This makes it easier to rearrange your garden layout whenever you want a fresh look.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3 text-[#1b4324] flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#65a30d] text-white text-sm shrink-0">7</span> 
                Add a Vertical Herb Wall
              </h3>
              <p className="text-slate-600 leading-relaxed ml-11">
                A vertical herb wall combines functionality with aesthetics. Using modular planting systems or repurposed pallets, you can grow a variety of herbs and small vegetables in a compact, organized structure that doesn't take up valuable floor space.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3 text-[#1b4324] flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#65a30d] text-white text-sm shrink-0">8</span> 
                Incorporate Seating with Greenery
              </h3>
              <p className="text-slate-600 leading-relaxed ml-11">
                Create a cozy nook by combining seating with surrounding plants. A small bistro set or a built-in bench surrounded by potted plants can turn your terrace into a peaceful outdoor retreat, perfect for morning coffee or evening relaxation.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3 text-[#1b4324] flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#65a30d] text-white text-sm shrink-0">9</span> 
                Use Mirrors to Create Illusion of Space
              </h3>
              <p className="text-slate-600 leading-relaxed ml-11">
                Strategically placed outdoor mirrors can make a small terrace feel larger by reflecting light and greenery. This simple trick adds depth and brightness, especially in terraces with limited natural light.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3 text-[#1b4324] flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#65a30d] text-white text-sm shrink-0">10</span> 
                Install a Drip Irrigation System
              </h3>
              <p className="text-slate-600 leading-relaxed ml-11">
                For urban dwellers with busy schedules, a simple drip irrigation system ensures your terrace garden stays healthy without daily manual watering. These systems are affordable, easy to install, and help conserve water by delivering it directly to plant roots.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3 text-[#1b4324] flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#65a30d] text-white text-sm shrink-0">11</span> 
                Grow Vertical Vegetables
              </h3>
              <p className="text-slate-600 leading-relaxed ml-11">
                Compact vegetables like cherry tomatoes, beans, and cucumbers can be trained to grow vertically using stakes or trellises. This allows you to enjoy homegrown produce even in the tiniest of spaces.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3 text-[#1b4324] flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#65a30d] text-white text-sm shrink-0">12</span> 
                Add Ambient Lighting
              </h3>
              <p className="text-slate-600 leading-relaxed ml-11">
                String lights, lanterns, or solar-powered garden lights can transform your terrace into an inviting space for evenings. Lighting not only enhances the ambiance but also highlights your plants, making the space feel warm and welcoming after sunset.
              </p>
            </div>
          </div>

          <hr className="my-12 border-gray-200" />

          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100 mb-12">
            <h2 className="text-3xl font-bold font-serif mb-6 text-slate-900">Tips for Maintaining a Small Terrace Garden</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <i className='bx bx-check-circle text-[#65a30d] text-xl mt-0.5'></i>
                <span className="text-slate-600"><strong className="text-slate-800">Choose the right plants</strong> — Opt for varieties suited to your terrace's sunlight and wind conditions.</span>
              </li>
              <li className="flex items-start gap-3">
                <i className='bx bx-check-circle text-[#65a30d] text-xl mt-0.5'></i>
                <span className="text-slate-600"><strong className="text-slate-800">Monitor drainage</strong> — Ensure containers have proper drainage to prevent waterlogging.</span>
              </li>
              <li className="flex items-start gap-3">
                <i className='bx bx-check-circle text-[#65a30d] text-xl mt-0.5'></i>
                <span className="text-slate-600"><strong className="text-slate-800">Group plants by watering needs</strong> — This makes maintenance more efficient and prevents over- or under-watering.</span>
              </li>
              <li className="flex items-start gap-3">
                <i className='bx bx-check-circle text-[#65a30d] text-xl mt-0.5'></i>
                <span className="text-slate-600"><strong className="text-slate-800">Rotate seasonal plants</strong> — Refresh your terrace with seasonal blooms to keep it vibrant throughout the year.</span>
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold font-serif mb-6 text-slate-900">Final Thoughts</h2>
          <p className="text-[1.1rem] text-slate-600 leading-relaxed mb-6">
            A small terrace doesn't have to feel restrictive — with the right design choices, it can become a flourishing garden oasis in the middle of the city. From vertical planters to multi-purpose furniture, these ideas prove that urban gardening is all about creativity, not size. 
          </p>
          <p className="text-[1.1rem] text-slate-600 leading-relaxed mb-10">
            Start with a few plants that suit your space and lifestyle, and watch your terrace transform into a green sanctuary you'll love spending time in.
          </p>

        </motion.div>
      </div>
    </div>
  );
};

export default BlogArticle3;
