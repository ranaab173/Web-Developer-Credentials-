import React from 'react';
import { ImageAssets } from './ImageAssets';

const certsData = [
  {
    name: 'WordPress',
    institution: 'Ministery of Information Technology and Telecom, Government of Pakistan',
    description: 'Mastery in developing and customizing professional WordPress websites.',
    imgSrc: ImageAssets.certifications.wordpress
  },
  {
    name: 'Digital Marketing',
    institution: 'Ministery of Information Technology and Telecom, Government of Pakistan',
    description: 'Comprehensive skills in online marketing strategies, including social media and content marketing.',
    imgSrc: ImageAssets.certifications.digitalMarketing
  },
  {
    name: 'Search Engine Optimization',
    institution: 'Ministery of Information Technology and Telecom, Government of Pakistan',
    description: 'Expertise in on-page, off-page, and technical SEO to improve search engine rankings.',
    imgSrc: ImageAssets.certifications.seo
  },
  {
    name: 'Freelancing',
    institution: 'Ministery of Information Technology and Telecom, Government of Pakistan',
    description: 'Certified proficiency in client management, project delivery, and building a successful freelance career.',
    imgSrc: ImageAssets.certifications.freelancing
  },
  {
    name: 'Full-Stack Digital Marketing',
    institution: 'Online Certification Program',
    description: 'A holistic certification covering all aspects of digital marketing from strategy to execution.',
    imgSrc: ImageAssets.certifications.fullStackDM
  }
];

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 bg-[#0b293e] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4" data-animate="fade-in-up">My <span className="text-[#00abf0]">Certifications</span></h2>
        <p className="text-center text-lg text-gray-300 mb-12" data-animate="fade-in-up" style={{ transitionDelay: '100ms' }}>Proof of My Expertise</p>
        
        <div className="cert-gallery grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {certsData.map((cert, index) => (
            <div 
              key={index} 
              className="cert-card-wrapper" 
              data-animate="fade-in-up" 
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="cert-card-new">
                <img src={cert.imgSrc} alt={`${cert.name} Certificate`} />
                <div className="cert-card-overlay-new text-left">
                  <div>
                    <h3 className="text-xl font-bold text-[#00abf0] mb-1">{cert.name}</h3>
                    <p className="text-xs font-semibold text-white mb-2">{cert.institution}</p>
                    <p className="text-gray-300 text-sm leading-snug">{cert.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;