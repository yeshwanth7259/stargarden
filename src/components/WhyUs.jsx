import React from 'react';
import { motion } from 'framer-motion';

const WhyUs = () => {
  const features = [
    { icon: 'bx-landscape', title: 'Own Nurseries', desc: 'Quality plants from our 70+ acres of nurseries' },
    { icon: 'bx-user-pin', title: 'Expert Team', desc: 'Experienced landscape architects & horticulturists' },
    { icon: 'bx-customize', title: 'Custom Solutions', desc: 'Tailored green solutions for every space' },
    { icon: 'bx-diamond', title: 'Premium Quality', desc: 'Best plants, planters & materials' },
    { icon: 'bx-time-five', title: 'Timely Delivery', desc: 'On-time execution with quality assurance' },
    { icon: 'bx-support', title: 'After Care Support', desc: 'Ongoing maintenance & dedicated support' }
  ];

  const industries = [
    { icon: 'bx-buildings', label: 'Corporate Offices' },
    { icon: 'bx-laptop', label: 'IT Parks' },
    { icon: 'bx-hotel', label: 'Hotels & Resorts' },
    { icon: 'bx-plus-medical', label: 'Hospitals' },
    { icon: 'bx-book-open', label: 'Schools & Colleges' },
    { icon: 'bx-home-heart', label: 'Residential Villas' },
    { icon: 'bx-building-house', label: 'Builders & Apartments' },
    { icon: 'bx-shopping-bag', label: 'Shopping Malls' }
  ];

  return (
    <section className="py-20 bg-white" id="why-us">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column - Why Choose Us */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <span className="text-[#1b8b22] font-bold text-[0.65rem] tracking-widest uppercase mb-3 block">WHY CHOOSE STAR GARDENS</span>
            <h2 className="text-4xl md:text-5xl font-serif text-slate-800 font-medium leading-tight mb-12">Excellence Rooted<br />in Every Detail</h2>
            
            {/* Added max-w-lg to make the grid more compact, aligning the left column of icons better with the title */}
            <motion.div 
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-y-10 gap-x-2 max-w-[500px]"
            >
              {features.map((item, idx) => (
                <motion.div 
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                  key={idx} 
                  className="flex flex-col items-center text-center group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-full border border-[#1b8b22]/40 flex items-center justify-center text-2xl text-[#1b8b22] mb-4 shadow-sm transition-all duration-500 group-hover:bg-[#1b8b22] group-hover:text-white group-hover:-translate-y-2 group-hover:shadow-lg">
                    <i className={`bx ${item.icon} transition-transform duration-500 group-hover:rotate-12`}></i>
                  </div>
                  <h4 className="text-[0.8rem] font-bold text-slate-800 mb-2 transition-colors group-hover:text-[#1b8b22]">{item.title}</h4>
                  <p className="text-[0.65rem] text-slate-500 leading-relaxed font-medium px-1">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Middle Column - Arched Image */}
          <motion.div 
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="lg:col-span-3 hidden lg:block h-full min-h-[500px] relative"
          >
            <motion.div 
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full rounded-t-full rounded-b-[2rem] overflow-hidden shadow-2xl ring-4 ring-[#1b8b22]/20"
            >
              <motion.img 
                initial={{ scale: 1.4 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                src="/assets/arch-bg.jpg" 
                alt="Path through tropical garden" 
                className="w-full h-full object-cover" 
              />
            </motion.div>
          </motion.div>

          {/* Right Column - Sustainability & Industries */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-4 flex flex-col gap-6"
          >
            
            {/* Sustainability Card */}
            <div className="rounded-[2rem] p-8 lg:p-10 shadow-lg relative overflow-hidden bg-[#062411]">
              {/* Background image overlay */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-50 mix-blend-luminosity"
                style={{ backgroundImage: "url('/assets/sustainability-bg.jpg')" }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#062411] to-transparent opacity-80"></div>
              
              <div className="relative z-10">
                <span className="text-[#65a30d] text-[0.65rem] font-bold tracking-widest uppercase mb-3 block">SUSTAINABILITY</span>
                <h3 className="text-white text-3xl font-serif mb-4 leading-tight">Building A<br />Greener Tomorrow</h3>
                <p className="text-white/80 text-[0.75rem] leading-relaxed mb-8 font-medium">Our eco-friendly practices, responsible sourcing and efficient irrigation help create sustainable spaces for a better tomorrow.</p>
                
                <div className="grid grid-cols-4 gap-2">
                  <div className="flex flex-col items-center text-center gap-2">
                    <i className='bx bx-leaf text-[#65a30d] text-2xl'></i>
                    <span className="text-white/90 text-[0.6rem] font-medium leading-tight">Eco<br/>Materials</span>
                  </div>
                  <div className="flex flex-col items-center text-center gap-2">
                    <i className='bx bx-water text-[#65a30d] text-2xl'></i>
                    <span className="text-white/90 text-[0.6rem] font-medium leading-tight">Water<br/>Conservation</span>
                  </div>
                  <div className="flex flex-col items-center text-center gap-2">
                    <i className='bx bx-recycle text-[#65a30d] text-2xl'></i>
                    <span className="text-white/90 text-[0.6rem] font-medium leading-tight">Responsible<br/>Sourcing</span>
                  </div>
                  <div className="flex flex-col items-center text-center gap-2">
                    <i className='bx bx-trash text-[#65a30d] text-2xl'></i>
                    <span className="text-white/90 text-[0.6rem] font-medium leading-tight">Waste<br/>Reduction</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Industries We Serve Card */}
            <div className="bg-white border border-gray-100 rounded-[2rem] p-8 lg:p-10 shadow-lg shadow-gray-200/50 flex-1">
              <span className="text-[#1b8b22] text-[0.65rem] font-bold tracking-widest uppercase mb-8 block">INDUSTRIES WE SERVE</span>
              
              <motion.div 
                variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-4 gap-y-8 gap-x-2"
              >
                {industries.map((ind, idx) => (
                  <motion.div 
                    variants={{ hidden: { opacity: 0, scale: 0.5 }, visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 120 } } }}
                    key={idx} 
                    className="flex flex-col items-center text-center gap-2 group cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#f4fbf4] flex items-center justify-center text-[#1b8b22] text-xl transition-all duration-500 group-hover:bg-[#1b8b22] group-hover:text-white shadow-sm group-hover:-translate-y-1 group-hover:shadow-md">
                      <i className={`bx ${ind.icon} transition-transform duration-500 group-hover:rotate-y-180`}></i>
                    </div>
                    <span className="text-slate-600 text-[0.65rem] font-bold leading-tight group-hover:text-[#1b8b22] transition-colors">{ind.label}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyUs;
