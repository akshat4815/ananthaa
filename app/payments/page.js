import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import WhatsAppButton from '../../components/WhatsAppButton';
import PaymentGateways from '../../components/PaymentGateways';

export const metadata = {
  title: 'Trade Settlements & International Payment Gateways | Ananthaa Global',
  description:
    'Explore certified payment channels for cross-border export trade: SWIFT MT103, Irrevocable UCP 600 Letter of Credit, RazorpayX Cross-Border PA-CB, Wise, and RBI FEMA compliance.',
};

export default function PaymentsPage() {
  const compliancePoints = [
    {
      title: 'Electronic Bank Realization Certificate (eBRC)',
      desc: 'Automatic digital issuance via DGFT portal for every foreign remittance received, guaranteeing full customs and GST refund reconciliation.',
    },
    {
      title: 'RBI EDPMS Monitoring & Closure',
      desc: 'All shipping bills linked to Indian customs ICEGATE are matched with inward foreign remittances under Reserve Bank of India guidelines.',
    },
    {
      title: 'FEMA & Anti-Money Laundering (AML) Protocols',
      desc: 'Strict KYC validation on all institutional buyer entities in accordance with Financial Action Task Force (FATF) and FEMA stipulations.',
    },
    {
      title: 'UCP 600 Documentary Credit Precision',
      desc: 'Our trade desk reviews all LC clauses to ensure zero discrepancies in ports of loading, expiry dates, or partial shipment provisions.',
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
            <span>Settlements & Gateways</span>
          </div>
          <div className="section-label section-label-center">Trade Finance & Banking</div>
          <h1 className="section-title">
            International <span className="gold-text">Payment Gateways & Settlements</span>
          </h1>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Structured cross-border remittance mechanisms compliant with Reserve Bank of India (RBI) circulars, FEMA guidelines, and ICC UCP 600 banking conventions.
          </p>
        </div>
      </section>

      {/* Main Payment Gateways Grid */}
      <PaymentGateways />

      {/* Compliance & Regulatory Safety Framework */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 44px' }}>
            <div className="section-label section-label-center">Statutory Compliance</div>
            <h2 className="section-title">
              FEMA & RBI <span className="gold-text">Regulatory Framework</span>
            </h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              International trade requires uncompromising banking integrity. Ananthaa Global guarantees statutory compliance with all Indian and international exchange control authorities.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {compliancePoints.map((point, idx) => (
              <div key={idx} className="corporate-card" style={{ padding: '28px' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'var(--color-gold-soft)',
                  color: 'var(--color-gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '18px'
                }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <polyline points="9 12 11 14 15 10"></polyline>
                  </svg>
                </div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '8px' }}>
                  {point.title}
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-text-body)', lineHeight: 1.65 }}>
                  {point.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banking & Escrow Consultation */}
      <section className="section" style={{ background: 'var(--color-navy)', color: '#ffffff', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', marginBottom: '14px', color: '#ffffff' }}>
            Consult on LC Structuring or Currency Hedging
          </h2>
          <p style={{ color: '#cbd5e1', maxWidth: '600px', margin: '0 auto 26px', fontSize: '1rem' }}>
            Our corporate finance desk assists international clients with Letter of Credit formats, escrow arrangements, and preferred currency settlements in USD, EUR, GBP, or AED.
          </p>
          <Link href="/contact" className="btn-gold">
            <span>Contact Finance Desk</span>
            <span>→</span>
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
