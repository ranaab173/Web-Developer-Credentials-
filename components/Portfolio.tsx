import React from 'react';
import { ImageAssets } from './ImageAssets';

const portfolioItems = [
  { 
    id: 1, 
    title: 'E-commerce Platform', 
    category: 'Web App', 
    description: 'A full-featured e-commerce site with product catalogs, shopping cart, and payment integration.',
    skills: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    imgSrc: ImageAssets.portfolio.card1
  },
  { 
    id: 2, 
    title: 'Task Management App', 
    category: 'Mobile App', 
    description: 'A cross-platform mobile app to help teams organize and track their work efficiently.',
    skills: ['React Native', 'Firebase', 'Redux'],
    imgSrc: ImageAssets.portfolio.card2
  },
  { 
    id: 3, 
    title: 'Corporate Website', 
    category: 'Web Design',
    description: 'A modern and responsive website for a corporate client, focusing on brand identity.',
    skills: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    imgSrc: ImageAssets.portfolio.card3
  },
  { 
    id: 4, 
    title: 'Data Analytics Dashboard', 
    category: 'Web App', 
    description: 'A dashboard for visualizing complex datasets with interactive charts and graphs.',
    skills: ['React', 'D3.js', 'Express', 'PostgreSQL'],
    imgSrc: ImageAssets.portfolio.card4
  },
];

const PortfolioItem: React.FC<{ item: typeof portfolioItems[0] }> = ({ item }) => {
  return (
    <div className="flex-shrink-0 w-[350px] mx-4 bg-[#0b293e] rounded-lg overflow-hidden border border-gray-700/50 shadow-lg transform transition-transform duration-300 hover:-translate-y-2">
      <img src={item.imgSrc} alt={item.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <p className="text-sm text-[#00abf0] font-semibold mb-1">{item.category}</p>
        <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
        <p className="text-gray-400 mb-4 h-20 overflow-hidden">{item.description}</p>
        <div className="flex flex-wrap gap-2">
            {item.skills.map(skill => (
                <span key={skill} className="bg-[#081b29] text-gray-300 text-xs font-medium px-2.5 py-1 rounded-full">{skill}</span>
            ))}
        </div>
      </div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  const duplicatedItems = [...portfolioItems, ...portfolioItems];

  return (
    <section id="portfolio" className="py-20 bg-[#081b29]">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">My <span className="text-[#00abf0]">Portfolio</span></h2>
        <p className="text-center text-lg text-gray-300 mb-12">My Latest Work</p>
      </div>
      <div className="portfolio-carousel w-full overflow-hidden relative">
         <div className="carousel-track">
          {duplicatedItems.map((item, index) => (
            <PortfolioItem key={index} item={item} />
          ))}
        </div>
        <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-[#081b29] to-transparent"></div>
        <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-[#081b29] to-transparent"></div>
      </div>
    </section>
  );
};

export default Portfolio;