'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = '2026';

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand & Regulatory Accreditation */}
          <div className="footer-brand">
            <div className="navbar-logo">
              <span className="navbar-logo-text" style={{ color: '#ffffff' }}>Ananthaa</span>
              <span className="navbar-logo-sub" style={{ color: 'var(--color-gold-light)' }}>
                GLOBAL &bull; EXIM TRADING HOUSE
              </span>
            </div>
            <p>
              Premier Indian export-import merchant house connecting Indian agricultural, textile, chemical, and engineering manufacturing to the Americas, Gulf (GCC), and Europe.
            </p>
            <div style={{ marginTop: '20px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <span style={{
                fontSize: '0.72rem',
                background: 'rgba(212, 175, 55, 0.12)',
                padding: '4px 10px',
                borderRadius: '4px',
                border: '1px solid rgba(212, 175, 55, 0.25)',
                color: 'var(--color-gold-light)',
                fontFamily: 'var(--font-mono)',
                fontWeight: 600
              }}>
                IEC: 0314098762
              </span>
              <span style={{
                fontSize: '0.72rem',
                background: 'rgba(255, 255, 255, 0.08)',
                padding: '4px 10px',
                borderRadius: '4px',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#cbd5e1',
                fontFamily: 'var(--font-mono)'
              }}>
                GSTIN: 27AABCA1234D1ZM
              </span>
            </div>
          </div>

          {/* Core Navigation */}
          <div className="footer-col">
            <h4>Exim Navigation</h4>
            <Link href="/">Corporate Home</Link>
            <Link href="/about">About Company</Link>
            <Link href="/services">Exim Services</Link>
            <Link href="/products">Product Portfolio</Link>
            <Link href="/markets">Global Corridors</Link>
            <Link href="/payments">Trade Settlements</Link>
          </div>

          {/* Regional Corridors */}
          <div className="footer-col">
            <h4>Trade Desks</h4>
            <Link href="/markets#americas">The Americas (USA & LATAM)</Link>
            <Link href="/markets#gulf">Gulf & Middle East (GCC)</Link>
            <Link href="/markets#europe">European Union & UK</Link>
            <Link href="/markets#apac">Asia-Pacific & Australia</Link>
            <Link href="/contact">JNPT Port Logistics Desk</Link>
            <Link href="/contact">Mundra Terminal Office</Link>
          </div>

          {/* Regulatory & Institutional */}
          <div className="footer-col">
            <h4>Compliance & Contact</h4>
            <Link href="/contact">Request Container Quote</Link>
            <Link href="/payments">Payment Methods & Escrow</Link>
            <Link href="/blog">Exim Regulatory Insights</Link>
            <a href="mailto:trade@ananthaaglobal.com">trade@ananthaaglobal.com</a>
            <a href="tel:+912268759000">+91 (22) 6875 9000</a>
            <p style={{ fontSize: '0.78rem', color: '#64748b', marginTop: '8px' }}>
              Nariman Point, Mumbai 400021
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© {currentYear} Ananthaa Global Exim Pvt. Ltd. All rights reserved. Registered under Companies Act, Govt. of India.</p>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <a
              href="https://wa.me/919820012345"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              title="Official WhatsApp"
              aria-label="WhatsApp"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.968.541 1.761.78 2.791.78 3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.587-5.766-5.768-5.766zm9.969 5.766c0 5.518-4.482 10-10 10-1.745 0-3.383-.454-4.819-1.246l-5.181 1.308 1.336-4.887c-.895-1.503-1.336-3.21-1.336-5.175 0-5.518 4.482-10 10-10 5.518 0 10 4.482 10 10z" />
              </svg>
            </a>
            <Link href="/contact" className="footer-social-link" title="Contact Us" aria-label="Contact">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
