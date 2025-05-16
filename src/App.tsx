import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import GlobalStyles from './globalStyles';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import DigitalResourcesPage from './pages/DigitalResourcesPage';
import InstructionalDesignPage from './pages/InstructionalDesignPage';
import TeachingSessionPage from './pages/TeachingSessionPage';
import VirtualLabPage from './pages/VirtualLabPage';
import ReflectionsPage from './pages/ReflectionsPage';
import ReferencesPage from './pages/ReferencesPage';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <div className="app">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/digital-resources" element={<DigitalResourcesPage />} />
              <Route path="/instructional-design" element={<InstructionalDesignPage />} />
              <Route path="/teaching-session" element={<TeachingSessionPage />} />
              <Route path="/virtual-lab" element={<VirtualLabPage />} />
              <Route path="/reflections" element={<ReflectionsPage />} />
              <Route path="/references" element={<ReferencesPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
