import React, { useState } from 'react';
import { aboutMeImage } from './ImageAssets';

type Tab = 'skills' | 'experience' | 'education';

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
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"] },
    { category: "Backend", items: ["Node.js", "Express", "Python", "Django", "PostgreSQL", "MongoDB"] },
    { category: "Tools", items: ["Git", "Docker", "Webpack", "Jest", "CI/CD"] }
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
    <section id="about" className="py-20 bg-[#0b293e]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/3 flex justify-center" data-animate="fade-in-right">
            <img src={aboutMeImage} alt="About Me" className="rounded-lg w-full max-w-sm shadow-lg shadow-[#00abf0]/20" />
        </div>
        <div className="md:w-2/3" data-animate="fade-in-left">
          <h2 className="text-4xl font-bold mb-2 text-center md:text-left">About <span className="text-[#00abf0]">Me</span></h2>
          <h3 className="text-2xl font-semibold mb-4 text-center md:text-left">Full-stack Developer!</h3>
          <p className="text-gray-300 leading-relaxed mb-6">
            I am a dedicated and results-driven Full Stack Developer with a passion for creating efficient, scalable, and user-friendly web applications. With a strong foundation in both front-end and back-end technologies, I enjoy bringing ideas to life from concept to deployment. I thrive in collaborative environments and am always eager to learn and adapt to new challenges and technologies in the ever-evolving world of software development.
          </p>

          <div className="flex space-x-6 border-b border-gray-600 mb-6">
            <TabButton active={activeTab === 'skills'} onClick={() => setActiveTab('skills')}>Skills</TabButton>
            <TabButton active={activeTab === 'experience'} onClick={() => setActiveTab('experience')}>Experience</TabButton>
            <TabButton active={activeTab === 'education'} onClick={() => setActiveTab('education')}>Education</TabButton>
          </div>

          <div className="tab-content min-h-[220px]">
            {activeTab === 'skills' && (
              <div>
                {skills.map((skillCat, index) => (
                  <div key={index} className="mb-4">
                    <h4 className="text-xl font-semibold text-[#00abf0] mb-2">{skillCat.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillCat.items.map(item => (
                        <span key={item} className="bg-[#081b29] px-3 py-1 rounded-md text-gray-300">{item}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
            {activeTab === 'experience' && (
              <ul className="list-disc list-inside space-y-3">
                {experience.map((exp, index) => (
                  <li key={index}><span className="font-bold text-[#00abf0]">{exp.role}</span> at {exp.company} <span className="text-gray-400">({exp.duration})</span></li>
                ))}
              </ul>
            )}
            {activeTab === 'education' && (
              <ul className="list-disc list-inside space-y-3">
                {education.map((edu, index) => (
                  <li key={index}><span className="font-bold text-[#00abf0]">{edu.degree}</span> from {edu.institution} <span className="text-gray-400">({edu.duration})</span></li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;