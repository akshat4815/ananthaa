import Link from 'next/link';

export default function Certifications() {
  const certs = [
    { name: 'ISO 9001:2015', authority: 'Bureau Veritas Quality Standard', badge: 'Certified' },
    { name: 'APEDA India', authority: 'Agricultural & Processed Food Exports', badge: 'Registered' },
    { name: 'FSSAI License', authority: 'Food Safety & Standards Authority', badge: 'Licensed' },
    { name: 'IEC License', authority: 'Directorate General of Foreign Trade', badge: 'Govt. Issued' },
    { name: 'FIEO Recognized', authority: 'Federation of Indian Export Orgs', badge: 'Premier House' },
    { name: 'Spices Board India', authority: 'Ministry of Commerce & Industry', badge: 'Authorized' },
    { name: 'WHO-GMP Compliant', authority: 'Good Manufacturing Practices', badge: 'Audited' },
    { name: 'CE Mark Conformance', authority: 'European Economic Area Standards', badge: 'Compliant' },
  ];

  return (
    <section className="section" id="certifications">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 36px' }}>
          <div className="section-label section-label-center">Accreditations & Compliance</div>
          <h2 className="section-title">
            Institutional <span className="gold-text">Governance & Certifications</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            We adhere strictly to statutory export norms, food safety frameworks, and quality management protocols established by Indian and international authorities.
          </p>
        </div>

        <div className="certs-grid">
          {certs.map((cert, index) => (
            <div className="cert-card" key={index}>
              <div className="cert-icon-wrap">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <polyline points="9 12 11 14 15 10"></polyline>
                </svg>
              </div>
              <div className="cert-info">
                <h4>{cert.name}</h4>
                <p>{cert.authority}</p>
                <span style={{
                  fontSize: '0.68rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--color-gold)',
                  fontWeight: 700,
                  textTransform: 'uppercase'
                }}>
                  {cert.badge}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '36px' }}>
          <Link href="/about" style={{ fontSize: '0.9rem', color: 'var(--color-navy)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <span>View Verification Registry & Audit History in Corporate Profile</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
