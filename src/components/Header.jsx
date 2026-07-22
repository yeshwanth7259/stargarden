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
        className="bg-[#0a1f10] text-gray-200 text-[0.75rem] sm:text-[0.95rem] flex flex-col sm:flex-row justify-center sm:justify-between items-center px-4 md:px-10 relative overflow-hidden transition-all duration-300 py-1.5 sm:py-2.5 opacity-100 min-h-[3rem]"
      >
        {/* Shimmer Animation overlay */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[shimmer_3s_infinite]" />
        
        <div className="flex flex-col sm:flex-row items-center gap-0.5 sm:gap-6 relative z-10 w-full sm:w-auto justify-center sm:justify-start">
          <a href="https://wa.me/9108336666" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-[#84cc16] transition-colors font-medium whitespace-nowrap">
            <i className='bx bxl-whatsapp text-[#84cc16] animate-pulse text-base sm:text-lg'></i> WhatsApp: +91 91083 36666
          </a>
          <span className="w-px h-4 bg-gray-600 hidden sm:block"></span>
          <a href="mailto:abhi@stargarden.in" className="flex items-center gap-1.5 hover:text-[#84cc16] transition-colors font-medium whitespace-nowrap">
            <i className='bx bx-envelope text-[#84cc16] animate-pulse delay-75 text-base sm:text-lg'></i> abhi@stargarden.in
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
          
          {/* Mobile Menu Backdrop */}
          {mobileMenuOpen && (
            <div 
              className="fixed inset-0 bg-black/60 z-[1500] transition-opacity duration-300 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
          )}
          
          <nav className={`fixed md:static top-0 right-0 h-screen md:h-auto w-[280px] sm:w-[320px] md:w-auto bg-white md:bg-transparent shadow-2xl md:shadow-none z-[1600] md:z-auto transition-transform duration-300 ease-in-out transform ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:translate-x-0 md:flex flex-1 md:justify-center overflow-y-auto md:overflow-visible flex flex-col`}>
            
            {/* Mobile Drawer Header with Close Button */}
            <div className="md:hidden flex items-center justify-between p-5 border-b border-gray-100 bg-white sticky top-0 z-10">
              <span className="font-bold text-[#1b8b22] tracking-wider text-sm uppercase">Menu</span>
              <button onClick={() => setMobileMenuOpen(false)} className="text-gray-500 hover:text-red-500 text-3xl transition-colors">
                <i className='bx bx-x'></i>
              </button>
            </div>

            <ul className={`flex flex-col md:flex-row gap-0 md:gap-3 lg:gap-4 xl:gap-8 items-start md:items-center w-full pb-10 md:pb-0`}>
              <li className="w-full md:w-auto border-b border-gray-50 md:border-none">
                <button onClick={() => { onNavigate('home'); setMobileMenuOpen(false); }} className={`w-full text-left ${currentPage === 'home' ? 'text-[#1b8b22] font-semibold border-l-4 md:border-l-0 md:border-b-2 border-[#1b8b22] bg-green-50/50 md:bg-transparent' : 'text-slate-700 font-medium hover:text-[#1b8b22] border-l-4 md:border-l-0 md:border-b-2 border-transparent hover:bg-gray-50 md:hover:bg-transparent'} text-[1.05rem] lg:text-[1.1rem] py-4 px-6 md:py-1 md:px-0 transition-colors cursor-pointer whitespace-nowrap`}>Home</button>
              </li>
              <li className="w-full md:w-auto border-b border-gray-50 md:border-none">
                <button onClick={() => { onNavigate('about'); setMobileMenuOpen(false); }} className={`w-full text-left ${currentPage === 'about' ? 'text-[#1b8b22] font-semibold border-l-4 md:border-l-0 md:border-b-2 border-[#1b8b22] bg-green-50/50 md:bg-transparent' : 'text-slate-700 font-medium hover:text-[#1b8b22] border-l-4 md:border-l-0 md:border-b-2 border-transparent hover:bg-gray-50 md:hover:bg-transparent'} text-[1.05rem] lg:text-[1.1rem] py-4 px-6 md:py-1 md:px-0 transition-colors cursor-pointer whitespace-nowrap`}>About Us</button>
              </li>
              <li className="w-full md:w-auto border-b border-gray-50 md:border-none">
                <button onClick={() => { onNavigate('corporate'); setMobileMenuOpen(false); }} className={`w-full text-left ${currentPage === 'corporate' ? 'text-[#1b8b22] font-semibold border-l-4 md:border-l-0 md:border-b-2 border-[#1b8b22] bg-green-50/50 md:bg-transparent' : 'text-slate-700 font-medium hover:text-[#1b8b22] border-l-4 md:border-l-0 md:border-b-2 border-transparent hover:bg-gray-50 md:hover:bg-transparent'} text-[1.05rem] lg:text-[1.1rem] py-4 px-6 md:py-1 md:px-0 transition-colors cursor-pointer whitespace-nowrap`}>Corporates</button>
              </li>
              <li className="w-full md:w-auto border-b border-gray-50 md:border-none">
                <button onClick={() => { onNavigate('landscape-architecture'); setMobileMenuOpen(false); }} className={`w-full text-left ${currentPage === 'landscape-architecture' ? 'text-[#1b8b22] font-semibold border-l-4 md:border-l-0 md:border-b-2 border-[#1b8b22] bg-green-50/50 md:bg-transparent' : 'text-slate-700 font-medium hover:text-[#1b8b22] border-l-4 md:border-l-0 md:border-b-2 border-transparent hover:bg-gray-50 md:hover:bg-transparent'} text-[1.05rem] lg:text-[1.1rem] py-4 px-6 md:py-1 md:px-0 transition-colors cursor-pointer whitespace-nowrap`}>Landscape Design</button>
              </li>
              
              <li className="relative group w-full md:w-auto border-b border-gray-50 md:border-none">
                <button onClick={() => { onNavigate('services'); setMobileMenuOpen(false); }} className={`w-full text-left ${currentPage.includes('service') ? 'text-[#1b8b22] font-semibold border-l-4 md:border-l-0 md:border-b-2 border-[#1b8b22] bg-green-50/50 md:bg-transparent' : 'text-slate-700 font-medium hover:text-[#1b8b22] border-l-4 md:border-l-0 md:border-b-2 border-transparent hover:bg-gray-50 md:hover:bg-transparent'} text-[1.05rem] lg:text-[1.1rem] py-4 px-6 md:py-1 md:px-0 transition-colors cursor-pointer flex items-center gap-1 justify-between md:justify-start whitespace-nowrap`}>
                  Services <i className='bx bx-chevron-down text-xl md:text-base'></i>
                </button>
                {/* Dropdown Menu */}
                <div className="md:absolute md:top-full md:left-0 md:pt-4 md:opacity-0 md:invisible md:group-hover:opacity-100 md:group-hover:visible transition-all duration-300 md:transform md:origin-top md:group-hover:translate-y-0 md:translate-y-2 z-50 block md:hidden md:group-hover:block w-full md:w-[240px] mt-0 md:mt-0 bg-gray-50/50 md:bg-transparent border-t border-gray-100 md:border-none">
                  <ul className="md:bg-white md:rounded-xl md:shadow-xl md:border border-gray-100 py-2 flex flex-col overflow-hidden w-full">
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
                      <li key={service.id} className="w-full">
                        <button 
                          onClick={(e) => { e.stopPropagation(); onNavigate(`service-${service.id}`); setMobileMenuOpen(false); }} 
                          className="w-full text-left pl-10 md:px-5 py-3 text-[0.95rem] md:text-[1rem] text-slate-600 hover:text-[#65a30d] hover:bg-green-50/80 transition-colors cursor-pointer font-medium border-b border-gray-100/50 md:border-none"
                        >
                          {service.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              <li className="w-full md:w-auto border-b border-gray-50 md:border-none">
                <button onClick={() => { onNavigate('all-blogs'); setMobileMenuOpen(false); }} className={`w-full text-left ${currentPage === 'all-blogs' ? 'text-[#1b8b22] font-semibold border-l-4 md:border-l-0 md:border-b-2 border-[#1b8b22] bg-green-50/50 md:bg-transparent' : 'text-slate-700 font-medium hover:text-[#1b8b22] border-l-4 md:border-l-0 md:border-b-2 border-transparent hover:bg-gray-50 md:hover:bg-transparent'} text-[1.05rem] lg:text-[1.1rem] py-4 px-6 md:py-1 md:px-0 transition-colors cursor-pointer whitespace-nowrap`}>Blog</button>
              </li>
              <li className="w-full md:w-auto border-b border-gray-50 md:border-none">
                <button onClick={() => { onNavigate('contact'); setMobileMenuOpen(false); }} className={`w-full text-left ${currentPage === 'contact' ? 'text-[#1b8b22] font-semibold border-l-4 md:border-l-0 md:border-b-2 border-[#1b8b22] bg-green-50/50 md:bg-transparent' : 'text-slate-700 font-medium hover:text-[#1b8b22] border-l-4 md:border-l-0 md:border-b-2 border-transparent hover:bg-gray-50 md:hover:bg-transparent'} text-[1.05rem] lg:text-[1.1rem] py-4 px-6 md:py-1 md:px-0 transition-colors cursor-pointer whitespace-nowrap`}>Contact</button>
              </li>
              
              {user ? (
                <li className="relative group w-full md:w-auto border-b border-gray-50 md:border-none ml-0 lg:ml-2">
                  <button onClick={() => { onNavigate('client-portal'); setMobileMenuOpen(false); }} className={`w-full text-left font-semibold text-[1.05rem] lg:text-[1.1rem] py-4 px-6 md:py-1 md:px-0 transition-colors cursor-pointer flex items-center justify-between md:justify-start gap-1.5 whitespace-nowrap capitalize hover:bg-gray-50 md:hover:bg-transparent border-l-4 md:border-l-0 ${currentPage === 'client-portal' ? 'text-[#1b8b22] md:border-b-2 border-[#1b8b22] bg-green-50/50 md:bg-transparent' : 'text-slate-700 hover:text-[#1b8b22] border-transparent'}`}>
                    <span className="flex items-center gap-1.5"><i className='bx bxs-user-circle text-[1.35rem] text-[#1b8b22]'></i> Client Portal</span>
                    <i className='bx bx-chevron-down text-xl md:hidden text-gray-400'></i>
                  </button>
                  <div className="md:absolute md:top-full md:left-auto md:right-0 mt-0 md:mt-2 w-full md:w-40 bg-gray-50/50 md:bg-white md:rounded-xl md:shadow-xl md:border border-gray-100 md:opacity-0 md:invisible md:group-hover:opacity-100 md:group-hover:visible transition-all duration-300 md:transform md:origin-top-right md:scale-95 md:group-hover:scale-100 z-50 overflow-hidden block md:hidden md:group-hover:block">
                    <button onClick={onLogout} className="w-full text-left pl-10 md:px-4 py-4 md:py-3 text-red-600 hover:bg-red-50 text-[0.95rem] font-semibold transition-colors flex items-center gap-2">
                      <i className='bx bx-log-out text-lg'></i> Logout
                    </button>
                  </div>
                </li>
              ) : (
                <li className="w-full md:w-auto border-b border-gray-50 md:border-none ml-0 lg:ml-2">
                  <button onClick={onOpenAuth} className="w-full text-left text-slate-700 font-medium hover:text-[#1b8b22] text-[1.05rem] lg:text-[1.1rem] py-4 px-6 md:py-1 md:px-0 transition-colors cursor-pointer flex items-center gap-1.5 whitespace-nowrap hover:bg-gray-50 md:hover:bg-transparent border-l-4 border-transparent md:border-l-0"><i className='bx bx-user-circle text-[1.35rem]'></i> Login</button>
                </li>
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
