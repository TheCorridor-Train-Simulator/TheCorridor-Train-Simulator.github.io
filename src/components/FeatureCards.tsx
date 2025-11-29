import React from 'react';
import './FeatureCards.scss';

interface FeatureCard {
  id: string;
  icon: JSX.Element;
  title: string;
  subtitle: string;
  description: string;
  link?: string;
}

const FeatureCards: React.FC = () => {
  const features: FeatureCard[] = [
    {
      id: 'railnex',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
          <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319z"/>
        </svg>
      ),
      title: 'RailNex Engine',
      subtitle: 'Custom engine for railroad simulation',
      description: 'Purpose-built simulation engine with advanced physics modeling, realistic train dynamics, and high-performance rendering for authentic railroad operations.',
      link: '#'
    },
    {
      id: 'global-database',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016zm6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
          <path d="m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z"/>
        </svg>
      ),
      title: 'Global Railroad Database',
      subtitle: 'Operate anywhere in the world',
      description: 'Access an enormous database of railroad trackage, operating marks, railcars, and locomotives sourced from OpenStreetMap, OpenRailwayMap, and other global datasets to procedurally populate and operate on tracks anywhere in the world.',
      link: '#'
    },
    {
      id: 'simulator',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
          <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L4.224 3.162 8 6.94l3.777-3.777L9.049.435Zm3.274 7.425v-.862h.467c.28 0 .467.154.467.44 0 .28-.182.421-.475.421h-.459Z"/>
          <path d="M12.838 4.223 9.06 8l3.777 3.777 2.727-2.728c.58-.58.58-1.519 0-2.098l-2.727-2.728Zm.03 2.361c.591 0 .935.334.935.844a.79.79 0 0 1-.485.748l.536 1.074h-.59l-.467-.994h-.473v.994h-.521V6.584h1.064Zm-1.091 6.254L8 9.06l-3.777 3.777 2.728 2.727c.58.58 1.519.58 2.098 0l2.728-2.727Zm-8.953-5.84v.861h.46c.292 0 .474-.14.474-.421 0-.286-.188-.44-.467-.44h-.467Z"/>
          <path d="M3.162 11.777 6.94 8 3.162 4.223.435 6.951c-.58.58-.58 1.519 0 2.098zm-.86-5.193h1.065c.592 0 .936.334.936.844 0 .39-.242.654-.485.748l.536 1.074h-.59l-.467-.994h-.473v.994h-.521V6.584Z"/>
        </svg>
      ),
      title: 'Professional Train Simulator',
      subtitle: 'Study-level accuracy',
      description: 'Experience authentic locomotive operations with detailed cab simulations, realistic control systems, and accurate train handling based on real-world railroad engineering.',
      link: '#'
    },
    {
      id: 'opensource',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
        </svg>
      ),
      title: 'Open Source Development',
      subtitle: 'Community-driven innovation',
      description: 'Join our open-source community to contribute to the future of railroad simulation. Collaborate on features, improve physics models, and help build the next generation of train simulators.',
      link: 'https://github.com/TheCorridor-Train-Simulator'
    }
  ];

  return (
    <section className="feature-cards">
      <div className="container">
        <div className="feature-cards__grid">
          {features.map((feature) => (
            <div key={feature.id} className="feature-card">
              <div className="feature-card__icon-wrapper">
                <div className="feature-card__icon">
                  {feature.icon}
                </div>
              </div>
              <div className="feature-card__content">
                <h4 className="feature-card__title">{feature.title}</h4>
                <h6 className="feature-card__subtitle">{feature.subtitle}</h6>
                <p className="feature-card__description">{feature.description}</p>
              </div>
              {feature.link && (
                <div className="feature-card__footer">
                  <a href={feature.link} className="feature-card__link">
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                    </svg>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
