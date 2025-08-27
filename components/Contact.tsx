import React from 'react';

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
                  <p className="text-gray-400">rana.abubakar@example.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#0b293e] text-[#00abf0]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Phone</h4>
                  <p className="text-gray-400">+92 300 1234567</p>
                </div>
              </div>
            </div>
             <div className="flex space-x-4 my-8">
                <a href="#" className="w-10 h-10 border-2 border-[#00abf0] rounded-full flex items-center justify-center text-[#00abf0] hover:bg-[#00abf0] hover:text-[#081b29] transition-all duration-300">
                    <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.327 0-1.937.724-2.25 1.284h.016v-1.123H7.645v7.225h2.406z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 border-2 border-[#00abf0] rounded-full flex items-center justify-center text-[#00abf0] hover:bg-[#00abf0] hover:text-[#081b29] transition-all duration-300">
                    <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
                </a>
             </div>
            <a href="#" className="inline-block px-8 py-3 bg-[#00abf0] text-[#081b29] rounded-full font-semibold hover:bg-opacity-80 transition-all duration-300 shadow-[0_0_10px_#00abf0]">
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
