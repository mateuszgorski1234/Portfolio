import React from 'react';
import { Network, Code, Video } from 'lucide-react';
import avatarImg from '../assets/avatar.jpg';

export default function About() {
  const pillars = [
    {
      icon: <Network size={32} className="pillar-icon text-cyan" />,
      title: 'Sieci Komputerowe',
      desc: 'Zajmuję się projektowaniem, konfiguracją i diagnostyką sieci LAN/WAN. Posiadam praktyczną wiedzę o architekturze Cisco, protokołach routingu oraz adresacji IP.',
    },
    {
      icon: <Code size={32} className="pillar-icon text-indigo" />,
      title: 'Web Development',
      desc: 'Tworzę responsywne i wydajne strony oraz aplikacje internetowe w oparciu o React, modern JavaScript i nowoczesne techniki CSS. Dbam o SEO i UX.',
    },
    {
      icon: <Video size={32} className="pillar-icon text-purple" />,
      title: 'Montaż Wideo',
      desc: 'Montuję materiały wideo (reels, filmy na YouTube, relacje). Pracuję w Premiere Pro i After Effects – pasjonuje mnie dynamiczny montaż, sound design i color grading.',
    },
  ];

  return (
    <section id="about" className="section about-section reveal">
      <div className="container">
        <h2 className="section-title">O Mnie</h2>
        <div className="about-grid">
          <div className="about-left">
            <div className="avatar-wrapper glass-panel">
              <img src={avatarImg} alt="Mateusz - Profil" className="about-avatar" />
            </div>
            <div className="about-text-content">
              <h3>Łączę technologię z kreacją</h3>
              <p>
                Jako uczeń 4 klasy technikum informatycznego rozwijam swoje umiejętności zarówno w kierunku
                ścisłej inżynierii sieciowej, jak i kreatywnego tworzenia treści w sieci.
              </p>
              <p>
                Nie ograniczam się do jednej dziedziny. Skonfigurowanie routingu w sieci firmowej daje mi taką samą satysfakcję, jak zaprogramowanie interaktywnego interfejsu w React czy stworzenie dynamicznej sekwencji wideo z dopasowanym sound designem.
              </p>
            </div>
          </div>
          <div className="about-pillars">
            {pillars.map((p, i) => (
              <div key={i} className="pillar-card glass-panel">
                <div className="pillar-header">
                  {p.icon}
                  <h4>{p.title}</h4>
                </div>
                <p className="pillar-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
