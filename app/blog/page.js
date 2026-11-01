import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import WhatsAppButton from '../../components/WhatsAppButton';

export const metadata = {
  title: 'Exim Insights & Global Trade Intelligence | Ananthaa Global',
  description:
    'Authoritative industry whitepapers on international trade regulations, India-UAE CEPA pact, Incoterms 2020 CIF vs FOB, and port logistics.',
};

export default function BlogPage() {
  const articles = [
    {
      title: 'Navigating US-FDA & USDA Regulations for Indian Agricultural Exports',
      date: 'October 24, 2026',
      readTime: '6 min read',
      tag: 'Compliance',
      excerpt:
        'A comprehensive guide on documentation, phytosanitary requirements, and maximum residue limits (MRLs) when shipping spices and grains to the North American market.',
    },
    {
      title: 'Optimizing Logistics Through JNPT & Mundra: Choosing the Right Port',
      date: 'September 18, 2026',
      readTime: '5 min read',
      tag: 'Logistics',
      excerpt:
        'Comparing lead times, terminal handling charges, and direct vessel schedules from western Indian ports to Jebel Ali and European hubs.',
    },
    {
      title: 'Incoterms 2020 Demystified: Why B2B Exporters Prefer CIF vs FOB',
      date: 'August 11, 2026',
      readTime: '7 min read',
      tag: 'Trade Finance',
      excerpt:
        'Evaluating risk transfer points, marine cargo insurance obligations, and foreign exchange hedging for international importers and distributors.',
    },
    {
      title: 'Leveraging India-UAE CEPA: Zero Customs Duty Strategies for Importers',
      date: 'July 29, 2026',
      readTime: '8 min read',
      tag: 'Trade Treaties',
      excerpt:
        'How Gulf-based buyers can capitalize on Rules of Origin criteria to import textiles, engineering items, and packaged foods tariff-free.',
    },
    {
      title: 'Understanding eBRC and EDPMS Closure Under RBI Guidelines',
      date: 'June 14, 2026',
      readTime: '5 min read',
      tag: 'Banking & FEMA',
      excerpt:
        'A detailed breakdown for international procurement heads on why Indian exporters require swift remittance reconciliation and official bank realization advice.',
    },
    {
      title: 'ISPM 15 Fumigation & Phytosanitary Protocols for European Ports',
      date: 'May 02, 2026',
      readTime: '6 min read',
      tag: 'Biosecurity',
      excerpt:
        'Standardized timber pallet marking, heat treatment procedures, and plant quarantine clearances preventing customs detention at Rotterdam and Hamburg.',
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
            <span>Insights</span>
          </div>
          <div className="section-label section-label-center">Industry Insights</div>
          <h1 className="section-title">
            Global Trade <span className="gold-text">Intelligence</span>
          </h1>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Authoritative analysis on international shipping corridors, regulatory frameworks, bilateral trade pacts, and customs procedures.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            {articles.map((item, idx) => (
              <div key={idx} className="corporate-card" style={{ padding: '32px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <span style={{
                    fontSize: '0.72rem',
                    padding: '4px 10px',
                    borderRadius: '4px',
                    background: 'var(--color-gold-soft)',
                    color: 'var(--color-gold)',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    fontFamily: 'var(--font-mono)'
                  }}>
                    {item.tag}
                  </span>
                  <span style={{ fontSize: '0.76rem', color: 'var(--color-text-muted)' }}>{item.readTime}</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', marginBottom: '12px', color: 'var(--color-navy)', lineHeight: 1.4 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-body)', lineHeight: 1.7, marginBottom: '24px', flexGrow: 1 }}>
                  {item.excerpt}
                </p>
                <div style={{ borderTop: '1px solid var(--color-border-subtle)', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>{item.date}</span>
                  <Link href="/contact" style={{ fontSize: '0.85rem', color: 'var(--color-gold)', fontWeight: 700 }}>
                    Discuss Topic →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
