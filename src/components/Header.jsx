import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = ({ onOpenQuote, onOpenAuth, onNavigate, currentPage = 'home', user, onLogout }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className="fixed top-0 left-0 w-full z-[1000] flex flex-col"
    >
      {/* Top Bar with Contact Info & Animations */}
      <div 
        className="bg-[#0a1f10] text-gray-200 text-[0.95rem] sm:text-[1rem] flex justify-center sm:justify-between items-center px-6 md:px-10 relative overflow-hidden transition-all duration-300 h-12 py-2.5 opacity-100"
      >
        {/* Shimmer Animation overlay */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[shimmer_3s_infinite]" />
        
        <div className="flex items-center gap-4 sm:gap-6 relative z-10 w-full sm:w-auto justify-center sm:justify-start">
          <a href="https://wa.me/9108336666" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-[#84cc16] transition-colors font-medium">
            <i className='bx bxl-whatsapp text-[#84cc16] animate-pulse text-lg'></i> WhatsApp: +91 91083 36666
          </a>
          <span className="w-px h-5 bg-gray-600"></span>
          <a href="mailto:abhi@stargarden.in" className="flex items-center gap-1.5 hover:text-[#84cc16] transition-colors font-medium">
            <i className='bx bx-envelope text-[#84cc16] animate-pulse delay-75 text-lg'></i> abhi@stargarden.in
          </a>
        </div>
        <div className="hidden md:flex items-center gap-4 relative z-10">
          <span className="font-bold tracking-widest text-[0.85rem] text-[#84cc16] bg-white/10 px-4 py-1.5 rounded-full">ISO 9001:2015 CERTIFIED</span>
        </div>
      </div>

      {/* Main Navigation */}
      <div className={`w-full transition-all duration-300 border-b border-gray-100 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-white shadow-[0_4px_20px_rgb(0,0,0,0.03)] py-3 lg:py-4'}`}>
        <div className="max-w-[1400px] px-4 md:px-8 lg:px-10 mx-auto flex justify-between items-center gap-4 lg:gap-8">
          <button onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="logo flex-shrink-0 cursor-pointer transition-transform hover:scale-[1.02] flex items-center relative -top-1 md:-top-1.5 lg:-top-2">
            <img src="/assets/brand-logo.png" alt="Star Gardens" className="w-[180px] md:w-[220px] lg:w-[240px] xl:w-[280px] h-12 md:h-14 lg:h-[70px] object-cover object-center" onError={(e) => { e.target.src = 'https://placehold.co/250x60/ffffff/1b8b22?text=Star+Gardens' }} />
          </button>
          
          <nav className={`md:block ${mobileMenuOpen ? 'absolute top-full left-0 w-full bg-white p-5 shadow-lg flex flex-col border-t border-gray-100' : 'hidden md:flex flex-1 justify-center'}`}>
            <ul className={`flex ${mobileMenuOpen ? 'flex-col gap-5' : 'gap-3 lg:gap-4 xl:gap-8'} items-center`}>
              <li><button onClick={() => { onNavigate('home'); setMobileMenuOpen(false); }} className={`${currentPage === 'home' ? 'text-[#1b8b22] font-semibold border-b-2 border-[#1b8b22]' : 'text-slate-700 font-medium hover:text-[#1b8b22] border-b-2 border-transparent'} text-[1.05rem] lg:text-[1.1rem] py-1 transition-colors cursor-pointer whitespace-nowrap`}>Home</button></li>
              <li><button onClick={() => { onNavigate('about'); setMobileMenuOpen(false); }} className={`${currentPage === 'about' ? 'text-[#1b8b22] font-semibold border-b-2 border-[#1b8b22]' : 'text-slate-700 font-medium hover:text-[#1b8b22] border-b-2 border-transparent'} text-[1.05rem] lg:text-[1.1rem] py-1 transition-colors cursor-pointer whitespace-nowrap`}>About Us</button></li>
              <li><button onClick={() => { onNavigate('corporate'); setMobileMenuOpen(false); }} className={`${currentPage === 'corporate' ? 'text-[#1b8b22] font-semibold border-b-2 border-[#1b8b22]' : 'text-slate-700 font-medium hover:text-[#1b8b22] border-b-2 border-transparent'} text-[1.05rem] lg:text-[1.1rem] py-1 transition-colors cursor-pointer whitespace-nowrap`}>Corporates</button></li>
              <li><button onClick={() => { onNavigate('landscape-architecture'); setMobileMenuOpen(false); }} className={`${currentPage === 'landscape-architecture' ? 'text-[#1b8b22] font-semibold border-b-2 border-[#1b8b22]' : 'text-slate-700 font-medium hover:text-[#1b8b22] border-b-2 border-transparent'} text-[1.05rem] lg:text-[1.1rem] py-1 transition-colors cursor-pointer whitespace-nowrap`}>Landscape Design</button></li>
              <li className="relative group w-full lg:w-auto">
                <button onClick={() => { onNavigate('services'); setMobileMenuOpen(false); }} className={`${currentPage.includes('service') ? 'text-[#1b8b22] font-semibold border-b-2 border-[#1b8b22]' : 'text-slate-700 font-medium hover:text-[#1b8b22] border-b-2 border-transparent'} text-[1.05rem] lg:text-[1.1rem] py-1 transition-colors cursor-pointer flex items-center gap-1 w-full lg:w-auto justify-between lg:justify-start whitespace-nowrap`}>
                  Services <i className='bx bx-chevron-down text-base'></i>
                </button>
                {/* Dropdown Menu */}
                <div className="lg:absolute lg:top-full lg:left-0 lg:pt-4 lg:opacity-0 lg:invisible lg:group-hover:opacity-100 lg:group-hover:visible transition-all duration-300 lg:transform lg:origin-top lg:group-hover:translate-y-0 lg:translate-y-2 z-50 hidden lg:block group-hover:block w-full lg:w-[240px] mt-2 lg:mt-0">
                  <ul className="bg-gray-50 lg:bg-white rounded-xl lg:shadow-xl lg:border border-gray-100 py-2 flex flex-col overflow-hidden">
                    {[
                      { id: 'rental-plants', name: 'Rental Plants' },
                      { id: 'landscape-work', name: 'Landscape Design' },
                      { id: 'vertical-gardening', name: 'Vertical Gardening' },
                      { id: 'balcony-garden', name: 'Balcony Garden' },
                      { id: 'terrace-garden', name: 'Terrace Garden' },
                      { id: 'indoor-plants', name: 'Indoor Plants' },
                      { id: 'kitchen-garden', name: 'Kitchen Garden' },
                      { id: 'office-plants', name: 'Office Plants' }
                    ].map(service => (
                      <li key={service.id}>
                        <button 
                          onClick={(e) => { e.stopPropagation(); onNavigate(`service-${service.id}`); setMobileMenuOpen(false); }} 
                          className="w-full text-left px-5 py-3 text-[1rem] text-slate-600 hover:text-[#65a30d] hover:bg-green-50/80 transition-colors cursor-pointer font-medium"
                        >
                          {service.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              <li><button onClick={() => { onNavigate('all-blogs'); setMobileMenuOpen(false); }} className={`${currentPage === 'all-blogs' ? 'text-[#1b8b22] font-semibold border-b-2 border-[#1b8b22]' : 'text-slate-700 font-medium hover:text-[#1b8b22] border-b-2 border-transparent'} text-[1.05rem] lg:text-[1.1rem] py-1 transition-colors cursor-pointer whitespace-nowrap`}>Blog</button></li>
              <li><button onClick={() => { onNavigate('contact'); setMobileMenuOpen(false); }} className={`${currentPage === 'contact' ? 'text-[#1b8b22] font-semibold border-b-2 border-[#1b8b22]' : 'text-slate-700 font-medium hover:text-[#1b8b22] border-b-2 border-transparent'} text-[1.05rem] lg:text-[1.1rem] py-1 transition-colors cursor-pointer whitespace-nowrap`}>Contact</button></li>
              
              {user ? (
                <li className="relative group ml-0 lg:ml-2">
                  <button className="text-[#1b8b22] font-semibold text-[1.05rem] lg:text-[1.1rem] py-1 transition-colors cursor-pointer flex items-center gap-1.5 whitespace-nowrap capitalize">
                    <i className='bx bxs-user-circle text-[1.35rem]'></i> 
                    {user.name}
                  </button>
                  <div className="absolute top-full left-0 lg:left-auto lg:right-0 mt-2 w-40 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-right scale-95 group-hover:scale-100 z-50 overflow-hidden">
                    <button onClick={onLogout} className="w-full text-left px-4 py-3 text-red-600 hover:bg-red-50 text-[0.95rem] font-semibold transition-colors flex items-center gap-2">
                      <i className='bx bx-log-out text-lg'></i> Logout
                    </button>
                  </div>
                </li>
              ) : (
                <li className="ml-0 lg:ml-2"><button onClick={onOpenAuth} className="text-slate-700 font-medium hover:text-[#1b8b22] text-[1.05rem] lg:text-[1.1rem] py-1 transition-colors cursor-pointer flex items-center gap-1.5 whitespace-nowrap"><i className='bx bx-user-circle text-[1.35rem]'></i> Login</button></li>
              )}
            </ul>
          </nav>
          
          <div className="hidden md:flex flex-shrink-0 items-center gap-4 lg:gap-6">
            <button 
              onClick={onOpenQuote}
              className="inline-flex items-center gap-2 bg-[#65a30d] hover:bg-[#4d7c0f] text-white px-5 py-2.5 lg:px-7 lg:py-3 rounded-md font-bold text-[0.85rem] lg:text-[0.95rem] uppercase tracking-wide transition-all shadow-sm hover:shadow"
            >
              REQUEST QUOTE <i className='bx bx-right-arrow-alt text-lg lg:text-xl'></i>
            </button>
          </div>
          
          <div className="md:hidden text-slate-800 text-3xl cursor-pointer" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <i className='bx bx-menu'></i>
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}} />
    </motion.header>
  );
};

export default Header;
