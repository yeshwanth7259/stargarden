import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    { isText: false, logo: '/assets/logos/accenture.svg', company: 'Accenture', author: 'Facilities Manager', text: 'Star Gardens transformed our office into a vibrant and refreshing workspace. Their maintenance service is exceptional.' },
    { isText: false, logo: '/assets/logos/airbus.svg', company: 'Airbus', author: 'Operations Head', text: 'The indoor greenery provided by Star Gardens has drastically improved our workplace ambiance and air quality.' },
    { isText: false, logo: '/assets/logos/boeing.svg', company: 'Boeing', author: 'Admin Director', text: 'Professional execution and a stunning vertical garden installation. Our lobby looks incredibly welcoming now.' },
    { isText: false, logo: 'https://www.google.com/s2/favicons?domain=covestays.com&sz=128', company: 'Cove Stays', author: 'Property Manager', text: 'Beautiful outdoor landscaping that perfectly matches our brand aesthetics. Star Gardens exceeded expectations.' },
    { isText: false, logo: 'https://www.google.com/s2/favicons?domain=cdata.com&sz=128', company: 'CData', author: 'HR Manager', text: 'Our employees love the new desk plants and green corners. It’s significantly boosted workplace morale.' },
    { isText: false, logo: 'https://www.google.com/s2/favicons?domain=fcb.com&sz=128', company: 'FCBULKA', author: 'Creative Director', text: 'A completely seamless experience from design to execution. The terrace garden they built for us is a masterpiece.' },
    { isText: false, logo: 'https://www.google.com/s2/favicons?domain=givaudan.com&sz=128', company: 'Givaudan', author: 'Sustainability Lead', text: 'Star Gardens’ commitment to eco-friendly practices and organic maintenance is truly commendable.' },
    { isText: false, logo: '/assets/logos/disney.svg', company: 'Disney+ Hotstar', author: 'Studio Head', text: 'The lush green walls they installed in our studios are not just beautiful, but also act as great natural acoustic panels.' },
    { isText: false, logo: 'https://www.google.com/s2/favicons?domain=moog.com&sz=128', company: 'MOOG', author: 'Site Manager', text: 'Their regular maintenance team is punctual, polite, and extremely knowledgeable. Our campus is always green.' },
    { isText: false, logo: '/assets/logos/ola.svg', company: 'OLA', author: 'Workplace Experience', text: 'Fantastic indoor plants that require zero hassle on our end. Star Gardens handles everything perfectly.' },
    { isText: false, logo: 'https://www.google.com/s2/favicons?domain=omegahms.com&sz=128', company: 'Omega Healthcare', author: 'Facilities Head', text: 'We wanted a calming environment for our staff, and the landscape architecture delivered by them was spot on.' },
    { isText: false, logo: 'https://www.google.com/s2/favicons?domain=sensedge.com&sz=128', company: 'Sensedge', author: 'Managing Director', text: 'Innovative planter designs and top-notch plant quality. A highly reliable landscaping partner.' },
    { isText: false, logo: 'https://www.google.com/s2/favicons?domain=swissre.com&sz=128', company: 'Swiss Re', author: 'Corporate Real Estate', text: 'They seamlessly integrated large corporate plants into our modern office layout without disrupting operations.' },
    { isText: false, logo: 'https://www.google.com/s2/favicons?domain=softtek.com&sz=128', company: 'Softtek', author: 'Admin Lead', text: 'Excellent service! The variety of indoor plants they offer is unmatched in Bangalore.' },
    { isText: false, logo: '/assets/logos/titan.svg', company: 'TITAN', author: 'Head - Administration', text: 'Green spaces designed by Star Gardens bring life and positivity to our workplace every single day.' },
    { isText: false, logo: 'https://www.google.com/s2/favicons?domain=teachmint.com&sz=128', company: 'Teachmint', author: 'Office Manager', text: 'Our new vertical garden is the highlight of our office. It’s absolutely gorgeous and very well maintained.' },
    { isText: false, logo: 'https://www.google.com/s2/favicons?domain=unacademy.com&sz=128', company: 'Unacademy', author: 'VP Facilities', text: 'The team at Star Gardens understands corporate aesthetics perfectly. Highly recommended for large campuses.' },
    { isText: false, logo: 'https://www.google.com/s2/favicons?domain=vfsglobal.com&sz=128', company: 'VFS Global', author: 'Regional Manager', text: 'Their plant rental service is a game-changer. We get beautiful plants without any of the maintenance headache.' },
    { isText: false, logo: 'https://www.google.com/s2/favicons?domain=issworld.com&sz=128', company: 'ISS Facility Services', author: 'Procurement', text: 'A fantastic vendor partner. Reliable, high-quality landscaping and very responsive customer support.' },
    { isText: false, logo: 'https://www.google.com/s2/favicons?domain=absindia.net&sz=128', company: 'ABS India', author: 'HR Director', text: 'Bringing nature indoors has completely changed the vibe of our office. Thank you Star Gardens!' }
  ];

  // We duplicate the array to allow for seamless infinite scrolling
  const marqueeItems = [...testimonials, ...testimonials];

  return (
    <section className="py-24 bg-gray-50 overflow-hidden" id="testimonials">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="max-w-[1500px] mx-auto px-6 text-center mb-16"
      >
        <span className="text-[#1b8b22] font-bold text-[0.65rem] tracking-widest uppercase mb-3 block">TESTIMONIALS</span>
        <h2 className="text-4xl md:text-5xl font-serif text-slate-800 font-medium">What Our Clients Say</h2>
      </motion.div>
        
      {/* Infinite Marquee Container */}
      <div className="relative w-full flex overflow-hidden group">
        {/* Left/Right fading gradients to make it look smooth */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

        <div className="flex w-max animate-marquee gap-6 px-3 py-4">
          {marqueeItems.map((t, idx) => (
            <div key={idx} className="w-[320px] md:w-[380px] bg-white p-8 rounded-[1.5rem] border border-gray-100 flex flex-col shadow-sm hover:shadow-lg transition-shadow duration-300">
              {t.isText ? (
                <div className="mb-6 flex items-center gap-2">
                  <span className="font-extrabold text-2xl text-slate-800 tracking-wide">{t.logo}</span>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-blue-500 rounded-sm"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full -ml-1 -mt-1"></div>
                  </div>
                </div>
              ) : (
                <img src={t.logo} alt={t.company} className="h-8 object-contain object-left mb-6" onError={(e) => e.target.style.display='none'} />
              )}
              <p className="flex-grow text-base text-slate-700 leading-relaxed mb-8 italic">"{t.text}"</p>
              <div>
                <strong className="block text-slate-900 text-[0.95rem] font-bold mb-1">- {t.author}</strong>
                <span className="text-[0.85rem] text-slate-600 font-medium">{t.company}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
