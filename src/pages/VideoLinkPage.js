import React from 'react';
import styled from 'styled-components';
import { FaExternalLinkAlt, FaInfoCircle } from 'react-icons/fa';

const PageContainer = styled.div`
  padding: 2rem 0;
`;

const VideoSection = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  margin: 2rem 0;
`;

const LinkCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;
  background-color: #f8f9fa;
  border-radius: 8px;
  margin: 2rem 0;
`;

const ExternalLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background-color: #7b1113;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  margin-top: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #194569;
  }
`;

const InfoBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  background-color: #e6f7ff;
  border-left: 4px solid #1890ff;
  padding: 1rem;
  border-radius: 0 4px 4px 0;
  margin: 1.5rem 0;
`;

function VideoLinkPage() {
  return (
    <PageContainer>
      <h1 className="page-title">Teaching Session Video</h1>
      
      <VideoSection>
        <h2>15-Minute Teaching Session on Nursing Responsibilities for Pediatric Patients with Neurologic Alterations</h2>
        
        <InfoBox>
          <FaInfoCircle size={24} color="#1890ff" />
          <div>
            <p>This video showcases a comprehensive teaching session on the Neuro Bundle of Care for pediatric patients. The session demonstrates effective teaching strategies and clinical knowledge application in a real educational setting.</p>
          </div>
        </InfoBox>
        
        <LinkCard>
          <h3>Access the Teaching Session Video</h3>
          <p>Click the button below to access the video via Google Drive</p>
          <ExternalLink 
            href="https://drive.google.com/drive/folders/13xhO5ov9vIUqTOxryWmRwDHAHC4W02xT?usp=drive_link" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Watch Video <FaExternalLinkAlt />
          </ExternalLink>
        </LinkCard>
        
        <h3>Video Content Overview</h3>
        <p>In this 15-minute teaching session, I cover key aspects of neurological care for pediatric patients, including:</p>
        <ul>
          <li>Assessment techniques specific to pediatric neurological status</li>
          <li>Implementation of the neurological bundle of care</li>
          <li>Family education and communication strategies</li>
          <li>Documentation requirements for neurological assessments</li>
          <li>Recognition of critical changes requiring immediate intervention</li>
        </ul>
        
        <h3>Teaching Approaches Demonstrated</h3>
        <p>This video showcases several teaching strategies integrated with technology:</p>
        <ul>
          <li>Multimedia presentation with visual aids</li>
          <li>Interactive questioning techniques</li>
          <li>Case-based discussion of clinical scenarios</li>
          <li>Demonstration of assessment techniques</li>
          <li>Integration of digital resources to enhance learning</li>
        </ul>
      </VideoSection>
    </PageContainer>
  );
}

export default VideoLinkPage;
