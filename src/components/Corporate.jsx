import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import SiteVisitModal from './SiteVisitModal';
import QuoteModal from './QuoteModal';

const AnimatedCounter = ({ from = 0, to, suffix = '' }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(from);
  const rounded = useTransform(count, Math.round);
  const [display, setDisplay] = useState(from + suffix);

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, count, to]);

  useEffect(() => {
    return rounded.onChange((v) => setDisplay(v + suffix));
  }, [rounded, suffix]);

  return <span ref={ref}>{display}</span>;
};

const Corporate = ({ onNavigate }) => {
  const [isSiteVisitOpen, setIsSiteVisitOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">
      {/* 1. Hero Banner */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden bg-[#020617] flex items-center min-h-[90vh]">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="/assets/corporate-banner-new.jpg" 
            onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop'; }}
            alt="Corporate Banner" 
            className="w-full h-full object-cover opacity-70" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/80 to-transparent"></div>
        </div>
        
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10 w-full flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Text */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-[55%] text-white"
          >
            <span className="text-[0.75rem] font-bold tracking-widest text-[#a3e635] uppercase mb-5 block">CORPORATE SOLUTIONS</span>
            <h1 className="text-5xl lg:text-[4.5rem] font-serif font-bold mb-6 leading-[1.1] text-slate-100 tracking-tight">
              Corporate Green <br/> Solutions for <br/>
              <span className="text-[#a3e635]">Modern Businesses</span>
            </h1>
            <p className="text-[1.05rem] text-slate-300 leading-relaxed mb-10 max-w-xl">
              We create inspiring, healthy and sustainable green environments that enhance productivity, wellbeing and the overall corporate image.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => setIsSiteVisitOpen(true)} className="bg-[#65a30d] hover:bg-[#4d7c0f] text-white px-8 py-4 rounded-full font-bold tracking-wide text-[0.85rem] transition-colors flex items-center gap-2 uppercase shadow-lg shadow-[#65a30d]/20 cursor-pointer hover:scale-105 active:scale-95">
                Schedule A Site Visit <i className='bx bx-right-arrow-alt text-xl'></i>
              </button>
              <button className="border border-white/20 hover:border-white text-white px-8 py-4 rounded-full font-bold tracking-wide text-[0.85rem] transition-all uppercase hover:bg-white/5 backdrop-blur-sm">
                View Corporate Projects
              </button>
            </div>
          </motion.div>
          
          {/* Right Stats Box */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.4, staggerChildren: 0.1 } }
            }}
            className="lg:w-[420px] bg-[#1e293b]/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 lg:p-10 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
            <div className="grid grid-cols-1 gap-6 relative z-10">
              {[
                { icon: 'bx-medal', to: 15, suffix: '+', label: 'Years of Excellence' },
                { icon: 'bx-buildings', to: 500, suffix: '+', label: 'Corporate Projects' },
                { icon: 'bx-group', to: 100, suffix: '+', label: 'Corporate Clients' },
                { icon: 'bx-leaf', to: 50, suffix: 'K+', label: 'Plants Installed' },
                { icon: 'bx-expand', to: 27, suffix: '+', label: 'Lakh Sq. Ft. Landscaped' },
                { icon: 'bx-home-heart', to: 70, suffix: '+', label: 'Acres of Nurseries' }
              ].map((stat, idx) => (
                <motion.div key={idx} variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="flex items-center gap-5">
                  <div className="w-10 flex justify-center">
                    <i className={`bx ${stat.icon} text-3xl text-[#a3e635]`}></i>
                  </div>
                  <div>
                    <h3 className="text-[1.3rem] font-bold text-white leading-tight mb-0.5">
                      <AnimatedCounter to={stat.to} suffix={stat.suffix} />
                    </h3>
                    <p className="text-[0.75rem] text-slate-300 font-medium">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Trusted By Leading Organisations */}
      <section className="py-10 border-b border-gray-100 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex justify-center w-full">
            <img 
              src="/assets/clients-grid.jpg" 
              alt="Our Esteemed Clients - Star Gardens" 
              className="w-full max-w-[1200px] h-auto object-contain mx-auto shadow-sm rounded-xl opacity-95 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </section>

      {/* 3. Comprehensive Green Solutions */}
      <section className="py-24 bg-[#fdfbf7]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
            <div>
              <span className="text-[0.7rem] font-bold tracking-widest text-[#65a30d] uppercase mb-4 block">OUR CORPORATE SOLUTIONS</span>
              <h2 className="text-4xl lg:text-[3rem] font-serif font-bold text-[#1e293b] leading-tight max-w-2xl">
                Comprehensive Green Solutions for Every Corporate Need
              </h2>
            </div>
            <p className="text-slate-500 text-lg max-w-md">
              From office plant rentals to complete landscape development and long-term maintenance, we provide end-to-end green solutions tailored for corporate environments.
            </p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: 'bx-landscape', title: 'Corporate Landscaping', desc: 'Design and build stunning outdoor landscapes that create a lasting impression.', img: '/assets/corporate_landscaping.jpg' },
              { icon: 'bx-leaf', title: 'Office Plant Rental', desc: 'Premium indoor plants on rental to enhance air quality and workplace aesthetics.', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop' },
              { icon: 'bx-pencil', title: 'Landscape Design', desc: 'Creative and sustainable designs tailored to your corporate identity and space.', img: '/assets/landscape_design.jpg' },
              { icon: 'bx-grid-alt', title: 'Vertical Gardens', desc: 'Add life to your walls with beautiful vertical gardens and green walls.', img: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=600&auto=format&fit=crop' },
              { icon: 'bx-brush', title: 'Indoor Maintenance', desc: 'Expert care for your indoor plants to keep your workspace fresh and vibrant.', img: 'https://images.unsplash.com/photo-1592150621744-aca64f48394a?q=80&w=600&auto=format&fit=crop' },
              { icon: 'bx-sun', title: 'Outdoor Maintenance', desc: 'Regular maintenance to keep your landscapes lush, green and healthy.', img: '/assets/outdoor_maintenance.jpg' },
              { icon: 'bx-file', title: 'Annual Contracts', desc: 'Customized AMC plans for hassle-free and consistent green upkeep.', img: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=600&auto=format&fit=crop' },
              { icon: 'bx-water', title: 'Irrigation Systems', desc: 'Smart irrigation solutions for water efficiency and sustainable landscapes.', img: 'https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?q=80&w=600&auto=format&fit=crop' }
            ].map((sol, idx) => (
              <motion.div key={idx} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} className="bg-white rounded-[24px] p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-50 group flex flex-col h-[380px]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#65a30d] flex items-center justify-center shrink-0">
                    <i className={`bx ${sol.icon} text-2xl text-white`}></i>
                  </div>
                  <div>
                    <button onClick={() => { if(onNavigate) onNavigate('services'); }} className="text-[1.1rem] font-bold text-slate-800 hover:text-[#65a30d] transition-colors mb-1 leading-tight text-left cursor-pointer">{sol.title}</button>
                  </div>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-grow">{sol.desc}</p>
                <button onClick={() => { if(onNavigate) onNavigate('services'); }} className="text-[#65a30d] text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all mb-4 cursor-pointer text-left w-fit">Explore <i className='bx bx-right-arrow-alt'></i></button>
                <div className="rounded-xl overflow-hidden h-32 shrink-0 relative">
                  <img src={sol.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={sol.title} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. Why Corporates Choose Star Gardens */}
      <section className="bg-[#0f2e1a] py-14 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1000&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
          
          <div className="mb-10">
            <span className="text-[0.75rem] font-bold tracking-widest text-[#a3e635] uppercase mb-2 block">WHY CORPORATES CHOOSE STAR GARDENS</span>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 divide-y md:divide-y-0 md:divide-x divide-white/20"
          >
            {[
              { icon: 'bx-spa', title: 'Own Nurseries', desc: '70+ acres of nurseries ensuring high quality plants all year round.' },
              { icon: 'bx-group', title: 'Dedicated Team', desc: 'Experienced team of horticulturists, designers and project managers.' },
              { icon: 'bx-briefcase', title: '500+ Projects', desc: 'Successfully delivered 500+ corporate projects across industries.' },
              { icon: 'bx-hourglass', title: 'Timely Execution', desc: 'On-time delivery with strict quality and safety standards.' },
              { icon: 'bx-shield-check', title: 'AMC Support', desc: 'Comprehensive aftercare and maintenance support.' },
              { icon: 'bx-map-pin', title: 'Pan India Presence', desc: 'Serving corporates across major cities in India.' }
            ].map((feat, idx) => (
              <motion.div key={idx} variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }} className="flex items-start gap-4 px-2 lg:px-6 first:pl-0 last:pr-0 py-4 lg:py-0">
                <i className={`bx ${feat.icon} text-3xl text-[#a3e635] mt-0.5 shrink-0`}></i>
                <div>
                  <h4 className="text-white font-bold text-[0.9rem] mb-1.5 leading-tight">{feat.title}</h4>
                  <p className="text-white/60 text-[0.75rem] leading-relaxed">{feat.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. Greening Workspaces Across Industries */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="mb-12">
            <span className="text-[0.7rem] font-bold tracking-widest text-[#65a30d] uppercase mb-4 block">INDUSTRIES WE SERVE</span>
            <h2 className="text-3xl lg:text-[2.5rem] font-serif font-bold text-[#1e293b]">Greening Workspaces Across Industries</h2>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-8 gap-3 h-[260px]">
            {/* Industry Items */}
            {[
              { name: 'IT Parks', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop' },
              { name: 'Corporate Offices', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop' },
              { name: 'Hotels & Resorts', img: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=600&auto=format&fit=crop' },
              { name: 'Hospitals', img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=600&auto=format&fit=crop' },
              { name: 'Builders & Developers', img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=600&auto=format&fit=crop' },
              { name: 'Educational Institutions', img: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=600&auto=format&fit=crop' },
              { name: 'Industrial Campuses', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop' },
              { name: 'Commercial Complexes', img: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=600&auto=format&fit=crop' },
            ].map(ind => (
              <div key={ind.name} className="relative rounded-xl overflow-hidden group cursor-pointer h-full">
                <img src={ind.img} alt={ind.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                <h4 className="absolute bottom-4 left-0 w-full text-center text-white font-semibold text-[0.85rem] px-2 leading-tight tracking-wide">{ind.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Our Proven 6-Step Process */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="mb-16">
            <span className="text-[0.7rem] font-bold tracking-widest text-[#65a30d] uppercase mb-4 block">OUR PROCESS</span>
            <h2 className="text-3xl lg:text-[2.5rem] font-serif font-bold text-[#1e293b]">Our Proven 6-Step Process</h2>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-2 relative z-10"
          >
            {[
              { title: 'Consultation', icon: 'bx-support', desc: 'Understanding your vision and requirements.' },
              { title: 'Site Survey', icon: 'bx-map-alt', desc: 'Detailed assessment of the space and conditions.' },
              { title: 'Design Proposal', icon: 'bx-vector', desc: 'Creative designs and solutions tailored to your needs.' },
              { title: 'Execution', icon: 'bx-hard-hat', desc: 'Expert execution with quality materials and techniques.' },
              { title: 'Maintenance', icon: 'bx-leaf', desc: 'Regular upkeep to keep your green spaces thriving.' },
              { title: 'Regular Reviews', icon: 'bx-sync', desc: 'Continuous monitoring and improvement for excellence.' },
            ].map((step, index, arr) => (
              <React.Fragment key={step.title}>
                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex flex-col items-center text-center w-full lg:w-40 relative group">
                  <div className="w-24 h-24 rounded-full bg-[#65a30d]/10 flex items-center justify-center mb-6 text-[#4d7c0f] group-hover:bg-[#65a30d] group-hover:text-white transition-all duration-300">
                    <i className={`bx ${step.icon} text-[2.5rem]`}></i>
                  </div>
                  <h4 className="font-bold text-slate-800 text-[1.05rem] mb-2">{step.title}</h4>
                  <p className="text-slate-500 text-[0.85rem] leading-relaxed px-2">{step.desc}</p>
                </motion.div>
                {index < arr.length - 1 && (
                  <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="hidden lg:flex flex-col justify-center items-center h-24 flex-grow px-2">
                    <div className="w-full flex items-center text-gray-300">
                      <div className="h-[2px] w-full border-t-2 border-dashed border-gray-300"></div>
                      <i className='bx bx-chevron-right text-2xl -ml-2 text-gray-400'></i>
                    </div>
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 7. Some Of Our Prestigious Projects */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-12 gap-6">
            <div>
              <span className="text-[0.7rem] font-bold tracking-widest text-[#65a30d] uppercase mb-4 block">FEATURED CORPORATE PROJECTS</span>
              <h2 className="text-3xl lg:text-[2.5rem] font-serif font-bold text-[#1e293b]">Some Of Our Prestigious Projects</h2>
            </div>
            <button onClick={() => onNavigate('projects')} className="text-[#65a30d] text-sm font-bold uppercase tracking-wide flex items-center gap-1 hover:gap-2 transition-all">VIEW ALL PROJECTS <i className='bx bx-right-arrow-alt'></i></button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {[
              { name: 'Embassy Tech Village', loc: 'Bangalore', type: 'Landscape Development', size: '12 Acres', img: 'https://images.unsplash.com/photo-1558227691-41ea78d1f631?q=80&w=600&auto=format&fit=crop' },
              { name: 'Prestige Tech Park', loc: 'Hyderabad', type: 'Complete Landscaping', size: '8 Acres', img: 'https://images.unsplash.com/photo-1524813686514-a57563d77965?q=80&w=600&auto=format&fit=crop' },
              { name: 'Wipro Corporate Office', loc: 'Chennai', type: 'Indoor & Outdoor Plants', size: '5 Acres', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop' },
              { name: 'Accenture Campus', loc: 'Bangalore', type: 'Landscape Maintenance', size: '10 Acres', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop' },
            ].map(proj => (
              <div key={proj.name} className="group relative rounded-xl overflow-hidden h-[240px] cursor-pointer shadow-sm hover:shadow-xl transition-shadow border border-gray-100">
                <img src={proj.img} alt={proj.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-5 text-white">
                  <h3 className="font-bold text-[1.1rem] leading-tight mb-0.5">{proj.name}</h3>
                  <p className="text-[#a3e635] text-[0.8rem] mb-3 font-medium">{proj.loc}</p>
                  <p className="text-[0.8rem] text-white/90 font-medium leading-tight mb-0.5">{proj.type}</p>
                  <p className="text-[0.8rem] text-white/90 font-medium leading-tight">{proj.size}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA Footer block */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/cta-bg.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-[#0f2e1a]/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col lg:flex-row items-center justify-between gap-10 relative z-10">
          <div className="lg:max-w-2xl text-center lg:text-left">
            <h2 className="text-3xl lg:text-[2.5rem] font-serif font-bold text-white mb-4 leading-tight">Ready to Transform Your<br className="hidden lg:block"/> Corporate Environment?</h2>
            <p className="text-white/80 text-[0.95rem]">Let's create a greener, healthier and more inspiring workspace together.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <button onClick={() => setIsSiteVisitOpen(true)} className="bg-[#65a30d] hover:bg-[#4d7c0f] text-white px-8 py-3.5 rounded-md font-bold tracking-wide text-[0.8rem] transition-colors uppercase flex items-center justify-center gap-2 cursor-pointer hover:scale-105 active:scale-95 shadow-lg">
              BOOK A FREE SITE VISIT <i className='bx bx-right-arrow-alt text-lg'></i>
            </button>
            <button onClick={() => setIsQuoteOpen(true)} className="border border-white/40 hover:border-white text-white px-8 py-3.5 rounded-md font-bold tracking-wide text-[0.8rem] transition-all uppercase flex items-center gap-2 cursor-pointer hover:scale-105 active:scale-95">
              REQUEST A PROPOSAL
            </button>
          </div>
        </div>
      </section>

      <SiteVisitModal isOpen={isSiteVisitOpen} onClose={() => setIsSiteVisitOpen(false)} />
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </div>
  );
};

export default Corporate;
