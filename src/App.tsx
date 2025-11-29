import React, { Suspense, lazy } from 'react';

// Lazy load components for code splitting
const Hero = lazy(() => import('@components/Hero'));
const FeatureCards = lazy(() => import('@components/FeatureCards'));
const FeaturesSection = lazy(() => import('@components/FeaturesSection'));
const Footer = lazy(() => import('@components/Footer'));

// Loading component
const LoadingFallback = () => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    background: '#0a0e1a',
    color: '#00d9ff',
    fontSize: '1.2rem'
  }}>
    Loading...
  </div>
);

const App: React.FC = () => {
  return (
    <div className="app">
      <Suspense fallback={<LoadingFallback />}>
        <Hero />
        <FeatureCards />
        <FeaturesSection />
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
