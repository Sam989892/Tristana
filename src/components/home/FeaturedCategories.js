import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CategoryCard = styled(Link)`
  position: relative;
  height: 300px;
  overflow: hidden;
  border-radius: 8px;
  
  &:hover img {
    transform: scale(1.05);
  }
`;

const CategoryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
`;

const CategoryOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  background: linear-gradient(transparent, rgba(0,0,0,0.7));
  color: white;
  text-align: center;
`;

const FeaturedCategories = () => {
  const categories = [
    {
      id: 1,
      name: "Men's Collection",
      image: "/images/product1.jpg",
      link: "/products?category=men"
    },
    {
      id: 2,
      name: "Women's Collection",
      image: "/images/product4.jpg",
      link: "/products?category=women"
    },
    {
      id: 3,
      name: "Accessories",
      image: "/images/product5.jpg",
      link: "/products?category=accessories"
    }
  ];

  return (
    <CategoryGrid>
      {categories.map(category => (
        <CategoryCard key={category.id} to={category.link}>
          <CategoryImage src={category.image} alt={category.name} />
          <CategoryOverlay>
            <h2>{category.name}</h2>
          </CategoryOverlay>
        </CategoryCard>
      ))}
    </CategoryGrid>
  );
};

export default FeaturedCategories;
