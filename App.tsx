import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Pricing from './components/Pricing';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

const App: React.FC = () => {
  return (
    <div className="bg-[#081b29] text-white font-sans overflow-x-hidden">
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <div data-animate="fade-in-up">
          <About />
        </div>
        <div data-animate="fade-in-up">
          <Pricing />
        </div>
        <div data-animate="fade-in-up">
          <Portfolio />
        </div>
        <div data-animate="fade-in-up">
          <Testimonials />
        </div>
        <div data-animate="fade-in-up">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;