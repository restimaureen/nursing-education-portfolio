import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import NavigationBar from './components/NavigationBar';
import HomePage from './pages/HomePage';
import SelectingDigitalResourcesPage from './pages/SelectingDigitalResourcesPage';
import InstructionalDesignPage from './pages/InstructionalDesignPage';
import NeuroAlterationsPage from './pages/NeuroAlterationsPage';
import VideoLinkPage from './pages/VideoLinkPage';
import VirtualLabPage from './pages/VirtualLabPage';
import TransformativeInsightsPage from './pages/TransformativeInsightsPage';
import ReferencesPage from './pages/ReferencesPage';
import Footer from './components/Footer';
import './App.css';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentContainer = styled.div`
  flex: 1;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <NavigationBar />
        <ContentContainer>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/selecting-resources" element={<SelectingDigitalResourcesPage />} />
            <Route path="/instructional-design" element={<InstructionalDesignPage />} />
            <Route path="/neuro-alterations" element={<NeuroAlterationsPage />} />
            <Route path="/video-link" element={<VideoLinkPage />} />
            <Route path="/virtual-lab" element={<VirtualLabPage />} />
            <Route path="/transformative-insights" element={<TransformativeInsightsPage />} />
            <Route path="/references" element={<ReferencesPage />} />
          </Routes>
        </ContentContainer>
        <Footer />
      </AppContainer>
    </Router>
  );
}

export default App;
