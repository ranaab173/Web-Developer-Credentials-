import React from 'react';
import { ImageAssets } from './ImageAssets';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-[#081b29]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Contact <span className="text-[#00abf0]">Me</span></h2>
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
          <div className="lg:w-1/3" data-animate="fade-in-right">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#0b293e] text-[#00abf0]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Email</h4>
                  <a href="mailto:ranairc@gmail.com" className="text-gray-400 hover:text-[#00abf0]">ranairc@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#0b293e] text-[#00abf0]">
                    <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24"><path d="M20.52,3.48A11.91,11.91,0,0,0,12,0h0A12,12,0,0,0,0,12c0,3.25,1.31,6.2,3.48,8.37L0,24l3.63-3.48A11.9,11.9,0,0,0,12,24h0a12,12,0,0,0,12-12,11.9,11.9,0,0,0-3.48-8.52ZM12,21.94a9.94,9.94,0,0,1-5.22-1.52L6,19.83l-3.3,3.16L3.3,19.7a9.9,9.9,0,0,1-1.52-5.45A10,10,0,0,1,12,2.06,9.93,9.93,0,0,1,21.94,12,10,10,0,0,1,12,21.94Zm5.44-7.81c-.3-.15-1.76-.87-2-1s-.44-.15-.62.15-.76,1-1,1.18-.3.15-.59,0a3.65,3.65,0,0,1-2.12-1.25,6.58,6.58,0,0,1-1.47-2.47c-.15-.29,0-.44.13-.59s.3-.36.44-.54a1.7,1.7,0,0,0,.3-.44.51.51,0,0,0-.05-.45c-.15-.29-1-2.3-1.34-3.15s-.65-.71-.9-.72a1.49,1.49,0,0,0-1.28.62,2.18,2.18,0,0,0-.76,1.8,4.53,4.53,0,0,0,1,3.25,8.8,8.8,0,0,0,3.75,3.5,6.5,6.5,0,0,0,2.5.89,3.06,3.06,0,0,0,1.9-.29,2.8,2.8,0,0,0,1.85-1.58c.29-.59.29-1.09.2-1.23S17.74,14.28,17.44,14.13Z"/></svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">WhatsApp</h4>
                  <a href="https://wa.me/qr/KP7AO6A2DQFAL1" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00abf0]">Click to chat</a>
                </div>
              </div>
            </div>
             <div className="flex space-x-4 my-8">
                <a href="https://www.linkedin.com/in/ranaabubakar173/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border-2 border-[#00abf0] rounded-full flex items-center justify-center text-[#00abf0] hover:bg-[#00abf0] hover:text-[#081b29] transition-all duration-300">
                    <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.327 0-1.937.724-2.25 1.284h.016v-1.123H7.645v7.225h2.406z"/></svg>
                </a>
                <a href="https://github.com/ranaab173" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border-2 border-[#00abf0] rounded-full flex items-center justify-center text-[#00abf0] hover:bg-[#00abf0] hover:text-[#081b29] transition-all duration-300">
                    <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
                </a>
             </div>
            <a href="/my-cv.pdf" download className="inline-block px-8 py-3 bg-[#00abf0] text-[#081b29] rounded-full font-semibold hover:bg-opacity-80 transition-all duration-300 shadow-[0_0_10px_#00abf0]">
                Download CV
            </a>
          </div>
          {/* Contact Form */}
          <div className="lg:w-2/3" data-animate="fade-in-left">
            <form action="#" className="space-y-6">
              <div>
                <input type="text" placeholder="Your Name" className="w-full bg-[#0b293e] border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-[#00abf0]" />
              </div>
              <div>
                <input type="email" placeholder="Your Email" className="w-full bg-[#0b293e] border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-[#00abf0]" />
              </div>
              <div>
                <textarea placeholder="Your Message" rows={6} className="w-full bg-[#0b293e] border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-[#00abf0]"></textarea>
              </div>
              <div>
                <button type="submit" className="inline-block px-8 py-3 bg-[#00abf0] text-[#081b29] rounded-full font-semibold hover:bg-opacity-80 transition-all duration-300 shadow-[0_0_10px_#00abf0]">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;