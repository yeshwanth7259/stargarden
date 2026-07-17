import React from 'react';
import { motion } from 'framer-motion';

const BlogArticle2 = ({ onNavigate }) => {
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
          <img src="/assets/blog-2.jpg" alt="Vertical Gardens" className="w-full h-full object-cover" />
        </motion.div>

        {/* Article Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
          <div className="flex gap-4 items-center mb-6">
            <span className="bg-[#f4fbf4] text-[#1b8b22] px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase border border-[#1b8b22]/20">Sustainability</span>
            <span className="text-slate-500 text-sm font-medium">May 05, 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 leading-[1.2] mb-8">
            Vertical Gardens: The Future of Sustainable Spaces
          </h1>
        </motion.div>

        {/* Article Content */}
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-lg prose-slate max-w-none prose-headings:font-serif prose-headings:text-slate-800"
        >
          <p className="text-[1.1rem] text-slate-600 leading-relaxed mb-6">
            As cities grow denser and green land becomes scarce, architects, urban planners, and homeowners alike are turning their attention upward — quite literally. Vertical gardens, also known as living walls or green walls, are transforming the way we think about sustainable design. Instead of spreading greenery across the ground, these gardens climb walls, facades, and structures, turning unused vertical space into thriving ecosystems.
          </p>
          <p className="text-[1.1rem] text-slate-600 leading-relaxed mb-12">
            What was once a niche architectural trend has now become a serious solution to some of urban living's biggest challenges — from air pollution to shrinking green space. Here's why vertical gardens are being called the future of sustainable spaces.
          </p>

          <h2 className="text-3xl font-bold font-serif mb-6 text-slate-900">What Are Vertical Gardens?</h2>
          <p className="text-[1.1rem] text-slate-600 leading-relaxed mb-6">
            A vertical garden is a structure that supports plant growth vertically rather than horizontally. These systems can be freestanding or attached to a building's exterior or interior wall. They typically use a combination of irrigation systems, growing panels, and a variety of plant species selected for their adaptability to vertical growing conditions.
          </p>
          <p className="text-[1.1rem] text-slate-600 leading-relaxed mb-12">
            Vertical gardens range from small modular panels installed indoors to massive facades covering entire office towers, hotels, and shopping centers.
          </p>

          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100 mb-12">
            <h2 className="text-3xl font-bold font-serif mb-8 text-slate-900">Why Vertical Gardens Matter for Sustainability</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-2 text-[#1b4324] flex items-center gap-3">
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#65a30d] text-white text-xs shrink-0">1</span> 
                  Maximizing Limited Space
                </h3>
                <p className="text-slate-600 leading-relaxed ml-10">
                  In densely populated cities, horizontal space is a luxury few can afford. Vertical gardens allow greenery to flourish without requiring additional land, making them ideal for urban environments where every square foot counts.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2 text-[#1b4324] flex items-center gap-3">
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#65a30d] text-white text-xs shrink-0">2</span> 
                  Improving Air Quality
                </h3>
                <p className="text-slate-600 leading-relaxed ml-10">
                  Plants naturally absorb carbon dioxide and release oxygen, but vertical gardens take this a step further by filtering airborne pollutants and particulate matter. In cities plagued by traffic emissions and industrial pollution, living walls act as natural air purifiers, improving air quality for nearby residents and workers.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2 text-[#1b4324] flex items-center gap-3">
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#65a30d] text-white text-xs shrink-0">3</span> 
                  Reducing Urban Heat
                </h3>
                <p className="text-slate-600 leading-relaxed ml-10">
                  Concrete and asphalt absorb and radiate heat, contributing to the "urban heat island" effect. Vertical gardens help counter this by cooling surrounding air through a natural process called evapotranspiration. Buildings with green walls often experience lower surface temperatures, reducing the need for excessive air conditioning.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2 text-[#1b4324] flex items-center gap-3">
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#65a30d] text-white text-xs shrink-0">4</span> 
                  Enhancing Energy Efficiency
                </h3>
                <p className="text-slate-600 leading-relaxed ml-10">
                  Green walls act as natural insulation, helping regulate indoor temperatures. In summer, they shield buildings from direct sunlight, reducing cooling costs. In winter, they can help retain heat, lowering energy consumption overall. This makes vertical gardens not just a sustainability feature but an economic one too.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2 text-[#1b4324] flex items-center gap-3">
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#65a30d] text-white text-xs shrink-0">5</span> 
                  Supporting Biodiversity
                </h3>
                <p className="text-slate-600 leading-relaxed ml-10">
                  Urban environments often lack the natural habitats needed to support local ecosystems. Vertical gardens introduce diverse plant species into cities, creating micro-habitats for insects, birds, and pollinators. This helps maintain biodiversity even in the most concrete-heavy environments.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2 text-[#1b4324] flex items-center gap-3">
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#65a30d] text-white text-xs shrink-0">6</span> 
                  Managing Stormwater
                </h3>
                <p className="text-slate-600 leading-relaxed ml-10">
                  Some vertical garden systems are designed to capture and filter rainwater, reducing runoff and easing pressure on urban drainage systems. This is particularly valuable in cities prone to flooding or heavy rainfall.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold font-serif mb-6 text-slate-900">Popular Applications of Vertical Gardens</h2>
          <ul className="space-y-4 mb-12">
            <li className="flex items-start gap-3">
              <i className='bx bx-check text-[#65a30d] text-2xl'></i>
              <span className="text-slate-600"><strong className="text-slate-800">Office Buildings</strong> — Living walls in corporate lobbies and workspaces improve air quality and employee wellbeing while boosting a building's sustainability credentials.</span>
            </li>
            <li className="flex items-start gap-3">
              <i className='bx bx-check text-[#65a30d] text-2xl'></i>
              <span className="text-slate-600"><strong className="text-slate-800">Residential Spaces</strong> — Homeowners are increasingly using vertical gardens on balconies, patios, and interior walls to maximize greenery in small living spaces.</span>
            </li>
            <li className="flex items-start gap-3">
              <i className='bx bx-check text-[#65a30d] text-2xl'></i>
              <span className="text-slate-600"><strong className="text-slate-800">Retail & Hospitality</strong> — Hotels and shopping centers use vertical gardens as striking visual features that also align with eco-conscious branding.</span>
            </li>
            <li className="flex items-start gap-3">
              <i className='bx bx-check text-[#65a30d] text-2xl'></i>
              <span className="text-slate-600"><strong className="text-slate-800">Urban Infrastructure</strong> — Cities are experimenting with green walls along highways, parking structures, and public transit stations to combat pollution and improve aesthetics.</span>
            </li>
          </ul>

          <h2 className="text-3xl font-bold font-serif mb-6 text-slate-900">Challenges to Consider</h2>
          <p className="text-[1.1rem] text-slate-600 leading-relaxed mb-12">
            While vertical gardens offer impressive benefits, they do come with challenges. Installation costs can be high, and ongoing maintenance — including irrigation, pruning, and monitoring plant health — requires expertise. Choosing the right plant species for a specific climate and orientation is also crucial to long-term success. However, as technology advances, automated irrigation systems and modular designs are making vertical gardens more accessible and cost-effective than ever.
          </p>

          <h2 className="text-3xl font-bold font-serif mb-6 text-slate-900">The Road Ahead</h2>
          <p className="text-[1.1rem] text-slate-600 leading-relaxed mb-6">
            As sustainability becomes a core priority in architecture and urban planning, vertical gardens are poised to play a much larger role in how we design our cities. They represent a powerful intersection of nature and innovation — proving that even in the most space-constrained environments, greenery can thrive.
          </p>
          <p className="text-[1.1rem] text-slate-600 leading-relaxed mb-10">
            Whether integrated into skyscrapers, homes, or public spaces, vertical gardens offer a glimpse into a greener, more sustainable future — one wall at a time.
          </p>

        </motion.div>
      </div>
    </div>
  );
};

export default BlogArticle2;
