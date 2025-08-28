import React from 'react';

interface HireMeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const HireMeModal: React.FC<HireMeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleProceed = () => {
    onClose();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      className="modal-backdrop" 
      onClick={onClose} 
      role="dialog" 
      aria-modal="true" 
      aria-labelledby="modal-title"
    >
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          className="modal-close-button" 
          aria-label="Close modal"
        >
          &times;
        </button>
        <div className="text-center">
            <h2 id="modal-title" className="text-3xl font-bold text-[#00abf0] mb-4">Let's Build Something Amazing!</h2>
            <p className="text-gray-300 leading-relaxed mb-8">
                Don't worry, we will work this through. Give me your project detail and your budget.
            </p>
            <button 
                onClick={handleProceed} 
                className="inline-block px-8 py-3 bg-[#00abf0] text-[#081b29] rounded-full font-semibold hover:bg-opacity-80 transition-all duration-300 shadow-[0_0_10px_#00abf0]"
            >
                Get Discount
            </button>
        </div>
      </div>
    </div>
  );
};

export default HireMeModal;