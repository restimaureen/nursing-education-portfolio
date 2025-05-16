import React from 'react';
import styled from 'styled-components';
import { 
  PageContainer, 
  SectionTitle,
  HighlightText
} from '../components/SharedStyles';
import { theme } from '../theme';

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

const VideoContainer = styled.div`
  width: 100%;
  max-width: 640px; /* Reduced from 800px to make it smaller */
  margin: 0 auto;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 8px 30px ${theme.shadow};
  
  img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover; /* Prevents stretching */
  }
  
  video {
    width: 100%;
    height: auto;
    display: block;
  }
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
        
        <VideoContainer>
          {/* First try to load the video, with fallback to image */}
          <video controls poster="/images/video-cover.jpg">
            <source src="/videos/video-introduction.mp4" type="video/mp4" />
            {/* Fallback to image if video fails to load */}
            <img src="/images/video-cover.jpg" alt="Portfolio Introduction" />
          </video>
        </VideoContainer>
      </HeroSection>
    </PageContainer>
  );
};

export default HomePage;
