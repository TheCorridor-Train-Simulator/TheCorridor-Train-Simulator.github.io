import React from 'react';
import './RailNexEngine.scss';
import engineLogo from '@assets/images/icon.png';

const RailNexEngine: React.FC = () => {
  return (
    <div className="railnex-engine">
      {/* Hero Section */}
      <section className="engine-hero">
        <div className="engine-hero__overlay" />
        <div className="engine-hero__content">
          <img src={engineLogo} alt="RailNex Logo" className="engine-hero__logo" />
          <h1 className="engine-hero__title">RailNex Engine</h1>
          <p className="engine-hero__subtitle">
            Advanced Real-Time Train Simulation Platform
          </p>
          <p className="engine-hero__description">
            A professional-grade physics-based train simulator with real-time advanced physics 
            centered around railroad and locomotive interactions. Built for "TheCorridor Train Simulator".
          </p>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="engine-section">
        <div className="engine-section__container">
          <h2 className="engine-section__title">Engine Architecture</h2>
          <div className="engine-capabilities">
            <div className="capability-card">
              <div className="capability-card__icon">
                <span className="icon">⚙️</span>
              </div>
              <h3 className="capability-card__title">Modular C++ Architecture</h3>
              <p className="capability-card__description">
                Entity-Component-System (ECS) design using EnTT for high-performance simulation 
                with over 50,000+ lines of optimized C++ code.
              </p>
            </div>

            <div className="capability-card">
              <div className="capability-card__icon">
                <span className="icon">🎮</span>
              </div>
              <h3 className="capability-card__title">Vulkan 1.3 Graphics</h3>
              <p className="capability-card__description">
                Modern graphics API with deferred rendering pipeline, bindless descriptors, 
                and ray tracing support via RailNex Forge.
              </p>
            </div>

            <div className="capability-card">
              <div className="capability-card__icon">
                <span className="icon">⚡</span>
              </div>
              <h3 className="capability-card__title">Jolt Physics Engine</h3>
              <p className="capability-card__description">
                Real-time physics simulation optimized for large-scale environments and 
                complex train dynamics with realistic coupling systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Simulation Features */}
      <section className="engine-section engine-section--dark">
        <div className="engine-section__container">
          <h2 className="engine-section__title">Simulation Features</h2>
          
          <div className="feature-group">
            <div className="feature-group__header">
              <h3>🚂 Locomotive Systems</h3>
            </div>
            <div className="feature-list">
              <div className="feature-item">
                <h4>Electrical Systems</h4>
                <ul>
                  <li>Battery simulation with realistic discharge curves</li>
                  <li>Circuit breaker modeling with thermal limits</li>
                  <li>Pantograph systems for overhead power collection</li>
                  <li>Dynamic voltage regulation and power distribution</li>
                </ul>
              </div>
              
              <div className="feature-item">
                <h4>Air Brake Systems</h4>
                <ul>
                  <li>Pneumatic brake simulation with realistic pressure curves</li>
                  <li>Air compressor modeling with capacity limits</li>
                  <li>End-of-Train (EOT) device integration</li>
                  <li>Graduated release and emergency braking</li>
                </ul>
              </div>

              <div className="feature-item">
                <h4>Train Control</h4>
                <ul>
                  <li>Multiple Unit (MU) connector systems</li>
                  <li>Realistic coupler mechanics and forces</li>
                  <li>Alerter safety systems and deadman switches</li>
                  <li>Distributed power control</li>
                </ul>
              </div>

              <div className="feature-item">
                <h4>Cab Devices</h4>
                <ul>
                  <li>High-fidelity operator displays</li>
                  <li>Engineer interface controls</li>
                  <li>Realistic gauge behavior and needle physics</li>
                  <li>Modern and legacy cab equipment</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="feature-group">
            <div className="feature-group__header">
              <h3>🌍 World Dynamics</h3>
            </div>
            <div className="feature-list">
              <div className="feature-item">
                <h4>Vehicle Types</h4>
                <ul>
                  <li>Electric, Diesel, and Steam locomotives</li>
                  <li>Freight cars with realistic load modeling</li>
                  <li>Passenger cars with suspension systems</li>
                  <li>Control cars and cab units</li>
                </ul>
              </div>

              <div className="feature-item">
                <h4>Environmental Systems</h4>
                <ul>
                  <li>Dynamic weather affecting visibility and traction</li>
                  <li>Procedural terrain generation for realistic landscapes</li>
                  <li>3D spatial audio with environmental reverb</li>
                  <li>Day/night cycle with realistic lighting</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="engine-section">
        <div className="engine-section__container">
          <h2 className="engine-section__title">Technical Specifications</h2>
          
          <div className="tech-specs">
            <div className="tech-spec-group">
              <h3>Platform</h3>
              <ul>
                <li><strong>Target OS:</strong> Windows 10+ (x64 exclusively)</li>
                <li><strong>Compiler:</strong> MSVC (Visual Studio 2022 recommended)</li>
                <li><strong>Build System:</strong> CMake 3.28+ with VCPKG</li>
                <li><strong>Language Standard:</strong> C++20</li>
              </ul>
            </div>

            <div className="tech-spec-group">
              <h3>Graphics</h3>
              <ul>
                <li><strong>API:</strong> Vulkan 1.3 with validation layers</li>
                <li><strong>Rendering:</strong> Deferred rendering pipeline</li>
                <li><strong>Features:</strong> Ray tracing, bindless descriptors</li>
                <li><strong>Memory:</strong> Vulkan Memory Allocator (VMA)</li>
              </ul>
            </div>

            <div className="tech-spec-group">
              <h3>Core Dependencies</h3>
              <ul>
                <li><strong>SDL3:</strong> Cross-platform windowing and input</li>
                <li><strong>EnTT 3.13.0:</strong> Entity-Component-System</li>
                <li><strong>Jolt Physics:</strong> Real-time physics simulation</li>
                <li><strong>spdlog 1.14.1:</strong> Fast logging framework</li>
              </ul>
            </div>

            <div className="tech-spec-group">
              <h3>Graphics Libraries</h3>
              <ul>
                <li><strong>SPIRV-Cross:</strong> Shader cross-compilation</li>
                <li><strong>KTX 4.3.2:</strong> Texture compression</li>
                <li><strong>FreeType 2.13.2:</strong> Font rendering</li>
                <li><strong>GLM:</strong> Mathematics library</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Build Statistics */}
      <section className="engine-section engine-section--dark">
        <div className="engine-section__container">
          <h2 className="engine-section__title">Build Statistics</h2>
          
          <div className="build-stats">
            <div className="build-stat">
              <div className="build-stat__value">~15</div>
              <div className="build-stat__label">Main Projects</div>
            </div>
            <div className="build-stat">
              <div className="build-stat__value">50,000+</div>
              <div className="build-stat__label">Lines of Code</div>
            </div>
            <div className="build-stat">
              <div className="build-stat__value">5-10 min</div>
              <div className="build-stat__label">Full Rebuild Time</div>
            </div>
            <div className="build-stat">
              <div className="build-stat__value">~200MB</div>
              <div className="build-stat__label">Release Build Size</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="engine-section engine-cta">
        <div className="engine-section__container">
          <h2 className="engine-cta__title">Explore the Source Code</h2>
          <p className="engine-cta__description">
            RailNex is an open-source project. Dive into the codebase and see the 
            advanced simulation systems in action.
          </p>
          <div className="engine-cta__buttons">
            <a 
              href="https://github.com/TheCorridor-Train-Simulator/RailNex" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              View on GitHub
            </a>
            <a 
              href="#documentation" 
              className="btn btn-secondary"
            >
              Read Documentation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RailNexEngine;
