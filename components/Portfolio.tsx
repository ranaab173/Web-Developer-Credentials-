
import React from 'react';

const portfolioItems = [
  { id: 1, title: 'Project One', category: 'Web App' },
  { id: 2, title: 'Project Two', category: 'Mobile App' },
  { id: 3, title: 'Project Three', category: 'Web Design' },
  { id: 4, title: 'Project Four', category: 'API Development' },
  { id: 5, title: 'Project Five', category: 'E-commerce Site' },
  { id: 6, title: 'Project Six', category: 'Portfolio Website' },
];

const PortfolioItem: React.FC<{ item: { id: number; title: string; category: string } }> = ({ item }) => {
  return (
    <div className="relative group rounded-lg overflow-hidden">
      <img src={`https://picsum.photos/seed/project${item.id}/600/400`} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#081b29] via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
      <div className="absolute inset-0 flex flex-col justify-end items-center text-center p-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
        <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
        <p className="text-gray-300 mb-4">{item.category}</p>
        <a href="#" className="w-12 h-12 bg-[#00abf0] rounded-full flex items-center justify-center text-[#081b29] hover:bg-white transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 bg-[#0b293e]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4">My <span className="text-[#00abf0]">Portfolio</span></h2>
        <p className="text-center text-lg text-gray-300 mb-12">My Latest Work</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <PortfolioItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
