import React, { useState } from 'react';
import { Network, Code, Video, ShieldCheck } from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Wszystkie' },
    { id: 'networks', label: 'Sieci komputerowe', icon: <Network size={16} /> },
    { id: 'webdev', label: 'Web Development', icon: <Code size={16} /> },
    { id: 'video', label: 'Montaż & Multimedia', icon: <Video size={16} /> },
  ];

  const skillData = [
    // Networks
    { name: 'Konfiguracja Routerów/Switchy Cisco', level: 90, category: 'networks' },
    { name: 'Protokoły Routingu (OSPF, EIGRP, RIP)', level: 85, category: 'networks' },
    { name: 'Konfiguracja VLAN, STP, VTP', level: 90, category: 'networks' },
    { name: 'Diagnostyka sieci (Wireshark, Ping, Traceroute)', level: 80, category: 'networks' },
    { name: 'Usługi sieciowe (DHCP, DNS, NAT/PAT)', level: 85, category: 'networks' },
    { name: 'Cisco Packet Tracer / GNS3', level: 95, category: 'networks' },
    
    // Web Dev
    { name: 'HTML5 & CSS3 (Grid, Flexbox)', level: 90, category: 'webdev' },
    { name: 'Modern CSS & RWD (Responsywność)', level: 85, category: 'webdev' },
    { name: 'JavaScript (ES6+)', level: 80, category: 'webdev' },
    { name: 'React.js', level: 75, category: 'webdev' },
    { name: 'Git & GitHub', level: 80, category: 'webdev' },
    { name: 'Podstawy SEO & Optymalizacji', level: 70, category: 'webdev' },

    // Video & Multimedia
    { name: 'Adobe Premiere Pro', level: 90, category: 'video' },
    { name: 'Adobe After Effects (Motion Graphics)', level: 75, category: 'video' },
    { name: 'DaVinci Resolve (Color Grading)', level: 70, category: 'video' },
    { name: 'Montaż Dynamiczny (Shorts/Reels/TikTok)', level: 95, category: 'video' },
    { name: 'Sound Design & Edycja audio', level: 80, category: 'video' },
    { name: 'Adobe Photoshop', level: 75, category: 'video' },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skillData 
    : skillData.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="section skills-section reveal">
      <div className="container">
        <h2 className="section-title">Umiejętności</h2>
        
        {/* Category Selector Tabs */}
        <div className="skills-tabs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`skills-tab-btn btn ${activeCategory === cat.id ? 'active btn-primary' : 'btn-secondary'}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.icon}
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {filteredSkills.map((skill, index) => (
            <div key={index} className="skill-card glass-panel">
              <div className="skill-info">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
              <div className="skill-bar-container">
                <div 
                  className={`skill-bar-fill fill-${skill.category}`} 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications or Tech School highlights */}
        <div className="certifications-box glass-panel">
          <div className="cert-header">
            <ShieldCheck size={28} className="text-cyan" />
            <h3>Certyfikaty & Edukacja techniczna</h3>
          </div>
          <ul className="cert-list">
            <li>
              <strong>Technik Informatyk (INF.02 & INF.03)</strong> - Przygotowanie do egzaminów zawodowych z zakresu montażu i eksploatacji komputerów, administrowania systemami oraz tworzenia aplikacji internetowych i baz danych.
            </li>
            <li>
              <strong>Szkolenia Cisco Academy</strong> - Kursy CCNA z zakresu podstaw sieci, routingu, switchingu i bezprzewodowości.
            </li>
            <li>
              <strong>Praktyki zawodowe</strong> - Praktyczne doświadczenie w konfiguracji sieci lokalnych oraz zarządzaniu sprzętem IT.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
