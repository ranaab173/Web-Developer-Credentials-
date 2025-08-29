import React, { useState } from 'react';
import { ImageAssets } from './ImageAssets';
import TechScroller from './TechScroller';
import Particles from './Particles';

type Tab = 'skills' | 'experience' | 'education' | 'specialized';

const TabButton: React.FC<{ active: boolean; onClick: () => void; children: React.ReactNode }> = ({ active, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className={`relative px-4 py-2 text-lg font-semibold transition-colors duration-300 ${active ? 'text-[#00abf0]' : 'text-white'}`}
    >
      {children}
      <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#00abf0] transform transition-transform duration-300 ${active ? 'scale-x-100' : 'scale-x-0'}`}></span>
    </button>
  );
};

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('skills');

  const skills = [
    { category: "Core Technologies", items: ["HTML", "CSS", "JavaScript", "PHP"] },
    { category: "Frameworks & Libraries", items: ["React.js", "Node.js", "Express.js", "Next.js", "TypeScript", "Vite", "Redux"] },
    { category: "Tools & Platforms", items: ["MongoDB", "Git", "Webpack", "Docker"] }
  ];

  const specializedSkills = [
    { 
        platform: "WordPress",
        details: "Elementor, Gutenberg, WooCommerce, Yoast SEO, RankMath, UpdraftPlus, Contact Form, Theme Customization, Custom Coding, ACF, All in One SEO, WordFence, and much more. Have 5 years of experience in Elementor."
    },
    {
        platform: "Shopify",
        details: "Perfect Ecommerce & Dropshipping Solution. I can build any type of Ecommerce store using Shopify."
    },
    {
        platform: "Other Platforms",
        details: "Wix, SquareSpace, WebFlow."
    }
  ];

  const experience = [
    { role: "Senior Software Engineer", company: "Tech Solutions Inc.", duration: "2021 - Present" },
    { role: "Full Stack Developer", company: "Innovate Co.", duration: "2019 - 2021" },
    { role: "Junior Developer", company: "CodeBase LLC", duration: "2017 - 2019" }
  ];

  const education = [
    { degree: "M.S. in Computer Science", institution: "University of Technology", duration: "2015 - 2017" },
    { degree: "B.S. in Software Engineering", institution: "State College", duration: "2011 - 2015" }
  ];

  return (
    <section id="about" className="relative py-20 bg-[#0b293e] overflow-hidden">
      <Particles />
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/3 flex justify-center" data-animate="fade-in-right">
             <div className="bg-[#081b29] rounded-lg shadow-lg shadow-[#00abf0]/20 border border-gray-700 w-full max-w-sm overflow-hidden">
                <div className="bg-gray-800 p-2 flex items-center gap-2">
                    <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                    <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                    <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                </div>
                <img src={ImageAssets.aboutMe} alt="About Me" className="w-full h-auto object-cover" />
            </div>
        </div>
        <div className="w-full md:w-2/3">
          <h2 className="text-4xl font-bold mb-2 text-center md:text-left" data-animate="fade-in-left">About <span className="text-[#00abf0]">Me</span></h2>
          <h3 className="text-2xl font-semibold mb-4 text-center md:text-left" data-animate="fade-in-left" style={{transitionDelay: '150ms'}}>Full-stack Developer!</h3>
          <p className="text-gray-300 leading-relaxed mb-4" data-animate="fade-in-right" style={{transitionDelay: '300ms'}}>
            I am a dedicated and results-driven Full Stack Developer with a passion for creating efficient, scalable, and user-friendly web applications. With a strong foundation in both front-end and back-end technologies, I enjoy bringing ideas to life from concept to deployment.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6" data-animate="fade-in-left" style={{transitionDelay: '450ms'}}>
             I thrive in collaborative environments and am always eager to learn and adapt to new challenges and technologies in the ever-evolving world of software development. My goal is to not just write code, but to build solutions that make a tangible impact.
          </p>

          <div className="flex space-x-6 border-b border-gray-600 mb-6" data-animate="fade-in-up" style={{transitionDelay: '600ms'}}>
            <TabButton active={activeTab === 'skills'} onClick={() => setActiveTab('skills')}>Skills</TabButton>
            <TabButton active={activeTab === 'specialized'} onClick={() => setActiveTab('specialized')}>Specialized</TabButton>
            <TabButton active={activeTab === 'experience'} onClick={() => setActiveTab('experience')}>Experience</TabButton>
            <TabButton active={activeTab === 'education'} onClick={() => setActiveTab('education')}>Education</TabButton>
          </div>

          <div className="tab-content min-h-[220px]" data-animate="fade-in-up" style={{transitionDelay: '750ms'}}>
            {activeTab === 'skills' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skillCat, index) => (
                  <div key={index} className="bg-[#081b29] p-6 rounded-lg shadow-lg border border-gray-700/50">
                    <h4 className="text-xl font-semibold text-[#00abf0] mb-4">{skillCat.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillCat.items.map(item => (
                        <span key={item} className="bg-[#0b293e] px-3 py-1 rounded-md text-gray-300 text-sm">{item}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
            {activeTab === 'specialized' && (
              <div className="bg-[#081b29] p-6 rounded-lg shadow-lg border border-gray-700/50">
                <h4 className="text-xl font-semibold text-[#00abf0] mb-4">Specialized Platforms</h4>
                <ul className="space-y-4">
                  {specializedSkills.map((skill, index) => (
                    <li key={index}>
                        <h5 className="font-bold text-lg text-white">{skill.platform}</h5>
                        <p className="text-gray-400 pl-4 border-l-2 border-[#00abf0]/50 ml-2 mt-1">{skill.details}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {activeTab === 'experience' && (
              <div className="bg-[#081b29] p-6 rounded-lg shadow-lg border border-gray-700/50">
                <ul className="list-disc list-inside space-y-3">
                  {experience.map((exp, index) => (
                    <li key={index}><span className="font-bold text-[#00abf0]">{exp.role}</span> at {exp.company} <span className="text-gray-400">({exp.duration})</span></li>
                  ))}
                </ul>
              </div>
            )}
            {activeTab === 'education' && (
               <div className="bg-[#081b29] p-6 rounded-lg shadow-lg border border-gray-700/50">
                <ul className="list-disc list-inside space-y-3">
                  {education.map((edu, index) => (
                    <li key={index}><span className="font-bold text-[#00abf0]">{edu.degree}</span> from {edu.institution} <span className="text-gray-400">({edu.duration})</span></li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <TechScroller />
    </section>
  );
};

export default About;