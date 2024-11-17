import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ProductCarousel = () => {
  const [isPaused, setIsPaused] = useState(false);
  const carousel = useRef();

  const baseProducts = [
    {
      id: 1,
      name: "Summer T-Shirt",
      price: 29.99,
      image: "/images/product1.jpg"
    },
    {
      id: 2,
      name: "Denim Jeans",
      price: 59.99,
      image: "/images/product2.jpg"
    },
    {
      id: 3,
      name: "Casual Shirt",
      price: 39.99,
      image: "/images/product3.jpg"
    },
    {
      id: 4,
      name: "Winter Jacket",
      price: 89.99,
      image: "/images/product4.jpg"
    },
    {
      id: 5,
      name: "Designer Dress",
      price: 79.99,
      image: "/images/product5.jpg"
    },
    {
      id: 6,
      name: "Classic Blazer",
      price: 99.99,
      image: "/images/product6.jpg"
    }
  ];

  // Create two sets of products for seamless loop
  const products = [...baseProducts, ...baseProducts];

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <CarouselSection>
      <CarouselTitle>Featured Products</CarouselTitle>
      <CarouselContainer>
        <InfiniteWrapper>
          <ProductWrapper
            ref={carousel}
            $isPaused={isPaused}
          >
            {products.map((product, index) => (
              <ProductItem 
                key={`${product.id}-${index}`}
                to={`/product/${product.id}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <ProductImage 
                  src={product.image} 
                  alt={product.name}
                  draggable="false"
                />
                <ProductInfo>
                  <ProductName>{product.name}</ProductName>
                  <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
                </ProductInfo>
              </ProductItem>
            ))}
          </ProductWrapper>
          <ProductWrapper
            $isPaused={isPaused}
            aria-hidden="true"
          >
            {products.map((product, index) => (
              <ProductItem 
                key={`${product.id}-${index}-clone`}
                to={`/product/${product.id}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <ProductImage 
                  src={product.image} 
                  alt={product.name}
                  draggable="false"
                />
                <ProductInfo>
                  <ProductName>{product.name}</ProductName>
                  <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
                </ProductInfo>
              </ProductItem>
            ))}
          </ProductWrapper>
        </InfiniteWrapper>
      </CarouselContainer>
    </CarouselSection>
  );
};

const InfiniteWrapper = styled.div`
  display: flex;
  width: fit-content;
`;

const ProductWrapper = styled.div`
  display: flex;
  gap: 25px;
  padding: 20px;
  will-change: transform;
  animation: scroll 45s linear infinite;
  animation-play-state: ${props => props.$isPaused ? 'paused' : 'running'};

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }

  &:hover > *:not(:hover) {
    filter: blur(2px);
    opacity: 0.7;
    transform: scale(0.98);
  }
`;

const ProductItem = styled(Link)`
  min-width: 400px;
  height: 500px;
  border-radius: 12px;
  background-color: ${props => props.theme.background};
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  color: ${props => props.theme.text};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  flex-shrink: 0;
  position: relative;
  
  &:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
    z-index: 2;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 70%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${ProductItem}:hover & {
    transform: scale(1.05);
  }
`;

const ProductInfo = styled.div`
  padding: 20px;
  transition: transform 0.3s ease;

  ${ProductItem}:hover & {
    transform: translateY(-5px);
  }
`;

const ProductName = styled.h3`
  margin: 0;
  font-size: 1.4rem;
  font-family: 'Playfair Display', serif;
  color: ${props => props.theme.text};
`;

const ProductPrice = styled.p`
  margin: 8px 0 0;
  font-size: 1.2rem;
  font-weight: bold;
  color: ${props => props.theme.accent};
`;

const CarouselContainer = styled.div`
  overflow: hidden;
  width: 100%;
  position: relative;
  padding: 10px 0;
`;

const CarouselSection = styled.section`
  padding: 4rem 2rem;
  background: ${props => props.theme.background};
`;

const CarouselTitle = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
`;

export default ProductCarousel;
