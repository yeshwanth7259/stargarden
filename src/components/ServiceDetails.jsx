import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import QuoteModal from './QuoteModal';

const servicesData = {
  'rental-plants': {
    title: 'Rental Plants',
    tagline: 'Bring nature indoors without the hassle.',
    heroImg: '/assets/indian_indoor_hero_1784105590100.png',
    overview: 'Enhance your workplace or event with our premium plant rental services. We offer flexible plans, regular maintenance, and a wide variety of lush, healthy plants to suit any Indian corporate environment and aesthetic.',
    rentalSections: [
      {
        title: 'Choosing the Right Indoor Plants',
        desc: 'All indoor plants are able to purify indoor air through their normal photosynthesis processes. Live Plants reduce stress on your mind and eyes. We recommend the right planters and native Indian varieties for your office space.',
        images: [
          '/assets/indian_gallery_palm_1784105664593.png',
          '/assets/indian_plants_air_1784105602360.png',
          '/assets/indian_money_plant_1784105614259.png',
          '/assets/indian_pots_gallery_1784105626181.png',
          '/assets/indian_gallery_pothos_1784105677047.png',
          '/assets/indian_gallery_tulsi_1784105651431.png'
        ]
      },
      {
        title: 'Choosing the Right Planters',
        desc: 'From bright plastics to traditional clay and beautiful terracotta, planters come in a vast choice of colors and materials. We will assist you in making the right choice with the right color combinations to match your Indian interiors.',
        images: [
          '/assets/indian_pots_gallery_1784105626181.png',
          '/assets/indian_kitchen_hero_1784105822242.png',
          '/assets/indian_indoor_hero_1784105590100.png',
          '/assets/indian_money_plant_1784105614259.png',
          '/assets/indian_gallery_palm_1784105664593.png',
          '/assets/indian_plants_air_1784105602360.png'
        ]
      }
    ],
    rentalFeatures: [
      { title: 'Indoor Plants', img: '/assets/indian_gallery_palm_1784105664593.png', desc: 'Selecting of the Indoor plants according to design with the right planter.' },
      { title: 'Vertical Garden', img: '/assets/indian_gallery_pothos_1784105677047.png', desc: 'Vertical Garden Maintenance clearing the drip irrigation removing the old yellow leaves.' },
      { title: 'Regular Maintaince', img: '/assets/indian_plants_air_1784105602360.png', desc: 'Cutting, Pruning, Organic Pesticides, Nutrition, repotting, rotation of plants.' },
      { title: 'Replacement of Plants', img: '/assets/indian_pots_gallery_1784105626181.png', desc: 'Replacement of dead or unhealthy plants on regular basis.' }
    ],
    showClientList: false
  },
  'landscape-work': {
    title: 'Landscape Design & Execution',
    tagline: 'Crafting beautiful outdoor environments.',
    heroImg: 'https://images.unsplash.com/photo-1558904541-efa843a96f09?q=80&w=2000&auto=format&fit=crop',
    overview: 'Star Gardens Company specializes in all of these areas to deliver end-to-end landscape architecture.',
    benefits: [
      { icon: 'bx-pen', title: 'Design and Build', desc: 'The contractor can design outdoor elements like decks, patios, swimming pools, or gazebos.' },
      { icon: 'bx-hard-hat', title: 'Installation', desc: 'This can range from installing plants for a homeowner to bigger projects like pools, paths, water features, and walls.' },
      { icon: 'bx-leaf', title: 'Maintenance', desc: 'A Star Gardens have education in horticulture and will provide mostly or strictly pruning, fertilization, lawn care, pest management, etc.' },
      { icon: 'bx-building', title: 'Residential & Commercial', desc: 'Projects may range from suburban homes to urban multi-unit housing and commercial exterior and interior landscaping.' }
    ],
    featuredProjects: [
      { title: 'Casa Grande Lanco, K.R Puram Bangalore', image: 'https://images.unsplash.com/photo-1599110906632-28d25094470f?q=80&w=800&auto=format&fit=crop', desc: 'The almost 110 villa project was designed & executed by Star Gardens, there were linear paths with mini gardens & 1/2 hardy plants surrounded by Ficus panda maintained for a driven period with zero mortality, a clean hand-over to the association.' },
      { title: 'Farm House, Bidadi', image: 'https://images.unsplash.com/photo-1595387426256-cc153122a6f1?q=80&w=800&auto=format&fit=crop', desc: 'Twenty five acres of farmhouse designed & executed by Star Gardens with automated irrigation system.' },
      { title: 'Resort, Mysore', image: 'https://images.unsplash.com/photo-1611895186551-4bfad81c5b11?q=80&w=800&auto=format&fit=crop', desc: 'With two acres of a resort designed & executed by Star Gardens in the hill area by using the natural step with a minimal irrigation system.' },
      { title: 'RT Nagar, Bangalore', image: 'https://images.unsplash.com/photo-1617850687395-620757feb1f3?q=80&w=800&auto=format&fit=crop', desc: 'RT Nagar Bangalore, a villa bungalow designed & executed by Star Gardens all around the compound wall was maintained relying on the happy plants & their family members.' },
      { title: 'Farm House, Ram Nagara, Mysore Rd', image: 'https://images.unsplash.com/photo-1630752918954-d577d011d8df?q=80&w=800&auto=format&fit=crop', desc: 'Ram Nagara, beautiful Farm House complete A to Z of the project\'s design, Develop & Landscape Maintenance.' },
      { title: 'Hyderabad, T.S', image: 'https://images.unsplash.com/photo-1760087245913-81ba23d6ddc9?q=80&w=800&auto=format&fit=crop', desc: 'Haven garden developed was one of the favorite flower gardens in our old installation shall make you passionate to have a original garden.' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1759765098499-e1d7740338e9?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1595387426463-bef727e35bb3?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1701484263581-9b796dd5358b?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1656646549794-17ce57191582?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1597201278257-3687be27d954?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1668120089662-42642838cfef?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1532302780319-95689ab9d79a?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1713383658268-6b9bd03beb19?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1666228459069-d308cbea796b?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1760635519117-e050bf4ebfc6?q=80&w=800&auto=format&fit=crop'
    ],
    showClientList: true
  },
  'vertical-gardening': {
    title: 'Vertical Gardening',
    tagline: 'Taking greenery to new heights.',
    heroImg: 'https://images.unsplash.com/photo-1598532439162-d96bbd49b2ba?q=80&w=2000&auto=format&fit=crop',
    overview: 'Maximize your space with our stunning vertical gardens. Perfect for urban environments, these living walls not only create a spectacular visual impact but also significantly improve air quality and provide natural insulation.',
    customDescription: 'Vertical Gardens are the grand aesthetic & structural greening bounded by walls, whether its primarily an exterior space. It works on attaching your vertical space with live plants encompassing easily all the essentials needed for a vertical garden. Star Gardens offers one of the finest types of Vertical Garden that blends along with the natural environs of a place, at a minimum cost yet an extraordinary end-result.',
    benefits: [
      { icon: 'bx-building', title: 'Space Saving', desc: 'Ideal for areas with limited floor space.' },
      { icon: 'bx-wind', title: 'Air Purification', desc: 'Acts as a natural bio-filter for cleaner air.' },
      { icon: 'bx-water', title: 'Smart Irrigation', desc: 'Integrated automated drip systems for easy maintenance.' }
    ],
    featuredProjects: [
      { title: 'HSR, Bangalore', image: 'https://images.unsplash.com/photo-1571192776145-9f563c1df686?q=80&w=800&auto=format&fit=crop', desc: 'A dense and thriving vertical garden wall at a corporate office that refreshes the space.' },
      { title: 'Whitefield, Bangalore', image: 'https://images.unsplash.com/photo-1659103874401-279c2c316afc?q=80&w=800&auto=format&fit=crop', desc: 'This vertical garden installed indoors brings out the beauty of an otherwise sterile environment.' },
      { title: 'BTM Layout, Bangalore', image: 'https://images.unsplash.com/photo-1536260454352-a931acd0c989?q=80&w=800&auto=format&fit=crop', desc: 'A lush, textured facade integration that transformed a residential balcony into a bio-wall.' },
      { title: 'MG Road, Bangalore', image: 'https://images.unsplash.com/photo-1682629088818-1ec55d0cf45b?q=80&w=800&auto=format&fit=crop', desc: 'An elegant outdoor bio-wall designed to seamlessly merge nature with modern architecture.' },
      { title: 'Hosur Road, Bangalore', image: 'https://images.unsplash.com/photo-1509767237982-070742f77b60?q=80&w=800&auto=format&fit=crop', desc: 'Vertical planters beautifully layered to create a natural acoustic and visual barrier.' },
      { title: 'Tirupati, Andhra Pradesh', image: 'https://images.unsplash.com/photo-1556574771-31370b0232cd?q=80&w=800&auto=format&fit=crop', desc: 'An expansive green wall installation spanning multiple floors in a commercial lobby.' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1688176971147-80c37d48977f?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1490187763999-9f273a5b7516?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1650280288807-0fc50633a775?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1657793623447-13f47cddfa37?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1642846442523-d852165d44a0?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1599580546605-a86af98dbdb0?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1662915029099-e285648c0534?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1604573152847-ca89d57dbb25?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1630830921563-75b9b28e2154?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1782392487647-7fee9715d1f5?q=80&w=800&auto=format&fit=crop'
    ],
    showClientList: true
  },
  'balcony-garden': {
    title: 'Balcony Garden',
    tagline: 'Your personal sky-high retreat.',
    heroImg: 'https://images.unsplash.com/photo-1596487889484-06c8d6be74c9?q=80&w=2000&auto=format&fit=crop',
    overviewTitle: 'Balcony Garden',
    overview: 'A balcony garden is a garden created, typically in an urban apartment with limited space. A balcony garden is created with the choice of plants and other aesthetic elements like a pergola, vertical garden, water body, relaxing pots & other pieces elements out space and light constraints so the garden thrives.',
    benefits: [
      { icon: 'bx-home-heart', title: 'Cozy Retreat', desc: 'Create a private oasis right outside your door.' },
      { icon: 'bx-grid-alt', title: 'Space Optimization', desc: 'Smart layouts that make small spaces feel large.' },
      { icon: 'bx-sun', title: 'Micro-climate Control', desc: 'Plants that thrive in your balcony\'s specific sunlight.' }
    ],
    featuredProjects: [
      { title: 'Mahadevapura, Bangalore', image: 'https://images.unsplash.com/photo-1687960650778-35ab8f1a797e?q=80&w=800&auto=format&fit=crop', desc: 'This Balcony has been completely designed & developed by Star Gardens: Pergola, Artificial Grass, swing, Vertical Garden, Waterfall, Potted Plants, complete automated irrigation system.' },
      { title: 'SNN, Basavanagudi', image: 'https://images.unsplash.com/photo-1597029105747-38a3e1c8ab12?q=80&w=800&auto=format&fit=crop', desc: 'The most simplistic with elegant look balcony has been designed according to client wish with matching furniture.' },
      { title: 'Mulberry Woods, Sarjapur', image: 'https://images.unsplash.com/photo-1780053906696-325413e4cc19?q=80&w=800&auto=format&fit=crop', desc: 'There are a lot of elements are included in this balcony garden like pine wood planters, wooden deck area, artificial grass, automated watering system, cluster of planters.' },
      { title: 'DLF, KR Puram', image: 'https://images.unsplash.com/photo-1728675351483-4cba7a19e8a6?q=80&w=800&auto=format&fit=crop', desc: 'This is one of the balcony gardens we enjoyed working with a lot of ideas and elements included vertical garden, wooden plant stand rallying planters.' },
      { title: 'Skanda Homes, Bellandur', image: 'https://images.unsplash.com/photo-1757282101267-dc6667158dbf?q=80&w=800&auto=format&fit=crop', desc: 'High-grade quality grass with earthen touch planters bright eye-arresting colors with happy plants.' },
      { title: 'Prestige Pride, Bangalore', image: 'https://images.unsplash.com/photo-1779052134607-8f02ae3bcf19?q=80&w=800&auto=format&fit=crop', desc: 'Luxury balcony garden designed taste of the client outdoor wooden deck area with furniture and combination of artificial grass.' }
    ],
    galleryTitle: 'Some Balcony Garden Designs',
    gallery: [
      'https://images.unsplash.com/photo-1759244569911-527a6b7eb889?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1777571051415-32fb4982eb3f?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1629282980228-46b85d221086?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1560448205-d82bf18b9bcf?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1574837470917-f3f8372d1a61?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1696220659653-f11d376a7dd5?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1719266084633-24981ecdc417?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1496945589647-8784b8d04934?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1584346133934-a3afd2a33c4c?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1585311746214-764246524f52?q=80&w=800&auto=format&fit=crop'
    ],
    showClientList: true
  },
  'terrace-garden': {
    title: 'Terrace Garden',
    tagline: 'Elevate your outdoor experience.',
    heroImg: 'https://images.unsplash.com/photo-1584346133934-a3afd2a33c4c?q=80&w=2000&auto=format&fit=crop',
    overviewTitle: 'Terrace Garden',
    overview: 'Urban homes often lack a yard or a garden given the space constraints and an increasing shift from independent housing to apartment complexes. But humans have a natural affinity towards nature. A terrace garden is the perfect solution to ensure the aesthetic beauty of your home is complete.',
    zigzagSections: [
      {
        title: 'Contemporary Design',
        desc: 'A contemporary terrace garden design focuses on creating an organized, uncluttered space. It relies heavily on hardscaping (like decks, paths, built-in planters) and uses architectural plants to create a striking effect. Think clean lines, geometric shapes, and a minimalist color palette to match your modern lifestyle.',
        image: 'https://images.unsplash.com/photo-1660502316360-327f4741d887?q=80&w=1200&auto=format&fit=crop',
        imageLeft: true
      },
      {
        title: 'Spacious Terrace Garden',
        desc: 'A spacious garden layout provides room for multiple activities. We divide the area into distinct zones: a lounging area, a dining space, and lush planted borders. By using varied textures, comfortable outdoor furniture, and strategic lighting, we create an expansive environment perfect for entertaining guests or enjoying a peaceful evening.',
        image: 'https://images.unsplash.com/photo-1778486054098-b243c5fbf193?q=80&w=1200&auto=format&fit=crop',
        imageLeft: false
      },
      {
        title: 'Zen Tranquil Terrace Garden',
        desc: 'The zen tranquil terrace design is inspired by Eastern culture, heavily drawing from Chinese and Japanese aesthetics. This design is built on harmony between man and nature. It features natural elements like stone pathways, water features, bamboo, and often a centerpiece Buddha sculpture to bring peace, meditation, and relaxation to your home.',
        image: 'https://images.unsplash.com/photo-1640031783973-4b21bdc1b640?q=80&w=1200&auto=format&fit=crop',
        imageLeft: true
      }
    ],
    showClientList: true
  },
  'indoor-plants': {
    title: 'Indoor Plants',
    tagline: 'Bringing nature indoors for a healthier, happier you.',
    heroImg: '/assets/indian_indoor_hero_1784105590100.png',
    overviewTitle: 'Why Choose Indoor Plants?',
    overview: 'Enhance your interior spaces with our premium selection of indoor plants. We provide low-maintenance, shade-loving plants that naturally purify the air and add a touch of elegance to any room. Indoor plants not only beautify your space but also improve air quality, reduce stress, and boost creativity and productivity.',
    customDescription: 'Transform your home or office into a lush, breathable sanctuary. Our expertly curated indoor plant collections bring life to every corner, blending seamlessly with your interior decor while offering numerous health benefits.',
    benefits: [
      { icon: 'bx-wind', title: 'Air Purification', desc: 'Plants act as natural bio-filters, removing toxins and improving indoor air quality.' },
      { icon: 'bx-smile', title: 'Stress Reduction', desc: 'Being around greenery is proven to lower stress levels and boost your overall well-being.' },
      { icon: 'bx-spa', title: 'Aesthetic Appeal', desc: 'Instantly elevate your interior design with vibrant textures and colors.' },
      { icon: 'bx-leaf', title: 'Low Maintenance', desc: 'Carefully selected resilient plants that require minimal care and thrive indoors.' }
    ],
    zigzagSections: [
      {
        title: 'Breathe Easier with Natural Purifiers',
        desc: 'Many indoor plants are excellent at absorbing harmful toxins and releasing fresh oxygen. From Snake Plants to Peace Lilies, we offer varieties that actively cleanse your indoor air, making your home a healthier place for you and your family.',
        image: '/assets/indian_plants_air_1784105602360.png',
        imageLeft: true
      },
      {
        title: 'Elevate Your Interior Aesthetics',
        desc: 'Indoor plants are living art. Whether you prefer the dramatic leaves of a Monstera, the trailing elegance of a Pothos, or the structured look of a Ficus, our designers will help you choose the perfect plants to complement your unique style and space.',
        image: '/assets/indian_money_plant_1784105614259.png',
        imageLeft: false
      },
      {
        title: 'Boost Productivity and Focus',
        desc: 'Incorporating greenery into your workspace, whether a home office or corporate setting, has been shown to increase focus, productivity, and creativity. Let us design a green workspace that inspires you every day.',
        image: '/assets/indian_gallery_palm_1784105664593.png',
        imageLeft: true
      }
    ],
    galleryTitle: 'Beautiful Indian Indoor Plant Styling',
    gallery: [
      '/assets/indian_pots_gallery_1784105626181.png',
      '/assets/indian_gallery_tulsi_1784105651431.png',
      '/assets/indian_gallery_pothos_1784105677047.png',
      '/assets/indian_money_plant_1784105614259.png',
      '/assets/indian_plants_air_1784105602360.png',
      '/assets/indian_gallery_palm_1784105664593.png',
      '/assets/indian_indoor_hero_1784105590100.png',
      '/assets/indian_pots_gallery_1784105626181.png'
    ],
    showClientList: true
  },
  'kitchen-garden': {
    title: 'Kitchen Garden',
    tagline: 'Fresh, organic flavors from your own Indian home.',
    heroImg: '/assets/indian_kitchen_hero_1784105822242.png',
    overviewTitle: 'Why Build a Kitchen Garden?',
    overview: 'Experience the joy of growing your own food with a custom-designed kitchen garden that fits perfectly into your balcony, terrace, or backyard. Our setups provide a continuous supply of fresh, organic vegetables and herbs native to Indian cuisine.',
    customDescription: 'Whether it is fresh coriander, mint, tulsi, or crisp vegetables, growing your own produce ensures chemical-free, nutrient-rich food for your family. We help you set up an aesthetic and productive garden space.',
    benefits: [
      { icon: 'bx-restaurant', title: 'Organic Produce', desc: 'Chemical-free, fresh vegetables and herbs for your family.' },
      { icon: 'bx-shield-plus', title: 'Health & Immunity', desc: 'Home-grown Ayurvedic herbs like Tulsi and Mint boost daily wellness.' },
      { icon: 'bx-leaf', title: 'Aesthetic Setup', desc: 'Beautiful terracotta pots and organized planters that elevate your home.' },
      { icon: 'bx-sun', title: 'Seasonal Planting', desc: 'Expert guidance on rotating Indian crops for maximum seasonal yield.' }
    ],
    zigzagSections: [
      {
        title: 'Grow Your Own Everyday Herbs',
        desc: 'Imagine stepping onto your balcony to pluck fresh curry leaves, mint, or coriander for your meals. A dedicated herb corner not only provides incredible aroma and taste but also connects you deeply with nature.',
        image: '/assets/indian_gallery_tulsi_1784105651431.png',
        imageLeft: true
      },
      {
        title: 'Smart Balcony & Terrace Setups',
        desc: 'No space is too small for a kitchen garden. We use organized grow bags, vertical planters, and traditional ceramic pots to maximize your harvest without cluttering your beautiful Indian home exterior.',
        image: '/assets/indian_pots_gallery_1784105626181.png',
        imageLeft: false
      },
      {
        title: 'Chemical-Free, Nutrient-Rich Food',
        desc: 'Take control of what you eat. By growing your own tomatoes, chillies, and leafy greens, you completely eliminate harmful pesticides, ensuring that every bite is packed with natural goodness and flavor.',
        image: '/assets/indian_plants_air_1784105602360.png',
        imageLeft: true
      }
    ],
    galleryTitle: 'Beautiful Indian Kitchen Gardens',
    gallery: [
      '/assets/indian_kitchen_hero_1784105822242.png',
      '/assets/indian_gallery_tulsi_1784105651431.png',
      '/assets/indian_pots_gallery_1784105626181.png',
      '/assets/indian_plants_air_1784105602360.png'
    ],
    showClientList: true
  },
  'office-plants': {
    title: 'Office Plants',
    tagline: 'Greener, healthier, and more productive Indian workspaces.',
    heroImg: '/assets/indian_gallery_palm_1784105664593.png',
    overviewTitle: 'Why Invest in Office Plants?',
    overview: 'Transform your corporate environment or home office with strategic indoor landscaping. Office plants are proven to boost employee productivity, reduce sick days, and create a welcoming atmosphere for visiting clients, bringing the serenity of nature into your daily work life.',
    customDescription: 'From compact desk plants like Money Plants to large floor-standing Areca Palms, we design professional, low-maintenance green spaces tailored for Indian corporate and home offices.',
    benefits: [
      { icon: 'bx-trending-up', title: 'Higher Productivity', desc: 'Green offices see a significant increase in focus and productivity.' },
      { icon: 'bx-wind', title: 'Better Air Quality', desc: 'Snake Plants and Pothos naturally reduce VOCs and improve workplace health.' },
      { icon: 'bx-briefcase', title: 'Professional Image', desc: 'Creates a premium, aesthetic look for your corporate brand.' },
      { icon: 'bx-smile', title: 'Stress Reduction', desc: 'Natural greenery lowers workplace anxiety and enhances employee well-being.' }
    ],
    zigzagSections: [
      {
        title: 'Breathe Life Into Your Workspace',
        desc: 'We provide air-purifying indoor plants such as Snake Plants and Peace Lilies that act as natural bio-filters, reducing indoor pollution and keeping your team energized throughout the day.',
        image: '/assets/indian_plants_air_1784105602360.png',
        imageLeft: true
      },
      {
        title: 'Elevate Your Corporate Aesthetics',
        desc: 'Impress your clients with a stunning green reception area or lush corner palms. We use premium Indian ceramic and brass planters to match your modern office interiors perfectly.',
        image: '/assets/indian_indoor_hero_1784105590100.png',
        imageLeft: false
      },
      {
        title: 'Desk Plants for Daily Inspiration',
        desc: 'Small, easy-to-care-for desk plants like Pothos (Money Plant) or Jade help reduce screen fatigue and bring a touch of calm to individual workstations.',
        image: '/assets/indian_money_plant_1784105614259.png',
        imageLeft: true
      }
    ],
    galleryTitle: 'Inspiring Green Workspaces',
    gallery: [
      '/assets/indian_gallery_palm_1784105664593.png',
      '/assets/indian_plants_air_1784105602360.png',
      '/assets/indian_indoor_hero_1784105590100.png',
      '/assets/indian_money_plant_1784105614259.png',
      '/assets/indian_pots_gallery_1784105626181.png',
      '/assets/indian_gallery_pothos_1784105677047.png'
    ],
    showClientList: true
  }
};

const ServiceDetails = ({ serviceId, onNavigate }) => {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  const service = servicesData[serviceId];

  if (!service) {
    return <div className="pt-40 text-center text-2xl h-screen font-serif text-slate-800">Service not found.</div>;
  }

  return (
    <div className="bg-white">
      {/* 1. Hero Banner */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden bg-[#020617] flex items-center min-h-[70vh]">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.img 
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            src={service.heroImg} 
            alt={service.title} 
            className="w-full h-full object-cover opacity-60 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
        </div>
        
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl"
          >
            <span className="text-[0.75rem] font-bold tracking-widest text-[#a3e635] uppercase mb-4 block">SERVICE OVERVIEW</span>
            <h1 className="text-5xl lg:text-[4.5rem] font-serif font-bold text-white leading-[1.1] mb-6">
              {service.title}
            </h1>
            <p className="text-white/80 text-xl max-w-xl leading-relaxed mb-8 font-medium">
              {service.tagline}
            </p>
            <div className="flex items-center gap-2 text-sm font-medium tracking-wide">
              <button onClick={() => onNavigate('home')} className="hover:text-[#a3e635] text-white transition-colors cursor-pointer">Home</button>
              <i className='bx bx-chevron-right text-white/50'></i>
              <button onClick={() => onNavigate('services')} className="hover:text-[#a3e635] text-white transition-colors cursor-pointer">Services</button>
              <i className='bx bx-chevron-right text-white/50'></i>
              <span className="text-[#a3e635]">{service.title}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Content Details & Custom Description */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          
          {service.customDescription && (
            <div className="mb-20 text-center max-w-4xl mx-auto">
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#1e293b] leading-tight mb-8">
                {service.title}
              </h2>
              <p className="text-slate-700 text-xl leading-relaxed font-medium">
                {service.customDescription}
              </p>
            </div>
          )}

          <div className={`flex flex-col ${service.benefits ? 'lg:flex-row' : ''} gap-16`}>
            <div className={`${service.benefits ? 'lg:w-[45%] xl:w-1/2' : 'max-w-4xl mx-auto text-center'}`}>
              <span className="text-[0.8rem] font-extrabold tracking-[0.2em] text-[#65a30d] uppercase mb-4 block">ABOUT THIS SERVICE</span>
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#1e293b] leading-tight mb-8">
                {service.overviewTitle || 'What we provide'}
              </h2>
              <p className="text-slate-700 text-xl lg:text-2xl leading-relaxed font-medium">
                {service.overview}
              </p>
            </div>

            {service.benefits && (
              <div className="lg:w-[55%] xl:w-1/2">
                <span className="text-[0.8rem] font-extrabold tracking-[0.2em] text-[#65a30d] uppercase mb-4 block">KEY BENEFITS</span>
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
                  className="grid gap-6"
                >
                  {service.benefits.map((benefit, idx) => (
                    <motion.div key={idx} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex gap-6 bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-all">
                      <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm border border-gray-100 text-[#65a30d]">
                        <i className={`bx ${benefit.icon} text-3xl`}></i>
                      </div>
                      <div className="flex flex-col justify-center">
                        <h4 className="font-bold text-[#1e293b] text-xl mb-1.5">{benefit.title}</h4>
                        <p className="text-slate-600 text-lg leading-relaxed">{benefit.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 2.5 Featured Projects */}
      {service.featuredProjects && (
        <section className="py-24 bg-gray-50 border-t border-gray-100">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-center text-[#1e293b] mb-16">Featured Installations</h2>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {service.featuredProjects.map((project, idx) => (
                <motion.div key={idx} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} className="group">
                  <div className="overflow-hidden rounded-2xl mb-5 shadow-md relative aspect-[4/3]">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white border border-white/50">
                        <i className='bx bx-search-alt-2 text-xl'></i>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#1e293b] mb-2">{project.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-[0.95rem]">{project.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* 2.6 Gallery */}
      {service.gallery && (
        <section className="py-24 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-serif text-slate-300 italic">{service.galleryTitle || 'Some of Our Works'}</h2>
            </div>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 grid-flow-dense"
            >
              {service.gallery.map((imgUrl, idx) => (
                <motion.div key={idx} variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }} className={`overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-all group cursor-pointer ${idx % 5 === 0 ? 'row-span-2 col-span-2' : 'aspect-square'}`}>
                  <img src={imgUrl} alt={`Gallery image ${idx + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}


      {/* Rental Plants Custom Sections */}
      {service.rentalSections && (
        <section className="py-24 bg-white relative z-10">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <h2 className="text-4xl lg:text-5xl font-serif text-[#1e293b] text-center mb-20 relative">
              <span className="relative z-10 text-emerald-600 font-light tracking-wide">What We Do</span>
            </h2>
            
            {service.rentalSections.map((section, sIdx) => (
              <div key={sIdx} className="mb-24 last:mb-10">
                <div className="max-w-4xl mx-auto text-center mb-10">
                  <h3 className="text-2xl font-serif text-emerald-700 mb-4">{section.title}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed font-medium">{section.desc}</p>
                </div>
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                  className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 max-w-4xl mx-auto"
                >
                  {section.images.map((imgUrl, iIdx) => (
                    <motion.div key={iIdx} variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } }} className="aspect-[4/3] overflow-hidden group">
                      <img src={imgUrl} alt="Rental plant example" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Zig-Zag Sections (for Terrace Garden) */}
      {service.zigzagSections && (
        <section className="bg-white relative z-10 border-t border-gray-100">
          <div className="flex flex-col w-full">
            {service.zigzagSections.map((section, idx) => (
              <div key={idx} className={`flex flex-col ${section.imageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} w-full bg-white`}>
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="w-full lg:w-1/2 min-h-[400px] lg:min-h-[500px]"
                >
                  <img src={section.image} alt={section.title} className="w-full h-full object-cover" />
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="w-full lg:w-1/2 p-12 lg:p-24 xl:p-32 flex flex-col justify-center items-center text-center"
                >
                  <h3 className="text-3xl lg:text-4xl font-serif text-[#1e293b] mb-8">{section.title}</h3>
                  <p className="text-[0.95rem] lg:text-base text-gray-700 leading-relaxed font-medium max-w-lg">{section.desc}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Rental Plants Features Footer Section */}
      {service.rentalFeatures && (
        <section className="pt-32 pb-24 bg-gray-300 relative -mt-32 z-0">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {service.rentalFeatures.map((feat, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  className="bg-white shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full group"
                >
                  <div className="h-48 overflow-hidden">
                    <img src={feat.img} alt={feat.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6 text-center flex-grow flex flex-col items-center">
                    <h4 className="font-bold text-[#1e293b] text-[1rem] mb-3">{feat.title}</h4>
                    <p className="text-xs text-gray-600 leading-relaxed max-w-[200px]">{feat.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 2.7 Client List */}
      {service.showClientList && (
        <section className="py-20 bg-gray-50 text-center border-t border-gray-200">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <h2 className="text-3xl font-serif font-bold text-[#1e293b] mb-12">Our Client List</h2>
            <img src="/assets/clients-grid.jpg" alt="Our Clients" className="max-w-full lg:max-w-4xl mx-auto rounded-xl shadow-sm mix-blend-multiply" onError={(e) => { e.target.style.display = 'none'; }} />
          </div>
        </section>
      )}

      {/* 3. CTA */}
      <section className="py-24 bg-[#0f2e1a] text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1000&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-2xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-6">Interested in {service.title}?</h2>
          <p className="text-white/80 mb-10 text-lg">Contact our experts today to discuss your requirements and get a customized quote.</p>
          <button onClick={() => setIsQuoteOpen(true)} className="bg-[#a3e635] hover:bg-[#84cc16] text-[#0f2e1a] px-8 py-4 rounded-full font-bold tracking-wide transition-all uppercase shadow-lg hover:shadow-xl cursor-pointer hover:scale-105 active:scale-95">
            Request a Quote
          </button>
        </div>
      </section>

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </div>
  );
};

export default ServiceDetails;
