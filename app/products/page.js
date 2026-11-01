import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import WhatsAppButton from '../../components/WhatsAppButton';
import Products from '../../components/Products';
import CountryMarquee from '../../components/CountryMarquee';

export const metadata = {
  title: 'Export Product Catalog & HS Code Index | Ananthaa Global',
  description:
    'Certified Indian export commodities catalog: Basmati rice, spices, organic cotton textiles, auto castings, APIs, specialty chemicals, and granite.',
};

export default function ProductsPage() {
  const exportSpecs = [
    {
      vertical: 'Agricultural Goods & Grains',
      examples: '1121 & 1509 Basmati Rice, Sharbati Wheat, Non-GMO Soya Meal',
      hsRange: '1006 / 1101 / 1201',
      packing: '25kg / 50kg BOPP & Jute Bags, 1000kg Jumbo Bags',
      moq: '1 x 20ft FCL (~24 Metric Tons)',
    },
    {
      vertical: 'Premium Spices & Seeds',
      examples: 'Cumin, Green Cardamom, Guntur Chilies, Turmeric Curcumin >3%',
      hsRange: '0902 / 0904 / 0910',
      packing: 'Vacuum Packed Pouches, Multi-Wall Paper Bags, Corrugated Cartons',
      moq: '5 Metric Tons / LCL or 1 x 20ft FCL',
    },
    {
      vertical: 'Textiles, Yarns & Fabrics',
      examples: 'Carded & Combed Cotton Yarn, Greige Sheeting, Denim, Terry Towels',
      hsRange: '5205 / 5208 / 6302',
      packing: 'Palletized Corrugated Cartons, Compressed Bales',
      moq: '1 x 40ft High Cube (HC) Container',
    },
    {
      vertical: 'Precision Castings & Fittings',
      examples: 'Ductile Iron Castings, SS 304/316 Flanges, Brass Components',
      hsRange: '7307 / 7325 / 8481',
      packing: 'Fumigated Wooden Cases (ISPM 15), VCI Anti-Rust Wrapping',
      moq: '1 Metric Ton or Custom Tooling Batch',
    },
    {
      vertical: 'Specialty Chemicals & APIs',
      examples: 'Bulk Drug Intermediates, Dyes, Solvents, Agrochemical Formulations',
      hsRange: '2933 / 3204 / 3808',
      packing: '200L HDPE Drums, ISO Tank Containers, IBC Totes',
      moq: '1 x 20ft FCL or 1 ISO Tank',
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
            <span>Products</span>
          </div>
          <div className="section-label section-label-center">Commercial Portfolio</div>
          <h1 className="section-title">
            Export-Certified <span className="gold-text">Product Portfolio</span>
          </h1>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            High-grade Indian commodities backed by rigorous laboratory testing, fumigated packaging, and destination import approvals.
          </p>
        </div>
      </section>

      {/* Products Grid Component */}
      <Products />

      {/* Technical Specifications & Packaging Table */}
      <section className="section section-alt">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 40px' }}>
            <div className="section-label section-label-center">Packaging & Minimum Quantities</div>
            <h2 className="section-title">
              Technical <span className="gold-text">Specifications & Order Terms</span>
            </h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              We facilitate both full container loads (FCL) and specialized consolidated consignments (LCL) with standardized maritime packaging.
            </p>
          </div>

          <div style={{ overflowX: 'auto', background: '#ffffff', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '700px' }}>
              <thead>
                <tr style={{ background: 'var(--color-bg-subtle)', borderBottom: '1px solid var(--color-border)' }}>
                  <th style={{ padding: '16px 20px', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--color-navy)', textTransform: 'uppercase', letterSpacing: '1px' }}>Vertical</th>
                  <th style={{ padding: '16px 20px', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--color-navy)', textTransform: 'uppercase', letterSpacing: '1px' }}>Commodities</th>
                  <th style={{ padding: '16px 20px', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--color-navy)', textTransform: 'uppercase', letterSpacing: '1px' }}>HS Codes</th>
                  <th style={{ padding: '16px 20px', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--color-navy)', textTransform: 'uppercase', letterSpacing: '1px' }}>Standard Packing</th>
                  <th style={{ padding: '16px 20px', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--color-navy)', textTransform: 'uppercase', letterSpacing: '1px' }}>Minimum Order</th>
                </tr>
              </thead>
              <tbody>
                {exportSpecs.map((spec, i) => (
                  <tr key={i} style={{ borderBottom: i === exportSpecs.length - 1 ? 'none' : '1px solid var(--color-border-subtle)' }}>
                    <td style={{ padding: '16px 20px', fontWeight: 700, color: 'var(--color-navy)', fontSize: '0.92rem' }}>{spec.vertical}</td>
                    <td style={{ padding: '16px 20px', fontSize: '0.86rem', color: 'var(--color-text-body)' }}>{spec.examples}</td>
                    <td style={{ padding: '16px 20px', fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'var(--color-gold)', fontWeight: 600 }}>{spec.hsRange}</td>
                    <td style={{ padding: '16px 20px', fontSize: '0.84rem', color: 'var(--color-text-muted)' }}>{spec.packing}</td>
                    <td style={{ padding: '16px 20px', fontSize: '0.84rem', fontWeight: 600, color: 'var(--color-navy)' }}>{spec.moq}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Marquee with Real Country Flags */}
      <CountryMarquee />

      {/* RFQ CTA */}
      <section className="section" style={{ background: 'var(--color-navy)', color: '#ffffff', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', marginBottom: '14px', color: '#ffffff' }}>
            Request Commodity Samples or Specification Sheets
          </h2>
          <p style={{ color: '#cbd5e1', maxWidth: '600px', margin: '0 auto 26px', fontSize: '1rem' }}>
            Our laboratory can dispatch certified sample pouches via DHL/FedEx worldwide within 48 hours for buyer testing.
          </p>
          <Link href="/contact" className="btn-gold">
            <span>Request Certified Product Samples</span>
            <span>→</span>
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
