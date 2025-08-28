import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Pricing from './components/Pricing';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import HireMeModal from './components/HireMeModal';
import BackToTopButton from './components/BackToTopButton';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="bg-[#081b29] text-white font-sans overflow-x-hidden">
      <CustomCursor />
      <HireMeModal isOpen={isModalOpen} onClose={handleCloseModal} />
      <Header onHireMeClick={handleOpenModal} />
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
      <BackToTopButton />
    </div>
  );
};

export default App;
