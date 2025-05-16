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

const InstructionalDesignPage = () => {
  return (
    <PageContainer>
      <SectionTitle>Instructional Design for Blended Learning</SectionTitle>
      
      <SectionDescription>
        This section presents my approach to creating effective 
        <span className="highlight"> blended learning experiences </span>
        in nursing education. The framework integrates 
        <span className="highlight"> traditional clinical teaching </span>
        with digital technologies to enhance student learning outcomes and clinical competencies.
      </SectionDescription>
      
      <ImageContainer>
        <img src="/images/instructional design.jpeg" alt="Instructional Design for Blended Learning" />
      </ImageContainer>
      
      <ContentCard>
        <CenteredContent>
          <h3>RLE Guide for Blended Learning</h3>
          <p>
            Access my comprehensive guide for designing and implementing blended learning 
            experiences in nursing education, with a focus on Related Learning Experiences (RLE).
          </p>
          <ResourceLink 
            href="https://drive.google.com/file/d/1rKVaGBQE8IVCz0pYTn714HEgWtQyhF_3/view?usp=drive_link" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            View RLE Design Guide
          </ResourceLink>
        </CenteredContent>
      </ContentCard>
    </PageContainer>
  );
};

export default InstructionalDesignPage;
