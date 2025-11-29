import React from 'react';
import './RailNexForge.scss';
import forgeLogo from '@assets/images/icon.png';

const RailNexForge: React.FC = () => {
  return (
    <div className="railnex-forge">
      {/* Hero Section */}
      <section className="forge-hero">
        <div className="forge-hero__particles" />
        <div className="forge-hero__content">
          <img src={forgeLogo} alt="RailNex Forge Logo" className="forge-hero__logo" />
          <h1 className="forge-hero__title">RailNex Forge</h1>
          <p className="forge-hero__subtitle">
            Vulkan 1.3 Graphics Engine
          </p>
          <p className="forge-hero__description">
            Professional-grade graphics framework powering RailNex with cutting-edge Vulkan rendering, 
            deferred shading, and ray tracing capabilities.
          </p>
          <div className="forge-hero__badges">
            <span className="badge">Vulkan 1.3</span>
            <span className="badge">Deferred Rendering</span>
            <span className="badge">Ray Tracing</span>
            <span className="badge">Bindless Descriptors</span>
          </div>
        </div>
      </section>

      {/* Architecture Overview */}
      <section className="forge-section">
        <div className="forge-section__container">
          <h2 className="forge-section__title">Engine Architecture</h2>
          
          <div className="architecture-grid">
            <div className="arch-card">
              <div className="arch-card__icon">🏗️</div>
              <h3>Modular Design</h3>
              <p>
                Built as <code>rnxForge.dll</code> - a shared library providing high-level 
                Vulkan abstraction for graphics, windowing, and GPU resource management.
              </p>
            </div>

            <div className="arch-card">
              <div className="arch-card__icon">📦</div>
              <h3>Export System</h3>
              <p>
                Clean C++ API with <code>GRAPHICS_API</code> export macros for seamless 
                DLL integration across RailNex applications.
              </p>
            </div>

            <div className="arch-card">
              <div className="arch-card__icon">🔧</div>
              <h3>CMake Build</h3>
              <p>
                Modern CMake 3.30+ build system with VCPKG dependency management and 
                comprehensive test infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="forge-section forge-section--dark">
        <div className="forge-section__container">
          <h2 className="forge-section__title">Core Features</h2>

          <div className="features-grid">
            <div className="feature-block">
              <h3 className="feature-block__title">
                <span className="icon">🎨</span>
                Rendering Pipeline
              </h3>
              <ul className="feature-block__list">
                <li>
                  <strong>Deferred Rendering:</strong> Multi-pass deferred shading for complex lighting scenarios
                </li>
                <li>
                  <strong>Bindless Descriptors:</strong> Modern descriptor indexing for efficient resource binding
                </li>
                <li>
                  <strong>Dynamic Resolution:</strong> Adaptive resolution scaling for performance optimization
                </li>
                <li>
                  <strong>Multi-Sampling:</strong> MSAA support with configurable sample counts
                </li>
              </ul>
            </div>

            <div className="feature-block">
              <h3 className="feature-block__title">
                <span className="icon">⚡</span>
                Vulkan Core
              </h3>
              <ul className="feature-block__list">
                <li>
                  <strong>Instance Management:</strong> Vulkan instance creation with validation layers
                </li>
                <li>
                  <strong>Device Selection:</strong> Automatic GPU selection based on capabilities
                </li>
                <li>
                  <strong>Swapchain:</strong> Advanced swapchain management with present modes
                </li>
                <li>
                  <strong>Command Buffers:</strong> Efficient command buffer pooling and submission
                </li>
              </ul>
            </div>

            <div className="feature-block">
              <h3 className="feature-block__title">
                <span className="icon">💾</span>
                Memory Management
              </h3>
              <ul className="feature-block__list">
                <li>
                  <strong>VMA Integration:</strong> Vulkan Memory Allocator for optimized GPU memory
                </li>
                <li>
                  <strong>Buffer Management:</strong> Unified buffer and memory abstraction
                </li>
                <li>
                  <strong>Texture System:</strong> Comprehensive texture loading and management
                </li>
                <li>
                  <strong>Resource Pools:</strong> Efficient resource pooling and reuse
                </li>
              </ul>
            </div>

            <div className="feature-block">
              <h3 className="feature-block__title">
                <span className="icon">🔍</span>
                Debugging & Validation
              </h3>
              <ul className="feature-block__list">
                <li>
                  <strong>Validation Layers:</strong> Comprehensive Vulkan validation during development
                </li>
                <li>
                  <strong>Debug Messenger:</strong> Structured error reporting and logging
                </li>
                <li>
                  <strong>Performance Markers:</strong> GPU profiling with debug markers
                </li>
                <li>
                  <strong>Error Handling:</strong> Robust error checking with VK_CHECK_RESULT macros
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Components */}
      <section className="forge-section">
        <div className="forge-section__container">
          <h2 className="forge-section__title">Core Components</h2>

          <div className="components-list">
            <div className="component">
              <div className="component__header">
                <h3>RailNex::Renderer</h3>
                <span className="component__type">Main Rendering Class</span>
              </div>
              <p className="component__desc">
                High-level renderer providing Vulkan instance creation, device management, 
                swapchain operations, render pass execution, and command buffer management.
              </p>
              <div className="component__methods">
                <code>CreateInstance()</code>
                <code>GetDevice()</code>
                <code>GetNumImages()</code>
                <code>Init()</code>
              </div>
            </div>

            <div className="component">
              <div className="component__header">
                <h3>VulkanPhysicalDevice</h3>
                <span className="component__type">GPU Selection</span>
              </div>
              <p className="component__desc">
                Device enumeration and selection system. Queries GPU capabilities, queue families, 
                surface formats, present modes, and selects optimal device based on requirements.
              </p>
              <div className="component__methods">
                <code>Init()</code>
                <code>SelectDevice()</code>
                <code>Selected()</code>
              </div>
            </div>

            <div className="component">
              <div className="component__header">
                <h3>VulkanQueue</h3>
                <span className="component__type">Queue Management</span>
              </div>
              <p className="component__desc">
                Queue family management for graphics, compute, and transfer operations. 
                Handles queue submission, synchronization, and command buffer execution.
              </p>
            </div>

            <div className="component">
              <div className="component__header">
                <h3>BufferAndMemory</h3>
                <span className="component__type">Resource Abstraction</span>
              </div>
              <p className="component__desc">
                Unified buffer and memory management abstraction. Simplifies creation of 
                vertex buffers, index buffers, uniform buffers, and storage buffers.
              </p>
            </div>

            <div className="component">
              <div className="component__header">
                <h3>VulkanTexture</h3>
                <span className="component__type">Texture Management</span>
              </div>
              <p className="component__desc">
                Texture loading, management, and sampling. Supports depth images, 
                color attachments, and various texture formats including KTX compression.
              </p>
            </div>

            <div className="component">
              <div className="component__header">
                <h3>VulkanLoader</h3>
                <span className="component__type">Dynamic Loading</span>
              </div>
              <p className="component__desc">
                Runtime Vulkan library loading on Windows. Dynamically loads vulkan-1.dll 
                and resolves function pointers for maximum compatibility.
              </p>
              <div className="component__methods">
                <code>LoadFunction()</code>
              </div>
            </div>

            <div className="component">
              <div className="component__header">
                <h3>VulkanChecks</h3>
                <span className="component__type">Validation Utilities</span>
              </div>
              <p className="component__desc">
                Extension and layer validation system. Checks for required Vulkan extensions, 
                validates layer availability, and ensures platform compatibility.
              </p>
              <div className="component__methods">
                <code>InitChecks()</code>
                <code>IsExtensionSupported()</code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dependencies */}
      <section className="forge-section forge-section--dark">
        <div className="forge-section__container">
          <h2 className="forge-section__title">Graphics Dependencies</h2>

          <div className="dependencies-grid">
            <div className="dependency">
              <h4>Vulkan SDK 1.3+</h4>
              <p>Core graphics API with modern features and validation layers</p>
            </div>
            <div className="dependency">
              <h4>SDL3</h4>
              <p>Cross-platform windowing and surface creation</p>
            </div>
            <div className="dependency">
              <h4>Vulkan Memory Allocator</h4>
              <p>GPU memory management and allocation optimization</p>
            </div>
            <div className="dependency">
              <h4>SPIRV-Cross</h4>
              <p>GLSL/HLSL shader cross-compilation for SPIR-V</p>
            </div>
            <div className="dependency">
              <h4>KTX 4.3.2</h4>
              <p>Texture compression and loading with tools</p>
            </div>
            <div className="dependency">
              <h4>FreeType 2.13.2</h4>
              <p>Font rendering with subpixel precision</p>
            </div>
            <div className="dependency">
              <h4>msdfgen</h4>
              <p>Multi-channel signed distance fields for text</p>
            </div>
            <div className="dependency">
              <h4>GLM</h4>
              <p>Mathematics library for 3D operations</p>
            </div>
            <div className="dependency">
              <h4>stb</h4>
              <p>Image loading/writing utility libraries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Rendering Pipeline */}
      <section className="forge-section">
        <div className="forge-section__container">
          <h2 className="forge-section__title">Rendering Pipeline</h2>

          <div className="pipeline">
            <div className="pipeline-step">
              <div className="pipeline-step__number">1</div>
              <h4>Instance Creation</h4>
              <p>Initialize Vulkan with application info and validation layers</p>
            </div>
            <div className="pipeline-arrow">→</div>

            <div className="pipeline-step">
              <div className="pipeline-step__number">2</div>
              <h4>Debug Device</h4>
              <p>Setup debug messenger for validation callbacks</p>
            </div>
            <div className="pipeline-arrow">→</div>

            <div className="pipeline-step">
              <div className="pipeline-step__number">3</div>
              <h4>Surface Creation</h4>
              <p>Create Vulkan surface for window rendering</p>
            </div>
            <div className="pipeline-arrow">→</div>

            <div className="pipeline-step">
              <div className="pipeline-step__number">4</div>
              <h4>GPU Selection</h4>
              <p>Pick suitable GPU based on queue families and features</p>
            </div>
            <div className="pipeline-arrow">→</div>

            <div className="pipeline-step">
              <div className="pipeline-step__number">5</div>
              <h4>Logical Device</h4>
              <p>Create logical device for GPU interaction</p>
            </div>
            <div className="pipeline-arrow">→</div>

            <div className="pipeline-step">
              <div className="pipeline-step__number">6</div>
              <h4>Command Pool</h4>
              <p>Create command pool for command buffer allocation</p>
            </div>
            <div className="pipeline-arrow">→</div>

            <div className="pipeline-step">
              <div className="pipeline-step__number">7</div>
              <h4>Synchronization</h4>
              <p>Create fences and semaphores for frame synchronization</p>
            </div>
            <div className="pipeline-arrow">→</div>

            <div className="pipeline-step">
              <div className="pipeline-step__number">8</div>
              <h4>Descriptors</h4>
              <p>Setup descriptor sets for bindless rendering</p>
            </div>
          </div>
        </div>
      </section>

      {/* Build Configuration */}
      <section className="forge-section forge-section--dark">
        <div className="forge-section__container">
          <h2 className="forge-section__title">Build Configuration</h2>

          <div className="build-config">
            <div className="config-section">
              <h3>Compile Definitions</h3>
              <div className="config-tags">
                <span className="config-tag">GRAPHICS_API</span>
                <span className="config-tag">RAILNEX_GRAPHICS_ENGINE</span>
                <span className="config-tag">RAILNEX_PLATFORM_WINDOWS</span>
                <span className="config-tag">RNX_GFX</span>
              </div>
            </div>

            <div className="config-section">
              <h3>Output Targets</h3>
              <div className="output-info">
                <div className="output-item">
                  <strong>GraphicsEngine</strong> → GraphicsEngine.lib/dll
                </div>
                <div className="output-item">
                  <strong>RailNexForge</strong> → rnxForge.dll (official distribution)
                </div>
              </div>
            </div>

            <div className="config-section">
              <h3>Build Requirements</h3>
              <ul className="requirements-list">
                <li>CMake 3.30+</li>
                <li>C++20 Standard</li>
                <li>MSVC Compiler (Visual Studio 2022)</li>
                <li>Vulkan SDK 1.3+</li>
                <li>VCPKG Package Manager</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="forge-section forge-cta">
        <div className="forge-section__container">
          <h2 className="forge-cta__title">Explore RailNex Forge</h2>
          <p className="forge-cta__description">
            Dive into the source code and see how modern Vulkan graphics power 
            professional railroad simulation.
          </p>
          <div className="forge-cta__buttons">
            <a 
              href="https://github.com/TheCorridor-Train-Simulator/RailNex/tree/main/RailNexForge" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              View Forge Source
            </a>
            <a 
              href="#documentation" 
              className="btn btn-secondary"
            >
              Read API Docs
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RailNexForge;
