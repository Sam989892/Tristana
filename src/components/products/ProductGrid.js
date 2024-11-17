import React, { useState } from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';
import ProductFilters from './ProductFilters';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  padding: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
    padding: 1rem;
  }
`;

const FiltersContainer = styled.div`
  padding: 1rem 2rem;
  background: ${props => props.theme.background};
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const ProductGrid = ({ products }) => {
  const [filters, setFilters] = useState({
    category: 'all',
    priceRange: 'all',
    rating: 'all'
  });

  const filteredProducts = products.filter(product => {
    if (filters.category !== 'all' && product.category !== filters.category) return false;
    if (filters.priceRange !== 'all') {
      const [min, max] = filters.priceRange.split('-').map(Number);
      if (product.price < min || product.price > max) return false;
    }
    if (filters.rating !== 'all' && product.rating < Number(filters.rating)) return false;
    return true;
  });

  return (
    <>
      <FiltersContainer>
        <ProductFilters filters={filters} setFilters={setFilters} />
      </FiltersContainer>
      <GridContainer>
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </GridContainer>
    </>
  );
};

export default ProductGrid;
