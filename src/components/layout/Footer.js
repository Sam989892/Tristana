import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  background: ${props => props.theme.background};
  padding: 4rem 2rem;
  margin-top: auto;
  border-top: 1px solid ${props => props.theme.text}20;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const FooterSection = styled.div`
  h3 {
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 0.5rem;
  }

  a {
    color: ${props => props.theme.text};
    text-decoration: none;
    
    &:hover {
      color: ${props => props.theme.accent};
    }
  }
`;

const FooterLogo = styled.img`
  height: 60px;
  width: auto;
  margin-bottom: 1rem;
  filter: ${props => props.theme.background === '#FFFFFF' ? 'invert(0)' : 'invert(1)'};
  transition: filter 0.3s ease;
`;

const BrandName = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterLogo src="/images/logo.png" alt="Tristana Logo" />
          <BrandName>TRISTANA</BrandName>
          <p>Your fashion destination for premium clothing and accessories.</p>
        </FooterSection>

        <FooterSection>
          <h3>Shop</h3>
          <ul>
            <li><Link to="/products">All Products</Link></li>
            <li><Link to="/products?category=men">Men</Link></li>
            <li><Link to="/products?category=women">Women</Link></li>
            <li><Link to="/products?category=accessories">Accessories</Link></li>
          </ul>
        </FooterSection>

        <FooterSection>
          <h3>Company</h3>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/careers">Careers</Link></li>
          </ul>
        </FooterSection>

        <FooterSection>
          <h3>Connect</h3>
          <ul>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          </ul>
        </FooterSection>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
