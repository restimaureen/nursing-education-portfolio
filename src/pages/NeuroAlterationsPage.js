import React from 'react';
import styled from 'styled-components';
import PDFViewer from '../components/PDFViewer';

const PageContainer = styled.div`
  padding: 2rem 0;
`;

function NeuroAlterationsPage() {
  return (
    <PageContainer>
      <h1 className="page-title">Nursing Responsibilities for Pediatric Patients with Neurologic Alterations</h1>
      <PDFViewer 
        pdfFile="/documents/pedia-with-neuro-alterations.pdf" 
        title="Neuro Bundle of Care"
      />
    </PageContainer>
  );
}

export default NeuroAlterationsPage;
