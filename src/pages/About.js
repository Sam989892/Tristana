import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

const Section = styled(motion.section)`
  margin-bottom: 4rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ValueCard = styled(motion.div)`
  padding: 2rem;
  background: ${props => props.theme.background};
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <AboutContainer>
      <Section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1 variants={itemVariants}>Our Story</motion.h1>
        <motion.p variants={itemVariants}>
          Founded in 2024, Fashion Brand has been at the forefront of sustainable 
          and stylish fashion. We believe in creating timeless pieces that not only 
          look good but also contribute to a better future for our planet.
        </motion.p>
      </Section>

      <Section>
        <motion.h2 variants={itemVariants}>Our Values</motion.h2>
        <Grid>
          <ValueCard variants={itemVariants}>
            <h3>Sustainability</h3>
            <p>We're committed to eco-friendly practices and materials.</p>
          </ValueCard>
          <ValueCard variants={itemVariants}>
            <h3>Quality</h3>
            <p>Every piece is crafted with attention to detail and durability.</p>
          </ValueCard>
          <ValueCard variants={itemVariants}>
            <h3>Innovation</h3>
            <p>Constantly evolving to meet modern fashion needs.</p>
          </ValueCard>
        </Grid>
      </Section>
    </AboutContainer>
  );
};

export default About;
