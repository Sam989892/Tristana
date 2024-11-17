import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const CarouselTrack = styled(motion.div)`
  display: flex;
  gap: 1rem;
  padding: 1rem;
`;

const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: ${props => props.theme.background};
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 2;
  
  &:left {
    left: 10px;
  }
  
  &:right {
    right: 10px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Carousel = ({ children, itemsToShow = 4 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemWidth = 100 / itemsToShow;

  const next = () => {
    setCurrentIndex(prev => 
      prev + itemsToShow >= React.Children.count(children) ? 0 : prev + 1
    );
  };

  const prev = () => {
    setCurrentIndex(prev => 
      prev === 0 ? React.Children.count(children) - itemsToShow : prev - 1
    );
  };

  return (
    <CarouselContainer>
      <CarouselButton onClick={prev} style={{ left: '10px' }}>←</CarouselButton>
      <CarouselTrack
        animate={{
          x: `${-currentIndex * itemWidth}%`
        }}
        transition={{ type: "tween", ease: "easeInOut" }}
      >
        {React.Children.map(children, child => (
          <div style={{ flex: `0 0 ${itemWidth}%` }}>
            {child}
          </div>
        ))}
      </CarouselTrack>
      <CarouselButton onClick={next} style={{ right: '10px' }}>→</CarouselButton>
    </CarouselContainer>
  );
};

export default Carousel; 