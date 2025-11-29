import React, { Suspense, lazy, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import PageLoader from '@components/PageLoader';

// Lazy load components for code splitting
const Navigation = lazy(() => import('@components/Navigation'));
const Hero = lazy(() => import('@components/Hero'));
const FeatureCards = lazy(() => import('@components/FeatureCards'));
const FeaturesSection = lazy(() => import('@components/FeaturesSection'));
const Footer = lazy(() => import('@components/Footer'));
const RailNexEngine = lazy(() => import('@components/RailNexEngine'));
const RailNexForge = lazy(() => import('@components/RailNexForge'));
const APIDocumentation = lazy(() => import('@components/APIDocumentation'));

// Home Page Component
const HomePage: React.FC = () => (
  <>
    <Hero />
    <FeatureCards />
    <FeaturesSection />
  </>
);

// Routes wrapper with page transition loading
const AppRoutes: React.FC = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <PageLoader isLoading={isLoading} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/railnex-engine" element={<RailNexEngine />} />
        <Route path="/railnex-forge" element={<RailNexForge />} />
        <Route path="/api-documentation" element={<APIDocumentation />} />
      </Routes>
    </>
  );
};

const App: React.FC = () => {
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    // Initial page load
    const timer = setTimeout(() => setInitialLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="app">
        <PageLoader isLoading={initialLoading} />
        <Suspense fallback={<PageLoader isLoading={true} />}>
          <Navigation />
          <AppRoutes />
          <Footer />
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
