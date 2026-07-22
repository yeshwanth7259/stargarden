import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ClientPortal = ({ user }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target);
    const service = formData.get("service");
    const details = formData.get("details");
    
    const text = `New Quotation Request from Portal:\nClient: ${user?.name || 'Client'}\nService: ${service}\nDetails: ${details}`;
    
    // Redirect to WhatsApp
    window.open(`https://wa.me/9108336666?text=${encodeURIComponent(text)}`, '_blank');
    
    setIsSubmitting(false);
    e.target.reset();
  };

  const activities = [
    {
      id: 1,
      title: "Site Inspection Completed",
      date: "Oct 15, 2023",
      status: "Completed",
      details: "Our team visited the site and took measurements for the landscape layout. Initial discussions on plant selection were finalized.",
      icon: "bx-map-pin"
    },
    {
      id: 2,
      title: "Design Layout Proposed",
      date: "Oct 18, 2023",
      status: "Pending Approval",
      details: "The 3D design layouts have been uploaded to your registered email. Awaiting your approval to proceed with execution.",
      icon: "bx-palette"
    },
    {
      id: 3,
      title: "Material Sourcing & Delivery",
      date: "Oct 25, 2023",
      status: "Scheduled",
      details: "Sourcing of indoor plants and hardscape materials. Delivery to the site is scheduled for the upcoming week.",
      icon: "bx-truck"
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-gray-50 min-h-screen">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Welcome Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 relative overflow-hidden bg-gradient-to-r from-[#0a1f10] to-[#1a4023] p-10 rounded-3xl shadow-xl border border-green-900/30 text-white flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
        >
          {/* Decorative background circle */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-[#65a30d] opacity-20 blur-3xl"></div>
          
          <div className="relative z-10">
            <span className="text-[#a3e635] font-bold text-xs tracking-widest uppercase mb-2 block">CLIENT DASHBOARD</span>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mb-3 drop-shadow-md">Welcome Back, <span className="text-[#a3e635]">{user?.name || 'Client'}</span>!</h1>
            <p className="text-gray-200 max-w-xl font-medium">Manage your premium landscape projects, request new quotations, and track our ongoing activities seamlessly.</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column - Quotation Form */}
          <div className="lg:col-span-1">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-green-100 relative overflow-hidden sticky top-32"
            >
              {/* Subtle top gradient line */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#65a30d] to-[#1b8b22]"></div>

              <div className="w-14 h-14 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl flex items-center justify-center text-[#65a30d] text-2xl mb-6 shadow-sm border border-green-200/50">
                <i className='bx bx-file-blank'></i>
              </div>
              <h2 className="text-2xl font-serif font-bold text-slate-800 mb-2">Quotation Required</h2>
              <p className="text-sm text-slate-500 mb-8 leading-relaxed">Need a new service or additional work? Submit your requirements here.</p>
              
              <form onSubmit={handleQuoteSubmit} className="space-y-5">
                <div className="space-y-2">
                  <label className="text-[0.75rem] font-bold text-slate-700 uppercase tracking-widest">Service Type</label>
                  <select name="service" required className="w-full bg-slate-50 border border-slate-200 text-slate-800 px-4 py-3.5 rounded-xl focus:outline-none focus:border-[#65a30d] focus:ring-2 focus:ring-[#65a30d]/20 transition-all appearance-none cursor-pointer font-medium">
                    <option value="">Select Service</option>
                    <option value="Landscape Design">Landscape Design</option>
                    <option value="Indoor Plants">Indoor Plants</option>
                    <option value="Vertical Gardening">Vertical Gardening</option>
                    <option value="Maintenance">Maintenance</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-[0.75rem] font-bold text-slate-700 uppercase tracking-widest">Details & Requirements</label>
                  <textarea 
                    name="details" 
                    rows="4" 
                    required 
                    placeholder="Briefly describe what you need..."
                    className="w-full bg-slate-50 border border-slate-200 text-slate-800 px-4 py-3.5 rounded-xl focus:outline-none focus:border-[#65a30d] focus:ring-2 focus:ring-[#65a30d]/20 transition-all resize-none font-medium placeholder:text-slate-400"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#1b8b22] to-[#146c1a] hover:from-[#146c1a] hover:to-[#0f5213] text-white font-bold text-[0.95rem] tracking-wide uppercase py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-70 flex items-center justify-center gap-2"
                >
                  <i className='bx bxl-whatsapp text-2xl'></i> Submit via WhatsApp
                </button>
              </form>
            </motion.div>
          </div>

          {/* Right Column - Dashboard Overview */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col items-center justify-center text-center p-12 min-h-[400px]">
              <div className="w-24 h-24 bg-green-50 text-[#65a30d]/40 rounded-full flex items-center justify-center text-5xl mb-6">
                <i className='bx bx-landscape'></i>
              </div>
              <h2 className="text-2xl font-serif font-bold text-slate-800 mb-2">No Active Projects</h2>
              <p className="text-slate-500 max-w-md mx-auto">You currently don't have any ongoing projects or maintenance schedules. Use the quotation form to request a new service, and your progress will appear here.</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ClientPortal;
