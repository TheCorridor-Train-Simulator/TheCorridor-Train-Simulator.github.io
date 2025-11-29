import React from 'react';
import './Hero.scss';
import heroImage from '@assets/images/IMG_0046-Enhanced-NR.webp';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div 
        className="hero__background"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="hero__overlay" />
      <div className="hero__content">
        <h1 className="hero__title">RailNex</h1>
        <p className="hero__subtitle">
          Professional Railroad Simulation Platform
        </p>
        <p className="hero__description">
          Experience authentic railroad operations anywhere in the world with Vulkan-powered graphics,
          real-time physics simulation, and study-level locomotive modeling powered by a global railroad database.
        </p>
        <div className="hero__cta">
          <button className="btn btn-primary">Learn More</button>
          <button className="btn btn-secondary">View on GitHub</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
