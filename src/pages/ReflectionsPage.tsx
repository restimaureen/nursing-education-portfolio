import React from 'react';
import { 
  PageContainer, 
  SectionTitle, 
  SectionDescription, 
  ImageContainer,
  ResourceLink,
  ContentCard,
  TwoColumnGrid,
  CenteredContent
} from '../components/SharedStyles';
import styled from 'styled-components';
import { theme } from '../theme';

const Quote = styled.blockquote`
  font-size: 1.2rem;
  font-style: italic;
  color: ${theme.primary};
  border-left: 3px solid ${theme.secondary};
  padding-left: 1.5rem;
  margin: 2rem 0;
  line-height: 1.8;
`;

const ReflectionsPage = () => {
  return (
    <PageContainer>
      <SectionTitle>Transformative Insights: My Journey Through N224</SectionTitle>
      
      <Quote>
        "The journey of integrating technology into nursing education has been transformative. 
        It has challenged me to rethink traditional approaches and embrace innovative methods that 
        better prepare our students for the future of healthcare."
      </Quote>
      
      <SectionDescription>
        Explore my reflections on integrating 
        <span className="highlight"> technology into nursing education </span>
        through the N224 course. This document captures my 
        <span className="highlight"> professional growth</span>, 
        <span className="highlight"> challenges faced</span>, and 
        <span className="highlight"> insights gained </span>
        throughout the course, providing a framework for continued innovation in nursing education.
      </SectionDescription>
      
      <TwoColumnGrid>
        <ImageContainer>
          <img src="/images/reflection.jpg" alt="Reflection Process" />
        </ImageContainer>
        <ImageContainer>
          <img src="/images/transformative insights.jpg" alt="Transformative Learning" />
        </ImageContainer>
      </TwoColumnGrid>
      
      <ContentCard>
        <CenteredContent>
          <h3>Reflective Practice Document</h3>
          <p>
            Read my comprehensive reflection on the integration of digital technologies in nursing education,
            including lessons learned, challenges overcome, and future directions for my teaching practice.
          </p>
          <ResourceLink 
            href="https://drive.google.com/file/d/1l7FIO0lSwfbOBjR71Jajl-yT3RqZfgDX/view?usp=drive_link" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Read Full Reflection
          </ResourceLink>
        </CenteredContent>
      </ContentCard>
    </PageContainer>
  );
};

export default ReflectionsPage;
