import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import WhatsAppButton from '../../components/WhatsAppButton';
import CountryMarquee from '../../components/CountryMarquee';

export const metadata = {
  title: 'Global Trade Corridors | Americas, Gulf & Europe | Ananthaa Global',
  description:
    'Explore Ananthaa Global bilateral export trade routes from India to the Americas, Gulf GCC, and European Union with port transit times and compliance frameworks.',
};

export default function MarketsPage() {
  const corridors = [
    {
      id: 'americas',
      title: 'The Americas Corridor',
      subtitle: 'United States, Canada, Mexico & South America',
      originPort: 'JNPT (Nhava Sheva) / Mundra',
      destPorts: 'New York / New Jersey, Savannah, Long Beach, Santos, Manzanillo',
      transitTime: '18 - 25 Days Direct Maritime',
      compliance: 'US-FDA Registration, USDA APHIS, FSMA, Mexico COFEPRIS',
      countries: [
        { code: 'us', name: 'United States', port: 'Port of NY/NJ & Long Beach' },
        { code: 'ca', name: 'Canada', port: 'Port of Montreal & Vancouver' },
        { code: 'br', name: 'Brazil', port: 'Port of Santos' },
        { code: 'mx', name: 'Mexico', port: 'Port of Manzanillo' },
        { code: 'cl', name: 'Chile', port: 'Port of Valparaíso' },
        { code: 'ar', name: 'Argentina', port: 'Port of Buenos Aires' },
      ],
      description:
        'Our trans-Atlantic and trans-Pacific maritime routes deliver high-volume agro commodities, organic spices, textiles, and machined castings with full US-FDA Prior Notice filing and automated customs clearance.',
    },
    {
      id: 'gulf',
      title: 'Gulf & Middle East (GCC) Corridor',
      subtitle: 'United Arab Emirates, Saudi Arabia, Qatar, Oman, Kuwait, Bahrain',
      originPort: 'Mundra Port / JNPT Mumbai',
      destPorts: 'Jebel Ali (Dubai), King Abdulaziz (Dammam), Hamad Port, Sohar',
      transitTime: '3 - 6 Days Express Feeder Route',
      compliance: 'India-UAE CEPA (0% Tariff), SASO / SFDA, Halal Certification, G-Mark',
      countries: [
        { code: 'ae', name: 'United Arab Emirates', port: 'Jebel Ali & Khalifa Port' },
        { code: 'sa', name: 'Saudi Arabia', port: 'Jeddah & Dammam' },
        { code: 'qa', name: 'Qatar', port: 'Hamad Port (Doha)' },
        { code: 'om', name: 'Oman', port: 'Port of Sohar & Salalah' },
        { code: 'kw', name: 'Kuwait', port: 'Shuwaikh Port' },
        { code: 'bh', name: 'Bahrain', port: 'Khalifa Bin Salman Port' },
      ],
      description:
        'Taking full advantage of the historic India-UAE Comprehensive Economic Partnership Agreement (CEPA), we provide preferential duty access, zero-tariff entry on select verticals, and express 96-hour vessel turnaround to GCC commercial buyers.',
    },
    {
      id: 'europe',
      title: 'European Union & United Kingdom Corridor',
      subtitle: 'Germany, United Kingdom, France, Netherlands, Italy, Spain, Belgium',
      originPort: 'JNPT (Nhava Sheva) Mumbai',
      destPorts: 'Rotterdam, Antwerp, Hamburg, Felixstowe, Genoa, Valencia',
      transitTime: '22 - 28 Days Direct Container Service',
      compliance: 'EU REACH Regulation, CE Marking, OEKO-TEX, EFTA Free Trade Accord',
      countries: [
        { code: 'gb', name: 'United Kingdom', port: 'Port of Felixstowe & London' },
        { code: 'de', name: 'Germany', port: 'Port of Hamburg & Bremen' },
        { code: 'nl', name: 'Netherlands', port: 'Port of Rotterdam' },
        { code: 'fr', name: 'France', port: 'Port of Le Havre & Marseille' },
        { code: 'it', name: 'Italy', port: 'Port of Genoa & Trieste' },
        { code: 'es', name: 'Spain', port: 'Port of Valencia & Barcelona' },
      ],
      description:
        'Europe demands the world’s strictest environmental and chemical conformity. We guarantee certified residue limits, full batch origin tracking, and seamless Euro settlement via our institutional SEPA payment channels.',
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
            <span>Global Corridors</span>
          </div>
          <div className="section-label section-label-center">International Trade Routes</div>
          <h1 className="section-title">
            Global <span className="gold-text">Trade Destinations</span>
          </h1>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Operating certified maritime and air cargo shipping lanes linking western and southern Indian gateway ports to key trading hubs across three continents.
          </p>
        </div>
      </section>

      {/* Live Flag Marquee */}
      <CountryMarquee />

      {/* Corridor Deep Dive */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
            {corridors.map((c) => (
              <div
                key={c.id}
                id={c.id}
                style={{
                  background: '#ffffff',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '40px',
                  boxShadow: 'var(--shadow-md)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '20px' }}>
                  <div>
                    <span style={{
                      fontSize: '0.74rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--color-gold)',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '1.5px',
                    }}>
                      Primary Trade Lane
                    </span>
                    <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--color-navy)', margin: '6px 0' }}>
                      {c.title}
                    </h2>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.94rem' }}>{c.subtitle}</p>
                  </div>
                  <div style={{
                    padding: '8px 18px',
                    borderRadius: '50px',
                    background: 'var(--color-bg-subtle)',
                    border: '1px solid var(--color-border)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    color: 'var(--color-navy)',
                  }}>
                    Transit: {c.transitTime}
                  </div>
                </div>

                <p style={{ fontSize: '1rem', color: 'var(--color-text-body)', lineHeight: 1.8, marginBottom: '28px' }}>
                  {c.description}
                </p>

                {/* Country Flags Grid */}
                <div style={{ marginBottom: '28px' }}>
                  <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.76rem', color: 'var(--color-navy)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '14px' }}>
                    Destination Nations & Gateway Discharging Ports:
                  </h4>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))', gap: '12px' }}>
                    {c.countries.map((country, idx) => (
                      <div
                        key={idx}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          padding: '10px 14px',
                          borderRadius: 'var(--radius-sm)',
                          background: 'var(--color-bg-subtle)',
                          border: '1px solid var(--color-border-subtle)',
                        }}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={`https://flagcdn.com/w80/${country.code}.png`}
                          srcSet={`https://flagcdn.com/w160/${country.code}.png 2x`}
                          alt={`${country.name} flag`}
                          width="24"
                          height="16"
                          style={{ borderRadius: '2px', objectFit: 'cover', flexShrink: 0, boxShadow: '0 1px 2px rgba(0,0,0,0.1)' }}
                        />
                        <div>
                          <div style={{ fontSize: '0.86rem', fontWeight: 700, color: 'var(--color-navy)' }}>{country.name}</div>
                          <div style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)' }}>{country.port}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Logistics & Compliance Specs */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px', paddingTop: '20px', borderTop: '1px solid var(--color-border-subtle)' }}>
                  <div>
                    <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--color-text-muted)', fontWeight: 600 }}>Origin Port Terminals</div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--color-navy)', marginTop: '2px' }}>{c.originPort}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--color-text-muted)', fontWeight: 600 }}>Regulatory Compliance Standard</div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--color-emerald)', marginTop: '2px' }}>{c.compliance}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <Link href="/contact" className="btn-secondary" style={{ padding: '8px 20px', fontSize: '0.84rem' }}>
                      Request Corridor Quote →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global RFQ Banner */}
      <section className="section" style={{ background: 'var(--color-navy)', color: '#ffffff', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.4rem', marginBottom: '14px', color: '#ffffff' }}>
            Explore Direct Liner Schedules from India
          </h2>
          <p style={{ color: '#cbd5e1', maxWidth: '620px', margin: '0 auto 26px', fontSize: '1rem' }}>
            Get confirmed feeder vessel sailing dates, freight rate index, and container booking allocations from our international trade desk.
          </p>
          <Link href="/contact" className="btn-gold">
            <span>Inquire for Your Country Corridor</span>
            <span>→</span>
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
