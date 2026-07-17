import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import QuoteModal from './QuoteModal';

const AnimatedCounter = ({ from = 0, to, suffix = '' }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(from);
  const rounded = useTransform(count, Math.round);
  const [display, setDisplay] = useState(from + suffix);

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { 
        duration: 2.5, 
        ease: [0.16, 1, 0.3, 1] // Custom snappy ease
      });
      return controls.stop;
    }
  }, [inView, count, to]);

  useEffect(() => {
    return rounded.onChange((v) => setDisplay(v + suffix));
  }, [rounded, suffix]);

  return (
    <motion.span 
      ref={ref}
      initial={{ scale: 0.5, filter: 'blur(10px)', opacity: 0 }}
      animate={inView ? { scale: 1, filter: 'blur(0px)', opacity: 1 } : {}}
      transition={{ duration: 0.8, type: 'spring', bounce: 0.5 }}
      className="inline-block"
    >
      {display}
    </motion.span>
  );
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const Hero = () => {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <section className="relative min-h-[100svh] lg:min-h-[95vh] flex flex-col justify-start lg:justify-center pt-40 sm:pt-44 lg:pt-48 pb-24 sm:pb-20 overflow-hidden" id="home">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="w-full h-full"
        >
          <img 
            src="/assets/banner.jpg" 
            alt="Beautiful landscape" 
            className="w-full h-full object-cover"
          />
        </motion.div>
        {/* Improved gradient overlays for better text readability */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#020617]/95 via-[#020617]/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#020617]/80"></div>
      </div>
      
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 relative z-10">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
          }}
          className="text-white flex flex-col justify-center"
        >
          <motion.div variants={fadeUpVariants} className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md w-fit mb-5 sm:mb-6">
            <span className="text-[0.65rem] sm:text-[0.75rem] font-bold tracking-widest text-[#84cc16] uppercase">Premium Landscaping & Green Solutions</span>
          </motion.div>
          
          <motion.h1 variants={fadeUpVariants} className="text-white text-[2.5rem] leading-[1.15] sm:text-6xl lg:text-[5.5rem] sm:leading-[1.05] mb-5 sm:mb-6 font-extrabold tracking-tight">
            Green Spaces <br className="hidden sm:block" />That <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#84cc16] to-[#4d7c0f]">Inspire</span>
          </motion.h1>
          
          <motion.p variants={fadeUpVariants} className="text-[0.95rem] sm:text-lg mb-8 sm:mb-10 max-w-[580px] text-white/90 leading-relaxed font-light">
            Transforming corporate, residential, and commercial environments with innovative landscaping, indoor plants, designer planters and complete maintenance solutions.
          </motion.p>
          
          <motion.div variants={fadeUpVariants} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 mb-10 sm:mb-12">
            <button onClick={() => setIsQuoteOpen(true)} className="w-fit inline-flex items-center gap-2 bg-gradient-to-r from-[#65a30d] to-[#4d7c0f] hover:from-[#4d7c0f] hover:to-[#3f6212] text-white px-7 sm:px-8 py-3.5 rounded-full font-semibold transition-all group cursor-pointer hover:scale-105 active:scale-95 shadow-lg shadow-[#65a30d]/30">
              Request Consultation <i className='bx bx-right-arrow-alt text-xl group-hover:translate-x-1 transition-transform'></i>
            </button>
            <a href="#projects" className="w-fit inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/20 backdrop-blur-sm text-white px-7 sm:px-8 py-3.5 rounded-full font-semibold transition-all group">
              Explore Projects <i className='bx bx-right-arrow-alt text-xl group-hover:translate-x-1 transition-transform'></i>
            </a>
          </motion.div>
          
          <motion.a 
            href="https://www.instagram.com/reel/DYSN97qzAZI/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeUpVariants} 
            className="flex items-center gap-4 cursor-pointer group w-fit"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm flex items-center justify-center text-white text-xl sm:text-2xl transition-all group-hover:bg-[#84cc16] group-hover:border-[#84cc16] group-hover:shadow-[0_0_20px_rgba(132,204,22,0.4)]">
              <i className='bx bx-play ml-1'></i>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-semibold text-[0.85rem] sm:text-sm tracking-wide group-hover:text-[#84cc16] transition-colors">Watch Our Story</span>
              <span className="text-white/60 text-[0.7rem] sm:text-xs">2.45 min</span>
            </div>
          </motion.a>
        </motion.div>
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.6 } }
          }}
          className="flex flex-col justify-center lg:pl-10 relative mb-12 sm:mb-0"
        >
          {/* Decorative blur element */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#84cc16]/20 blur-[100px] rounded-full pointer-events-none z-0"></div>
          
          <div className="bg-[#111317]/90 backdrop-blur-2xl border border-white/5 rounded-3xl p-6 sm:p-8 lg:p-10 flex flex-col gap-6 sm:gap-8 relative z-10 shadow-2xl max-w-sm mx-auto w-full">
            {[
              { icon: 'bx-medal', to: 15, suffix: '+', text: 'Years of Excellence' },
              { icon: 'bx-buildings', to: 500, suffix: '+', text: 'Corporate Projects' },
              { icon: 'bx-group', to: 100, suffix: '+', text: 'Corporate Clients' },
              { icon: 'bx-leaf', to: 50, suffix: 'K+', text: 'Plants Installed' },
              { icon: 'bx-fullscreen', to: 27, suffix: '+', text: 'Lakh Sq. Ft. Landscaped' },
              { icon: 'bx-home-heart', to: 70, suffix: '+', text: 'Acres of Nurseries' },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 + (i * 0.1), duration: 0.5, type: 'spring' }}
                className="flex items-center gap-5 sm:gap-6 group cursor-default"
              >
                <div className="text-[#84cc16] text-2xl sm:text-3xl opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 w-8 flex justify-center">
                  <i className={`bx ${stat.icon}`}></i>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-white text-2xl sm:text-[1.7rem] font-bold tracking-tight leading-none mb-1 sm:mb-1.5 transition-colors">
                    <AnimatedCounter to={stat.to} suffix={stat.suffix} />
                  </h3>
                  <span className="text-gray-300 text-[0.75rem] sm:text-[0.85rem] font-medium tracking-wide">{stat.text}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
      </div>

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </section>
  );
};

export default Hero;
