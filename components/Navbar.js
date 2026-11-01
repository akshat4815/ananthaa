'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer when route changes
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Products', href: '/products' },
    { label: 'Global Markets', href: '/markets' },
    { label: 'Settlements', href: '/payments' },
    { label: 'Insights', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
        <div className="navbar-inner">
          {/* Brand Logo (Text-based, ultra-luxurious serif) */}
          <Link href="/" className="navbar-logo" aria-label="Ananthaa Global Home">
            <span className="navbar-logo-text">Ananthaa</span>
            <span className="navbar-logo-sub">GLOBAL &bull; EXIM HOUSE</span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="navbar-links" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={pathname === link.href ? 'active' : ''}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary navbar-cta">
              Request Quote
            </Link>
          </nav>

          {/* Mobile Hamburger Toggle Button */}
          <button
            className="navbar-mobile-toggle"
            onClick={() => setMobileOpen(true)}
            aria-label="Open mobile navigation"
            type="button"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Mobile Drawer Backdrop */}
      <div
        className={`mobile-nav-backdrop ${mobileOpen ? 'open' : ''}`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Navigation Drawer */}
      <aside className={`mobile-nav ${mobileOpen ? 'open' : ''}`} aria-label="Mobile Navigation">
        <div className="mobile-nav-header">
          <div className="navbar-logo">
            <span className="navbar-logo-text" style={{ fontSize: '1.4rem' }}>Ananthaa</span>
            <span className="navbar-logo-sub">GLOBAL</span>
          </div>
          <button
            className="mobile-nav-close"
            onClick={() => setMobileOpen(false)}
            aria-label="Close navigation"
            type="button"
          >
            ✕
          </button>
        </div>

        <nav className="mobile-nav-links">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={pathname === link.href ? 'active' : ''}
              onClick={() => setMobileOpen(false)}
            >
              <span>{link.label}</span>
              <span style={{ fontSize: '0.8rem', color: 'var(--color-gold)' }}>→</span>
            </Link>
          ))}
        </nav>

        <div style={{ marginTop: 'auto', paddingTop: '20px', borderTop: '1px solid var(--color-border)' }}>
          <Link
            href="/contact"
            className="btn-primary"
            style={{ width: '100%', textAlign: 'center', marginBottom: '12px' }}
            onClick={() => setMobileOpen(false)}
          >
            Request Official Quote
          </Link>
          <p style={{ fontSize: '0.74rem', color: 'var(--color-text-muted)', textAlign: 'center' }}>
            Mumbai Trade Desk &bull; IEC Registered
          </p>
        </div>
      </aside>
    </>
  );
}
