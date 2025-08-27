
import React from 'react';

const servicesData = [
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#00abf0]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
    title: 'Web Development',
    description: 'Building responsive and dynamic websites using modern frameworks like React and Next.js, with a focus on performance and user experience.',
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#00abf0]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>,
    title: 'Mobile App Development',
    description: 'Creating cross-platform mobile applications with React Native, ensuring a seamless experience on both iOS and Android devices.',
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#00abf0]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10m16-5H4m16 5v-2a3 3 0 00-3-3H7a3 3 0 00-3 3v2m16 0h-2m-2 0h-2m-2 0h-2m-2 0H4M4 7V5a3 3 0 013-3h10a3 3 0 013 3v2" /></svg>,
    title: 'Backend & API',
    description: 'Designing and implementing robust backend systems and RESTful APIs using Node.js, Express, and databases like PostgreSQL and MongoDB.',
  },
];

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; description: string; }> = ({ icon, title, description }) => {
  return (
    <div className="bg-[#081b29] p-8 rounded-lg border-2 border-transparent hover:border-[#00abf0] transition-all duration-300 flex flex-col items-center text-center transform hover:-translate-y-2">
      {icon}
      <h3 className="text-2xl font-bold my-4">{title}</h3>
      <p className="text-gray-300 leading-relaxed mb-4 flex-grow">{description}</p>
      <a href="#" className="text-[#00abf0] font-semibold hover:underline">Learn More</a>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-[#081b29]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">My <span className="text-[#00abf0]">Services</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
