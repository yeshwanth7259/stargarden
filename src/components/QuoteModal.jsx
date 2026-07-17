import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const QuoteModal = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const service = formData.get("service");
    const message = formData.get("message");

    const text = `Quote Request:%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Email:* ${email}%0A*Service:* ${service}%0A*Message:* ${message}`;
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
            <div className="bg-[#1b4324] px-6 py-5 flex justify-between items-center text-white relative overflow-hidden">
              {/* subtle background pattern/accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#65a30d] rounded-full opacity-20 -mr-10 -mt-10 blur-xl"></div>
              
              <div>
                <h3 className="text-2xl font-bold tracking-wide !text-white" style={{ color: 'white' }}>Request a Quote</h3>
                <p className="!text-gray-100 text-sm mt-1" style={{ color: '#f3f4f6' }}>Fill out the form below and we'll get back to you shortly.</p>
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
              <label className="text-sm font-semibold text-gray-700">Service Required</label>
              <select 
                name="service"
                className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#65a30d] focus:border-transparent transition-all bg-gray-50 focus:bg-white text-gray-700"
              >
                <option value="Corporate Landscaping">Corporate Landscaping</option>
                <option value="Indoor Plants">Indoor Plants</option>
                <option value="Vertical Gardens">Vertical Gardens / Terrace Gardens</option>
                <option value="Maintenance / AMC">Maintenance / AMC Services</option>
                <option value="Products">Planters & Products</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-gray-700">Your Requirements / Message</label>
              <textarea 
                name="message" 
                rows="3" 
                placeholder="Tell us about your project or what you need..."
                className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#65a30d] focus:border-transparent transition-all bg-gray-50 focus:bg-white resize-none"
              ></textarea>
            </div>

            <div className="pt-2">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-[#65a30d] hover:bg-[#4d7c0f] text-white font-bold text-sm tracking-wide uppercase py-3.5 rounded-md transition-colors shadow-md flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Submit Request'} {!isSubmitting && <i className='bx bx-paper-plane text-lg'></i>}
              </button>
              <p className="text-xs text-center text-gray-400 mt-3">
                By submitting this form, you agree to be contacted by Star Gardens.
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

export default QuoteModal;
