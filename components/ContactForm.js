'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    targetRegion: 'Americas (USA / Canada / LATAM)',
    productCategory: 'Agricultural & Spices',
    orderVolume: '',
    incoterm: 'FOB (Free On Board)',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="contact-grid">
          {/* Left Column — Institutional Contact Info */}
          <div className="contact-info">
            <div className="section-label">International Desk</div>
            <h2 className="section-title">
              Request an <span className="gold-text">Official Exim Quote</span>
            </h2>
            <p style={{ color: 'var(--color-text-body)', marginBottom: '32px', fontSize: '1rem', lineHeight: 1.75 }}>
              Connect directly with our senior trade specialists in Mumbai for container pricing, HS code verification, customized FOB/CIF freight rates, and product samples.
            </p>

            <div className="contact-info-card">
              <div className="contact-icon-wrap">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div>
                <h4 style={{ fontSize: '0.96rem', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '4px' }}>
                  Headquarters & Central Trade Desk
                </h4>
                <p style={{ fontSize: '0.86rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                  Suite 804, Maker Chambers V, Nariman Point, Mumbai, Maharashtra 400021, India
                </p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-icon-wrap">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="5" r="3"></circle>
                  <line x1="12" y1="22" x2="12" y2="8"></line>
                  <path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>
                </svg>
              </div>
              <div>
                <h4 style={{ fontSize: '0.96rem', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '4px' }}>
                  Gateway Port Operations Desk
                </h4>
                <p style={{ fontSize: '0.86rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                  JNPT (Nhava Sheva) Logistics Hub &bull; Mundra Port Terminal Liaison Office, Gujarat
                </p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-icon-wrap">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div>
                <h4 style={{ fontSize: '0.96rem', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '4px' }}>
                  Direct Electronic Inquiries
                </h4>
                <p style={{ fontSize: '0.86rem', color: 'var(--color-text-muted)' }}>
                  <a href="mailto:trade@ananthaaglobal.com" style={{ color: 'var(--color-navy)', fontWeight: 600 }}>
                    trade@ananthaaglobal.com
                  </a>{' '}
                  &bull; Response time: &lt; 4 Hours
                </p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-icon-wrap">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div>
                <h4 style={{ fontSize: '0.96rem', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '4px' }}>
                  Phone & Direct Tele-Exim
                </h4>
                <p style={{ fontSize: '0.86rem', color: 'var(--color-text-muted)' }}>
                  <a href="tel:+912268759000" style={{ color: 'var(--color-navy)', fontWeight: 600 }}>
                    +91 (22) 6875 9000
                  </a>{' '}
                  (10:00 - 19:00 IST / GMT+5:30)
                </p>
              </div>
            </div>
          </div>

          {/* Right Column — Professional RFQ Form */}
          <div className="contact-form-box">
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'var(--color-emerald-soft)',
                  color: 'var(--color-emerald)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px'
                }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--color-navy)', marginBottom: '12px' }}>
                  Inquiry Dispatched Successfully
                </h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.94rem', lineHeight: 1.7, marginBottom: '24px' }}>
                  Thank you for contacting Ananthaa Global. Your request has been assigned to our Regional Exim Desk. An international trade manager will provide a proforma quotation within 4 business hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="btn-secondary"
                >
                  Submit Another RFQ
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '24px' }}>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--color-navy)', marginBottom: '6px' }}>
                    Request For Quotation (RFQ)
                  </h3>
                  <p style={{ fontSize: '0.86rem', color: 'var(--color-text-muted)' }}>
                    Provide your cargo details below for an accurate proforma estimate.
                  </p>
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label htmlFor="fullName">Full Name *</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Johnathan Smith"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="companyName">Company / Buyer Entity *</label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      required
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="e.g. Atlantic Importers LLC"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label htmlFor="email">Official Corporate Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jsmith@atlantictrade.com"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone / WhatsApp Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 019-2834"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label htmlFor="targetRegion">Destination Region *</label>
                    <select
                      id="targetRegion"
                      name="targetRegion"
                      value={formData.targetRegion}
                      onChange={handleChange}
                      className="form-control"
                    >
                      <option value="Americas (USA / Canada / LATAM)">Americas (USA / Canada / LATAM)</option>
                      <option value="Gulf (GCC: UAE, Saudi, Qatar, Oman)">Gulf (GCC: UAE, Saudi, Qatar, Oman)</option>
                      <option value="European Union & United Kingdom">European Union & United Kingdom</option>
                      <option value="Asia-Pacific & Australia">Asia-Pacific & Australia</option>
                      <option value="Africa & MENA">Africa & MENA</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="productCategory">Product Vertical *</label>
                    <select
                      id="productCategory"
                      name="productCategory"
                      value={formData.productCategory}
                      onChange={handleChange}
                      className="form-control"
                    >
                      <option value="Agricultural & Spices">Agricultural & Spices</option>
                      <option value="Textiles & Apparels">Textiles & Apparels</option>
                      <option value="Precision Engineering">Precision Engineering</option>
                      <option value="Specialty Chemicals">Specialty Chemicals</option>
                      <option value="Minerals & Natural Stones">Minerals & Natural Stones</option>
                      <option value="Pharma & Healthcare">Pharma & Healthcare</option>
                      <option value="FMCG & Consumer Goods">FMCG & Consumer Goods</option>
                    </select>
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label htmlFor="orderVolume">Estimated Volume / Containers</label>
                    <input
                      type="text"
                      id="orderVolume"
                      name="orderVolume"
                      value={formData.orderVolume}
                      onChange={handleChange}
                      placeholder="e.g. 2 x 40ft FCL or 10 Metric Tons"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="incoterm">Preferred Incoterm *</label>
                    <select
                      id="incoterm"
                      name="incoterm"
                      value={formData.incoterm}
                      onChange={handleChange}
                      className="form-control"
                    >
                      <option value="FOB (Free On Board - JNPT/Mundra)">FOB (Free On Board - JNPT/Mundra)</option>
                      <option value="CIF (Cost, Insurance & Freight)">CIF (Cost, Insurance & Freight)</option>
                      <option value="CFR (Cost and Freight)">CFR (Cost and Freight)</option>
                      <option value="EXW (Ex Works Factory India)">EXW (Ex Works Factory India)</option>
                      <option value="DDP (Delivered Duty Paid)">DDP (Delivered Duty Paid)</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Specific Specifications, Packing or HS Code</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Provide details on required purity grades, packaging types (jute, polypropylene bags, drums), target delivery date, or port of destination..."
                    className="form-control"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary"
                  style={{ width: '100%', padding: '14px', fontSize: '1rem' }}
                >
                  {loading ? 'Transmitting to Trade Desk...' : 'Transmit Official RFQ to Exim Desk →'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
