import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AuthModal = ({ isOpen, onClose, onLogin }) => {
  const [activeTab, setActiveTab] = useState('login'); // 'login' or 'signup'
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  // Prevent scroll on body when modal open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; }
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Using Web3Forms so you receive a notification when someone signs up
    const formData = new FormData(e.target);
    formData.append("access_key", "00488a85-4ac0-42b5-9af1-864c709ed4a2");
    formData.append("subject", activeTab === 'signup' ? "New User Sign Up!" : "User Login Attempt");

    try {
      // Temporarily simulating a successful backend request until we integrate Firebase
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const userName = formData.get("name") || formData.get("email").split('@')[0];
      
      if (onLogin) {
        onLogin({ name: userName, email: formData.get("email") });
      }

      if (activeTab === 'signup') {
        alert("Sign up successful! Welcome to Star Gardens.");
      } else {
        alert("Login successful! Welcome back.");
      }
      e.target.reset();
      onClose();
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[2000]"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[2010] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden pointer-events-auto"
            >
              {/* Header / Tabs */}
              <div className="flex border-b border-gray-100">
                <button 
                  onClick={() => setActiveTab('login')}
                  className={`flex-1 py-4 text-center font-bold text-[0.95rem] transition-colors ${activeTab === 'login' ? 'text-[#1b8b22] border-b-2 border-[#1b8b22]' : 'text-slate-400 hover:text-slate-600'}`}
                >
                  Login
                </button>
                <button 
                  onClick={() => setActiveTab('signup')}
                  className={`flex-1 py-4 text-center font-bold text-[0.95rem] transition-colors ${activeTab === 'signup' ? 'text-[#1b8b22] border-b-2 border-[#1b8b22]' : 'text-slate-400 hover:text-slate-600'}`}
                >
                  Sign Up
                </button>
                <button 
                  onClick={onClose}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors bg-gray-50 hover:bg-gray-100 w-8 h-8 rounded-full flex items-center justify-center"
                >
                  <i className='bx bx-x text-xl'></i>
                </button>
              </div>

              {/* Form Content */}
              <div className="p-8">
                <div className="text-center mb-8">
                  <img src="/assets/brand-logo.png" alt="Star Gardens" className="w-[220px] h-[60px] mx-auto mb-6 object-cover object-center" onError={(e) => e.target.style.display='none'} />
                  <h3 className="text-xl font-bold text-slate-800">
                    {activeTab === 'login' ? 'Welcome Back!' : 'Create an Account'}
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">
                    {activeTab === 'login' ? 'Enter your details to access your account.' : 'Join Star Gardens for exclusive updates.'}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Additional fields for Sign Up */}
                  <AnimatePresence mode="wait">
                    {activeTab === 'signup' && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-4 overflow-hidden"
                      >
                        <div className="space-y-1.5">
                          <label className="text-[0.8rem] font-bold text-slate-700 uppercase tracking-wide">Full Name</label>
                          <input 
                            type="text" 
                            name="name" 
                            required 
                            placeholder="John Doe"
                            className="w-full bg-gray-50 border border-gray-200 text-slate-800 px-4 py-3 rounded-lg focus:outline-none focus:border-[#65a30d] focus:ring-1 focus:ring-[#65a30d] transition-all"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[0.8rem] font-bold text-slate-700 uppercase tracking-wide">Phone Number</label>
                          <input 
                            type="tel" 
                            name="phone" 
                            required 
                            placeholder="+91 98765 43210"
                            className="w-full bg-gray-50 border border-gray-200 text-slate-800 px-4 py-3 rounded-lg focus:outline-none focus:border-[#65a30d] focus:ring-1 focus:ring-[#65a30d] transition-all"
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="space-y-1.5">
                    <label className="text-[0.8rem] font-bold text-slate-700 uppercase tracking-wide">Email Address</label>
                    <input 
                      type="email" 
                      name="email" 
                      required 
                      placeholder="john@example.com"
                      className="w-full bg-gray-50 border border-gray-200 text-slate-800 px-4 py-3 rounded-lg focus:outline-none focus:border-[#65a30d] focus:ring-1 focus:ring-[#65a30d] transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center">
                      <label className="text-[0.8rem] font-bold text-slate-700 uppercase tracking-wide">Password</label>
                      {activeTab === 'login' && (
                        <a href="#" className="text-[#65a30d] text-xs font-semibold hover:underline">Forgot?</a>
                      )}
                    </div>
                    <input 
                      type="password" 
                      name="password" 
                      required 
                      placeholder="••••••••"
                      className="w-full bg-gray-50 border border-gray-200 text-slate-800 px-4 py-3 rounded-lg focus:outline-none focus:border-[#65a30d] focus:ring-1 focus:ring-[#65a30d] transition-all"
                    />
                  </div>

                  <div className="pt-4">
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-[#1b8b22] hover:bg-[#146c1a] text-white font-bold text-[0.9rem] tracking-wide uppercase py-3.5 rounded-lg transition-all shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Processing...' : (activeTab === 'login' ? 'Login' : 'Sign Up')}
                    </button>
                  </div>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-sm text-slate-500">
                    {activeTab === 'login' ? "Don't have an account? " : "Already have an account? "}
                    <button 
                      onClick={() => setActiveTab(activeTab === 'login' ? 'signup' : 'login')}
                      className="text-[#65a30d] font-bold hover:underline"
                    >
                      {activeTab === 'login' ? 'Sign Up' : 'Login'}
                    </button>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AuthModal;
