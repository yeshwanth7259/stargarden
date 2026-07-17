import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = ({ onNavigate }) => {
  const [filter, setFilter] = useState('ALL');
  const filters = ['ALL', 'CORPORATE', 'RESIDENTIAL', 'HOSPITALITY', 'INSTITUTIONAL'];
  
  const projects = [
    { img: '/assets/project-corporate.png', cat: 'CORPORATE', title: 'Accenture, Bangalore', desc: 'Landscape, Indoor Plants, AMC' },
    { img: '/assets/project-residential.png', cat: 'RESIDENTIAL', title: 'Luxury Villa, Whitefield', desc: 'Landscape Design & Execution' },
    { img: '/assets/project-hospitality.png', cat: 'HOSPITALITY', title: 'Five Star Hotel, Goa', desc: 'Landscape & Water Features' },
    { img: '/assets/project-institutional.png', cat: 'INSTITUTIONAL', title: 'Tech Park, Hyderabad', desc: 'Landscape & Maintenance' },
  ];

  const filteredProjects = filter === 'ALL' 
    ? projects 
    : projects.filter(p => p.cat === filter);

  return (
    <section className="relative py-24 bg-slate-950" id="projects">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/projects-bg.jpg')" }}
      ></div>
      <div className="absolute inset-0 z-0 bg-black/60"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-8">
          <div className="text-white w-full lg:w-auto">
            <span className="text-[#65a30d] font-bold text-xs tracking-widest uppercase mb-3 block">FEATURED PROJECTS</span>
            <h2 className="text-white text-4xl md:text-5xl font-serif font-medium leading-tight">Spaces We've<br className="hidden lg:block"/> Transformed</h2>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {filters.map(f => (
              <button 
                key={f}
                className={`px-6 py-2 rounded-full border text-xs font-bold tracking-wide transition-all duration-300 ${filter === f ? 'bg-[#65a30d] border-[#65a30d] text-white' : 'bg-transparent border-white/30 text-white hover:bg-white/10 hover:border-white'}`}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 min-h-[400px]">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -30 }}
                transition={{ duration: 0.4, type: 'spring' }}
                key={`${project.title}-${idx}`} 
                className="bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl group border border-gray-100"
              >
                <div className="h-[220px] overflow-hidden relative">
                  <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1" onError={(e) => { e.target.src = 'https://placehold.co/400x300/1e293b/4ade80?text=Project' }} />
                  <div className="absolute inset-0 bg-[#0f2e1a]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button onClick={() => onNavigate && onNavigate('services')} className="bg-[#a3e635] text-[#0f2e1a] px-6 py-2.5 rounded-full font-bold text-sm transform translate-y-6 group-hover:translate-y-0 transition-all duration-500 shadow-lg cursor-pointer">
                      View Project
                    </button>
                  </div>
                </div>
                <div className="p-6 relative">
                  <div className="absolute top-0 right-6 -translate-y-1/2 bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-md text-[#65a30d] transform group-hover:rotate-45 transition-transform duration-300">
                    <i className='bx bx-right-top-arrow-circle text-2xl'></i>
                  </div>
                  <span className="text-[0.65rem] font-bold text-[#65a30d] tracking-widest uppercase mb-2 block">{project.cat}</span>
                  <h3 className="text-lg font-bold text-slate-800 mb-1 group-hover:text-[#65a30d] transition-colors">{project.title}</h3>
                  <p className="text-sm text-slate-600 font-medium">{project.desc}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        <div className="text-center mt-14">
          <button onClick={() => onNavigate && onNavigate('services')} className="inline-flex items-center gap-2 bg-[#65a30d] hover:bg-[#4d7c0f] text-white px-10 py-4 rounded-full font-bold text-[0.8rem] uppercase tracking-wide transition-all shadow-md hover:shadow-xl hover:-translate-y-1 cursor-pointer">
            VIEW ALL PROJECTS <i className='bx bx-right-arrow-alt text-xl'></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;

