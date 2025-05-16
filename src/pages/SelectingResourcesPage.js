import React from 'react';
import styled from 'styled-components';
import PDFViewer from '../components/PDFViewer';

const PageContainer = styled.div`
  padding: 2rem 0;
`;

function SelectingDigitalResourcesPage() {
  return (
    <PageContainer>
      <h1 className="page-title">Selecting, Aligning, and Evaluating Digital Resources</h1>
      <PDFViewer 
        pdfFile="/documents/selecting-digital-resources.pdf" 
        title="Digital Resources in Nursing Education"
      />
    </PageContainer>
  );
}

export default SelectingDigitalResourcesPage;
