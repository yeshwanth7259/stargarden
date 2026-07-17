import React from 'react';
import { motion } from 'framer-motion';

const BlogArticle = ({ onNavigate }) => {
  return (
    <div className="bg-[#f8fcf8] min-h-screen pt-48 pb-20 font-sans text-slate-800">
      <div className="max-w-[800px] mx-auto px-6">
        
        {/* Back Button */}
        <button 
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-2 text-[#65a30d] font-bold text-sm hover:text-[#4d7c0f] transition-colors mb-8 cursor-pointer"
        >
          <i className='bx bx-left-arrow-alt text-xl'></i> Back to Home
        </button>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="w-full h-[400px] rounded-3xl overflow-hidden shadow-xl mb-10"
        >
          <img src="/assets/blog-1.jpg" alt="Top 10 Indoor Plants" className="w-full h-full object-cover" />
        </motion.div>

        {/* Article Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
          <div className="flex gap-4 items-center mb-6">
            <span className="bg-[#f4fbf4] text-[#1b8b22] px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase border border-[#1b8b22]/20">Office Plants</span>
            <span className="text-slate-500 text-sm font-medium">Apr 28, 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 leading-[1.2] mb-8">
            Top 10 Indoor Plants for Office Spaces & Their Benefits
          </h1>
        </motion.div>

        {/* Article Content */}
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-lg prose-slate max-w-none prose-headings:font-serif prose-headings:text-slate-800 prose-a:text-[#65a30d]"
        >
          <p className="text-[1.1rem] text-slate-600 leading-relaxed mb-6">
            Walk into any modern office today and you'll likely spot a few green companions sitting on desks, in corners, or near windows. Indoor plants have become more than just decoration — they're now recognized as essential elements of a healthy, productive workplace. Numerous studies have linked indoor greenery to reduced stress, improved air quality, and even higher employee productivity.
          </p>
          <p className="text-[1.1rem] text-slate-600 leading-relaxed mb-10">
            If you're looking to bring some life into your office, here are the top 10 indoor plants that thrive in workspace environments, along with the benefits each one offers.
          </p>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold mb-3 text-[#1b4324] flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#65a30d] text-white text-sm">1</span> 
                Snake Plant (Sansevieria)
              </h3>
              <p className="text-slate-600 leading-relaxed ml-11">
                The snake plant is practically indestructible, making it perfect for busy offices where watering schedules are easy to forget. It tolerates low light, irregular watering, and dry air. Beyond its resilience, this plant is excellent at filtering toxins like formaldehyde and benzene from the air, and unlike most plants, it releases oxygen at night too.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3 text-[#1b4324] flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#65a30d] text-white text-sm">2</span> 
                Pothos (Epipremnum aureum)
              </h3>
              <p className="text-slate-600 leading-relaxed ml-11">
                Pothos is a fast-growing trailing vine that looks great on shelves or hanging planters. It's nearly impossible to kill, adapts to almost any lighting condition, and purifies indoor air by removing common pollutants. Its low maintenance needs make it ideal for employees who are new to plant care.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3 text-[#1b4324] flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#65a30d] text-white text-sm">3</span> 
                ZZ Plant (Zamioculcas zamiifolia)
              </h3>
              <p className="text-slate-600 leading-relaxed ml-11">
                The ZZ plant is known for its glossy, dark green leaves and remarkable drought tolerance. It can survive weeks without water and thrives in low-light corners where other plants struggle. It also helps reduce airborne toxins, making it a smart choice for enclosed cubicles.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3 text-[#1b4324] flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#65a30d] text-white text-sm">4</span> 
                Peace Lily (Spathiphyllum)
              </h3>
              <p className="text-slate-600 leading-relaxed ml-11">
                With its elegant white blooms, the peace lily adds a touch of sophistication to any office. It's one of the most effective plants for improving indoor air quality, actively removing mold spores and common chemical pollutants. It also thrives in low to medium light, perfect for spaces without much natural sunlight.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3 text-[#1b4324] flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#65a30d] text-white text-sm">5</span> 
                Spider Plant (Chlorophytum comosum)
              </h3>
              <p className="text-slate-600 leading-relaxed ml-11">
                Spider plants are hardy, fast-growing, and safe for offices with curious pets or children visiting. They're highly effective at removing carbon monoxide and other toxins from the air. Their arching leaves and easy propagation make them a favorite among plant beginners.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3 text-[#1b4324] flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#65a30d] text-white text-sm">6</span> 
                Aloe Vera
              </h3>
              <p className="text-slate-600 leading-relaxed ml-11">
                Aloe vera isn't just useful for soothing minor burns — it's also a great desk plant. It requires bright, indirect light and minimal watering, making it low-maintenance. Aloe vera also helps purify the air and adds a fresh, natural aesthetic to any workstation.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3 text-[#1b4324] flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#65a30d] text-white text-sm">7</span> 
                Rubber Plant (Ficus elastica)
              </h3>
              <p className="text-slate-600 leading-relaxed ml-11">
                The rubber plant is a statement piece with its large, glossy leaves. It's excellent for larger office spaces or reception areas. This plant is known for its strong air-purifying abilities, particularly in removing formaldehyde, and it adapts well to moderate indoor light.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3 text-[#1b4324] flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#65a30d] text-white text-sm">8</span> 
                English Ivy (Hedera helix)
              </h3>
              <p className="text-slate-600 leading-relaxed ml-11">
                English ivy is a versatile trailing plant that works beautifully in hanging baskets or on bookshelves. It's particularly effective at reducing airborne mold and improving air quality in spaces with high humidity, such as break rooms or areas near coffee stations.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3 text-[#1b4324] flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#65a30d] text-white text-sm">9</span> 
                Philodendron
              </h3>
              <p className="text-slate-600 leading-relaxed ml-11">
                Philodendrons are popular for their heart-shaped leaves and adaptability to low-light conditions. They require minimal care, tolerate inconsistent watering, and help filter indoor air pollutants, making them a reliable choice for busy professionals.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3 text-[#1b4324] flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#65a30d] text-white text-sm">10</span> 
                Dracaena
              </h3>
              <p className="text-slate-600 leading-relaxed ml-11">
                Dracaena varieties come in many shapes and sizes, from tall canes to bushy shrubs, allowing flexibility depending on your office layout. They're excellent at removing toxins like trichloroethylene and xylene, commonly found in office equipment and furnishings, while requiring only moderate light and watering.
              </p>
            </div>
          </div>

          <hr className="my-12 border-gray-200" />

          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100 mb-12">
            <h2 className="text-3xl font-bold font-serif mb-6 text-slate-900">Why Office Plants Matter</h2>
            <p className="mb-6 text-slate-600 text-lg">Beyond aesthetics, indoor plants offer measurable workplace benefits:</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <i className='bx bx-check-circle text-[#65a30d] text-xl mt-0.5'></i>
                <span className="text-slate-600"><strong className="text-slate-800">Improved air quality</strong> — Many plants filter out common toxins released by office furniture, electronics, and cleaning products.</span>
              </li>
              <li className="flex items-start gap-3">
                <i className='bx bx-check-circle text-[#65a30d] text-xl mt-0.5'></i>
                <span className="text-slate-600"><strong className="text-slate-800">Reduced stress levels</strong> — Greenery has a calming effect, helping employees feel more relaxed throughout the day.</span>
              </li>
              <li className="flex items-start gap-3">
                <i className='bx bx-check-circle text-[#65a30d] text-xl mt-0.5'></i>
                <span className="text-slate-600"><strong className="text-slate-800">Boosted productivity</strong> — Research suggests employees near plants report higher focus and job satisfaction.</span>
              </li>
              <li className="flex items-start gap-3">
                <i className='bx bx-check-circle text-[#65a30d] text-xl mt-0.5'></i>
                <span className="text-slate-600"><strong className="text-slate-800">Better humidity balance</strong> — Plants naturally regulate moisture levels, reducing dryness caused by air conditioning.</span>
              </li>
              <li className="flex items-start gap-3">
                <i className='bx bx-check-circle text-[#65a30d] text-xl mt-0.5'></i>
                <span className="text-slate-600"><strong className="text-slate-800">Enhanced aesthetics</strong> — A well-placed plant instantly makes a workspace feel more inviting and professional.</span>
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold font-serif mb-6 text-slate-900">Final Thoughts</h2>
          <p className="text-[1.1rem] text-slate-600 leading-relaxed mb-6">
            Adding indoor plants to your office isn't just a design trend — it's an investment in employee wellbeing and workplace atmosphere. Whether you choose a low-maintenance snake plant for a dim corner or an elegant peace lily for the reception desk, these ten plants offer the perfect blend of beauty, resilience, and health benefits.
          </p>
          <p className="text-[1.1rem] text-slate-600 leading-relaxed mb-10">
            Start small, choose plants that match your office's lighting conditions, and watch how a bit of greenery transforms your workspace into a healthier, more inspiring environment.
          </p>

        </motion.div>
      </div>
    </div>
  );
};

export default BlogArticle;
