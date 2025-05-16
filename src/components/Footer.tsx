import React from 'react';
import styled from 'styled-components';
import { theme } from '../theme';

const FooterContainer = styled.footer`
  background-color: ${theme.primary};
  color: ${theme.lightText};
  padding: 3rem 0;
  margin-top: 4rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Name = styled.h3`
  color: ${theme.lightText};
  margin-bottom: 0.5rem;
  font-weight: 600;
  letter-spacing: 0.5px;
`;

const Institution = styled.p`
  font-style: italic;
  margin-bottom: 2rem;
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  opacity: 0.7;
  margin-top: 2rem;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Name>Resti Tito H. Villarino, Dev.Ed.D, RN, LPT</Name>
        <Institution>Faculty, College of Nursing - West Visayas State University</Institution>
        
        <Copyright>
          © {new Date().getFullYear()} Intellectual Property of Resti Tito H. Villarino. All Rights Reserved.
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
