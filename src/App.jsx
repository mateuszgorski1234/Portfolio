import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    // Setup reveal on scroll
    const revealElements = document.querySelectorAll('.reveal');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      {
        threshold: 0.15, // Trigger when 15% of element is visible
      }
    );

    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      
      <footer className="footer glass-panel">
        <div className="container footer-container">
          <p className="copyright">
            © {new Date().getFullYear()} Mateusz. Wszelkie prawa zastrzeżone.
          </p>
          <p className="tech-stack-info">
            Zbudowano w <span className="text-cyan">React.js</span> & <span className="text-purple">Vite</span>
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
