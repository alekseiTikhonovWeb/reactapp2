import React, { useState } from 'react';
import './App.css';
import heroImage from './assets/hero.png';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-wrapper">
      <header className="navbar container">
        <div className="logo animate-fade-in">
          <span className="logo-icon">🐳</span>
          <span className="logo-text">MyDockerApp</span>
        </div>
        <nav className="nav-links animate-fade-in">
          <a href="#features">Features</a>
          <a href="#docs">Docs</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">GitHub</a>
        </nav>
      </header>

      <main className="container">
        <section className="hero-section">
          <div className="hero-content animate-fade-in">
            <h1 className="hero-title">
              Streamline Your <br />
              <span className="gradient-text">Containerization</span>
            </h1>
            <p className="hero-subtitle">
              The ultimate React dashboard for managing your Docker ecosystem with speed, 
              precision, and a premium developer experience.
            </p>
            <div className="hero-cta">
              <button 
                className="btn btn-primary pulse" 
                onClick={() => setCount((count) => count + 1)}
              >
                Boost Performance: {count}
              </button>
              <a href="#docs" className="btn btn-secondary">Learn More</a>
            </div>
          </div>
          
          <div className="hero-image-container animate-fade-in">
            <div className="glass image-frame">
              <img src={heroImage} alt="Docker Tech Hero" className="hero-img" />
            </div>
          </div>
        </section>

        <section id="features" className="features-grid container">
          <div className="feature-card glass animate-fade-in">
            <div className="feature-icon">🚀</div>
            <h3>Lightning Fast</h3>
            <p>Built on Vite for near-instant hot module replacement and build times.</p>
          </div>
          <div className="feature-card glass animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="feature-icon">🛡️</div>
            <h3>Secure by Design</h3>
            <p>Standardized Docker configuration optimized for production safety.</p>
          </div>
          <div className="feature-card glass animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="feature-icon">🎨</div>
            <h3>Premium UI</h3>
            <p>Modern design tokens featuring glassmorphism and fluid typography.</p>
          </div>
        </section>
      </main>

      <footer className="footer container">
        <p>&copy; {new Date().getFullYear()} MyDockerApp. Built with ❤️ and React.</p>
      </footer>
    </div>
  );
}

export default App;
