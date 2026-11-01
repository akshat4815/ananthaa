import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import WhatsAppButton from '../../components/WhatsAppButton';
import ContactForm from '../../components/ContactForm';

export const metadata = {
  title: 'Contact Trade Desk & RFQ | Ananthaa Global Exim Mumbai',
  description:
    'Connect with Ananthaa Global international trade specialists in Nariman Point, Mumbai. Submit an RFQ for FOB/CIF container shipping to the Americas, Gulf, or Europe.',
};

export default function ContactPage() {
  const offices = [
    {
      city: 'Mumbai (Headquarters & Central Trade Desk)',
      address: 'Suite 804, Maker Chambers V, Nariman Point, Mumbai, Maharashtra 400021, India',
      phone: '+91 (22) 6875 9000',
      email: 'trade@ananthaaglobal.com',
      hours: 'Mon - Fri: 09:30 - 18:30 IST (GMT +5:30)',
    },
    {
      city: 'Navi Mumbai (JNPT Port Logistics & CFS Desk)',
      address: 'Plot 18, Sector 1, Dronagiri Node, Near Nhava Sheva Gateway Port, Navi Mumbai 400707',
      phone: '+91 (22) 6875 9015',
      email: 'logistics@ananthaaglobal.com',
      hours: 'Mon - Sat: 24/7 Vessel Operations',
    },
    {
      city: 'Mundra (Western Seaboard Terminal Liaison)',
      address: 'Commercial Block B, Mundra Special Economic Zone (APSEZ), Kutch, Gujarat 370421',
      phone: '+91 (2838) 299100',
      email: 'mundra@ananthaaglobal.com',
      hours: 'Mon - Sat: 09:00 - 19:00 IST',
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
            <span>Contact</span>
          </div>
          <div className="section-label section-label-center">Get in Touch</div>
          <h1 className="section-title">
            International <span className="gold-text">Trade Desk</span>
          </h1>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Reach out for containerized quotes, HS code consultations, and custom procurement requirements across the Americas, Gulf, and Europe.
          </p>
        </div>
      </section>

      {/* Contact Form & Primary Desk Info */}
      <ContactForm />

      {/* Regional Office Hubs */}
      <section className="section section-alt">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 40px' }}>
            <div className="section-label section-label-center">Operational Footprint</div>
            <h2 className="section-title">
              Our Port & <span className="gold-text">Corporate Locations</span>
            </h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Strategic physical locations across India&apos;s financial capital and major port hubs ensure seamless cargo tracking and customs facilitation.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {offices.map((office, idx) => (
              <div key={idx} className="corporate-card">
                <div className="card-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '8px' }}>
                  {office.city}
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-text-body)', lineHeight: 1.6, marginBottom: '16px' }}>
                  {office.address}
                </p>
                <div style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', paddingTop: '14px', borderTop: '1px solid var(--color-border-subtle)' }}>
                  <div><strong>Phone:</strong> {office.phone}</div>
                  <div><strong>Email:</strong> {office.email}</div>
                  <div><strong>Hours:</strong> {office.hours}</div>
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
