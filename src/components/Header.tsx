import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../theme';

const HeaderContainer = styled.header`
  background-color: ${theme.primary};
  box-shadow: 0 2px 10px ${theme.shadow};
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 0.5rem 0;
`;

const HeaderInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  display: block;
  
  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 2px solid ${theme.accent};
    transition: all 0.3s ease;
    object-fit: cover;
    
    &:hover {
      transform: scale(1.05);
      box-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
    }
  }
`;

interface NavProps {
  $isOpen: boolean;
}

const Nav = styled.nav<NavProps>`
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
    position: absolute;
    top: 80px;
    left: 0;
    right: 0;
    flex-direction: column;
    background-color: ${theme.primary};
    padding: 1rem 0;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

interface NavItemProps {
  $isActive: boolean;
}

const NavItem = styled(Link)<NavItemProps>`
  color: ${({ $isActive }) => ($isActive ? theme.accent : theme.lightText)};
  margin: 0 1rem;
  padding: 0.5rem;
  font-weight: ${({ $isActive }) => ($isActive ? '700' : '500')};
  letter-spacing: 0.5px;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${({ $isActive }) => ($isActive ? '100%' : '0')};
    height: 2px;
    background-color: ${theme.accent};
    transition: width 0.3s ease;
  }
  
  &:hover {
    color: ${theme.accent};
    
    &:after {
      width: 100%;
    }
  }
  
  @media (max-width: 768px) {
    margin: 0.5rem 0;
    width: 100%;
    text-align: center;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${theme.lightText};
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);
  
  return (
    <HeaderContainer>
      <HeaderInner>
        <Logo to="/">
          <img src="/images/logo.jpg" alt="Portfolio Logo" />
        </Logo>
        
        <MenuButton onClick={() => setIsOpen(!isOpen)}>
          ☰
        </MenuButton>
        
        <Nav $isOpen={isOpen}>
          <NavItem to="/" $isActive={location.pathname === '/'}>
            Home
          </NavItem>
          <NavItem to="/digital-resources" $isActive={location.pathname === '/digital-resources'}>
            Digital Resources
          </NavItem>
          <NavItem to="/instructional-design" $isActive={location.pathname === '/instructional-design'}>
            Instructional Design
          </NavItem>
          <NavItem to="/teaching-session" $isActive={location.pathname === '/teaching-session'}>
            Teaching Session
          </NavItem>
          <NavItem to="/virtual-lab" $isActive={location.pathname === '/virtual-lab'}>
            Virtual Lab
          </NavItem>
          <NavItem to="/reflections" $isActive={location.pathname === '/reflections'}>
            Reflections
          </NavItem>
          <NavItem to="/references" $isActive={location.pathname === '/references'}>
            References
          </NavItem>
        </Nav>
      </HeaderInner>
    </HeaderContainer>
  );
};

export default Header;
