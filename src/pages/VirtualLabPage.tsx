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

const VirtualLabPage = () => {
  return (
    <PageContainer>
      <SectionTitle>Pediatric Neurologic Alterations Virtual Lab</SectionTitle>
      
      <SectionDescription>
        Access my interactive virtual lab designed to develop 
        <span className="highlight"> clinical decision-making skills </span>
        for pediatric neurological care. This 
        <span className="highlight"> simulation-based learning environment </span>
        allows students to practice assessment and intervention in a safe, controlled setting before clinical exposure.
      </SectionDescription>
      
      <TwoColumnGrid>
        <ImageContainer>
          <img src="/images/pedia neuro virtual lab.jpeg" alt="Virtual Lab Interface" />
        </ImageContainer>
        <ImageContainer>
          <img src="/images/virtual lab.jpg" alt="Students Using Virtual Lab" />
        </ImageContainer>
      </TwoColumnGrid>
      
      <ContentCard>
        <CenteredContent>
          <h3>Interactive Virtual Learning Environment</h3>
          <p>
            Experience the interactive virtual lab I designed to provide students with opportunities to 
            develop clinical reasoning and decision-making in pediatric neurological care settings.
          </p>
          <ResourceLink 
            href="https://virtual-labnursingpedia-neuro-case.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Access Virtual Lab
          </ResourceLink>
        </CenteredContent>
      </ContentCard>
    </PageContainer>
  );
};

export default VirtualLabPage;
