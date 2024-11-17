import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding: 0 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileNav = styled(motion.div)`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: ${props => props.theme.background};
  z-index: 100;
  padding: 2rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavLink = styled(Link)`
  color: ${props => props.theme.text};
  text-decoration: none;
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: ${props => props.theme.accent};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${props => props.theme.text};

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Shop</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </Nav>

      <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? '✕' : '☰'}
      </MenuButton>

      <AnimatePresence>
        {isMenuOpen && (
          <MobileNav
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween' }}
          >
            <NavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
            <NavLink to="/products" onClick={() => setIsMenuOpen(false)}>Shop</NavLink>
            <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>About</NavLink>
            <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
          </MobileNav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
