import leadsData from '../leads-db.json';

export default function Home() {
  const leads = leadsData.leads;

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '60px 20px',
      fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        {/* Header */}
        <header style={{
          textAlign: 'center',
          color: 'white',
          marginBottom: '60px',
        }}>
          <h1 style={{
            fontSize: '3rem',
            marginBottom: '20px',
            textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
          }}>
            🎯 Psycholog Demo Pages
          </h1>
          <p style={{
            fontSize: '1.3rem',
            opacity: 0.9,
            maxWidth: '600px',
            margin: '0 auto',
          }}>
            Personalizowane strony demo dla psychologów z Warszawy
          </p>
          <p style={{
            fontSize: '1rem',
            opacity: 0.7,
            marginTop: '10px',
          }}>
            {leads.length} gabinetów w bazie
          </p>
        </header>

        {/* Stats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px',
          marginBottom: '60px',
        }}>
          <div style={{
            background: 'rgba(255,255,255,0.2)',
            backdropFilter: 'blur(10px)',
            borderRadius: '15px',
            padding: '30px',
            textAlign: 'center',
            color: 'white',
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>🔥</div>
            <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>
              {leads.filter((l: any) => l.priority === 1).length}
            </div>
            <div style={{ opacity: 0.8 }}>HOT Leads</div>
          </div>
          <div style={{
            background: 'rgba(255,255,255,0.2)',
            backdropFilter: 'blur(10px)',
            borderRadius: '15px',
            padding: '30px',
            textAlign: 'center',
            color: 'white',
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>🟡</div>
            <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>
              {leads.filter((l: any) => l.priority === 2).length}
            </div>
            <div style={{ opacity: 0.8 }}>WARM Leads</div>
          </div>
          <div style={{
            background: 'rgba(255,255,255,0.2)',
            backdropFilter: 'blur(10px)',
            borderRadius: '15px',
            padding: '30px',
            textAlign: 'center',
            color: 'white',
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>🌿</div>
            <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>
              {leads.filter((l: any) => l.style === 'warm-safe').length}
            </div>
            <div style={{ opacity: 0.8 }}>Warm Style</div>
          </div>
          <div style={{
            background: 'rgba(255,255,255,0.2)',
            backdropFilter: 'blur(10px)',
            borderRadius: '15px',
            padding: '30px',
            textAlign: 'center',
            color: 'white',
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>🏙️</div>
            <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>
              {leads.filter((l: any) => l.style === 'modern-clean').length}
            </div>
            <div style={{ opacity: 0.8 }}>Modern Style</div>
          </div>
        </div>

        {/* Leads List */}
        <div style={{
          background: 'white',
          borderRadius: '20px',
          padding: '40px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
        }}>
          <h2 style={{
            fontSize: '1.8rem',
            color: '#333',
            marginBottom: '30px',
            textAlign: 'center',
          }}>
            📋 Lista Gabinetów
          </h2>

          <div style={{
            display: 'grid',
            gap: '15px',
          }}>
            {leads.map((lead: any, index: number) => (
              <a
                key={lead.id}
                href={`/demo/${lead.id}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '20px 25px',
                  background: index % 2 === 0 ? '#f8f9fa' : 'white',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  color: '#333',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  border: '1px solid #e0e0e0',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <span style={{
                    fontSize: '1.5rem',
                    padding: '10px',
                    background: lead.priority === 1 ? '#fee2e2' : lead.priority === 2 ? '#fef3c7' : '#d1fae5',
                    borderRadius: '50%',
                    width: '50px',
                    height: '50px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    {lead.priority === 1 ? '🔥' : lead.priority === 2 ? '🟡' : '🟢'}
                  </span>
                  <div>
                    <div style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
                      {lead.businessName}
                    </div>
                    <div style={{ color: '#666', fontSize: '0.9rem' }}>
                      {lead.district} • ⭐ {lead.reviews} opinii
                    </div>
                  </div>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  color: '#667eea',
                  fontWeight: '500',
                }}>
                  <span>Zobacz demo</span>
                  <span>→</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer style={{
          textAlign: 'center',
          color: 'white',
          marginTop: '60px',
          opacity: 0.8,
          fontSize: '0.9rem',
        }}>
          <p>Psychologist Demo System v1.0</p>
          <p>Built with Next.js + Vercel</p>
        </footer>
      </div>
    </div>
  );
}
