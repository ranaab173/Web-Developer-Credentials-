import React, { useState, useEffect } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseOver = (e: MouseEvent) => {
      if (e.target instanceof Element && e.target.closest('a, button')) {
        setIsHovering(true);
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      if (e.target instanceof Element && e.target.closest('a, button')) {
        setIsHovering(false);
      }
    };
    
    let scrollTimeout: number;
    const onScroll = () => {
        setIsScrolling(true);
        clearTimeout(scrollTimeout);
        scrollTimeout = window.setTimeout(() => {
            setIsScrolling(false);
        }, 300);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);
    window.addEventListener('scroll', onScroll);


    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
      window.removeEventListener('scroll', onScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <div className={`custom-cursor ${isHovering ? 'hover' : ''} ${isScrolling ? 'scrolling' : ''}`}>
      <div 
        className="cursor-dot" 
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      ></div>
      <div 
        className="cursor-outline" 
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      ></div>
    </div>
  );
};

export default CustomCursor;