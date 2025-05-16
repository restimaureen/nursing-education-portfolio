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

const TeachingSessionPage = () => {
  return (
    <PageContainer>
      <SectionTitle>Teaching Session: Pediatric Neurologic Alterations</SectionTitle>
      
      <SectionDescription>
        View my 15-minute teaching session on nursing responsibilities for pediatric patients with 
        <span className="highlight"> neurologic alterations</span>. 
        This instructional video demonstrates evidence-based approaches to patient 
        <span className="highlight"> assessment</span>, 
        <span className="highlight"> monitoring</span>, and 
        <span className="highlight"> intervention</span> strategies.
      </SectionDescription>
      
      <ImageContainer>
        <img src="/images/video cover 2.jpg" alt="Teaching Session" />
      </ImageContainer>
      
      <ContentCard>
        <CenteredContent>
          <h3>Video Teaching Session</h3>
          <p>
            Watch my recorded teaching session that demonstrates effective strategies for 
            teaching complex neurological nursing care for pediatric patients.
          </p>
          <ResourceLink 
            href="https://drive.google.com/file/d/1EC5xjyOJSBbjf4Ef3ySl5m7tqkdla1vR/view?usp=drive_link" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Watch Teaching Session
          </ResourceLink>
        </CenteredContent>
      </ContentCard>
      
      <TwoColumnGrid>
        <ImageContainer>
          <img src="/images/teaching pic 1.jpeg" alt="Teaching Strategy" />
        </ImageContainer>
        <div>
          <h3>Teaching Methodology</h3>
          <p>
            My teaching approach integrates constructivist principles with evidence-based nursing practice. 
            I create learning environments that encourage critical thinking, clinical reasoning, and the 
            application of theoretical knowledge to practical scenarios.
          </p>
          <p>
            Through guided discovery and collaborative activities, students develop the confidence and 
            competence to deliver high-quality care in complex neurological cases.
          </p>
        </div>
      </TwoColumnGrid>
    </PageContainer>
  );
};

export default TeachingSessionPage;
