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
  const duplicatedCerts = [...certsData, ...certsData];

  return (
    <section id="certifications" className="py-20 bg-[#0b293e] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4">My <span className="text-[#00abf0]">Certifications</span></h2>
        <p className="text-center text-lg text-gray-300 mb-12">Proof of My Expertise</p>
      </div>
      <div className="cert-gallery-container relative">
        <div className="cert-gallery-track">
          {duplicatedCerts.map((cert, index) => (
            <div 
              key={index} 
              className="cert-card relative rounded-lg overflow-hidden border border-gray-700/50 shadow-lg bg-cover bg-center"
              style={{ backgroundImage: `url(${cert.imgSrc})` }}
            >
              <div className="cert-card-overlay absolute inset-0 flex items-center justify-center p-6 text-center">
                <div className="cert-card-content">
                  <h3 className="text-xl font-bold text-[#00abf0] mb-2">{cert.name}</h3>
                  <p className="text-sm font-semibold text-white mb-3">{cert.institution}</p>
                  <p className="text-gray-300 text-sm">{cert.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-[#0b293e] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-[#0b293e] to-transparent z-10 pointer-events-none"></div>
      </div>
    </section>
  );
};

export default Certifications;