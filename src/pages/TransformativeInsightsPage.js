import React from 'react';
import styled from 'styled-components';
import PDFViewer from '../components/PDFViewer';

const PageContainer = styled.div`
  padding: 2rem 0;
`;

function TransformativeInsightsPage() {
  return (
    <PageContainer>
      <h1 className="page-title">Transformative Insights: My Journey Through N224</h1>
      <PDFViewer 
        pdfFile="/documents/transformative-insights.pdf" 
        title="Use of Technology in Nursing Education"
      />
    </PageContainer>
  );
}

export default TransformativeInsightsPage;
