import React from 'react';
import { ImageAssets } from './ImageAssets';
import TechScroller from './TechScroller';
import Particles from './Particles';

const skills = [
    { category: "Core Technologies", items: ["HTML", "CSS", "JavaScript", "PHP", "TypeScript"] },
    { category: "Frameworks & Libraries", items: ["React JS", "Node JS", "Express.js", "Next JS", "Redux", "Vite"] },
    { category: "Tools & DevOps", items: ["MongoDB", "Git", "Webpack", "Docker"] }
];

const specializedSkills = [
    { 
        platform: "WordPress",
        details: "Elementor, Gutenberg, WooCommerce, Yoast SEO, RankMath, UpdraftPlus, Contact Form, Theme Customization, Custom Coding, ACF, All in One SEO, WordFence. With over 5 years of hands-on experience in Elementor, I can build and customize any WordPress site to perfection."
    },
    {
        platform: "Shopify",
        details: "The perfect Ecommerce & Dropshipping Solution. I can build any type of high-converting Ecommerce store using Shopify, from initial setup to theme customization and app integration."
    },
    {
        platform: "Other Platforms",
        details: "Experienced with other leading platforms including Wix, SquareSpace, and WebFlow to provide versatile web solutions."
    }
];

const About: React.FC = () => {
  return (
    <section id="about" className="relative py-20 bg-[#0b293e] overflow-hidden">
      <Particles />
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
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
              <h2 className="text-4xl font-bold mb-4 text-center md:text-left" data-animate="fade-in-left">Full-Stack <span className="text-[#00abf0]">React Developer</span></h2>
              <p className="text-gray-300 leading-relaxed mb-4" data-animate="fade-in-right" style={{transitionDelay: '300ms'}}>
                I am a results-driven Full Stack Developer specializing in creating efficient, scalable, and user-friendly web applications. With a strong foundation in technologies like React, Node.js, and Next.js, I excel at turning complex ideas into reality. My passion lies in building seamless digital experiences from concept to deployment.
              </p>
              <p className="text-gray-300 leading-relaxed" data-animate="fade-in-left" style={{transitionDelay: '450ms'}}>
                My expertise extends to e-commerce, with deep experience in WordPress/WooCommerce and Shopify. I build robust online stores, customize themes, and integrate essential features to drive business growth. I'm always eager to learn and adapt to new challenges in the ever-evolving world of web development.
              </p>
            </div>
        </div>

        <div className="mt-16">
            <h3 className="text-3xl font-bold text-center mb-10" data-animate="fade-in-up">My <span className="text-[#00abf0]">Skillset</span></h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skills.map((skillCat, index) => (
                  <div key={index} className="bg-[#081b29] p-6 rounded-lg shadow-lg border border-gray-700/50 hover:border-[#00abf0] hover:-translate-y-1 transition-all duration-300" data-animate="fade-in-up" style={{ transitionDelay: `${100 * index}ms`}}>
                    <h4 className="text-xl font-semibold text-[#00abf0] mb-4">{skillCat.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillCat.items.map(item => (
                        <span key={item} className="bg-[#0b293e] px-3 py-1 rounded-md text-gray-300 text-sm font-medium">{item}</span>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
        </div>
        
        <div className="mt-16">
            <h3 className="text-3xl font-bold text-center mb-10" data-animate="fade-in-up">Specialized <span className="text-[#00abf0]">Expertise</span></h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {specializedSkills.map((skill, index) => (
                    <div key={index} className="bg-[#081b29] p-6 rounded-lg shadow-lg border border-gray-700/50 flex flex-col" data-animate="fade-in-up" style={{ transitionDelay: `${100 * index}ms`}}>
                        <h4 className="font-bold text-xl text-[#00abf0] mb-3">{skill.platform}</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">{skill.details}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
      <TechScroller />
    </section>
  );
};

export default About;