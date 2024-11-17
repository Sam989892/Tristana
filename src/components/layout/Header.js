import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import DarkModeToggle from '../common/DarkModeToggle';

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  background: ${props => props.theme.background};
  padding: 1rem 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${props => props.theme.text};
`;

const LogoImage = styled.img`
  height: 40px;
  width: auto;
  filter: ${props => props.theme.background === '#FFFFFF' ? 'invert(0)' : 'invert(1)'};
  transition: filter 0.3s ease;
`;

const LogoText = styled.span`
  font-size: 1.8rem;
  font-weight: bold;
  margin-left: 0.5rem;
  font-family: 'Playfair Display', serif;
  letter-spacing: 1px;
  
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Header = ({ toggleDarkMode }) => {
  return (
    <HeaderContainer>
      <LogoLink to="/">
        <LogoImage src="/images/logo.png" alt="Tristana Logo" />
        <LogoText>TRISTANA</LogoText>
      </LogoLink>
      <Navigation />
      <RightSection>
        <DarkModeToggle toggleDarkMode={toggleDarkMode} />
      </RightSection>
    </HeaderContainer>
  );
};

export default Header;
