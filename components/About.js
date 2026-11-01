import Link from 'next/link';

export default function About() {
  const credentials = [
    { label: 'IEC Registered Exporter', code: 'DGFT India' },
    { label: 'APEDA & Spices Board', code: 'Govt. of India' },
    { label: 'FIEO Recognized House', code: 'Apex Body' },
    { label: 'FSSAI Food Export Lic.', code: 'Central License' },
    { label: 'GST Compliant Exim', code: 'Maharashtra Div.' },
    { label: 'ISO 9001:2015 Process', code: 'Certified Ops' },
  ];

  return (
    <section className="section" id="about">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '50px', alignItems: 'center' }}>
          {/* Left Column — Corporate Profile Card */}
          <div style={{
            background: 'var(--color-bg-subtle)',
            borderRadius: 'var(--radius-xl)',
            border: '1px solid var(--color-border)',
            padding: '40px 32px',
            position: 'relative'
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '14px',
              background: 'var(--color-navy)',
              color: 'var(--color-gold-light)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '24px'
            }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </div>

            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', color: 'var(--color-gold)', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 700 }}>
              ESTABLISHED 2009 &bull; MUMBAI, INDIA
            </div>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--color-navy)', margin: '10px 0 16px' }}>
              Built on Trust, Precision, and Institutional Rigor
            </h3>
            <p style={{ fontSize: '0.94rem', color: 'var(--color-text-body)', lineHeight: 1.7, marginBottom: '28px' }}>
              Headquartered in Mumbai, India’s commercial capital, Ananthaa Global acts as the trusted trade bridge for institutional buyers across North America, the Gulf Cooperation Council (GCC), and the European Union.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', paddingTop: '20px', borderTop: '1px solid var(--color-border)' }}>
              <div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', fontWeight: 700, color: 'var(--color-navy)' }}>15+</div>
                <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--color-text-muted)', fontWeight: 600 }}>Years Trade</div>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', fontWeight: 700, color: 'var(--color-navy)' }}>500+</div>
                <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--color-text-muted)', fontWeight: 600 }}>Shipments</div>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', fontWeight: 700, color: 'var(--color-navy)' }}>40+</div>
                <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--color-text-muted)', fontWeight: 600 }}>Destinations</div>
              </div>
            </div>
          </div>

          {/* Right Column — Narrative & Government Compliance Credentials */}
          <div>
            <div className="section-label">Institutional Heritage</div>
            <h2 className="section-title">
              Pioneering End-to-End <span className="gold-text">Cross-Border Trade</span>
            </h2>
            <p style={{ fontSize: '1.02rem', color: 'var(--color-text-body)', lineHeight: 1.8, marginBottom: '20px' }}>
              From the agrarian heartlands to India&apos;s advanced industrial manufacturing corridors, Ananthaa Global simplifies global trade. We manage all procurement contracts, stringent quality certifications, customs brokerage, and multi-modal containerized freight.
            </p>
            <p style={{ fontSize: '0.96rem', color: 'var(--color-text-muted)', lineHeight: 1.75, marginBottom: '28px' }}>
              Whether executing FOB shipments via JNPT or door-to-door CIF deliveries into Rotterdam and Jebel Ali, we ensure zero regulatory friction and complete documentation accuracy.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', marginBottom: '32px' }}>
              {credentials.map((c, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '10px 14px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'var(--color-bg-subtle)',
                  border: '1px solid var(--color-border)',
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <div>
                    <div style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--color-navy)' }}>{c.label}</div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)' }}>{c.code}</div>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/about" className="btn-primary">
              <span>Read Full Corporate Profile</span>
              <span style={{ fontSize: '0.9rem' }}>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
