import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import WhatsAppButton from '../../components/WhatsAppButton';
import Services from '../../components/Services';
import PaymentGateways from '../../components/PaymentGateways';

export const metadata = {
  title: 'Export-Import Services & Trade Operations | Ananthaa Global',
  description:
    'Complete spectrum of international trade services: customs clearance, multi-modal ocean and air freight, Indian factory audits, bonded warehousing, and UCP 600 LC advisory.',
};

export default function ServicesPage() {
  const documents = [
    { name: 'Commercial Invoice & Packing List', desc: 'Customs compliant itemized format with precise HS Codes and net/gross weights.' },
    { name: 'Bill of Lading (B/L) & Airway Bill (AWB)', desc: 'Clean, on-board ocean bills issued by premier shipping lines (Maersk, MSC, Hapag-Lloyd).' },
    { name: 'Certificate of Origin (CoO)', desc: 'Preferential & Non-Preferential certificates certified by Indian Chamber of Commerce & DGFT.' },
    { name: 'Phytosanitary & Fumigation Certificate', desc: 'Plant quarantine clearance and ISPM 15 certified timber pallet treatments.' },
    { name: 'Certificate of Analysis (CoA)', desc: 'NABL accredited third-party lab testing for chemical purity, pesticide limits, and moisture.' },
    { name: 'Marine Cargo Insurance Policy', desc: 'Institute Cargo Clauses (A) all-risk insurance coverage from warehouse to warehouse.' },
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
            <span>Services</span>
          </div>
          <div className="section-label section-label-center">Capabilities & Logistics</div>
          <h1 className="section-title">
            Full-Spectrum <span className="gold-text">Exim Solutions</span>
          </h1>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Vertically integrated supply chain, statutory DGFT licensing, customs clearance, and global ocean freight operations.
          </p>
        </div>
      </section>

      {/* Services Grid Component */}
      <Services />

      {/* Documentation & Compliance Checklist */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 44px' }}>
            <div className="section-label section-label-center">Documentation Standards</div>
            <h2 className="section-title">
              Zero-Friction <span className="gold-text">Export Documentation</span>
            </h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              International trade delays happen primarily due to mismatched paperwork. We prepare and verify all statutory trade instruments before container stuffing.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {documents.map((doc, idx) => (
              <div key={idx} className="corporate-card" style={{ padding: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-navy)' }}>{doc.name}</h4>
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-text-body)', lineHeight: 1.65 }}>{doc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Gateways & Settlements */}
      <PaymentGateways />

      {/* Direct RFQ Action Banner */}
      <section className="section" style={{ background: 'var(--color-navy)', color: '#ffffff', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', marginBottom: '14px', color: '#ffffff' }}>
            Need Custom Shipping or Procurement Terms?
          </h2>
          <p style={{ color: '#cbd5e1', maxWidth: '600px', margin: '0 auto 26px', fontSize: '1rem' }}>
            Our operations desk can structure FOB Nhava Sheva or CIF destination container rates customized to your trade volume.
          </p>
          <Link href="/contact" className="btn-gold">
            <span>Consult Our Mumbai Trade Desk</span>
            <span>→</span>
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
