import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Card = styled(motion.div)`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  background: ${props => props.theme.background};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const ImageContainer = styled.div`
  position: relative;
  padding-top: 125%; // 4:5 aspect ratio
  overflow: hidden;
  
  img {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
`;

const QuickView = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  transform: translateY(100%);
  transition: transform 0.3s ease;
`;

const Details = styled.div`
  padding: 1rem;
  text-align: left;
`;

const Price = styled.p`
  font-weight: bold;
  color: ${props => props.theme.accent};
`;

const ProductCard = ({ product }) => {
  return (
    <Card
      whileHover={{ y: -5 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Link to={`/products/${product.id}`}>
        <ImageContainer>
          <img src={product.image} alt={product.name} />
          <QuickView
            initial={{ y: '100%' }}
            whileHover={{ y: 0 }}
          >
            Quick View
          </QuickView>
        </ImageContainer>
        <Details>
          <h3>{product.name}</h3>
          <Price>${product.price}</Price>
        </Details>
      </Link>
    </Card>
  );
};

export default ProductCard;
