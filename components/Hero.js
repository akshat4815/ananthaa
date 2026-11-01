import Link from 'next/link';

export default function Hero() {
  const activeRoutes = [
    {
      origin: 'JNPT (Mumbai)',
      destination: 'New York (USA)',
      transit: '22 Days',
      corridor: 'Americas',
      status: 'In Transit',
      code: 'US-NYC',
    },
    {
      origin: 'Mundra Port',
      destination: 'Jebel Ali (UAE)',
      transit: '4 Days',
      corridor: 'Gulf (GCC)',
      status: 'Express',
      code: 'AE-DXB',
    },
    {
      origin: 'Chennai Port',
      destination: 'Rotterdam (EU)',
      transit: '26 Days',
      corridor: 'Europe',
      status: 'On Schedule',
      code: 'NL-RTM',
    },
  ];

  return (
    <section className="hero" id="hero">
      <div className="hero-grid-overlay"></div>

      <div className="hero-content">
        {/* Left Column — Value Proposition */}
        <div className="hero-left">
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            Govt. Recognized Export Trading House &bull; IEC Certified
          </div>

          <h1 className="hero-title">
            Connecting <span className="gold-text">Indian Excellence</span> to World Markets
          </h1>

          <p className="hero-description">
            Ananthaa Global orchestrates premier cross-border trade operations linking Indian
            manufacturing and agriculture to the Americas, Gulf (GCC), and Europe with
            strict regulatory adherence, multi-modal freight, and institutional trust.
          </p>

          <div className="hero-ctas">
            <Link href="/contact" className="btn-primary">
              <span>Request Container Quote</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
            <Link href="/services" className="btn-secondary">
              Exim Solutions
            </Link>
          </div>

          <div className="hero-stats-row">
            <div className="hero-stat">
              <div className="hero-stat-number">40+</div>
              <div className="hero-stat-label">Nations Served</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-number">$50M+</div>
              <div className="hero-stat-label">Trade Volume</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-number">100%</div>
              <div className="hero-stat-label">FEMA & RBI Compliant</div>
            </div>
          </div>
        </div>

        {/* Right Column — Professional Trade Intelligence Visual */}
        <div className="hero-right">
          <div className="hero-visual-card">
            <div className="hero-visual-header">
              <div>
                <div style={{ fontSize: '0.94rem', fontWeight: 700, color: 'var(--color-navy)' }}>
                  Active Trade Corridors
                </div>
                <div style={{ fontSize: '0.74rem', color: 'var(--color-text-muted)' }}>
                  Real-time Port-to-Port Container Schedules
                </div>
              </div>
              <span className="hero-live-badge">
                <span className="pulse-dot"></span>
                LIVE DESK
              </span>
            </div>

            {/* Live Corridors List */}
            <div className="trade-routes-list">
              {activeRoutes.map((route, idx) => (
                <div className="trade-route-item" key={idx}>
                  <div>
                    <div className="route-ports">
                      <span>{route.origin}</span>
                      <span className="route-arrow">➔</span>
                      <span>{route.destination}</span>
                    </div>
                    <div style={{ fontSize: '0.74rem', color: 'var(--color-gold)', fontWeight: 600, marginTop: '2px' }}>
                      Corridor: {route.corridor}
                    </div>
                  </div>
                  <div className="route-meta">
                    <span className="route-status-pill">{route.status}</span>
                    <div style={{ marginTop: '4px', fontWeight: 600, color: 'var(--color-navy)' }}>
                      {route.transit}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Institutional Compliance Indicators */}
            <div className="hero-visual-footer">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <polyline points="9 12 11 14 15 10"/>
                </svg>
                <span style={{ fontWeight: 600, color: 'var(--color-navy)', fontSize: '0.78rem' }}>
                  FOB &bull; CIF &bull; EXW Incoterms
                </span>
              </div>
              <Link
                href="/markets"
                style={{ fontSize: '0.78rem', color: 'var(--color-gold)', fontWeight: 700 }}
              >
                View Routes →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
