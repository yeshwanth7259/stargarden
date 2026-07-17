import React from 'react';
import { motion } from 'framer-motion';

const Footer = ({ onNavigate }) => {
  const handleNav = (e, path) => {
    e.preventDefault();
    if (onNavigate) onNavigate(path);
  };

  return (
    <footer className="relative bg-[#f4fbf4] border-t border-[#dcebdc] pt-20 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-[1500px] mx-auto px-6 lg:px-10 relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-5 lg:divide-x divide-[#dcebdc] gap-y-12 lg:gap-y-0">

          <div className="lg:col-span-1 lg:pr-10">
            <a href="#" onClick={(e) => handleNav(e, 'home')} className="block mb-8">
              <img src="/assets/brand-logo.png" alt="Star Gardens" className="w-[200px] md:w-[260px] lg:w-[320px] h-14 md:h-16 lg:h-[80px] object-cover object-center" />
            </a>

            <p className="text-[0.95rem] mb-8 max-w-[320px] text-slate-700 font-medium leading-relaxed">
              Premium landscaping, indoor plants, and maintenance solutions for corporate and residential spaces.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-[#1b8b22]/20 flex items-center justify-center text-[#1b8b22] text-lg transition-all duration-300 hover:bg-[#65a30d] hover:text-white hover:shadow-lg hover:-translate-y-1"><i className='bx bxl-facebook'></i></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-[#1b8b22]/20 flex items-center justify-center text-[#1b8b22] text-lg transition-all duration-300 hover:bg-[#65a30d] hover:text-white hover:shadow-lg hover:-translate-y-1"><i className='bx bxl-instagram'></i></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-[#1b8b22]/20 flex items-center justify-center text-[#1b8b22] text-lg transition-all duration-300 hover:bg-[#65a30d] hover:text-white hover:shadow-lg hover:-translate-y-1"><i className='bx bxl-linkedin'></i></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-[#1b8b22]/20 flex items-center justify-center text-[#1b8b22] text-lg transition-all duration-300 hover:bg-[#65a30d] hover:text-white hover:shadow-lg hover:-translate-y-1"><i className='bx bxl-youtube'></i></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-[#1b8b22]/20 flex items-center justify-center text-[#1b8b22] text-lg transition-all duration-300 hover:bg-[#65a30d] hover:text-white hover:shadow-lg hover:-translate-y-1"><i className='bx bxl-pinterest'></i></a>
            </div>
          </div>

          <div className="lg:px-10">
            <h4 className="text-[#0a1f10] font-black text-[1.05rem] mb-8 uppercase tracking-widest relative inline-block after:content-[''] after:absolute after:-bottom-2.5 after:left-0 after:w-12 after:h-1 after:bg-[#65a30d] after:rounded-full">QUICK LINKS</h4>
            <ul className="space-y-4">
              <li><a href="#" onClick={(e) => handleNav(e, 'home')} className="inline-block text-slate-700 text-[0.95rem] hover:text-[#65a30d] font-semibold transition-all duration-300 hover:translate-x-1.5">Home</a></li>
              <li><a href="#" onClick={(e) => handleNav(e, 'about')} className="inline-block text-slate-700 text-[0.95rem] hover:text-[#65a30d] font-semibold transition-all duration-300 hover:translate-x-1.5">About Us</a></li>
              <li><a href="#" onClick={(e) => handleNav(e, 'corporate')} className="inline-block text-slate-700 text-[0.95rem] hover:text-[#65a30d] font-semibold transition-all duration-300 hover:translate-x-1.5">Corporates</a></li>
              <li><a href="#" onClick={(e) => handleNav(e, 'landscape-architecture')} className="inline-block text-slate-700 text-[0.95rem] hover:text-[#65a30d] font-semibold transition-all duration-300 hover:translate-x-1.5">Landscape Architecture</a></li>
              <li><a href="#" onClick={(e) => handleNav(e, 'services')} className="inline-block text-slate-700 text-[0.95rem] hover:text-[#65a30d] font-semibold transition-all duration-300 hover:translate-x-1.5">Services</a></li>
              <li><a href="#" onClick={(e) => handleNav(e, 'all-blogs')} className="inline-block text-slate-700 text-[0.95rem] hover:text-[#65a30d] font-semibold transition-all duration-300 hover:translate-x-1.5">Blog</a></li>
              <li><a href="#" onClick={(e) => handleNav(e, 'contact')} className="inline-block text-slate-700 text-[0.95rem] hover:text-[#65a30d] font-semibold transition-all duration-300 hover:translate-x-1.5">Contact</a></li>
            </ul>
          </div>

          <div className="lg:px-10">
            <h4 className="text-[#0a1f10] font-black text-[1.05rem] mb-8 uppercase tracking-widest relative inline-block after:content-[''] after:absolute after:-bottom-2.5 after:left-0 after:w-12 after:h-1 after:bg-[#65a30d] after:rounded-full">OUR SERVICES</h4>
            <ul className="space-y-4">
              <li><a href="#" onClick={(e) => handleNav(e, 'service-corporate-landscaping')} className="inline-block text-slate-700 text-[0.95rem] hover:text-[#65a30d] font-semibold transition-all duration-300 hover:translate-x-1.5">Corporate Landscaping</a></li>
              <li><a href="#" onClick={(e) => handleNav(e, 'service-indoor-plants')} className="inline-block text-slate-700 text-[0.95rem] hover:text-[#65a30d] font-semibold transition-all duration-300 hover:translate-x-1.5">Indoor Plants</a></li>
              <li><a href="#" onClick={(e) => handleNav(e, 'service-vertical-gardens')} className="inline-block text-slate-700 text-[0.95rem] hover:text-[#65a30d] font-semibold transition-all duration-300 hover:translate-x-1.5">Vertical Gardens</a></li>
              <li><a href="#" onClick={(e) => handleNav(e, 'service-terrace-gardens')} className="inline-block text-slate-700 text-[0.95rem] hover:text-[#65a30d] font-semibold transition-all duration-300 hover:translate-x-1.5">Terrace Gardens</a></li>
              <li><a href="#" onClick={(e) => handleNav(e, 'service-plant-rental')} className="inline-block text-slate-700 text-[0.95rem] hover:text-[#65a30d] font-semibold transition-all duration-300 hover:translate-x-1.5">Plant Rental</a></li>
              <li><a href="#" onClick={(e) => handleNav(e, 'service-amc-services')} className="inline-block text-slate-700 text-[0.95rem] hover:text-[#65a30d] font-semibold transition-all duration-300 hover:translate-x-1.5">AMC Services</a></li>
            </ul>
          </div>

          <div className="lg:px-10">
            <h4 className="text-[#0a1f10] font-black text-[1.05rem] mb-8 uppercase tracking-widest relative inline-block after:content-[''] after:absolute after:-bottom-2.5 after:left-0 after:w-12 after:h-1 after:bg-[#65a30d] after:rounded-full">OUR PRODUCTS</h4>
            <ul className="space-y-4">
              <li><a href="#" onClick={(e) => handleNav(e, 'services')} className="inline-block text-slate-700 text-[0.95rem] hover:text-[#65a30d] font-semibold transition-all duration-300 hover:translate-x-1.5">Designer Planters</a></li>
              <li><a href="#" onClick={(e) => handleNav(e, 'services')} className="inline-block text-slate-700 text-[0.95rem] hover:text-[#65a30d] font-semibold transition-all duration-300 hover:translate-x-1.5">FRP Planters</a></li>
              <li><a href="#" onClick={(e) => handleNav(e, 'services')} className="inline-block text-slate-700 text-[0.95rem] hover:text-[#65a30d] font-semibold transition-all duration-300 hover:translate-x-1.5">Indoor Plants</a></li>
              <li><a href="#" onClick={(e) => handleNav(e, 'services')} className="inline-block text-slate-700 text-[0.95rem] hover:text-[#65a30d] font-semibold transition-all duration-300 hover:translate-x-1.5">Outdoor Plants</a></li>
              <li><a href="#" onClick={(e) => handleNav(e, 'services')} className="inline-block text-slate-700 text-[0.95rem] hover:text-[#65a30d] font-semibold transition-all duration-300 hover:translate-x-1.5">Artificial Plants</a></li>
              <li><a href="#" onClick={(e) => handleNav(e, 'services')} className="inline-block text-slate-700 text-[0.95rem] hover:text-[#65a30d] font-semibold transition-all duration-300 hover:translate-x-1.5">Garden Furniture</a></li>
            </ul>
          </div>

          <div className="lg:col-span-1 lg:pl-10">
            <h4 className="text-[#0a1f10] font-black text-[1.05rem] mb-8 uppercase tracking-widest relative inline-block after:content-[''] after:absolute after:-bottom-2.5 after:left-0 after:w-12 after:h-1 after:bg-[#65a30d] after:rounded-full">CONTACT US</h4>
            <ul className="space-y-5">
              <li className="flex gap-4 items-start group cursor-default">
                <i className='bx bx-map text-[#65a30d] text-xl mt-0.5 group-hover:scale-110 transition-transform'></i>
                <span className="text-[0.95rem] text-slate-700 font-semibold group-hover:text-[#0a1f10] transition-colors leading-relaxed">No. 18, 1st Floor, 1st Main, Srinivasa Nagar, BSK 1st Stage, Bangalore - 560050.</span>
              </li>
              <li className="flex gap-4 items-center group cursor-pointer">
                <i className='bx bx-phone text-[#65a30d] text-xl group-hover:scale-110 transition-transform'></i>
                <span className="text-[0.95rem] text-slate-700 font-semibold group-hover:text-[#65a30d] transition-colors">+91 97430 30555</span>
              </li>
              <li className="flex gap-4 items-center group cursor-pointer">
                <a href="https://wa.me/9108336666" target="_blank" rel="noopener noreferrer" className="flex gap-4 items-center w-full">
                  <i className='bx bxl-whatsapp text-[#65a30d] text-xl group-hover:scale-110 transition-transform'></i>
                  <span className="text-[0.95rem] text-slate-700 font-semibold group-hover:text-[#65a30d] transition-colors">WhatsApp: +91 91083 36666</span>
                </a>
              </li>
              <li className="flex gap-4 items-center group cursor-pointer">
                <i className='bx bx-globe text-[#65a30d] text-xl group-hover:scale-110 transition-transform'></i>
                <span className="text-[0.95rem] text-slate-700 font-semibold group-hover:text-[#65a30d] transition-colors">www.stargardens.in</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Tagline */}
        <div className="mt-16 pt-6 border-t border-[#dcebdc] text-center flex flex-col items-center justify-center">
          <p className="text-[#0a1f10]/70 text-[0.9rem] font-medium tracking-wide">
            Copyright &copy; stargrowthhub.in. All Rights Reserved.
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
