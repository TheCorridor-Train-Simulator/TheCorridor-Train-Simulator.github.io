import React from 'react';
import './FeaturesSection.scss';
import featureImage from '@assets/images/IMG_3005.webp';

interface Feature {
  id: string;
  icon: JSX.Element;
  title: string;
  description: string;
  link?: string;
}

const FeaturesSection: React.FC = () => {
  const features: Feature[] = [
    {
      id: 'graphics',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M15 8h.01"/>
          <path d="M4 15l4 -4c.928 -.893 2.072 -.893 3 0l5 5"/>
          <path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l2 2"/>
          <path d="M3 12a9 9 0 0 0 9 9a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9a9 9 0 0 0 -9 9"/>
        </svg>
      ),
      title: 'Modern Vulkan Graphics Engine',
      description: 'High-performance rendering with Vulkan API delivers stunning visuals, realistic lighting, and weather effects for an immersive simulation experience.',
      link: '#'
    },
    {
      id: 'physics',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
        </svg>
      ),
      title: 'Real-Time Railroad Physics',
      description: 'Advanced physics simulation models train dynamics, air brake systems, traction control, and adhesion based on real-world engineering principles and research.',
      link: '#'
    },
    {
      id: 'locomotives',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
          <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L4.224 3.162 8 6.94l3.777-3.777L9.049.435Zm3.274 7.425v-.862h.467c.28 0 .467.154.467.44 0 .28-.182.421-.475.421h-.459Z"/>
          <path d="M12.838 4.223 9.06 8l3.777 3.777 2.727-2.728c.58-.58.58-1.519 0-2.098l-2.727-2.728Zm.03 2.361c.591 0 .935.334.935.844a.79.79 0 0 1-.485.748l.536 1.074h-.59l-.467-.994h-.473v.994h-.521V6.584h1.064Zm-1.091 6.254L8 9.06l-3.777 3.777 2.728 2.727c.58.58 1.519.58 2.098 0l2.728-2.727Zm-8.953-5.84v.861h.46c.292 0 .474-.14.474-.421 0-.286-.188-.44-.467-.44h-.467Z"/>
          <path d="M3.162 11.777 6.94 8 3.162 4.223.435 6.951c-.58.58-.58 1.519 0 2.098zm-.86-5.193h1.065c.592 0 .936.334.936.844 0 .39-.242.654-.485.748l.536 1.074h-.59l-.467-.994h-.473v.994h-.521V6.584Z"/>
        </svg>
      ),
      title: 'Study Level Locomotives & Equipment',
      description: 'Meticulously detailed locomotive models with accurate specifications, authentic control systems, and realistic behavior based on manufacturer documentation.',
      link: '#'
    },
    {
      id: 'global-data',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z"/>
        </svg>
      ),
      title: 'Procedural World Generation from Real Data',
      description: 'RailNex uses railroad trackage, operating marks, railcar and locomotive data from an enormous global database sourced from OpenStreetMap, OpenRailwayMap, and many other datasets to procedurally populate trackage and operate anywhere the tracks can take you.',
      link: '#'
    }
  ];

  return (
    <section className="features-section">
      <div className="container">
        <div className="features-section__layout">
          <div className="features-section__image">
            <img src={featureImage} alt="Railroad simulation screenshot" />
          </div>
          <div className="features-section__content">
            {features.map((feature) => (
              <div key={feature.id} className="feature-item">
                <div className="feature-item__icon">
                  {feature.icon}
                </div>
                <div className="feature-item__content">
                  <h4 className="feature-item__title">{feature.title}</h4>
                  <p className="feature-item__description">{feature.description}</p>
                  {feature.link && (
                    <a href={feature.link} className="feature-item__link">
                      Learn More
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
