import styled from 'styled-components';
import { theme } from '../theme';

// Page Containers
export const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  animation: fadeIn 0.5s ease;
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2.2rem;
  color: ${theme.primary};
  margin-bottom: 2rem;
  text-align: center;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: linear-gradient(to right, ${theme.primary}, ${theme.secondary});
    border-radius: 3px;
  }
`;

// Adding the missing Title component
export const Title = styled(SectionTitle)`
  // Same as SectionTitle but with a different name for backward compatibility
`;

export const SectionDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto 3rem;
  text-align: center;
  
  .highlight {
    color: ${theme.secondary};
    font-weight: 600;
  }
`;

export const ContentCard = styled.div`
  background-color: ${theme.card};
  border-radius: 8px;
  box-shadow: 0 4px 20px ${theme.shadow};
  padding: 2rem;
  margin: 2rem 0;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px ${theme.shadow};
  }
`;

export const ImageContainer = styled.div`
  border-radius: 8px;
  overflow: hidden;
  margin: 2rem 0;
  box-shadow: 0 5px 15px ${theme.shadow};
  
  img {
    width: 100%;
    height: auto;
    display: block;
    transition: all 0.5s ease;
    
    &:hover {
      transform: scale(1.02);
    }
  }
`;

// Adding the missing VideoContainer component
export const VideoContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 8px 30px ${theme.shadow};
  
  img {
    width: 100%;
    height: auto;
    display: block;
  }
  
  video {
    width: 100%;
    height: auto;
    display: block;
  }
`;

export const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
  height: 0;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 5px 15px ${theme.shadow};
  margin: 2rem 0;
  
  iframe, video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

export const TwoColumnGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin: 2rem 0;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ResourceLink = styled.a`
  display: inline-block;
  background-color: ${theme.secondary};
  color: ${theme.lightText};
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: 600;
  margin-top: 1rem;
  transition: all 0.3s ease;
  text-decoration: none;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  
  &:hover {
    background-color: ${theme.tertiary};
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    color: ${theme.lightText};
  }
`;

export const CenteredContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const HighlightText = styled.span`
  color: ${theme.secondary};
  font-weight: 600;
`;
