import React, { useState, useEffect } from 'react';
import { ImageAssets } from './ImageAssets';
import CodeAnimation from './CodeAnimation';

const roles = ["Web Developer", "React Developer", "E.commerce Expert"];

const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentRole, setCurrentRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const fullRole = roles[roleIndex];
      setCurrentRole(
        isDeleting
          ? fullRole.substring(0, currentRole.length - 1)
          : fullRole.substring(0, currentRole.length + 1)
      );

      setTypingSpeed(isDeleting ? 100 : 150);

      if (!isDeleting && currentRole === fullRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentRole === "") {
        setIsDeleting(false);
        setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
      }
    };
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentRole, isDeleting, roleIndex, typingSpeed]);

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-[#081b29] overflow-hidden pt-28 md:pt-0">
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 md:w-[600px] md:h-[600px] bg-gradient-to-br from-[#0e3a5a] to-[#081b29] rounded-full blob opacity-40 blur-2xl"></div>
       <div className="absolute top-0 right-0 w-80 h-80 bg-[#00abf0] rounded-full opacity-10 blur-3xl -translate-y-1/4 translate-x-1/4 z-0"></div>
       <CodeAnimation />
       {/* Floating Shapes */}
       <div className="absolute inset-0 z-0">
          <div className="shape circle" style={{ top: '20%', left: '10%', animationDelay: '0s' }}></div>
          <div className="shape square" style={{ top: '70%', left: '80%', animationDelay: '2s' }}></div>
          <div className="shape circle" style={{ top: '80%', left: '20%', animationDelay: '4s', width: '25px', height: '25px' }}></div>
          <div className="shape square" style={{ top: '30%', left: '75%', animationDelay: '6s', width: '20px', height: '20px' }}></div>
       </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center justify-between z-10">
        <div className="md:w-1/2 mt-10 md:mt-0 text-center md:text-left z-10">
          <h3 className="text-3xl font-bold" data-animate="fade-in-left" style={{transitionDelay: '100ms'}}>Hello, I'm</h3>
          <h1 className="text-5xl md:text-6xl font-extrabold my-2" data-animate="fade-in-left" style={{transitionDelay: '200ms'}}>Rana Abubakar</h1>
          <p className="text-xl font-semibold text-gray-300 my-3" data-animate="fade-in-left" style={{transitionDelay: '250ms'}}>
            WordPress | Shopify Expert
          </p>
          <h3 className="text-3xl font-bold text-[#00abf0] min-h-[84px] md:min-h-[48px] flex flex-col justify-center items-center md:items-start" data-animate="fade-in-left" style={{transitionDelay: '300ms'}}>
            <span className="border-r-2 border-[#00abf0] min-h-[48px] inline-block align-middle">{currentRole || ' '}</span>
          </h3>
          <p className="my-6 text-gray-300 leading-relaxed max-w-xl mx-auto md:mx-0" data-animate="fade-in-left" style={{transitionDelay: '400ms'}}>
            I'm a passionate developer with experience in building web applications with modern technologies. I love solving complex problems and learning new skills.
          </p>
          <div className="flex justify-center md:justify-start space-x-4 my-6" data-animate="fade-in-left" style={{transitionDelay: '500ms'}}>
            <a href="https://www.linkedin.com/in/ranaabubakar173/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border-2 border-[#00abf0] rounded-full flex items-center justify-center text-[#00abf0] hover:bg-[#00abf0] hover:text-[#081b29] transition-all duration-300">
              <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.327 0-1.937.724-2.25 1.284h.016v-1.123H7.645v7.225h2.406z"/></svg>
            </a>
            <a href="https://github.com/ranaab173" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border-2 border-[#00abf0] rounded-full flex items-center justify-center text-[#00abf0] hover:bg-[#00abf0] hover:text-[#081b29] transition-all duration-300">
              <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
            </a>
          </div>
          <a href="#contact" className="inline-block px-8 py-3 bg-[#00abf0] text-[#081b29] rounded-full font-semibold hover:bg-opacity-80 transition-all duration-300 shadow-[0_0_10px_#00abf0]" data-animate="fade-in-left" style={{transitionDelay: '600ms'}}>
            Contact Me
          </a>
        </div>
        <div className="md:w-1/2 flex justify-center z-10" data-animate="fade-in-right">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
            <div className="w-full h-full rounded-full overflow-hidden border-8 border-[#00abf0] shadow-[0_0_20px_#00abf0]">
              <img src={ImageAssets.profilePic} alt="Rana Abubakar" className="w-full h-full object-cover" />
            </div>
            
            {/* Expert Logos */}
            <div className="absolute inset-0 z-20 pointer-events-none">
                <div 
                    className="expert-logo-container" 
                    style={{ top: '0%', left: '50%', animationDelay: '0s' }}
                >
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" alt="WordPress" />
                    <p className="expert-logo-text">WordPress</p>
                </div>
                <div 
                    className="expert-logo-container" 
                    style={{ top: '85%', left: '80%', animationDelay: '1s' }}
                >
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/woocommerce/woocommerce-original.svg" alt="WooCommerce" />
                    <p className="expert-logo-text">WooCommerce</p>
                </div>
                <div 
                    className="expert-logo-container" 
                    style={{ top: '85%', left: '20%', animationDelay: '2s' }}
                >
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/shopify/shopify-original.svg" alt="Shopify" />
                    <p className="expert-logo-text">Shopify</p>
                </div>
                 <div 
                    className="expert-logo-container" 
                    style={{ top: '35%', left: '0%', animationDelay: '3s' }}
                >
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" />
                    <p className="expert-logo-text">React</p>
                </div>
                 <div 
                    className="expert-logo-container" 
                    style={{ top: '35%', left: '100%', animationDelay: '4s' }}
                >
                    <img src="https://www.svgrepo.com/show/373539/elementor.svg" alt="Elementor" />
                    <p className="expert-logo-text">Elementor</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;