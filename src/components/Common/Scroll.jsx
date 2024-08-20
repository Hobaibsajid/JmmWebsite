import React, { useState, useEffect } from 'react';
import scroll from '../../assets/PNG/Scroll.png'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);


  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div>
      {/* Scroll to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className=""
        ><img src={scroll} alt="" />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
