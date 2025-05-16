import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #7b1113;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const LogoText = styled.div`
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
`;

const NavLinks = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: ${props => (props.isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: #7b1113;
    padding: 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 0 1rem;
  padding: 0.5rem 0;
  transition: color 0.3s ease;

  &:hover {
    color: #f9a826;
  }

  @media (max-width: 768px) {
    margin: 0.5rem 0;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavigationBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <Logo>
        <LogoText>Digital Bridges: Dr. Villarino</LogoText>
      </Logo>
      
      <MenuButton onClick={toggleMenu}>
        Menu
      </MenuButton>
      
      <NavLinks isOpen={isOpen}>
        <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
        <NavLink to="/selecting-resources" onClick={() => setIsOpen(false)}>Digital Resources</NavLink>
        <NavLink to="/instructional-design" onClick={() => setIsOpen(false)}>Instructional Design</NavLink>
        <NavLink to="/neuro-alterations" onClick={() => setIsOpen(false)}>Neuro Bundle of Care</NavLink>
        <NavLink to="/video-link" onClick={() => setIsOpen(false)}>Teaching Session</NavLink>
        <NavLink to="/virtual-lab" onClick={() => setIsOpen(false)}>Virtual Lab</NavLink>
        <NavLink to="/transformative-insights" onClick={() => setIsOpen(false)}>Reflections</NavLink>
        <NavLink to="/references" onClick={() => setIsOpen(false)}>References</NavLink>
      </NavLinks>
    </Nav>
  );
};

export default NavigationBar;
