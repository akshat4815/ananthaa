import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import WhatsAppButton from '../../components/WhatsAppButton';
import Certifications from '../../components/Certifications';

export const metadata = {
  title: 'Corporate Profile & Heritage | Ananthaa Global Exim',
  description:
    'Discover Ananthaa Global history since 2009, Mumbai headquarters, port terminal operations at Nhava Sheva (JNPT) & Mundra, and government compliance credentials.',
};

export default function AboutPage() {
  const leadershipValues = [
    {
      title: 'Regulatory Inviolability',
      desc: 'Zero tolerance for documentation errors. Every export shipment complies with DGFT, customs, and importing nation biosecurity standards.',
    },
    {
      title: 'Origin Traceability',
      desc: 'Direct supplier provenance linking international buyers with verified Indian farms, textile mills, and engineering foundries.',
    },
    {
      title: 'Institutional Trust',
      desc: 'Strict adherence to ICC Incoterms 2020 and RBI cross-border foreign exchange compliance under the FEMA regulatory framework.',
    },
  ];

  const portHubs = [
    {
      name: 'JNPT (Nhava Sheva), Navi Mumbai',
      type: 'Primary Container Gateway Port',
      details: 'Handling 60% of our containerized ocean freight to Europe, GCC, and the Americas with dedicated CFS warehousing.',
    },
    {
      name: 'Mundra Port, Gujarat',
      type: 'Deep-Draft Western Gateway',
      details: 'Express ocean transit for agricultural dry bulk, engineering machineries, and rapid Middle East feeder connections.',
    },
    {
      name: 'Chennai & Ennore Port',
      type: 'Eastern Seaboard Hub',
      details: 'Specialized corridors serving Southeast Asian buyers, Australia, and coastal agro-commodity consignments.',
    },
  ];

  return (
    <main>
      <Navbar />

      {/* Subpage Header */}
      <section className="page-hero-header">
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Corporate Heritage</span>
          </div>
          <div className="section-label section-label-center">Corporate Heritage</div>
          <h1 className="section-title">
            About <span className="gold-text">Ananthaa Global</span>
          </h1>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            A legacy of integrity, reliability, and precision across international trade routes since 2009.
          </p>
        </div>
      </section>

      {/* Corporate Overview */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '50px', alignItems: 'center' }}>
            <div>
              <div className="section-label">Our Foundation</div>
              <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)' }}>
                Building India’s Premier <span className="gold-text">Export Bridge</span>
              </h2>
              <p style={{ fontSize: '1.02rem', lineHeight: 1.8, color: 'var(--color-text-body)', marginBottom: '18px' }}>
                Ananthaa Global was established with a singular vision: to elevate India’s reputation as a dependable, top-tier global supplier across critical commodities and engineered goods.
              </p>
              <p style={{ fontSize: '0.96rem', lineHeight: 1.75, color: 'var(--color-text-muted)', marginBottom: '24px' }}>
                From our corporate headquarters in Nariman Point, Mumbai, our specialized commodity desks oversee quality control, packaging compliance, ocean vessel bookings, and destination customs protocols for clients in over 40 countries.
              </p>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <div style={{ padding: '14px 20px', borderRadius: '8px', background: 'var(--color-bg-subtle)', border: '1px solid var(--color-border)' }}>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', fontWeight: 700, color: 'var(--color-navy)' }}>15+</div>
                  <div style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: 'var(--color-gold)', fontWeight: 600 }}>Years Continuous Trade</div>
                </div>
                <div style={{ padding: '14px 20px', borderRadius: '8px', background: 'var(--color-bg-subtle)', border: '1px solid var(--color-border)' }}>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', fontWeight: 700, color: 'var(--color-navy)' }}>40+</div>
                  <div style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: 'var(--color-gold)', fontWeight: 600 }}>Export Destinations</div>
                </div>
                <div style={{ padding: '14px 20px', borderRadius: '8px', background: 'var(--color-bg-subtle)', border: '1px solid var(--color-border)' }}>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', fontWeight: 700, color: 'var(--color-navy)' }}>100%</div>
                  <div style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: 'var(--color-gold)', fontWeight: 600 }}>Statutory Clean Audit</div>
                </div>
              </div>
            </div>

            <div style={{ background: 'var(--color-bg-subtle)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)', padding: '36px' }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--color-navy)', marginBottom: '20px' }}>
                Operational Principles
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {leadershipValues.map((v, i) => (
                  <div key={i} style={{ display: 'flex', gap: '14px' }}>
                    <div style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: 'var(--color-navy)',
                      color: 'var(--color-gold-light)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      flexShrink: 0
                    }}>
                      0{i + 1}
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '4px' }}>{v.title}</h4>
                      <p style={{ fontSize: '0.86rem', color: 'var(--color-text-muted)', lineHeight: 1.65 }}>{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Port Operations & Infrastructure */}
      <section className="section section-alt">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 40px' }}>
            <div className="section-label section-label-center">Supply Chain Hubs</div>
            <h2 className="section-title">
              Gateway <span className="gold-text">Port Terminals</span>
            </h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Strategic physical presence at India&apos;s highest-throughput maritime trade hubs guarantees expedited vessel berthing and secure stuffing.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {portHubs.map((port, idx) => (
              <div key={idx} className="corporate-card">
                <div className="card-icon-box">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="5" r="3"></circle>
                    <line x1="12" y1="22" x2="12" y2="8"></line>
                    <path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>
                  </svg>
                </div>
                <h3 style={{ fontSize: '1.18rem', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '6px' }}>{port.name}</h3>
                <span style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: 'var(--color-gold)', fontWeight: 700, marginBottom: '12px', textTransform: 'uppercase' }}>
                  {port.type}
                </span>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-text-body)', lineHeight: 1.65 }}>{port.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Certifications />

      {/* CTA Box */}
      <section className="section" style={{ background: 'var(--color-navy)', color: '#ffffff', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.4rem', marginBottom: '16px', color: '#ffffff' }}>
            Partner With India’s Most Dependable Trade House
          </h2>
          <p style={{ color: '#cbd5e1', maxWidth: '600px', margin: '0 auto 28px', fontSize: '1.05rem' }}>
            Inquire directly with our Mumbai trade desk for procurement contracts, port-to-port CIF rates, and compliance documentation.
          </p>
          <Link href="/contact" className="btn-gold">
            <span>Initiate Trade Conversation</span>
            <span>→</span>
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
