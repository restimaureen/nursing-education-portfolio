import React from 'react';
import styled from 'styled-components';
import { 
  PageContainer, 
  SectionTitle,
  ImageContainer,
  HighlightText
} from '../components/SharedStyles';

const HeroSection = styled.div`
  text-align: center;
  margin: 3rem 0 5rem;
`;

const IntroText = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto 2rem;
  text-align: center;
`;

const HomePage = () => {
  return (
    <PageContainer>
      <HeroSection>
        <SectionTitle>Digital Bridges: Transforming Nursing Education</SectionTitle>
        
        <IntroText>
          Welcome to my professional teaching portfolio showcasing my journey integrating 
          <HighlightText> digital technologies </HighlightText> 
          into nursing education through 
          <HighlightText> innovative approaches </HighlightText> 
          and 
          <HighlightText> evidence-based practices</HighlightText>.
        </IntroText>
        
        <ImageContainer>
          <img src="/images/video-cover.jpg" alt="Digital Nursing Education" />
        </ImageContainer>
      </HeroSection>
    </PageContainer>
  );
};

export default HomePage;
