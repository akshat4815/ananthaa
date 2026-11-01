import Link from 'next/link';

export default function Services() {
  const services = [
    {
      title: 'Ocean & Air Freight Forwarding',
      description:
        'FCL and LCL containerized sea freight routing directly from JNPT (Nhava Sheva), Mundra, and Chennai ports with guaranteed vessel allocations and expedited air cargo.',
      badge: 'Multi-Modal Logistics',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.5 0 2.5 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>
          <path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.1"/>
          <path d="M12 10V4"/>
          <path d="M8 8l4-4 4 4"/>
        </svg>
      ),
    },
    {
      title: 'Customs Clearance & DGFT Licensing',
      description:
        'Single-window customs clearance, Bill of Entry, EDI document processing, Duty Drawback (DBK), RoDTEP claims, and SCOMET regulatory clearances.',
      badge: 'Regulatory Compliance',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
      ),
    },
    {
      title: 'Strategic Indian Sourcing & QA',
      description:
        'Direct procurement access to audited Indian mills, agricultural estates, and engineering clusters. Pre-shipment laboratory inspections, SGS testing, and batch audits.',
      badge: 'Quality Assured',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
        </svg>
      ),
    },
    {
      title: 'Trade Finance & Settlement Advisory',
      description:
        'Secure international transaction structuring under UCP 600 Irrevocable Letters of Credit (LC), Bank Guarantees, SWIFT MT103 wire settlements, and RBI eBRC closing.',
      badge: 'Institutional Finance',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2"></rect>
          <line x1="2" y1="10" x2="22" y2="10"></line>
          <circle cx="7" cy="15" r="1"></circle>
          <circle cx="12" cy="15" r="1"></circle>
        </svg>
      ),
    },
    {
      title: 'Bonded Warehousing & Packaging',
      description:
        'Temperature-controlled container packing, pallets fumigation (ISPM 15 standards), barcode labeling, cargo consolidation, and Free Trade Warehousing Zone (FTWZ) storage.',
      badge: 'ISPM 15 Standards',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      ),
    },
    {
      title: 'Destination Market Entry Advisory',
      description:
        'Targeted market research, tariff classification, preferential duty utilization (India-UAE CEPA, India-EFTA), and end-to-end import compliance for new export destinations.',
      badge: 'Global Expansion',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 20V10"></path>
          <path d="M12 20V4"></path>
          <path d="M6 20v-6"></path>
        </svg>
      ),
    },
  ];

  return (
    <section className="section section-alt" id="services">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 48px' }}>
          <div className="section-label section-label-center">Capabilities</div>
          <h2 className="section-title">
            Integrated <span className="gold-text">Exim Solutions</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            From statutory DGFT clearances in Mumbai to destination port offloading in the Americas, Europe, and Gulf — our comprehensive services eliminate cross-border trade bottlenecks.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="corporate-card service-card" key={index}>
              <div className="card-icon-box">{service.icon}</div>
              <span style={{
                fontSize: '0.72rem',
                fontFamily: 'var(--font-mono)',
                fontWeight: 700,
                color: 'var(--color-gold)',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '8px'
              }}>
                {service.badge}
              </span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link href="/services" className="card-explore-link">
                <span>View Full Specifications</span>
                <span>→</span>
              </Link>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <Link href="/services" className="btn-secondary">
            <span>Explore All 6 Detailed Service Pillars</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
