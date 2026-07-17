import React from 'react';
import { motion } from 'framer-motion';

const Brands = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-16 lg:py-24 bg-white border-b border-slate-200 text-center overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* The image already contains the "Our Esteemed Clients" title, so we don't need a separate text header here. */}
        <img 
          src="/assets/clients-grid.jpg" 
          alt="Our Esteemed Clients - Star Gardens" 
          className="w-full max-w-[1200px] h-auto object-contain mx-auto shadow-sm rounded-xl"
          onError={(e) => { 
            // Fallback in case the user hasn't saved the image yet
            e.target.style.display = 'none'; 
            e.target.insertAdjacentHTML('afterend', '<p class="text-slate-500 py-10">Please save the image as <b>clients-grid.jpg</b> inside your <b>public/assets/</b> folder.</p>');
          }}
        />
      </div>
    </motion.div>
  );
};

export default Brands;
