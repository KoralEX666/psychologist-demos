import { notFound } from 'next/navigation';
import leadsData from '../../../leads-db.json';
import { getTemplate, TemplateConfig } from '../../../lib/templates';

interface PageProps {
  params: {
    leadId: string;
  };
}

export default function DemoPage({ params }: PageProps) {
  const lead = leadsData.leads.find((l: any) => l.id === params.leadId);
  
  if (!lead) {
    notFound();
  }

  const template = getTemplate(lead.style as 'warm-safe' | 'modern-clean');

  return (
    <div style={{
      minHeight: '100vh',
      background: template.colors.bg,
      fontFamily: template.fonts.body,
    }}>
      {/* Demo Banner */}
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '10px 20px',
        textAlign: 'center',
        fontSize: '0.9rem',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
      }}>
        🔥 To jest DEMO strony dla: <strong>{lead.businessName}</strong> | 
        Styl: <strong>{template.name}</strong> | 
        📞 {lead.phone}
      </div>

      {/* Header */}
      <header style={{
        background: `linear-gradient(135deg, ${template.colors.primary}, ${template.colors.secondary})`,
        color: 'white',
        padding: '20px 0',
        position: 'fixed',
        width: '100%',
        top: 36,
        zIndex: 999,
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
            {lead.name}
          </div>
          <nav style={{ display: 'flex', gap: '30px' }}>
            <a href="#about" style={{ color: 'white', textDecoration: 'none' }}>O mnie</a>
            <a href="#services" style={{ color: 'white', textDecoration: 'none' }}>Oferta</a>
            <a href="#contact" style={{ color: 'white', textDecoration: 'none' }}>Kontakt</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section style={{
        background: `linear-gradient(135deg, ${template.colors.primary}, ${template.colors.secondary})`,
        color: 'white',
        padding: '180px 20px 120px',
        textAlign: 'center',
        marginTop: 80,
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ fontSize: '4rem', marginBottom: '20px' }}>{template.imagery.hero}</div>
          <h1 style={{
            fontSize: '3rem',
            marginBottom: '20px',
            fontFamily: template.fonts.heading,
          }}>
            {template.tone.headline}
          </h1>
          <p style={{
            fontSize: '1.3rem',
            marginBottom: '40px',
            opacity: 0.9,
          }}>
            Profesjonalna pomoc psychologiczna w {lead.district}, Warszawa. 
            Indywidualne podejście, bezpieczna przestrzeń, potwierdzone metody.
          </p>
          <a
            href="#contact"
            style={{
              display: 'inline-block',
              background: template.colors.accent,
              color: template.colors.text,
              padding: '15px 40px',
              borderRadius: '50px',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '1.1rem',
              transition: 'transform 0.3s',
            }}
          >
            {template.tone.cta}
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" style={{
        padding: '100px 20px',
        background: template.colors.light,
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: '2.5rem',
            color: template.colors.primary,
            marginBottom: '60px',
            fontFamily: template.fonts.heading,
          }}>
            O mnie
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px',
            alignItems: 'center',
            maxWidth: '1000px',
            margin: '0 auto',
          }}>
            <div>
              <h3 style={{
                fontSize: '1.8rem',
                color: template.colors.primary,
                marginBottom: '20px',
                fontFamily: template.fonts.heading,
              }}>
                Cześć, mam na imię {lead.name.split(' ')[0]}
              </h3>
              <p style={{
                marginBottom: '20px',
                lineHeight: 1.8,
                color: template.colors.text,
              }}>
                Jestem dyplomowanym psychologiem i psychoterapeutą z siedzibą w {lead.district}. 
                W mojej pracy łączę wiedzę naukową z empatią i zrozumieniem.
              </p>
              <p style={{
                marginBottom: '20px',
                lineHeight: 1.8,
                color: template.colors.text,
              }}>
                {template.tone.about}
              </p>
              <ul style={{
                marginLeft: '20px',
                color: template.colors.text,
                lineHeight: 2,
              }}>
                <li>Depresji i stanów lękowych</li>
                <li>Trudności w relacjach</li>
                <li>Wypalenia zawodowego</li>
                <li>Niskiego poczucia własnej wartości</li>
                <li>Traum i trudnych doświadczeń</li>
              </ul>
            </div>
            <div style={{
              background: `linear-gradient(135deg, ${template.colors.secondary}, ${template.colors.primary})`,
              height: '400px',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '1.2rem',
            }}>
              {template.imagery.about} Twoje zdjęcie
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" style={{
        padding: '100px 20px',
        background: template.colors.bg,
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: '2.5rem',
            color: template.colors.primary,
            marginBottom: '60px',
            fontFamily: template.fonts.heading,
          }}>
            Oferta
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px',
          }}>
            {[
              { icon: '👤', title: 'Psychoterapia indywidualna', desc: 'Cotygodniowe spotkania 50-minutowe. Pracujemy nad Twoimi trudnościami w bezpiecznej relacji.' },
              { icon: '💑', title: 'Terapia par', desc: 'Wsparcie dla par doświadczających kryzysu. Poprawa komunikacji, rozwiązywanie konfliktów.' },
              { icon: '🧠', title: 'Diagnoza ADHD', desc: 'Kompleksowa diagnoza ADHD u dorosłych i młodzieży. Wywiad, kwestionariusze, rekomendacje.' },
              { icon: '💻', title: 'Konsultacje online', desc: 'Sesje przez Zoom/Google Meet. Wygoda i komfort Twojego domu, bez dojazdów.' },
            ].map((service) => (
              <div
                key={service.title}
                style={{
                  background: template.colors.light,
                  padding: '40px',
                  borderRadius: '15px',
                  boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
                  transition: 'transform 0.3s',
                }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '20px' }}>{service.icon}</div>
                <h3 style={{
                  color: template.colors.primary,
                  marginBottom: '15px',
                  fontSize: '1.4rem',
                  fontFamily: template.fonts.heading,
                }}>
                  {service.title}
                </h3>
                <p style={{ color: '#666', lineHeight: 1.8 }}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{
        padding: '100px 20px',
        background: template.colors.light,
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: '2.5rem',
            color: template.colors.primary,
            marginBottom: '60px',
            fontFamily: template.fonts.heading,
          }}>
            Kontakt
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px',
            maxWidth: '1000px',
            margin: '0 auto',
          }}>
            <div>
              <h3 style={{
                color: template.colors.primary,
                marginBottom: '20px',
                fontSize: '1.5rem',
                fontFamily: template.fonts.heading,
              }}>
                Dane kontaktowe
              </h3>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '15px',
                padding: '15px',
                background: template.colors.bg,
                borderRadius: '10px',
              }}>
                <span style={{ fontSize: '1.5rem', marginRight: '15px' }}>📍</span>
                <span>{lead.address}</span>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '15px',
                padding: '15px',
                background: template.colors.bg,
                borderRadius: '10px',
              }}>
                <span style={{ fontSize: '1.5rem', marginRight: '15px' }}>📞</span>
                <span>{lead.phone}</span>
              </div>
              {lead.email && (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '15px',
                  padding: '15px',
                  background: template.colors.bg,
                  borderRadius: '10px',
                }}>
                  <span style={{ fontSize: '1.5rem', marginRight: '15px' }}>📧</span>
                  <span>{lead.email}</span>
                </div>
              )}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                padding: '15px',
                background: template.colors.bg,
                borderRadius: '10px',
              }}>
                <span style={{ fontSize: '1.5rem', marginRight: '15px' }}>🕐</span>
                <span>Pon-Pt: 9:00 - 20:00</span>
              </div>
            </div>
            <div style={{
              background: template.colors.bg,
              padding: '30px',
              borderRadius: '15px',
            }}>
              <form>
                <input
                  type="text"
                  placeholder="Twoje imię"
                  required
                  style={{
                    width: '100%',
                    padding: '15px',
                    marginBottom: '20px',
                    border: `2px solid ${template.colors.secondary}`,
                    borderRadius: '10px',
                    fontSize: '1rem',
                    fontFamily: template.fonts.body,
                  }}
                />
                <input
                  type="email"
                  placeholder="Twój email"
                  required
                  style={{
                    width: '100%',
                    padding: '15px',
                    marginBottom: '20px',
                    border: `2px solid ${template.colors.secondary}`,
                    borderRadius: '10px',
                    fontSize: '1rem',
                    fontFamily: template.fonts.body,
                  }}
                />
                <input
                  type="tel"
                  placeholder="Twój telefon"
                  style={{
                    width: '100%',
                    padding: '15px',
                    marginBottom: '20px',
                    border: `2px solid ${template.colors.secondary}`,
                    borderRadius: '10px',
                    fontSize: '1rem',
                    fontFamily: template.fonts.body,
                  }}
                />
                <textarea
                  placeholder="Wiadomość"
                  required
                  rows={5}
                  style={{
                    width: '100%',
                    padding: '15px',
                    marginBottom: '20px',
                    border: `2px solid ${template.colors.secondary}`,
                    borderRadius: '10px',
                    fontSize: '1rem',
                    fontFamily: template.fonts.body,
                    resize: 'vertical',
                  }}
                />
                <button
                  type="submit"
                  style={{
                    width: '100%',
                    background: template.colors.primary,
                    color: 'white',
                    padding: '15px',
                    border: 'none',
                    borderRadius: '50px',
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    fontFamily: template.fonts.body,
                  }}
                >
                  Wyślij wiadomość
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: template.colors.text,
        color: 'white',
        padding: '40px 20px',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p>&copy; {new Date().getFullYear()} {lead.businessName}. Wszystkie prawa zastrzeżone.</p>
          <p style={{ marginTop: '10px', opacity: 0.7, fontSize: '0.9rem' }}>
            🎯 DEMO - Strona stworzona w ramach projektu barterowego
          </p>
        </div>
      </footer>
    </div>
  );
}
