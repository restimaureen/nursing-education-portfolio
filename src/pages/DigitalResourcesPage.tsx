import React from 'react';
import { 
  PageContainer, 
  SectionTitle, 
  SectionDescription, 
  ImageContainer,
  ResourceLink,
  ContentCard,
  CenteredContent
} from '../components/SharedStyles';

const DigitalResourcesPage = () => {
  return (
    <PageContainer>
      <SectionTitle>Digital Resources in Nursing Education</SectionTitle>
      
      <SectionDescription>
        This section showcases my approach to selecting, aligning, and evaluating 
        <span className="highlight"> digital resources </span>
        for nursing education. I focus on 
        <span className="highlight"> evidence-based strategies </span>
        to integrate technology into the curriculum while addressing the unique challenges faced by nursing students.
      </SectionDescription>
      
      <ImageContainer>
        <img src="/images/digital resources.jpeg" alt="Digital Resources in Nursing Education" />
      </ImageContainer>
      
      <ContentCard>
        <CenteredContent>
          <h3>Selecting & Evaluating Digital Resources</h3>
          <p>
            Explore my framework for identifying, evaluating, and implementing digital tools 
            that enhance nursing education and support diverse learning styles.
          </p>
          <ResourceLink 
            href="https://drive.google.com/file/d/1MbiG8r5_k1-tNuNTY74M3ZKBX994tU91/view?usp=drive_link" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            View Digital Resources Framework
          </ResourceLink>
        </CenteredContent>
      </ContentCard>
    </PageContainer>
  );
};

export default DigitalResourcesPage;
