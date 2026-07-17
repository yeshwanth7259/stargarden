import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';

const AnimatedCounter = ({ from = 0, to, suffix = '' }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(from);
  const rounded = useTransform(count, Math.round);
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    return rounded.onChange((v) => setDisplay(v));
  }, [rounded]);

  useEffect(() => {
    if (inView) {
      animate(count, to, { duration: 2.5, ease: "easeOut" });
    }
  }, [inView, to, count]);

  return <span ref={ref}>{display}{suffix}</span>;
};

const About = ({ onNavigate }) => {
  const [currentImg, setCurrentImg] = useState(0);
  const bannerImages = [
    '/assets/landscape_1_1784177394871.png',
    '/assets/landscape_2_1784177410695.png',
    '/assets/landscape_3_1784177475493.png'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg(prev => (prev + 1) % bannerImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white">
      {/* 1. Hero Banner */}
      <section className="relative min-h-[60vh] lg:min-h-[75vh] flex items-center overflow-hidden bg-[#020617] pt-20">
        {bannerImages.map((src, idx) => (
          <div 
            key={idx} 
            className="absolute inset-0 z-0 overflow-hidden transition-opacity duration-1000 ease-in-out"
            style={{ opacity: currentImg === idx ? 1 : 0 }}
          >
            <motion.img 
              initial={{ scale: 1.2 }}
              animate={currentImg === idx ? { scale: 1 } : { scale: 1.15 }}
              transition={{ duration: 8, ease: "linear" }}
              src={src} 
              alt={`About Star Gardens ${idx + 1}`} 
              className="w-full h-full object-cover opacity-60 mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent"></div>
          </div>
        ))}
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10 text-white w-full"
        >
          <h1 className="text-5xl lg:text-[5rem] leading-[1.1] font-bold mb-6">
            <span className="block font-medium text-white/90 mb-2">About</span>
            <span className="block text-white drop-shadow-lg">Star Gardens</span>
          </h1>
          <p className="text-lg text-white/80 max-w-xl mb-10 font-medium leading-relaxed drop-shadow-md">
            Elevating landscapes with visionary design and sustainable practices. We blend nature and architecture to create stunning environments.
          </p>
        </motion.div>
        
        {/* Slider Controls (Dots) */}
        <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center gap-3">
          {bannerImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentImg(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-500 ${currentImg === idx ? 'bg-[#65a30d] w-10' : 'bg-white/40 hover:bg-white/80'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 2. Who We Are */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
          className="max-w-[1400px] mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center"
        >
          
          {/* Left Content */}
          <motion.div variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}>
            <span className="text-[0.75rem] font-bold tracking-widest text-[#65a30d] uppercase mb-4 block">WHO WE ARE</span>
            <h2 className="text-4xl lg:text-[3.5rem] leading-[1.1] font-bold text-slate-800 mb-6">
              Crafting Natural <br/> Spaces That <br/> Elevate Life.
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-10">
              Since 2009, Star Gardens has been transforming ordinary spaces into extraordinary green environments. What started as a passion for plants has grown into one of India's most trusted landscaping and green solutions companies.
            </p>
            
            <div className="grid grid-cols-2 gap-x-8 gap-y-10">
              <div className="flex gap-4">
                <i className='bx bx-leaf text-3xl text-[#65a30d]'></i>
                <div>
                  <h4 className="font-bold text-slate-800 mb-1">Sustainable <br/> Approach</h4>
                </div>
              </div>
              <div className="flex gap-4">
                <i className='bx bx-palette text-3xl text-[#65a30d]'></i>
                <div>
                  <h4 className="font-bold text-slate-800 mb-1">Design Driven <br/> Solutions</h4>
                </div>
              </div>
              <div className="flex gap-4">
                <i className='bx bx-group text-3xl text-[#65a30d]'></i>
                <div>
                  <h4 className="font-bold text-slate-800 mb-1">Expert <br/> Team</h4>
                </div>
              </div>
              <div className="flex gap-4">
                <i className='bx bx-git-merge text-3xl text-[#65a30d]'></i>
                <div>
                  <h4 className="font-bold text-slate-800 mb-1">End to End <br/> Services</h4>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Images (Bento Grid) */}
          <motion.div 
            variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } }}
            className="relative h-[600px]"
          >
            {/* Arched image */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-0 top-0 w-[55%] h-[80%] rounded-t-full overflow-hidden shadow-xl z-10"
            >
              <img src="/assets/about-arch.jpg" alt="Lush Garden Path" className="w-full h-full object-cover" />
            </motion.div>
            
            {/* Top Right image */}
            <motion.div 
              animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute right-0 top-10 w-[40%] h-[35%] rounded-2xl overflow-hidden shadow-lg"
            >
              <img src="/assets/about-tr.jpg" alt="Night Pathway" className="w-full h-full object-cover" />
            </motion.div>
            
            {/* Bottom Right image */}
            <motion.div 
              animate={{ y: [0, -12, 0], x: [0, 8, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute right-0 bottom-10 w-[45%] h-[40%] rounded-2xl overflow-hidden shadow-lg z-20"
            >
              <img src="/assets/about-br.jpg" alt="Sunny Garden Path" className="w-full h-full object-cover" />
            </motion.div>

            {/* Our Mission Card */}
            <div className="absolute -left-6 bottom-4 bg-[#032310] text-white p-7 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.4)] w-[65%] max-w-[320px] z-30 border border-white/5">
              <div className="w-14 h-14 bg-[#0a391c] rounded-[14px] flex items-center justify-center mb-5 shadow-inner">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#a3e635" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 20c0 0 3-4 3-7v-1"></path>
                  <path d="M14 12c3-1 6-1 7-4-1-2-4-2-6 1-2 3-2 6-2 6"></path>
                  <path d="M14 12c-3-1-6-1-7-4 1-2 4-2 6 1 2 3 2 6 2 6"></path>
                  <path d="M11 12c0-4-2-7-5-8-2-1-3 1-1 3 3 3 6 5 6 5"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-wide">Our Mission</h3>
              <p className="text-[0.9rem] text-white/95 leading-[1.7] font-medium">
                To create sustainable, beautiful and healthy green spaces that enhance well-being and add lasting value.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 3. Our Journey in Numbers */}
      <section className="bg-[#0a2f15] py-20 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
          <div className="mb-12">
            <span className="text-[0.7rem] font-bold tracking-widest text-[#65a30d] uppercase mb-3 block">OUR JOURNEY IN NUMBERS</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Growing Greener <br/> Every Day</h2>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center divide-x divide-white/10"
          >
            {[
              { icon: 'bx-medal', to: 15, suffix: '+', label: 'Years of Excellence' },
              { icon: 'bx-briefcase', to: 500, suffix: '+', label: 'Projects Completed' },
              { icon: 'bx-leaf', to: 70, suffix: '+', label: 'Acres of Nurseries' },
              { icon: 'bx-building-house', to: 100, suffix: '+', label: 'Corporate Clients' },
              { icon: 'bx-spa', to: 50, suffix: 'K+', label: 'Plants Installed' },
              { icon: 'bx-map-pin', to: 25, suffix: '+', label: 'Cities Served' }
            ].map((stat, idx) => (
              <motion.div key={idx} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="px-4">
                <i className={`bx ${stat.icon} text-4xl text-[#65a30d] mb-4 block`}></i>
                <h3 className="text-4xl font-bold text-white mb-2">
                  <AnimatedCounter to={stat.to} suffix={stat.suffix} />
                </h3>
                <p className="text-sm text-white/70 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. Our Story */}
      <section className="py-20 lg:py-28 bg-[#fdfbf7]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Content */}
          <div>
            <span className="text-[0.75rem] font-bold tracking-widest text-[#65a30d] uppercase mb-4 block">OUR STORY</span>
            <h2 className="text-4xl lg:text-[3rem] leading-[1.1] font-bold text-slate-800 mb-6">
              Rooted in Passion. <br/> Grown with Purpose.
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-12">
              Star Gardens was founded with a simple belief - that greenery has the power to transform lives and spaces. Over the years, our dedication, expertise and commitment to quality have helped us build long-lasting relationships and world-class landscapes.
            </p>
            {/* Story Image */}
            <motion.div 
              initial={{ opacity: 0, clipPath: "circle(0% at 50% 50%)" }}
              whileInView={{ opacity: 1, clipPath: "circle(150% at 50% 50%)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="relative h-64 rounded-xl overflow-hidden mt-8"
            >
              <img src="/assets/our-story.jpg" alt="Illuminated Garden Pathway" className="w-full h-full object-cover rounded-xl hover:scale-110 transition-transform duration-700" />
            </motion.div>
          </div>

          {/* Right Timeline */}
          <div className="lg:pl-12">
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, margin: "-100px" }}
              variants={{ visible: { transition: { staggerChildren: 0.25 } } }}
              className="relative border-l-2 border-[#65a30d]/30 pl-8 space-y-12 py-4"
            >
              {[
                { year: 2009, text: "Star Gardens was founded in Bangalore with a vision to bring nature closer to people." },
                { year: 2012, text: "Expanded our nursery and introduced indoor plant solutions." },
                { year: 2015, text: "Completed 100+ corporate landscaping projects across India." },
                { year: 2018, text: "Launched plant rental and maintenance services for businesses." },
                { year: 2021, text: "Crossed 50,000+ plants installed and 500+ successful projects." },
                { year: 2024, text: "Continuing our mission to build a greener and sustainable future." }
              ].map((item, idx) => (
                <motion.div key={idx} variants={{ hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } }} className="relative">
                  <motion.div 
                     variants={{ hidden: { scale: 0 }, visible: { scale: 1, transition: { type: "spring", stiffness: 100 } } }} 
                     className="absolute -left-[41px] top-1 w-5 h-5 bg-[#65a30d] rounded-full border-4 border-[#fdfbf7]"
                  ></motion.div>
                  <h3 className="text-xl font-bold text-[#65a30d] mb-2">
                     <AnimatedCounter from={1995} to={item.year} />
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </section>

      {/* 5. Why Choose Us / Promise */}
      <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
        {/* No decorative overlay on the right */}
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
          <div className="mb-16">
            <span className="text-[0.8rem] font-bold tracking-widest text-[#65a30d] uppercase mb-4 block">WHY CHOOSE US</span>
            <h2 className="text-4xl lg:text-[3.2rem] font-serif font-bold text-[#1e293b] tracking-tight">The Star Gardens Promise</h2>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 relative"
          >
            {[
              { icon: 'bx-spa', title: 'Own Nurseries', desc: 'Over 70 acres of nurseries ensure healthy, high-quality plants all year round.' },
              { icon: 'bx-leaf', title: 'Expert Team', desc: 'Horticulturists, designers and technicians with deep industry expertise.' },
              { icon: 'bx-group', title: 'Custom Solutions', desc: 'Tailored green solutions that suit your space, needs and budget.' },
              { icon: 'bx-shield-quarter', title: 'Premium Quality', desc: 'We use top-quality plants, planters and materials.' },
              { icon: 'bx-shield', title: 'Timely Delivery', desc: 'On-time execution with strict quality checks at every step.' },
              { icon: 'bx-check-shield', title: 'Aftercare Support', desc: 'Dedicated maintenance and AMC services for long-term care.' }
            ].map((item, idx) => (
              <motion.div key={idx} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="bg-white rounded-[24px] p-6 lg:p-7 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 group border border-gray-50 flex flex-col h-full relative z-10">
                <div className="w-[52px] h-[52px] bg-[#65a30d]/10 rounded-full flex items-center justify-center mb-6">
                  <i className={`bx ${item.icon} text-2xl text-[#65a30d]`}></i>
                </div>
                <h4 className="font-bold text-slate-800 mb-3 text-lg leading-tight">{item.title}</h4>
                <p className="text-slate-500 text-[0.85rem] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default About;
