import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SiteVisitModal = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const date = formData.get("date");
    const address = formData.get("address");
    const message = formData.get("message");

    const text = `Site Visit Request:%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Email:* ${email}%0A*Date:* ${date}%0A*Address:* ${address}%0A*Requirements:* ${message}`;
    window.open(`https://wa.me/9108336666?text=${text}`, '_blank');
    e.target.reset();
    onClose();
  };
  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          ></motion.div>

          {/* Modal Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
            className="relative bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-hidden z-10"
          >
            
            {/* Header */}
            <div className="bg-[#0f2e1a] px-6 py-5 flex justify-between items-center text-white relative overflow-hidden">
              {/* subtle background pattern/accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#65a30d] rounded-full opacity-20 -mr-10 -mt-10 blur-xl"></div>
              
              <div>
                <h3 className="text-2xl font-bold tracking-wide !text-white" style={{ color: 'white' }}>Book a Site Visit</h3>
                <p className="!text-gray-100 text-sm mt-1" style={{ color: '#f3f4f6' }}>Schedule a visit with our landscaping experts.</p>
              </div>
          <button 
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-black/20 hover:bg-black/40 transition-colors text-white relative z-10"
          >
            <i className='bx bx-x text-2xl'></i>
          </button>
        </div>

        {/* Form */}
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-gray-700">Full Name *</label>
                <input 
                  type="text" 
                  name="name" 
                  required 
                  placeholder="John Doe"
                  className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#65a30d] focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-gray-700">Phone Number *</label>
                <input 
                  type="tel" 
                  name="phone" 
                  required 
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#65a30d] focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-gray-700">Email Address *</label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  placeholder="john@example.com"
                  className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#65a30d] focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-gray-700">Preferred Date *</label>
                <input 
                  type="date" 
                  name="date" 
                  required 
                  className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#65a30d] focus:border-transparent transition-all bg-gray-50 focus:bg-white text-gray-700"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-gray-700">Site Location / Address *</label>
              <input 
                type="text"
                name="address" 
                required
                placeholder="Enter complete address or Google Maps link"
                className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#65a30d] focus:border-transparent transition-all bg-gray-50 focus:bg-white"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-gray-700">Project Requirements</label>
              <textarea 
                name="message" 
                rows="3" 
                placeholder="Tell us a little about your landscaping needs..."
                className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#65a30d] focus:border-transparent transition-all bg-gray-50 focus:bg-white resize-none"
              ></textarea>
            </div>

            <div className="pt-2">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-[#65a30d] hover:bg-[#4d7c0f] text-white font-bold text-sm tracking-wide uppercase py-3.5 rounded-md transition-colors shadow-md flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Scheduling...' : 'Schedule Visit'} {!isSubmitting && <i className='bx bx-calendar-check text-lg'></i>}
              </button>
              <p className="text-xs text-center text-gray-400 mt-3">
                Our team will contact you to confirm the time slot.
              </p>
            </div>

          </form>
        </div>

      </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SiteVisitModal;
