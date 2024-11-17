import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ToggleButton = styled(motion.button)`
  background: none;
  border: none;
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.text};
  
  &:hover {
    background: ${props => props.theme.text}10;
  }
`;

const DarkModeToggle = ({ toggleDarkMode }) => {
  return (
    <ToggleButton
      onClick={toggleDarkMode}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <span role="img" aria-label="toggle theme">
        🌓
      </span>
    </ToggleButton>
  );
};

export default DarkModeToggle;
