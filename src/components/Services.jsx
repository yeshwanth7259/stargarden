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

const Services = ({ onNavigate }) => {
  const [isSiteVisitOpen, setIsSiteVisitOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const servicesList = [
    { 
      id: 'plants-on-hire',
      title: 'Plants on Hire', 
      desc: 'Premium plants for offices, events & spaces on rent.', 
      img: '/assets/service-plants-hire.png',
      icon: 'bx-leaf'
    },
    { 
      id: 'landscape-work',
      title: 'Landscape Work', 
      desc: 'End-to-end landscape development and execution.', 
      img: '/assets/service-landscape.png',
      icon: 'bx-landscape'
    },
    { 
      id: 'vertical-gardening',
      title: 'Vertical Gardening', 
      desc: 'Beautiful vertical gardens that elevate your space.', 
      img: '/assets/service-vertical.png',
      icon: 'bx-grid-alt'
    },
    { 
      id: 'balcony-garden',
      title: 'Balcony Garden', 
      desc: 'Turn your balcony into a lush green retreat.', 
      img: '/assets/service-balcony.png',
      icon: 'bx-home-heart'
    },
    { 
      id: 'terrace-garden',
      title: 'Terrace Garden', 
      desc: 'Create serene and green terrace gardens.', 
      img: '/assets/service-terrace.png',
      icon: 'bx-building-house'
    },
    { 
      id: 'indoor-plants',
      title: 'Indoor Plants', 
      desc: 'Indoor plants to purify air and enhance interiors.', 
      img: '/assets/service-indoor.png',
      icon: 'bx-spa'
    },
    { 
      id: 'kitchen-garden',
      title: 'Kitchen Garden', 
      desc: 'Grow fresh & healthy herbs and vegetables at home.', 
      img: '/assets/service-kitchen.png',
      icon: 'bx-restaurant'
    },
    { 
      id: 'office-plants',
      title: 'Office Plants', 
      desc: 'Greenery solutions for healthier workplaces.', 
      img: '/assets/service-office.png',
      icon: 'bx-briefcase'
    }
  ];

  return (
    <div className="bg-[#f9f9f9]">
      {/* 1. Hero Banner with Stats */}
      <section className="relative pt-32 pb-40 lg:pt-48 lg:pb-48 bg-[#020617] flex items-center min-h-[85vh]">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.img 
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            src="/assets/services-banner.png" 
            alt="Our Services" 
            className="w-full h-full object-cover opacity-50 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
        </div>
        
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl"
          >
            <span className="text-[0.75rem] font-bold tracking-widest text-[#a3e635] uppercase mb-4 block">OUR SERVICES</span>
            <h1 className="text-5xl lg:text-[4.5rem] font-serif font-bold text-white leading-[1.1] mb-6">
              Complete Green <br/> Solutions <br/>
              <span className="text-[#a3e635]">For Every Space</span>
            </h1>
            <p className="text-white/80 text-lg max-w-xl leading-relaxed mb-8">
              End-to-end landscaping and gardening services delivered on a turnkey basis with a commitment to quality, sustainability and your satisfaction.
            </p>
            <div className="flex items-center gap-2 text-sm font-medium tracking-wide">
              <button onClick={() => onNavigate && onNavigate('home')} className="hover:text-[#a3e635] text-white transition-colors">Home</button>
              <i className='bx bx-chevron-right text-white/50'></i>
              <span className="text-[#a3e635]">Services</span>
            </div>
          </motion.div>
        </div>

        {/* Floating Stats Bar */}
        <div className="absolute bottom-0 left-0 w-full transform translate-y-1/2 px-6 lg:px-10 z-20">
          <div className="max-w-[1400px] mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-[#0f2e1a] rounded-xl lg:rounded-[30px] p-6 lg:p-10 shadow-2xl border border-white/5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-4 divide-y lg:divide-y-0 lg:divide-x divide-white/10"
            >
              {[
                { icon: 'bx-user-pin', to: 15, suffix: '+', label: 'Years of Excellence' },
                { icon: 'bx-buildings', to: 500, suffix: '+', label: 'Projects Completed' },
                { icon: 'bx-group', to: 100, suffix: '+', label: 'Corporate Clients' },
                { icon: 'bx-spa', to: 50, suffix: 'K+', label: 'Plants Installed' },
                { icon: 'bx-home-heart', to: 70, suffix: '+', label: 'Acres of Nurseries' },
                { icon: 'bx-expand', to: 27, suffix: '+', label: 'Lakh Sq. Ft. Landscaped' }
              ].map((stat, idx) => (
                <div key={idx} className="flex items-center gap-3 px-4 py-4 lg:py-0">
                  <i className={`bx ${stat.icon} text-[2.5rem] text-[#a3e635] shrink-0`}></i>
                  <div className="flex flex-col text-left">
                    <h3 className="text-xl font-bold text-white mb-0.5">
                      <AnimatedCounter to={stat.to} suffix={stat.suffix} />
                    </h3>
                    <p className="text-[0.65rem] font-medium text-white/70 tracking-wider uppercase leading-tight">{stat.label}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Services Grid */}
      <section className="pt-48 pb-24 lg:pt-56 lg:pb-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-16 gap-6">
            <div>
              <span className="text-[0.7rem] font-bold tracking-widest text-[#65a30d] uppercase mb-4 block">WHAT WE OFFER</span>
              <h2 className="text-3xl lg:text-5xl font-serif font-bold text-[#1e293b] leading-tight max-w-2xl">
                Our Landscaping & Gardening Services
              </h2>
            </div>
            <p className="text-slate-500 text-[1.05rem] max-w-md leading-relaxed">
              We offer our services on a turnkey basis and take entire responsibility of soft landscaping and hardscape gardening services and we execute the services work up to the fullest satisfaction.
            </p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {servicesList.map((service, idx) => (
              <motion.div 
                key={idx} 
                variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
                className="bg-[#fcfcfc] rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col overflow-hidden relative pb-6"
              >
                {/* Image Header */}
                <div className="relative h-48 overflow-hidden rounded-t-2xl">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
                </div>
                
                {/* Overlapping Badge */}
                <div className="absolute top-[168px] left-6 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md z-10 border border-gray-50 group-hover:-translate-y-1 transition-transform duration-300">
                  <i className={`bx ${service.icon} text-2xl text-[#65a30d]`}></i>
                </div>

                {/* Content */}
                <div className="pt-10 px-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-[#1e293b] mb-2 group-hover:text-[#65a30d] transition-colors">{service.title}</h3>
                  <p className="text-slate-500 text-[0.9rem] leading-relaxed mb-6 flex-grow">{service.desc}</p>
                  <button onClick={() => onNavigate && onNavigate('service-' + service.id)} className="text-[#65a30d] font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all w-fit cursor-pointer">
                    Explore <i className='bx bx-right-arrow-alt text-lg'></i>
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. Why Choose Us */}
      <section className="bg-[#0f2e1a] py-12 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1000&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10 text-center">
          <span className="text-[0.75rem] font-bold tracking-widest text-[#a3e635] uppercase mb-4 block">WHY CHOOSE US</span>
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-16">Why Clients Choose Star Gardens</h2>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid grid-cols-2 lg:grid-cols-6 gap-4 lg:gap-0 lg:divide-x divide-white/20 text-center"
          >
            {[
              { icon: 'bx-spa', title: 'Own Nurseries', desc: '70+ acres of nurseries.' },
              { icon: 'bx-cog', title: 'Expert Team', desc: 'Deep horticultural expertise.' },
              { icon: 'bx-check-shield', title: 'Turnkey Services', desc: 'From design to maintenance.' },
              { icon: 'bx-time-five', title: 'On-time Delivery', desc: 'Strict quality & safety.' },
              { icon: 'bx-support', title: 'AMC Support', desc: 'Long-term green upkeep.' },
              { icon: 'bx-map-pin', title: 'Pan India', desc: 'Serving across major cities.' }
            ].map((feat, idx) => (
              <motion.div key={idx} variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { type: 'spring' } } }} className="flex flex-col items-center px-2 py-6 lg:py-0 bg-white/5 lg:bg-transparent rounded-2xl lg:rounded-none border border-white/10 lg:border-transparent backdrop-blur-md lg:backdrop-blur-none shadow-xl lg:shadow-none hover:bg-white/10 transition-colors group">
                <i className={`bx ${feat.icon} text-4xl text-[#a3e635] mb-3 group-hover:scale-110 transition-transform duration-300`}></i>
                <h4 className="text-white font-bold text-[0.95rem] mb-2">{feat.title}</h4>
                <p className="text-white/70 text-[0.75rem] leading-relaxed max-w-[150px]">{feat.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. Our Process */}
      <section className="py-12 lg:py-24 bg-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <span className="text-[0.7rem] font-bold tracking-widest text-[#65a30d] uppercase mb-4 block">OUR PROCESS</span>
            <h2 className="text-3xl lg:text-[2.5rem] font-serif font-bold text-[#1e293b]">How We Work</h2>
          </div>

          <div className="relative z-10">
            {/* Mobile Vertical Timeline Line */}
            <div className="absolute left-1/2 top-10 bottom-10 w-[2px] border-l-2 border-dashed border-gray-200 -translate-x-1/2 lg:hidden z-0"></div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
              className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8 lg:gap-2 relative z-10"
            >
              {[
                { title: 'Consultation', icon: 'bx-headphone', desc: 'Understanding your vision and requirements.' },
                { title: 'Site Survey', icon: 'bx-map-alt', desc: 'Detailed assessment of the space and conditions.' },
                { title: 'Design & Plan', icon: 'bx-pencil', desc: 'Creative designs and solutions tailored to your needs.' },
                { title: 'Execution', icon: 'bx-hard-hat', desc: 'Expert execution with quality materials and techniques.' },
                { title: 'Maintenance', icon: 'bx-leaf', desc: 'Regular upkeep to keep your green spaces thriving.' },
                { title: 'Regular Reviews', icon: 'bx-sync', desc: 'Continuous monitoring and improvement for excellence.' },
              ].map((step, index, arr) => (
                <div key={step.title} className="flex flex-col lg:flex-row items-center w-full lg:w-auto relative">
                  <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: 'spring' } } }} className="flex flex-col items-center text-center w-[85%] sm:w-80 lg:w-40 relative group bg-white lg:bg-transparent p-6 rounded-3xl lg:p-0 shadow-lg lg:shadow-none border border-gray-100 lg:border-transparent z-10">
                    <div className="w-20 h-20 rounded-full bg-[#f4f8f4] lg:bg-white border border-gray-100 flex items-center justify-center mb-4 text-[#65a30d] group-hover:bg-[#65a30d] group-hover:text-white lg:group-hover:border-[#65a30d] shadow-sm transition-all duration-300">
                      <i className={`bx ${step.icon} text-[2rem] group-hover:scale-110 transition-transform`}></i>
                    </div>
                    <h4 className="font-bold text-slate-800 text-[1.05rem] mb-2">{step.title}</h4>
                    <p className="text-slate-500 text-[0.85rem] leading-relaxed px-2">{step.desc}</p>
                  </motion.div>
                  {index < arr.length - 1 && (
                    <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="hidden lg:flex flex-col justify-center items-center h-20 flex-grow px-2 z-0 w-full min-w-[20px]">
                      <div className="w-full flex items-center text-gray-300">
                        <div className="h-[2px] w-full border-t-2 border-dashed border-gray-300"></div>
                        <i className='bx bx-chevron-right text-2xl -ml-2 text-gray-400'></i>
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. CTA Footer block */}
      <section className="relative py-12 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/cta-bg.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col lg:flex-row items-center justify-between gap-10 relative z-10">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-4">Let's Build Greener<br/> Spaces Together</h2>
            <p className="text-white/80 text-[0.95rem]">Get in touch with us for a free consultation<br/> and customized green solutions.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <button onClick={() => setIsSiteVisitOpen(true)} className="bg-[#65a30d] hover:bg-[#4d7c0f] text-white px-8 py-3.5 rounded-md font-bold tracking-wide text-[0.8rem] transition-colors uppercase flex items-center justify-center gap-2 cursor-pointer">
              SCHEDULE A SITE VISIT <i className='bx bx-right-arrow-alt text-lg'></i>
            </button>
            <button onClick={() => setIsQuoteOpen(true)} className="border border-white/40 hover:border-white text-white px-8 py-3.5 rounded-md font-bold tracking-wide text-[0.8rem] transition-all uppercase flex items-center gap-2 cursor-pointer">
              REQUEST A PROPOSAL <i className='bx bx-right-arrow-alt text-lg'></i>
            </button>
          </div>
        </div>
      </section>

      <SiteVisitModal isOpen={isSiteVisitOpen} onClose={() => setIsSiteVisitOpen(false)} />
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </div>
  );
};

export default Services;
