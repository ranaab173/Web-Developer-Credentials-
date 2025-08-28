import React from 'react';

const techIcons = [
  { name: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Node.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'TypeScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'JavaScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Tailwind CSS', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
  { name: 'PostgreSQL', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'MongoDB', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Docker', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Git', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
];

const TechScroller: React.FC = () => {
    const duplicatedIcons = [...techIcons, ...techIcons];
    return (
        <div className="tech-scroller w-full overflow-hidden relative my-12" data-animate="fade-in-up">
            <div className="tech-scroller-track">
                {duplicatedIcons.map((icon, index) => (
                    <img key={index} src={icon.src} alt={icon.name} title={icon.name} className="tech-logo" />
                ))}
            </div>
             <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-[#0b293e] to-transparent"></div>
             <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-[#0b293e] to-transparent"></div>
        </div>
    );
};

export default TechScroller;