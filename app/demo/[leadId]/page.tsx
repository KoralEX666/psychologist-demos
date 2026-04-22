'use client';

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
      color: template.colors.text,
    }}>
      {/* Demo Banner - Tylko dla demo */}
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '12px 20px',
        textAlign: 'center',
        fontSize: '0.85rem',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      }}>
        🎯 <strong>DEMO</strong> dla: <strong>{lead.businessName}</strong> | 
        Styl: <strong>{template.name}</strong> | 
        📞 {lead.phone}
      </div>

      {/* Navigation */}
      <nav style={{
        background: 'white',
        padding: '20px 0',
        position: 'fixed',
        width: '100%',
        top: 48,
        zIndex: 999,
        boxShadow: '0 2px 20px rgba(0,0,0,0.08)',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <div style={{ 
            fontSize: '1.5rem', 
            fontWeight: 'bold',
            color: template.colors.primary,
          }}>
            {lead.name}
          </div>
          <div style={{ display: 'flex', gap: '30px' }}>
            <a href="#about" style={{ color: template.colors.text, textDecoration: 'none', fontWeight: 500 }}>O mnie</a>
            <a href="#services" style={{ color: template.colors.text, textDecoration: 'none', fontWeight: 500 }}>Oferta</a>
            <a href="#testimonials" style={{ color: template.colors.text, textDecoration: 'none', fontWeight: 500 }}>Opinie</a>
            <a href="#faq" style={{ color: template.colors.text, textDecoration: 'none', fontWeight: 500 }}>FAQ</a>
            <a href="#contact" style={{ 
              background: template.colors.primary, 
              color: 'white', 
              padding: '10px 25px', 
              borderRadius: '25px',
              textDecoration: 'none',
              fontWeight: 600,
            }}>Kontakt</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{
        background: `linear-gradient(135deg, ${template.colors.primary} 0%, ${template.colors.secondary} 100%)`,
        color: 'white',
        padding: '200px 20px 150px',
        textAlign: 'center',
        marginTop: 70,
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Decorative circles */}
        <div style={{
          position: 'absolute',
          top: '-100px',
          right: '-100px',
          width: '400px',
          height: '400px',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '50%',
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '-50px',
          left: '-50px',
          width: '200px',
          height: '200px',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '50%',
        }}></div>
        
        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ 
            fontSize: '5rem', 
            marginBottom: '30px',
            filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.2))',
          }}>
            {template.id === 'warm-safe' ? '🌿' : '🏙️'}
          </div>
          <h1 style={{
            fontSize: '3.5rem',
            marginBottom: '25px',
            fontFamily: template.fonts.heading,
            fontWeight: 700,
            lineHeight: 1.2,
          }}>
            {template.tone.headline}
          </h1>
          <p style={{
            fontSize: '1.4rem',
            marginBottom: '50px',
            opacity: 0.95,
            lineHeight: 1.6,
            maxWidth: '700px',
            margin: '0 auto 50px',
          }}>
            Profesjonalna pomoc psychologiczna w {lead.district}, Warszawa. 
            Indywidualne podejście, bezpieczna przestrzeń, potwierdzone metody. 
            Pierwsza konsultacja już od 200 zł.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="#contact"
              style={{
                display: 'inline-block',
                background: 'white',
                color: template.colors.primary,
                padding: '18px 45px',
                borderRadius: '50px',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '1.15rem',
                boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                transition: 'transform 0.3s',
              }}
            >
              📞 Umów konsultację
            </a>
            <a
              href="#about"
              style={{
                display: 'inline-block',
                background: 'rgba(255,255,255,0.2)',
                color: 'white',
                padding: '18px 45px',
                borderRadius: '50px',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '1.15rem',
                backdropFilter: 'blur(10px)',
                transition: 'background 0.3s',
              }}
            >
              👤 Poznaj mnie
            </a>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div style={{
        background: 'white',
        padding: '40px 20px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        marginTop: '-50px',
        position: 'relative',
        zIndex: 10,
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '30px',
        }}>
          {[
            { icon: '🎓', label: 'Lat doświadczenia', value: '10+' },
            { icon: '👥', label: 'Pacjentów', value: '500+' },
            { icon: '⭐', label: 'Średnia ocen', value: '4.9/5' },
            { icon: '📍', label: 'Lokalizacja', value: lead.district },
          ].map((stat) => (
            <div key={stat.label} style={{
              textAlign: 'center',
              padding: '20px',
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>{stat.icon}</div>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: template.colors.primary }}>{stat.value}</div>
              <div style={{ color: '#666', fontSize: '0.95rem' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <section id="about" style={{
        padding: '120px 20px',
        background: template.colors.bg,
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: '2.8rem',
            color: template.colors.primary,
            marginBottom: '20px',
            fontFamily: template.fonts.heading,
          }}>
            O mnie
          </h2>
          <p style={{
            textAlign: 'center',
            fontSize: '1.2rem',
            color: '#666',
            marginBottom: '80px',
            maxWidth: '600px',
            margin: '0 auto 80px',
          }}>
            Poznaj osobę, która będzie Ci towarzyszyć w drodze do lepszego samopoczucia
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'center',
            maxWidth: '1100px',
            margin: '0 auto',
          }}>
            <div style={{
              background: `linear-gradient(135deg, ${template.colors.secondary}, ${template.colors.primary})`,
              height: '500px',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '1.5rem',
              boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '5rem', marginBottom: '20px' }}>📸</div>
                <div>Twoje profesjonalne zdjęcie</div>
                <div style={{ fontSize: '0.9rem', opacity: 0.8, marginTop: '10px' }}>
                  (wstaw swoje zdjęcie w gabinecie)
                </div>
              </div>
            </div>
            
            <div>
              <h3 style={{
                fontSize: '2rem',
                color: template.colors.primary,
                marginBottom: '25px',
                fontFamily: template.fonts.heading,
              }}>
                Cześć, mam na imię {lead.name.split(' ')[0]}
              </h3>
              <p style={{
                marginBottom: '20px',
                lineHeight: 1.9,
                color: template.colors.text,
                fontSize: '1.05rem',
              }}>
                Jestem dyplomowanym psychologiem i psychoterapeutą z siedzibą w {lead.district}. 
                W mojej pracy łączę wiedzę naukową z empatią i zrozumieniem. Ukończyłam studia 
                na Uniwersytecie SWPS w Warszawie, a następnie 4-letnie szkolenie w nurcie 
                poznawczo-behawioralnym.
              </p>
              <p style={{
                marginBottom: '20px',
                lineHeight: 1.9,
                color: template.colors.text,
                fontSize: '1.05rem',
              }}>
                {template.tone.about}
              </p>
              
              <div style={{
                background: template.colors.light,
                padding: '30px',
                borderRadius: '15px',
                marginTop: '30px',
              }}>
                <h4 style={{
                  color: template.colors.primary,
                  marginBottom: '20px',
                  fontSize: '1.3rem',
                }}>
                  🎓 Wykształcenie i certyfikaty
                </h4>
                <ul style={{
                  marginLeft: '20px',
                  color: template.colors.text,
                  lineHeight: 2.2,
                }}>
                  <li>Magister psychologii - Uniwersytet SWPS</li>
                  <li>Certyfikowany psychoterapeuta PTP</li>
                  <li>Szkolenie z diagnozy ADHD i ASD</li>
                  <li>Członek Polskiego Towarzystwa Psychologicznego</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" style={{
        padding: '120px 20px',
        background: 'white',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: '2.8rem',
            color: template.colors.primary,
            marginBottom: '20px',
            fontFamily: template.fonts.heading,
          }}>
            Oferta
          </h2>
          <p style={{
            textAlign: 'center',
            fontSize: '1.2rem',
            color: '#666',
            marginBottom: '80px',
            maxWidth: '600px',
            margin: '0 auto 80px',
          }}>
            Kompleksowa pomoc dopasowana do Twoich potrzeb
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '35px',
          }}>
            {[
              { 
                icon: '👤', 
                title: 'Psychoterapia indywidualna', 
                desc: 'Cotygodniowe spotkania 50-minutowe. Pracujemy nad Twoimi trudnościami w bezpiecznej, pełnej zrozumienia relacji.',
                price: '200 zł / sesja'
              },
              { 
                icon: '💑', 
                title: 'Terapia par', 
                desc: 'Wsparcie dla par doświadczających kryzysu. Poprawa komunikacji, rozwiązywanie konfliktów, odbudowa zaufania.',
                price: '250 zł / sesja'
              },
              { 
                icon: '🧠', 
                title: 'Diagnoza ADHD', 
                desc: 'Kompleksowa diagnoza ADHD u dorosłych i młodzieży. Wywiad, kwestionariusze, informacja zwrotna i rekomendacje.',
                price: '600 zł / diagnoza'
              },
              { 
                icon: '💻', 
                title: 'Konsultacje online', 
                desc: 'Sesje przez Zoom/Google Meet. Wygoda i komfort Twojego domu, bez dojazdów. Taka sama skuteczność.',
                price: '200 zł / sesja'
              },
              { 
                icon: '👨‍👩‍👧', 
                title: 'Terapia rodzinna', 
                desc: 'Praca z całym systemem rodzinnym. Rozwiązywanie konfliktów, poprawa relacji, wsparie w trudnych sytuacjach.',
                price: '300 zł / sesja'
              },
              { 
                icon: '📊', 
                title: 'Warsztaty rozwojowe', 
                desc: 'Grupowe spotkania tematyczne: radzenie ze stresem, asertywność, budowanie pewności siebie.',
                price: '150 zł / warsztat'
              },
            ].map((service) => (
              <div
                key={service.title}
                style={{
                  background: template.colors.light,
                  padding: '40px',
                  borderRadius: '20px',
                  boxShadow: '0 5px 25px rgba(0,0,0,0.08)',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div style={{ 
                  position: 'absolute', 
                  top: 0, 
                  right: 0,
                  background: template.colors.primary,
                  color: 'white',
                  padding: '8px 20px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                }}>
                  {service.price}
                </div>
                <div style={{ fontSize: '3.5rem', marginBottom: '25px' }}>{service.icon}</div>
                <h3 style={{
                  color: template.colors.primary,
                  marginBottom: '15px',
                  fontSize: '1.5rem',
                  fontFamily: template.fonts.heading,
                  fontWeight: 700,
                }}>
                  {service.title}
                </h3>
                <p style={{ color: '#666', lineHeight: 1.8, fontSize: '1rem' }}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" style={{
        padding: '120px 20px',
        background: template.colors.light,
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: '2.8rem',
            color: template.colors.primary,
            marginBottom: '20px',
            fontFamily: template.fonts.heading,
          }}>
            Opinie pacjentów
          </h2>
          <p style={{
            textAlign: 'center',
            fontSize: '1.2rem',
            color: '#666',
            marginBottom: '80px',
            maxWidth: '600px',
            margin: '0 auto 80px',
          }}>
            Zobacz, co mówią osoby, które zdecydowały się na współpracę
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '35px',
          }}>
            {[
              { 
                name: 'Anna, 34 lata', 
                text: 'Dzięki terapii odzyskałam radość życia. Po latach walki z depresją w końcu czuję, że mam kontrolę nad swoimi emocjami.',
                rating: 5
              },
              { 
                name: 'Piotr, 42 lata', 
                text: 'Diagnoza ADHD zmieniła moje życie. Zrozumiałem siebie, dostałem konkretne narzędzia. Polecam każdemu z podobnymi trudnościami.',
                rating: 5
              },
              { 
                name: 'Katarzyna i Marek', 
                text: 'Terapia par uratowała nasz związek. Nauczyliśmy się rozmawiać, słuchać, rozumieć. Jesteśmy wdzięczni za profesjonalne wsparcie.',
                rating: 5
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                style={{
                  background: 'white',
                  padding: '40px',
                  borderRadius: '20px',
                  boxShadow: '0 5px 25px rgba(0,0,0,0.08)',
                }}
              >
                <div style={{ fontSize: '1.8rem', marginBottom: '20px' }}>
                  {'⭐'.repeat(testimonial.rating)}
                </div>
                <p style={{
                  fontSize: '1.05rem',
                  lineHeight: 1.8,
                  color: template.colors.text,
                  marginBottom: '25px',
                  fontStyle: 'italic',
                }}>
                  "{testimonial.text}"
                </p>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px',
                }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${template.colors.secondary}, ${template.colors.primary})`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '1.2rem',
                  }}>
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, color: template.colors.primary }}>
                      {testimonial.name}
                    </div>
                    <div style={{ fontSize: '0.85rem', color: '#888' }}>
                      Pacjent
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" style={{
        padding: '120px 20px',
        background: 'white',
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: '2.8rem',
            color: template.colors.primary,
            marginBottom: '20px',
            fontFamily: template.fonts.heading,
          }}>
            Najczęstsze pytania
          </h2>
          <p style={{
            textAlign: 'center',
            fontSize: '1.2rem',
            color: '#666',
            marginBottom: '80px',
          }}>
            Wszystko, co warto wiedzieć przed pierwszą wizytą
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              {
                q: 'Jak wygląda pierwsza wizyta?',
                a: 'Pierwsze spotkanie to konsultacja wstępna (50 min). Poznamy się, opowiesz o swoich trudnościach, a ja postaram się zrozumieć Twoją sytuację i zaproponować dalsze kroki.'
              },
              {
                q: 'Ile trwa terapia?',
                a: 'To zależy od indywidualnych potrzeb. Krótkoterminowa terapia to 10-20 sesji, długoterminowa może trwać kilka miesięcy. Omawiamy to na bieżąco.'
              },
              {
                q: 'Czy przyjmujesz na NFZ?',
                a: 'Pracuję wyłącznie w ramach prywatnych wizyt. Dzięki temu mogę zagwarantować elastyczny grafik i pełne zaangażowanie w proces terapeutyczny.'
              },
              {
                q: 'Czy mogę odwołać wizytę?',
                a: 'Tak, proszę o odwołanie wizyty minimum 24 godziny przed terminem. W przeciwnym razie wizyta jest płatna.'
              },
              {
                q: 'Jak przygotować się do terapii?',
                a: 'Nie ma specjalnych przygotowań. Warto zastanowić się, co Cię do mnie sprowadza i czego oczekujesz z terapii. Reszta wyłoni się w rozmowie.'
              },
            ].map((faq, i) => (
              <div
                key={i}
                style={{
                  background: template.colors.light,
                  padding: '30px',
                  borderRadius: '15px',
                  border: `2px solid ${template.colors.accent}`,
                }}
              >
                <h3 style={{
                  color: template.colors.primary,
                  marginBottom: '15px',
                  fontSize: '1.2rem',
                  fontWeight: 600,
                }}>
                  ❓ {faq.q}
                </h3>
                <p style={{
                  color: template.colors.text,
                  lineHeight: 1.8,
                  fontSize: '1rem',
                }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{
        padding: '120px 20px',
        background: `linear-gradient(135deg, ${template.colors.primary}, ${template.colors.secondary})`,
        color: 'white',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: '2.8rem',
            color: 'white',
            marginBottom: '20px',
            fontFamily: template.fonts.heading,
          }}>
            Kontakt
          </h2>
          <p style={{
            textAlign: 'center',
            fontSize: '1.2rem',
            color: 'rgba(255,255,255,0.9)',
            marginBottom: '80px',
            maxWidth: '600px',
            margin: '0 auto 80px',
          }}>
            Zadzwoń lub napisz - chętnie odpowiem na wszystkie pytania
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            maxWidth: '1100px',
            margin: '0 auto',
            alignItems: 'start',
          }}>
            <div>
              <h3 style={{
                color: 'white',
                marginBottom: '30px',
                fontSize: '1.8rem',
                fontFamily: template.fonts.heading,
              }}>
                Dane kontaktowe
              </h3>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '25px',
                padding: '20px',
                background: 'rgba(255,255,255,0.15)',
                borderRadius: '15px',
                backdropFilter: 'blur(10px)',
              }}>
                <span style={{ fontSize: '2rem', marginRight: '20px' }}>📍</span>
                <div>
                  <div style={{ fontWeight: 600, marginBottom: '5px' }}>Adres</div>
                  <div style={{ opacity: 0.9 }}>{lead.address}</div>
                </div>
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '25px',
                padding: '20px',
                background: 'rgba(255,255,255,0.15)',
                borderRadius: '15px',
                backdropFilter: 'blur(10px)',
              }}>
                <span style={{ fontSize: '2rem', marginRight: '20px' }}>📞</span>
                <div>
                  <div style={{ fontWeight: 600, marginBottom: '5px' }}>Telefon</div>
                  <div style={{ opacity: 0.9, fontSize: '1.2rem', fontWeight: 600 }}>{lead.phone}</div>
                </div>
              </div>
              
              {lead.email && (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '25px',
                  padding: '20px',
                  background: 'rgba(255,255,255,0.15)',
                  borderRadius: '15px',
                  backdropFilter: 'blur(10px)',
                }}>
                  <span style={{ fontSize: '2rem', marginRight: '20px' }}>📧</span>
                  <div>
                    <div style={{ fontWeight: 600, marginBottom: '5px' }}>Email</div>
                    <div style={{ opacity: 0.9 }}>{lead.email}</div>
                  </div>
                </div>
              )}
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                padding: '20px',
                background: 'rgba(255,255,255,0.15)',
                borderRadius: '15px',
                backdropFilter: 'blur(10px)',
              }}>
                <span style={{ fontSize: '2rem', marginRight: '20px' }}>🕐</span>
                <div>
                  <div style={{ fontWeight: 600, marginBottom: '5px' }}>Godziny przyjęć</div>
                  <div style={{ opacity: 0.9 }}>Poniedziałek - Piątek: 9:00 - 20:00</div>
                </div>
              </div>
            </div>
            
            <div style={{
              background: 'white',
              padding: '40px',
              borderRadius: '20px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
            }}>
              <h4 style={{
                color: template.colors.primary,
                marginBottom: '25px',
                fontSize: '1.5rem',
                textAlign: 'center',
              }}>
                Napisz wiadomość
              </h4>
              <form>
                <input
                  type="text"
                  placeholder="Twoje imię"
                  required
                  style={{
                    width: '100%',
                    padding: '18px',
                    marginBottom: '20px',
                    border: '2px solid #e0e0e0',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    fontFamily: template.fonts.body,
                    transition: 'border-color 0.3s',
                  }}
                />
                <input
                  type="email"
                  placeholder="Twój email"
                  required
                  style={{
                    width: '100%',
                    padding: '18px',
                    marginBottom: '20px',
                    border: '2px solid #e0e0e0',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    fontFamily: template.fonts.body,
                    transition: 'border-color 0.3s',
                  }}
                />
                <input
                  type="tel"
                  placeholder="Twój telefon"
                  style={{
                    width: '100%',
                    padding: '18px',
                    marginBottom: '20px',
                    border: '2px solid #e0e0e0',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    fontFamily: template.fonts.body,
                    transition: 'border-color 0.3s',
                  }}
                />
                <textarea
                  placeholder="Wiadomość"
                  required
                  rows={5}
                  style={{
                    width: '100%',
                    padding: '18px',
                    marginBottom: '25px',
                    border: '2px solid #e0e0e0',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    fontFamily: template.fonts.body,
                    resize: 'vertical',
                    transition: 'border-color 0.3s',
                  }}
                />
                <button
                  type="submit"
                  style={{
                    width: '100%',
                    background: template.colors.primary,
                    color: 'white',
                    padding: '18px',
                    border: 'none',
                    borderRadius: '50px',
                    fontSize: '1.15rem',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    fontFamily: template.fonts.body,
                    transition: 'background 0.3s',
                  }}
                >
                  📩 Wyślij wiadomość
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: '#1a1a2e',
        color: 'white',
        padding: '60px 20px 30px',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '40px',
            marginBottom: '40px',
          }}>
            <div>
              <h4 style={{
                fontSize: '1.3rem',
                marginBottom: '20px',
                color: template.colors.accent,
              }}>
                {lead.name}
              </h4>
              <p style={{ opacity: 0.8, lineHeight: 1.8 }}>
                Profesjonalna pomoc psychologiczna<br />
                w {lead.district}, Warszawa
              </p>
            </div>
            <div>
              <h4 style={{
                fontSize: '1.3rem',
                marginBottom: '20px',
                color: template.colors.accent,
              }}>
                Kontakt
              </h4>
              <div style={{ opacity: 0.8, lineHeight: 2 }}>
                {lead.phone}<br />
                {lead.address}
              </div>
            </div>
            <div>
              <h4 style={{
                fontSize: '1.3rem',
                marginBottom: '20px',
                color: template.colors.accent,
              }}>
                Godziny
              </h4>
              <div style={{ opacity: 0.8, lineHeight: 2 }}>
                Pon-Pt: 9:00 - 20:00<br />
                Sob-Nd: Zamknięte
              </div>
            </div>
          </div>
          
          <div style={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: '30px',
            textAlign: 'center',
            opacity: 0.7,
            fontSize: '0.9rem',
          }}>
            <p>&copy; {new Date().getFullYear()} {lead.businessName}. Wszystkie prawa zastrzeżone.</p>
            <p style={{ marginTop: '15px', color: '#888', fontSize: '0.85rem' }}>
              🎯 DEMO - Strona stworzona w ramach projektu barterowego dla studenta psychologii
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
