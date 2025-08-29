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
                    <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='2500' height='2500' viewBox='8.399 8.4 51.2 51.2'%3e%3cpath fill='%2321759B' d='M34 59.6C19.813 59.6 8.293 48.293 8.4 34 8.507 19.707 19.28 8.4 34 8.4c14.721 0 25.6 11.52 25.6 25.6S48.187 59.6 34 59.6zm7.573-3.947l-7.253-19.52-6.827 19.947c5.014 1.174 8.427 1.493 14.08-.427zm-17.706-1.066l-10.88-29.76c-1.494 3.2-1.813 5.867-2.027 9.173.107 8.746 5.013 16.746 12.907 20.587zM56.934 34c.106-5.653-2.453-10.133-2.667-10.773.214 4.374-.427 6.613-1.173 9.067l-7.467 21.44C55.014 48.08 56.826 39.653 57.04 34h-.106zm-23.68-.96l-3.627-9.92-2.667-.213c-1.066-.747-.427-1.92.32-1.92 4.8.32 7.466.32 12.267 0 1.174 0 1.493 1.707.106 1.92l-2.56.213 8.319 24.533 3.946-13.44c.214-5.866-1.387-6.506-3.52-10.773-1.707-3.307.107-6.507 3.414-6.613-2.668-2.56-8.107-5.76-15.254-5.867s-14.72 3.52-19.2 10.347l7.894-.213c.96.427.533 1.813 0 1.92l-2.773.213 8.32 24.96 5.015-15.147z'/%3e%3c/svg%3e" alt="WordPress" />
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
                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjE5MiIgaGVpZ2h0PSIyNTAwIiB2aWV3Qm94PSIwIDAgMjU2IDI5MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCI+PHBhdGggZD0iTTIyMy43NzQgNTcuMzRjLS4yMDEtMS40Ni0xLjQ4LTIuMjY4LTIuNTM3LTIuMzU3LTEuMDU1LS4wODgtMjMuMzgzLTEuNzQzLTIzLjM4My0xLjc0M3MtMTUuNTA3LTE1LjM5NS0xNy4yMDktMTcuMDk5Yy0xLjcwMy0xLjcwMy01LjAyOS0xLjE4NS02LjMyLS44MDUtLjE5LjA1Ni0zLjM4OCAxLjA0My04LjY3OCAyLjY4LTUuMTgtMTQuOTA2LTE0LjMyMi0yOC42MDQtMzAuNDA1LTI4LjYwNC0uNDQ0IDAtLjkwMS4wMTgtMS4zNTguMDQ0QzEyOS4zMSAzLjQwNyAxMjMuNjQ0Ljc3OSAxMTguNzUuNzc5Yy0zNy40NjUgMC01NS4zNjQgNDYuODM1LTYwLjk3NiA3MC42MzUtMTQuNTU4IDQuNTExLTI0LjkgNy43MTgtMjYuMjIxIDguMTMzLTguMTI2IDIuNTQ5LTguMzgzIDIuODA1LTkuNDUgMTAuNDYyQzIxLjMgOTUuODA2LjAzOCAyNjAuMjM1LjAzOCAyNjAuMjM1bDE2NS42NzggMzEuMDQyIDg5Ljc3LTE5LjQyUzIyMy45NzMgNTguOCAyMjMuNzc1IDU3LjM0ek0xNTYuNDkgNDAuODQ4bC0xNC4wMTkgNC4zMzljLjAwNS0uOTg4LjAxLTEuOTYuMDEtMy4wMjMgMC05LjI2NC0xLjI4Ni0xNi43MjMtMy4zNDktMjIuNjM2IDguMjg3IDEuMDQgMTMuODA2IDEwLjQ2OSAxNy4zNTggMjEuMzJ6bS0yNy42MzgtMTkuNDgzYzIuMzA0IDUuNzczIDMuODAyIDE0LjA1OCAzLjgwMiAyNS4yMzggMCAuNTcyLS4wMDUgMS4wOTUtLjAxIDEuNjI0LTkuMTE3IDIuODI0LTE5LjAyNCA1Ljg5LTI4Ljk1MyA4Ljk2NiA1LjU3NS0yMS41MTYgMTYuMDI1LTMxLjkwOCAyNS4xNjEtMzUuODI4em0tMTEuMTMxLTEwLjUzN2MxLjYxNyAwIDMuMjQ2LjU0OSA0LjgwNSAxLjYyMi0xMi4wMDcgNS42NS0yNC44NzcgMTkuODgtMzAuMzEyIDQ4LjI5N2wtMjIuODg2IDcuMDg4Qzc1LjY5NCA0Ni4xNiA5MC44MSAxMC44MjggMTE3LjcyIDEwLjgyOHoiIGZpbGw9IiM5NUJGNDYiLz48cGF0aCBkPSJNMjIxLjIzNyA1NC45ODNjLTEuMDU1LS4wODgtMjMuMzgzLTEuNzQzLTIzLjM4My0xLjc0M3MtMTUuNTA3LTE1LjM5NS0xNy4yMDktMTcuMDk5Yy0uNjM3LS42MzQtMS40OTYtLjk1OS0yLjM5NC0xLjA5OWwtMTIuNTI3IDI1Ni4yMzMgODkuNzYyLTE5LjQxOFMyMjMuOTcyIDU4LjggMjIzLjc3NCA1Ny4zNGMtLjIwMS0xLjQ2LTEuNDgtMi4yNjgtMi41MzctMi4zNTciIGZpbGw9IiM1RU8zRSIvPjxwYXRoIGQ9Ik0xMzUuMjQyIDEwNC41ODVsLTExLjA2OSAzMi45MjZzLTkuNjk4LTUuMTc2LTIxLjU4Ni01LjE3NmMtMTcuNDI4IDAtMTguMzA1IDEwLjkzNy0xOC4zMDUgMTMuNjkzIDAgMTUuMDM4IDM5LjIgMjAuOCAzOS4yIDU2LjAyNCAwIDI3LjcxMy0xNy41NzcgNDUuNTU4LTQxLjI3NyA0NS41NTgtMjguNDQgMC00Mi45ODQtMTcuNy00Mi45ODQtMTcuN2w3LjYxNS0yNS4xNnMxNC45NSAxMi44MzUgMjcuNTY1IDEyLjgzNWM4LjI0MyAwIDExLjU5Ni02LjQ5IDExLjU5Ni0xMS4yMzIgMC0xOS42MTYtMzIuMTYtMjAuNDkxLTMyLjE2LTUyLjcyNCAwLTI3LjEyOSAxOS40NzItNTMuMzgyIDU4Ljc3OC01My4zODIgMTUuMTQ1IDAgMjIuNjI3IDQuMzM4IDIyLjYyNyA0LjMzOCIgZmlsbD0iI0ZGRiIvPjwvc3ZnPg==" alt="Shopify" />
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
                    <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDEyMy4zMDUgNTk1LjI3OSA1OTUuMjgxIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMTIzLjMwNSA1OTUuMjc5IDU5NS4yODEiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxsaW5lYXJHcmFkaWVudCBpZD0iU2hhcGVfMV8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iLTEyLjY2MTQiIHkxPSI3NTUuNjQ1IiB4Mj0iLTEzLjY2MTQiIHkyPSI3NTYuNjQ1IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDU5NS4yNzUxIDAgMCA1OTUuMjc3NyA4MTMxLjg2NTIgLTQ0OTY5NS45MDYzKSI+PHN0b3Agb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojRUQzNDVFIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojMzgyQzc0Ii8+PC9saW5lYXJHcmFkaWVudD48cGF0aCBpZD0iU2hhcGUiIGZpbGw9InVybCgjU2hhcGVfMV8pIiBkPSJNNTY1LjUxNiwxMjMuMzA1SDI5Ljc2NEMxMy42MDcsMTIzLjMwNSwwLDEzNi45MTEsMCwxNTMuMDY5djUzNS43NTMgYzAsMTYuMTU2LDEzLjYwNiwyOS43NjQsMjkuNzY0LDI5Ljc2NGg1MzUuNzUyYzE2LjE1OCwwLDI5Ljc2NC0xMy42MDcsMjkuNzY0LTI5Ljc2NFYxNTMuMDY5IEM1OTUuMjgsMTM2LjkxMSw1ODEuNjc0LDEyMy4zMDUsNTY1LjUxNiwxMjMuMzA1TDU2NS41MTYsMTIzLjMwNXogTTIxOC41NTMsNTUyLjc1N2gtNTIuNzI1VjI4OS4xMzNoNTIuNzI1VjU1Mi43NTd6IE00MzAuMzAyLDU1Mi43NTdIMjcxLjI3OHYtNTIuNzI1aDE1OS4wMjRWNTUyLjc1N3ogTTQzMC4zMDIsNDQ3LjMwOEgyNzEuMjc4di01Mi4yMjZoMTU5LjAyNFY0NDcuMzA4eiBNNDMwLjMwMiwzNDEuODU4SDI3MS4yNzgJdi01Mi4yMjVoMTU5LjAyNFYzNDEuODU4eiIvPjwvc3ZnPg==" alt="Elementor" />
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