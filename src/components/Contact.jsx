import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SiteVisitModal from './SiteVisitModal';

const Contact = () => {
  const [isSiteVisitOpen, setIsSiteVisitOpen] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    const text = `New Contact Inquiry:%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Email:* ${email}%0A*Subject:* ${subject}%0A*Message:* ${message}`;
    window.open(`https://wa.me/9108336666?text=${text}`, '_blank');
    e.target.reset();
  };

  return (
    <div className="bg-[#f8fcf8] min-h-screen pt-24 font-sans text-slate-800">
      
      {/* 1. Hero Section */}
      <section className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 1.5 }}
            src="/assets/contact-hero.png" alt="Contact Star Gardens" className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl"
          >
            <span className="text-[#65a30d] font-bold text-[0.7rem] tracking-widest uppercase mb-4 block">CONTACT US</span>
            <h1 className="text-white text-5xl md:text-6xl font-serif leading-[1.1] mb-6">Let's Create <br /><span className="text-[#65a30d]">Greener</span> Spaces <br />Together</h1>
            <p className="text-white/80 text-lg mb-10 font-light leading-relaxed max-w-xl">
              Have a project in mind or need expert advice on greenery solutions? We're here to help you transform your space into something extraordinary.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:+919743030555" className="bg-[#65a30d] hover:bg-[#4d7c0f] text-white px-8 py-3.5 rounded flex items-center gap-2 font-bold text-[0.85rem] tracking-wide transition-colors hover:scale-105 shadow-lg">
                <i className='bx bx-phone-call text-xl'></i> CALL US NOW
              </a>
              <button onClick={() => setIsSiteVisitOpen(true)} className="bg-transparent border border-white text-white hover:bg-white hover:text-[#0f2e1a] px-8 py-3.5 rounded flex items-center gap-2 font-bold text-[0.85rem] tracking-wide transition-colors hover:scale-105 cursor-pointer">
                <i className='bx bx-calendar-event text-xl'></i> BOOK A SITE VISIT
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Floating Info Bar */}
      <section className="relative z-20 max-w-[1300px] mx-auto px-6 -mt-16 mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-xl shadow-2xl p-8 lg:p-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-gray-100"
        >
          {/* Location */}
          <div className="flex items-center gap-4 p-8 group">
            <div className="w-14 h-14 rounded-full bg-[#f4fbf4] text-[#1b8b22] flex items-center justify-center text-2xl group-hover:bg-[#1b8b22] group-hover:text-white transition-colors shadow-sm">
              <i className='bx bx-map'></i>
            </div>
            <div>
              <h4 className="font-bold text-slate-800 text-sm mb-1">Our Location</h4>
              <p className="text-slate-500 text-xs">Bangalore, Karnataka, India<br/>Serving across India</p>
            </div>
          </div>
          {/* Call Us */}
          <div className="flex items-center gap-4 p-8 group">
            <div className="w-14 h-14 rounded-full bg-[#f4fbf4] text-[#1b8b22] flex items-center justify-center text-2xl group-hover:bg-[#1b8b22] group-hover:text-white transition-colors shadow-sm">
              <i className='bx bx-phone-call'></i>
            </div>
            <div>
              <h4 className="font-bold text-slate-800 text-sm mb-1">Call Us</h4>
              <p className="text-slate-500 text-xs">+91 97430 30555</p>
            </div>
          </div>
          {/* WhatsApp Us */}
          <a href="https://wa.me/9108336666" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-8 group cursor-pointer">
            <div className="w-14 h-14 rounded-full bg-[#f4fbf4] text-[#1b8b22] flex items-center justify-center text-2xl group-hover:bg-[#1b8b22] group-hover:text-white transition-colors shadow-sm">
              <i className='bx bxl-whatsapp'></i>
            </div>
            <div>
              <h4 className="font-bold text-slate-800 text-sm mb-1">WhatsApp Us</h4>
              <p className="text-slate-500 text-xs">+91 91083 36666</p>
            </div>
          </a>
          {/* Working Hours */}
          <div className="flex items-center gap-4 p-8 group">
            <div className="w-14 h-14 rounded-full bg-[#f4fbf4] text-[#1b8b22] flex items-center justify-center text-2xl group-hover:bg-[#1b8b22] group-hover:text-white transition-colors shadow-sm">
              <i className='bx bx-time-five'></i>
            </div>
            <div>
              <h4 className="font-bold text-slate-800 text-sm mb-1">Working Hours</h4>
              <p className="text-slate-500 text-xs">Mon - Sat: 9:00 AM - 6:00 PM<br/>Sunday: Closed</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 3. Main Form & Info Section */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Form Side */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { 
                opacity: 1, 
                x: 0, 
                transition: { duration: 0.6, type: 'spring', staggerChildren: 0.1, delayChildren: 0.2 } 
              }
            }}
            className="bg-white p-8 lg:p-10 rounded-[2rem] shadow-[0_10px_40px_rgba(10,31,16,0.06)] relative overflow-hidden border border-gray-50 h-fit self-start"
          >
            {/* Subtle background leaf pattern */}
            <div className="absolute -bottom-20 -left-20 opacity-[0.03] pointer-events-none w-64 h-64 bg-[url('/assets/leaf-pattern.png')] bg-contain bg-no-repeat"></div>
            
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <h2 className="text-3xl lg:text-[2.2rem] font-serif font-bold text-[#0a1f10] mb-3 tracking-tight">Send Us a Message</h2>
              <p className="text-slate-500 text-[0.95rem] mb-8 leading-relaxed max-w-md">
                Fill in the details below and our team will get back to you shortly.
              </p>
            </motion.div>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="group">
                  <label htmlFor="name" className="block text-[0.75rem] font-bold text-slate-700 mb-2 uppercase tracking-wide">Your Name *</label>
                  <div className="relative">
                    <i className='bx bx-user absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#65a30d] transition-colors'></i>
                    <input type="text" id="name" name="name" required placeholder="Enter your full name" className="w-full bg-slate-50/50 border border-slate-200 rounded-xl py-3.5 pl-11 pr-4 text-[0.95rem] focus:outline-none focus:border-[#65a30d] focus:ring-4 focus:ring-[#65a30d]/10 transition-all focus:bg-white" />
                  </div>
                </motion.div>
                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="group">
                  <label htmlFor="phone" className="block text-[0.75rem] font-bold text-slate-700 mb-2 uppercase tracking-wide">Phone Number *</label>
                  <div className="relative">
                    <i className='bx bx-phone absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#65a30d] transition-colors'></i>
                    <input type="tel" id="phone" name="phone" required placeholder="Enter your phone number" className="w-full bg-slate-50/50 border border-slate-200 rounded-xl py-3.5 pl-11 pr-4 text-[0.95rem] focus:outline-none focus:border-[#65a30d] focus:ring-4 focus:ring-[#65a30d]/10 transition-all focus:bg-white" />
                  </div>
                </motion.div>
              </div>

              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="group">
                <label htmlFor="email" className="block text-[0.75rem] font-bold text-slate-700 mb-2 uppercase tracking-wide">Email Address *</label>
                <div className="relative">
                  <i className='bx bx-envelope absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#65a30d] transition-colors'></i>
                  <input type="email" id="email" name="email" required placeholder="Enter your email address" className="w-full bg-slate-50/50 border border-slate-200 rounded-xl py-3.5 pl-11 pr-4 text-[0.95rem] focus:outline-none focus:border-[#65a30d] focus:ring-4 focus:ring-[#65a30d]/10 transition-all focus:bg-white" />
                </div>
              </motion.div>

              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="group">
                <label htmlFor="subject" className="block text-[0.75rem] font-bold text-slate-700 mb-2 uppercase tracking-wide">Subject *</label>
                <div className="relative">
                  <select id="subject" name="subject" required defaultValue="" className="w-full bg-slate-50/50 border border-slate-200 rounded-xl py-3.5 px-4 text-[0.95rem] focus:outline-none focus:border-[#65a30d] focus:ring-4 focus:ring-[#65a30d]/10 transition-all appearance-none text-slate-600 focus:bg-white">
                    <option value="" disabled>Select a subject</option>
                    <option value="landscape">Landscape Design</option>
                    <option value="indoor">Indoor Plants</option>
                    <option value="maintenance">Garden Maintenance</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                  <i className='bx bx-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl pointer-events-none group-focus-within:text-[#65a30d] transition-colors'></i>
                </div>
              </motion.div>

              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="group">
                <label htmlFor="message" className="block text-[0.75rem] font-bold text-slate-700 mb-2 uppercase tracking-wide">Message *</label>
                <textarea id="message" name="message" required placeholder="Tell us about your project or requirement..." rows="4" className="w-full bg-slate-50/50 border border-slate-200 rounded-xl py-4 px-4 text-[0.95rem] focus:outline-none focus:border-[#65a30d] focus:ring-4 focus:ring-[#65a30d]/10 transition-all resize-none focus:bg-white"></textarea>
              </motion.div>

              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex items-start gap-3">
                <input type="checkbox" id="privacy" required className="mt-1 w-4 h-4 accent-[#65a30d] cursor-pointer rounded" />
                <label htmlFor="privacy" className="text-xs text-slate-500 leading-relaxed cursor-pointer">
                  I agree to the <a href="#" className="text-[#65a30d] font-bold hover:underline">Privacy Policy</a> and <a href="#" className="text-[#65a30d] font-bold hover:underline">Terms & Conditions</a>.
                </label>
              </motion.div>

              <motion.button 
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-[#0a1f10] hover:bg-[#1b8b22] text-white py-4 rounded-xl font-bold text-[0.9rem] tracking-widest uppercase transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_10px_20px_rgba(10,31,16,0.15)]"
              >
                {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'} {!isSubmitting && <i className='bx bx-send group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform'></i>}
              </motion.button>
            </form>
          </motion.div>

          {/* Info Side */}
          <div className="flex flex-col gap-8">
            <motion.div 
              initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, type: 'spring' }}
            >
              <h2 className="text-3xl font-serif font-bold text-slate-800 mb-4">We'd Love to Hear From You</h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-8">
                Whether it's a small balcony garden or a large-scale corporate landscape, Star Gardens is here to bring your vision to life with creativity, quality and care.
              </p>

              <div className="space-y-8">
                {[
                  { icon: 'bx-headphone', title: 'Expert Consultation', desc: 'Get professional advice from our landscape experts.' },
                  { icon: 'bx-leaf', title: 'Customized Solutions', desc: 'Tailored greenery solutions to match your needs and space.' },
                  { icon: 'bx-check-shield', title: 'Quality & Commitment', desc: 'We ensure quality, timely execution and long-term support.' },
                  { icon: 'bx-map-pin', title: 'Pan India Services', desc: 'Serving corporates and residences across major cities in India.' }
                ].map((item, idx) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1, duration: 0.4 }} viewport={{ once: true }}
                    key={idx} className="flex gap-5 group"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#f4fbf4] border border-[#1b8b22]/20 text-[#1b8b22] flex items-center justify-center text-2xl flex-shrink-0 group-hover:bg-[#1b8b22] group-hover:text-white transition-all duration-300">
                      <i className={`bx ${item.icon}`}></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-[0.85rem] mb-1">{item.title}</h4>
                      <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Sidebar Image */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3, type: 'spring' }}
              className="w-full h-56 lg:h-full min-h-[250px] rounded-3xl overflow-hidden shadow-xl"
            >
              <img src="/assets/contact-sidebar.png" alt="Star Gardens Pathway" className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" onError={(e) => { e.target.src = '/assets/banner.jpg' }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Map & Office Details */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl shadow-2xl shadow-green-900/10 overflow-hidden flex flex-col lg:flex-row border border-gray-100"
        >
          {/* Office Details */}
          <div className="w-full lg:w-[45%] bg-gradient-to-br from-[#0a1f10] to-[#143a1e] p-10 lg:p-16 relative overflow-hidden flex flex-col justify-center">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 opacity-10 bg-[url('/assets/leaf-pattern.png')] bg-contain bg-no-repeat pointer-events-none mix-blend-overlay"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#84cc16]/10 rounded-full blur-3xl"></div>
            
            <h3 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-8 border-b border-white/10 pb-6 relative z-10">Our Office</h3>
            
            <div className="space-y-8 relative z-10">
              <motion.div whileHover={{ x: 5 }} className="flex gap-5 items-start">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 backdrop-blur-sm border border-white/10">
                  <i className='bx bx-map text-[#84cc16] text-xl'></i>
                </div>
                <div>
                  <h4 className="text-white font-bold text-[0.95rem] mb-2 tracking-wide">Star Gardens Head Office</h4>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">#18, 1st floor, BSK 1st stage, Srinivasa Nagar 80 feet Main Road, Bengaluru, Karnataka 560050.</p>
                  
                  <h4 className="text-white font-bold text-[0.95rem] mb-2 tracking-wide">Wholesale Plant Nursery</h4>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">Kumbalgodu, Bengaluru</p>

                  <h4 className="text-white font-bold text-[0.95rem] mb-1 tracking-wide">Abhishek Suhas</h4>
                </div>
              </motion.div>
              
              <motion.div whileHover={{ x: 5 }} className="flex gap-5 items-center">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 backdrop-blur-sm border border-white/10">
                  <i className='bx bx-phone text-[#84cc16] text-xl'></i>
                </div>
                <p className="text-gray-300 text-[0.95rem] font-medium">Mob: +91 97430 30555</p>
              </motion.div>
              
              <motion.div whileHover={{ x: 5 }} className="flex gap-5 items-center">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 backdrop-blur-sm border border-white/10">
                  <i className='bx bxl-whatsapp text-[#84cc16] text-xl'></i>
                </div>
                <a href="https://wa.me/9108336666" target="_blank" rel="noopener noreferrer" className="text-gray-300 text-[0.95rem] font-medium hover:text-white transition-colors">+91 91083 36666</a>
              </motion.div>

              <motion.div whileHover={{ x: 5 }} className="flex gap-5 items-start">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 backdrop-blur-sm border border-white/10">
                  <i className='bx bx-globe text-[#84cc16] text-xl'></i>
                </div>
                <div className="flex flex-col gap-2 pt-2">
                  <a href="https://www.stargardens.in" className="text-gray-300 hover:text-white text-[0.95rem] font-medium transition-colors">www.stargardens.in</a>
                  <a href="https://www.mystargardens.com" className="text-gray-300 hover:text-white text-[0.95rem] font-medium transition-colors">www.mystargardens.com</a>
                </div>
              </motion.div>

              <div className="pt-8 mt-4 border-t border-white/10">
                <a href="https://maps.app.goo.gl/QmaznohxsXyyhuUq9" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#84cc16] hover:bg-[#65a30d] text-[#0a1f10] hover:text-white px-6 py-3 rounded-lg font-bold text-xs uppercase tracking-widest transition-all hover:shadow-lg hover:-translate-y-1">
                  Open in Google Maps <i className='bx bx-map-alt text-lg'></i>
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="w-full lg:w-[55%] h-[400px] lg:h-auto min-h-[500px]">
            <iframe 
              src="https://maps.google.com/maps?q=Star%20Gardens,%20Srinivasa%20Nagar,%20Bengaluru&t=&z=13&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale-[10%] contrast-[1.05]"
            ></iframe>
          </div>
        </motion.div>
      </section>

      <SiteVisitModal isOpen={isSiteVisitOpen} onClose={() => setIsSiteVisitOpen(false)} />
    </div>
  );
};

export default Contact;
