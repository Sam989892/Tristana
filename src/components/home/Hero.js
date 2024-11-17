import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const HeroContainer = styled.section`
  position: relative;
  height: 80vh;
  overflow: hidden;
`;

const HeroImage = styled(motion.img)`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const HeroContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  z-index: 2;
  width: 90%;
  max-width: 800px;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  font-family: 'Playfair Display', serif;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ShopButton = styled.button`
  padding: 1rem 2rem;
  font-size: 1.1rem;
  background: transparent;
  border: 2px solid white;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: white;
    color: black;
  }
`;

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    '/images/product1.jpg',
    '/images/product2.jpg',
    '/images/product3.jpg',
    '/images/product4.jpg',
    '/images/product5.jpg',
    '/images/product6.jpg'
  ];

  const getRandomIndex = (currentIndex) => {
    const newIndex = Math.floor(Math.random() * images.length);
    return newIndex === currentIndex ? getRandomIndex(currentIndex) : newIndex;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(current => getRandomIndex(current));
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <HeroContainer>
      <AnimatePresence mode="wait">
        <HeroImage
          key={currentImageIndex}
          src={images[currentImageIndex]}
          alt="Hero"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
        />
      </AnimatePresence>
      <Overlay />
      <HeroContent>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Title>Welcome to Tristana</Title>
          <Subtitle>Discover our latest collection of premium fashion</Subtitle>
          <ShopButton onClick={() => window.location.href = '/products'}>
            Shop Now
          </ShopButton>
        </motion.div>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
