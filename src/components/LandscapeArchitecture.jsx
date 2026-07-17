import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Map, Compass, PenTool, Sprout, Hammer, Droplets } from 'lucide-react';
import QuoteModal from './QuoteModal';

const LandscapeArchitecture = ({ onNavigate }) => {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden bg-[#020617] flex items-center min-h-[70vh]">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.img 
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            src="/assets/landscape-arch.jpg" 
            alt="Landscape Architecture" 
            className="w-full h-full object-cover opacity-60 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10 text-white w-full"
        >
          <span className="text-[0.75rem] font-bold tracking-widest text-[#a3e635] uppercase mb-4 block">DESIGN STUDIO</span>
          <h1 className="text-5xl lg:text-7xl font-bold mb-4">
            <span className="block font-medium text-white/90">Landscape</span>
            <span className="block text-white">Architecture</span>
          </h1>
          <div className="flex items-center gap-2 text-sm font-medium tracking-wide mt-6">
            <button onClick={() => onNavigate('home')} className="hover:text-[#65a30d] transition-colors">Home</button>
            <i className='bx bx-chevron-right text-white/50'></i>
            <span className="text-[#65a30d]">Design Studio</span>
          </div>
        </motion.div>
      </section>

      {/* 2. Intro Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <span className="text-[0.75rem] font-bold tracking-widest text-[#65a30d] uppercase mb-4 block">CAPABILITIES</span>
            <h2 className="text-4xl lg:text-[3.5rem] leading-[1.1] font-bold text-slate-800 mb-6">
              From Blank Site to Beautiful Landscape.
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Our in-house landscape architecture studio pairs experienced designers with horticulturists to craft outdoor environments that are equal parts poetic and practical. Every design honours the site, climate and client brief — from private gardens to campus-scale masterplans.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" }}
            whileInView={{ opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:w-1/2 h-[500px] rounded-2xl overflow-hidden shadow-2xl relative"
          >
            <img src="/assets/landscape-arch.jpg" alt="Design Studio" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </section>

      {/* 3. Capabilities Section */}
      <section className="py-20 lg:py-28 bg-[#f8fafc] relative">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="mb-16 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4">Every Layer of Landscape Design</h2>
          </div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { title: 'Master Planning', desc: 'Site analysis and comprehensive master plans for large developments.', icon: Map },
              { title: 'Concept Design', desc: 'Creative concepts rooted in site context and client brief.', icon: Compass },
              { title: 'Detailed Design', desc: 'Working drawings, planting palettes and specifications.', icon: PenTool },
              { title: 'Softscape Design', desc: 'Plant selection curated for climate, aesthetics and sustainability.', icon: Sprout },
              { title: 'Hardscape Design', desc: 'Pathways, decks, pergolas and outdoor living zones.', icon: Hammer },
              { title: 'Water Features', desc: 'Pools, ponds, fountains and sustainable irrigation systems.', icon: Droplets },
            ].map((feature, idx) => (
              <motion.div 
                key={idx} 
                variants={{
                  hidden: { opacity: 0, rotateX: 90, y: 20 },
                  visible: { opacity: 1, rotateX: 0, y: 0, transition: { type: "spring", stiffness: 100, damping: 12 } }
                }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group cursor-pointer"
              >
                <div className="w-14 h-14 bg-[#65a30d]/10 rounded-xl flex items-center justify-center mb-6 text-[#65a30d] group-hover:scale-110 transition-transform duration-300">
                  <feature.icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. Selected Work Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <span className="text-[0.75rem] font-bold tracking-widest text-[#65a30d] uppercase mb-4 block">SELECTED WORK</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-800">Architecture in Bloom</h2>
            </div>
            <button onClick={() => onNavigate('projects')} className="text-[#65a30d] text-sm font-bold uppercase tracking-wide flex items-center gap-1 hover:gap-2 transition-all">VIEW ALL PROJECTS <i className='bx bx-right-arrow-alt'></i></button>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          >
            {[
              { img: '/assets/project-villa.jpg', title: 'Luxury Villa Masterplan', loc: 'Bangalore' },
              { img: '/assets/project-hotel.jpg', title: 'Boutique Hotel Gardens', loc: 'Goa' },
              { img: '/assets/project-corporate.jpg', title: 'Tech Campus Landscape', loc: 'Hyderabad' },
              { img: '/assets/terrace-garden.jpg', title: 'Premium Terrace Garden', loc: 'Mumbai' }
            ].map((proj, idx) => (
              <motion.div 
                key={idx} 
                variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
                className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer"
              >
                <img src={proj.img} alt={proj.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 w-full p-8 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[#a3e635] text-sm font-bold tracking-widest uppercase mb-2 block">{proj.loc}</span>
                  <h3 className="text-2xl font-bold text-white">{proj.title}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Footer Block */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/cta-bg.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-[#0f2e1a]/90 mix-blend-multiply"></div>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col items-center text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Ready to Create Your Masterpiece?</h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl">Connect with our design studio to discuss your upcoming project requirements.</p>
          <button onClick={() => setIsQuoteOpen(true)} className="bg-[#a3e635] hover:bg-[#65a30d] text-slate-900 hover:text-white px-8 py-4 rounded-full font-bold tracking-wide transition-all shadow-xl cursor-pointer hover:scale-105 active:scale-95">
            START YOUR PROJECT
          </button>
        </div>
      </section>

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </div>
  );
};

export default LandscapeArchitecture;
