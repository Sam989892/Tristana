import React from 'react';
import styled from 'styled-components';

const FiltersWrapper = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const Select = styled.select`
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid ${props => props.theme.accent};
  background: ${props => props.theme.background};
  color: ${props => props.theme.text};
  min-width: 150px;
`;

const ProductFilters = ({ filters, setFilters }) => {
  return (
    <FiltersWrapper>
      <Select
        value={filters.category}
        onChange={(e) => setFilters({...filters, category: e.target.value})}
      >
        <option value="all">All Categories</option>
        <option value="men">Men</option>
        <option value="women">Women</option>
        <option value="accessories">Accessories</option>
      </Select>

      <Select
        value={filters.priceRange}
        onChange={(e) => setFilters({...filters, priceRange: e.target.value})}
      >
        <option value="all">All Prices</option>
        <option value="0-50">$0 - $50</option>
        <option value="51-100">$51 - $100</option>
        <option value="101-200">$101 - $200</option>
        <option value="201-500">$201+</option>
      </Select>

      <Select
        value={filters.rating}
        onChange={(e) => setFilters({...filters, rating: e.target.value})}
      >
        <option value="all">All Ratings</option>
        <option value="4">4+ Stars</option>
        <option value="3">3+ Stars</option>
        <option value="2">2+ Stars</option>
      </Select>
    </FiltersWrapper>
  );
};

export default ProductFilters;
