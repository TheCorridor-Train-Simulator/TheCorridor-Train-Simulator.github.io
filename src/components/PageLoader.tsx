import React, { useEffect, useState } from 'react';
import './PageLoader.scss';

interface PageLoaderProps {
  isLoading: boolean;
}

const PageLoader: React.FC<PageLoaderProps> = ({ isLoading }) => {
  const [show, setShow] = useState(isLoading);

  useEffect(() => {
    if (isLoading) {
      setShow(true);
    } else {
      // Delay hiding to allow exit animation
      const timer = setTimeout(() => setShow(false), 800);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  if (!show) return null;

  return (
    <div className={`page-loader ${!isLoading ? 'page-loader--exit' : ''}`}>
      {/* Gradient sweep slices */}
      <div className="page-loader__sweep-container">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="page-loader__sweep-slice"
            style={{
              animationDelay: `${i * 0.1}s`
            }}
          ></div>
        ))}
      </div>

      {/* Center content */}
      <div className="page-loader__content">
        {/* Logo or brand mark */}
        <div className="page-loader__logo">
          <div className="page-loader__logo-ring"></div>
          <div className="page-loader__logo-inner"></div>
        </div>

        {/* Loading text */}
        <div className="page-loader__text">
          <span className="page-loader__label">Loading</span>
        </div>

        {/* Minimal progress indicator */}
        <div className="page-loader__progress">
          <div className="page-loader__progress-bar"></div>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
