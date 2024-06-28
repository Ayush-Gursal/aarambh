import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

const ScrollButton = () => {
  return (
    <div>
      <Link
        activeClass="active"
        to="prediction-form-container"
        spy={true}
        smooth={true}
        offset={-70} // adjust this value to fit your layout
        duration={500}
      >
        Predict College
      </Link>
    </div>
  );
};

export default ScrollButton;