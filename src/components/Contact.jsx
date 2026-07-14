import React, { useState } from 'react';
import { Send, CheckCircle, Mail, MapPin, Calendar, Film, Network } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, success

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call for premium UI experience
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="section contact-section reveal">
      <div className="container">
        <h2 className="section-title">Kontakt</h2>
        
        <div className="contact-grid">
          {/* Info Side */}
          <div className="contact-info-panel glass-panel">
            <h3>Porozmawiajmy o projektach</h3>
            <p className="contact-subtitle">
              Masz pomysł na stronę, potrzebujesz konfiguracji sieci w firmie, a może szukasz montażysty wideo do swoich filmów? Napisz do mnie!
            </p>
            
            <div className="info-items">
              <div className="info-item">
                <Mail className="info-icon text-indigo" size={20} />
                <div className="info-content">
                  <span className="info-label">Napisz e-mail</span>
                  <a href="mailto:mateuszgorski1234@gmail.com" className="info-value">mateuszgorski1234@gmail.com</a>
                </div>
              </div>

              <div className="info-item">
                <MapPin className="info-icon text-cyan" size={20} />
                <div className="info-content">
                  <span className="info-label">Lokalizacja</span>
                  <span className="info-value">Polska (Dostępny zdalnie)</span>
                </div>
              </div>

              <div className="info-item">
                <Calendar className="info-icon text-purple" size={20} />
                <div className="info-content">
                  <span className="info-label">Status edukacyjny</span>
                  <span className="info-value">4 Klasa Technikum Informatycznego</span>
                </div>
              </div>
            </div>

            <div className="contact-footer-badge">
              <Network size={16} className="text-cyan" />
              <Film size={16} className="text-purple" />
              <span>Gotowy na wyzwania IT & Video</span>
            </div>
          </div>

          {/* Form Side */}
          <div className="contact-form-panel glass-panel">
            {status === 'success' ? (
              <div className="success-container">
                <CheckCircle size={60} className="success-icon" />
                <h3>Wiadomość wysłana!</h3>
                <p>Dziękuję za kontakt. Odpowiem najszybciej jak to możliwe.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Imię i nazwisko</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="np. Jan Kowalski"
                    disabled={status === 'loading'}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Adres E-mail</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="np. jan.kowalski@gmail.com"
                    disabled={status === 'loading'}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Temat wiadomości</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="np. Zlecenie montażu wideo, Strona WWW"
                    disabled={status === 'loading'}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Treść wiadomości</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Wpisz treść swojej wiadomości..."
                    disabled={status === 'loading'}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className={`btn btn-primary submit-btn ${status === 'loading' ? 'loading' : ''}`}
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? 'Wysyłanie...' : (
                    <>
                      Wyślij wiadomość <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
