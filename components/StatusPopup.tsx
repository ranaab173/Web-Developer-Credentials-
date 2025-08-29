import React from 'react';

interface StatusPopupProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'success' | 'error';
  message: string;
}

const StatusPopup: React.FC<StatusPopupProps> = ({ isOpen, onClose, type, message }) => {
  if (!isOpen) return null;

  const isSuccess = type === 'success';

  const SuccessIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );

  const ErrorIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  return (
    <div 
      className="status-popup-backdrop" 
      onClick={onClose} 
      role="dialog" 
      aria-modal="true" 
      aria-labelledby="status-popup-title"
    >
      <div 
        className="status-popup-content" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`status-popup-icon-wrapper ${isSuccess ? 'success' : 'error'}`}>
          {isSuccess ? <SuccessIcon /> : <ErrorIcon />}
        </div>
        <h2 id="status-popup-title" className="status-popup-title">
          {isSuccess ? 'Success!' : 'Oops! Something went wrong.'}
        </h2>
        <p className="status-popup-message">
          {message}
        </p>
        <button onClick={onClose} className="status-popup-button">
          Close
        </button>
      </div>
    </div>
  );
};

export default StatusPopup;