import Link from 'next/link';

export default function PaymentGateways() {
  const gateways = [
    {
      name: 'SWIFT MT103 Wire Transfer',
      category: 'Institutional B2B Banking',
      desc: 'Direct Bank-to-Bank wire transfers via SWIFT network with mandatory eBRC & FIRMS compliance for Indian customs clearance.',
      badge: 'Global Gold Standard',
      icon: (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#091a2f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>
      ),
    },
    {
      name: 'Letter of Credit (LC)',
      category: 'UCP 600 Documentary Credit',
      desc: 'Irrevocable, Confirmed at Sight Letters of Credit issued by Tier-1 international banks, ensuring 100% security for buyers and sellers.',
      badge: 'Zero Risk Settlement',
      icon: (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#b38728" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          <path d="m9 12 2 2 4-4"></path>
        </svg>
      ),
    },
    {
      name: 'RazorpayX Cross-Border PA-CB',
      category: 'Instant Multi-Currency Collection',
      desc: 'RBI-licensed payment aggregator with automatic Foreign Inward Remittance Advice (FIRA) generation across USD, EUR, GBP, and AED.',
      badge: 'RBI Authorized PA-CB',
      icon: (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
        </svg>
      ),
    },
    {
      name: 'Wise Business Global Multi-Account',
      category: 'Local Currency Routing',
      desc: 'Virtual account settlement in USA (ACH/Fedwire), Eurozone (SEPA), and UK (Faster Payments) with mid-market foreign exchange rates.',
      badge: 'Low FX Spread',
      icon: (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
      ),
    },
    {
      name: 'PayPal Global Merchant',
      category: 'Buyer Protection Protocol',
      desc: 'Instant settlement for sample orders, air cargo consignments, and expedited small-batch export transactions worldwide.',
      badge: 'Instant Processing',
      icon: (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#003087" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M16 8h-6a2 2 0 0 0-2 2v7"></path>
          <path d="M10 12h4a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-4"></path>
        </svg>
      ),
    },
    {
      name: 'Visa & Mastercard Corporate Cards',
      category: 'Commercial International Cards',
      desc: 'Encrypted 3D Secure 2.0 corporate credit card processing with instant charge slips and automated GST export invoices.',
      badge: '3DS 2.0 Encrypted',
      icon: (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#d4af37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
          <line x1="1" y1="10" x2="23" y2="10"></line>
        </svg>
      ),
    },
  ];

  return (
    <section className="payments-section section-alt" id="payments">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 40px' }}>
          <div className="section-label section-label-center">Institutional Settlements</div>
          <h2 className="section-title">
            International <span className="gold-text">Payment Gateways</span> & Escrow
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            We accept certified cross-border remittance mechanisms strictly compliant with Reserve Bank of India (RBI) circulars, FEMA guidelines, and ICC UCP 600 standards.
          </p>
        </div>

        <div className="payments-grid">
          {gateways.map((gw, idx) => (
            <div className="payment-card" key={idx}>
              <div className="payment-card-top">
                <div className="payment-logo-icon">{gw.icon}</div>
                <span style={{
                  fontSize: '0.68rem',
                  fontFamily: 'var(--font-mono)',
                  padding: '3px 8px',
                  borderRadius: '20px',
                  background: 'var(--color-bg-subtle)',
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-navy)',
                  fontWeight: 700
                }}>
                  {gw.badge}
                </span>
              </div>
              <div className="payment-name">{gw.name}</div>
              <div className="payment-category">{gw.category}</div>
              <p className="payment-desc">{gw.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link href="/payments" className="btn-secondary">
            <span>Read Complete Settlement & Banking Guide</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
