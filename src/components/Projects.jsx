import React, { useState } from 'react';
import { Network, Code, Video, ExternalLink } from 'lucide-react';

const GithubIcon = ({ size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'Wszystkie' },
    { id: 'networks', label: 'Sieci', icon: <Network size={16} /> },
    { id: 'webdev', label: 'Web Dev', icon: <Code size={16} /> },
    { id: 'video', label: 'Wideo', icon: <Video size={16} /> },
  ];

  const projectsData = [
    {
      id: 1,
      title: 'Projekt Sieci Korporacyjnej LAN/WAN',
      desc: 'Kompleksowa topologia sieciowa zaprojektowana w Cisco Packet Tracer. Zawiera routing dynamiczny OSPF, bezpieczeństwo portów (Port Security), VLANy, ACL (listy dostępu), serwery DHCP, DNS oraz translację NAT/PAT.',
      category: 'networks',
      tags: ['Cisco', 'Packet Tracer', 'Routing', 'VLAN', 'NAT'],
      icon: <Network size={24} />,
      link: '#',
      github: '#',
    },
    {
      id: 2,
      title: 'Aplikacja Monitoring Sieci (Ping Dashboard)',
      desc: 'Panel kontrolny w React monitorujący status urządzeń w sieci lokalnej w czasie rzeczywistym. Wysyła automatyczne zapytania ICMP i wizualizuje opóźnienia oraz dostępność urządzeń na wykresach.',
      category: 'webdev',
      tags: ['React', 'CSS Grid', 'Node.js', 'Socket.io'],
      icon: <Code size={24} />,
      link: '#',
      github: '#',
    },
    {
      id: 3,
      title: 'Short Form Video Montage (TikTok/Reels)',
      desc: 'Seria dynamicznych montaży wideo o tematyce technologicznej i sportowej. Zastosowałem zaawansowany montaż w tempie muzyki (sync cuts), sound design (efekty SFX), napisy dynamiczne oraz precyzyjny color grading w Premiere Pro.',
      category: 'video',
      tags: ['Premiere Pro', 'Sound Design', 'Color Grading', 'Reels'],
      icon: <Video size={24} />,
      link: '#',
    },
    {
      id: 4,
      title: 'Serwer Usług Sieciowych Linux',
      desc: 'Wdrożenie i konfiguracja serwera opartego na systemie Debian w środowisku wirtualnym (Proxmox). Skonfigurowane usługi: serwer plików Samba z uprawnieniami, serwer WWW Apache2 z obsługą SSL/TLS, oraz bind9 (DNS).',
      category: 'networks',
      tags: ['Linux', 'Debian', 'Apache', 'Samba', 'DNS'],
      icon: <Network size={24} />,
      link: '#',
      github: '#',
    },
    {
      id: 5,
      title: 'Interaktywne Portfolio Szkolne',
      desc: 'Projekt nowoczesnej strony zrealizowany w ramach technikum. Witryna zawiera dynamiczne sekcje, pełną responsywność (RWD), motyw ciemny/jasny oraz zoptymalizowaną strukturę pod kątem SEO.',
      category: 'webdev',
      tags: ['React', 'Vite', 'HTML5', 'Vanilla CSS'],
      icon: <Code size={24} />,
      link: '#',
      github: '#',
    },
    {
      id: 6,
      title: 'Motion Graphics Intro / Promo Reel',
      desc: 'Animacja czołówki oraz spotu promocyjnego dla lokalnego wydarzenia szkolnego. Wykonana w Adobe After Effects z użyciem animacji wektorowej, efektów cząsteczkowych (particles) oraz dopasowanego udźwiękowienia.',
      category: 'video',
      tags: ['After Effects', 'Motion Graphics', 'Animacja', 'SFX'],
      icon: <Video size={24} />,
      link: '#',
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

  return (
    <section id="projects" className="section projects-section reveal">
      <div className="container">
        <h2 className="section-title">Projekty</h2>

        {/* Filter buttons */}
        <div className="projects-filters">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`filter-btn btn ${filter === cat.id ? 'active btn-primary' : 'btn-secondary'}`}
              onClick={() => setFilter(cat.id)}
            >
              {cat.icon}
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((p) => (
            <div key={p.id} className="project-card glass-panel">
              <div className={`project-icon-wrapper icon-${p.category}`}>
                {p.icon}
              </div>
              <div className="project-body">
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>
                <div className="project-tags">
                  {p.tags.map((tag, idx) => (
                    <span key={idx} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="project-footer">
                {p.github && p.github !== '#' && (
                  <a href={p.github} className="project-link" target="_blank" rel="noopener noreferrer" title="GitHub Source">
                    <GithubIcon size={18} /> Source
                  </a>
                )}
                <a href={p.link} className="project-link btn-primary-text" title="Zobacz projekt">
                  Zobacz <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
