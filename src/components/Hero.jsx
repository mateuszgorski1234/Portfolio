import React, { useState, useEffect } from 'react';
import { ArrowRight, Download } from 'lucide-react';

export default function Hero() {
  const words = ['Technik Informatyk', 'Specjalista ds. Sieci', 'Web Developer', 'Montażysta Wideo'];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  // Blinking cursor effect
  useEffect(() => {
    const timer = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(timer);
  }, []);

  // Typing effect
  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 2000); // Wait before backspacing
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 75 : 150); // Speed of typing and deleting

    return () => clearTimeout(timeout);
  }, [subIndex, reverse, index]);

  return (
    <section id="home" className="hero-section">
      <div className="bg-glow-1"></div>
      <div className="bg-glow-2"></div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <div className="badge-wrapper">
            <span className="hero-badge">Dostępny do projektów</span>
          </div>
          <h1 className="hero-title">
            Projektuję, Koduję <br />
            & <span className="gradient-text">Montuję</span>
          </h1>
          <h2 className="hero-subtitle">
            Jestem{' '}
            <span className="typed-text">
              {words[index].substring(0, subIndex)}
              <span className={`cursor ${blink ? 'blink' : ''}`}>|</span>
            </span>
          </h2>
          <p className="hero-description">
            Uczeń 4 klasy technikum informatycznego. Moje pasje to budowanie niezawodnych sieci komputerowych, 
            programowanie aplikacji webowych w React oraz profesjonalny montaż wideo.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              Moje projekty <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Skontaktuj się
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-card glass-panel">
            <div className="card-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
              <span className="window-title">mateusz_sysinfo.sh</span>
            </div>
            <div className="card-body">
              <p className="code-line"><span className="code-key">$</span> system_info --fetch</p>
              <p className="code-output"><span className="code-label">Poziom:</span> 4 Klasa Technikum Informatycznego</p>
              <p className="code-output"><span className="code-label">Specjalność:</span> Sieci Cisco, WebDev & Multimedia</p>
              <p className="code-output"><span className="code-label">Lokalizacja:</span> Polska</p>
              <br />
              <p className="code-line"><span className="code-key">$</span> show_skills --all</p>
              <p className="code-output json">
                {`{
  "networks": ["Cisco CCNA", "Routing", "TCP/IP"],
  "frontend": ["React.js", "Javascript", "HTML/CSS"],
  "multimedia": ["Premiere Pro", "After Effects"]
}`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
