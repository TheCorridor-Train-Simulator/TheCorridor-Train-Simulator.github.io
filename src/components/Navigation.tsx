import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.scss';
import railnexLogo from '@assets/images/icon.png';

const Navigation: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/railnex-engine', label: 'RailNex Engine' },
    { path: '/railnex-forge', label: 'RailNex Forge' },
    { path: '/api-documentation', label: 'API Docs' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="navigation">
      <div className="navigation__container">
        <Link to="/" className="navigation__logo">
          <img src={railnexLogo} alt="RailNex Logo" className="navigation__logo-img" />
          <span className="navigation__logo-text">RailNex</span>
        </Link>

        <button 
          className={`navigation__toggle ${mobileMenuOpen ? 'navigation__toggle--active' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navigation__menu ${mobileMenuOpen ? 'navigation__menu--open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.path} className="navigation__item">
              <Link
                to={link.path}
                className={`navigation__link ${isActive(link.path) ? 'navigation__link--active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="navigation__item">
            <a
              href="https://github.com/TheCorridor-Train-Simulator/RailNex"
              target="_blank"
              rel="noopener noreferrer"
              className="navigation__link navigation__link--github"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
