import Link from 'next/link';

export default function Products() {
  const products = [
    {
      title: 'Agricultural & Organic Spices',
      desc: 'Premium 1121 Basmati Rice, Alleppey Green Cardamom, Guntur Dry Red Chilies, Black Pepper, Cumin, and Oilseeds.',
      hsCode: 'HS: 0904 / 1006',
      accreditation: 'APEDA & Spices Board',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20"></path>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
      ),
    },
    {
      title: 'Textiles, Yarns & Apparels',
      desc: '100% Combed Cotton Yarns, Greige Fabrics, Organic Denim, Hotel Linen, and Workwear Garments.',
      hsCode: 'HS: 5205 / 6203',
      accreditation: 'OEKO-TEX & GOTS',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"></path>
        </svg>
      ),
    },
    {
      title: 'Precision Engineering & Castings',
      desc: 'Machined Auto Components, Forged Pipe Fittings, Industrial Valves, Fasteners, and CNC Machined Parts.',
      hsCode: 'HS: 7307 / 8481',
      accreditation: 'ISO 9001 & IATF',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
      ),
    },
    {
      title: 'Specialty Chemicals & Polymers',
      desc: 'Active Pharmaceutical Ingredients (APIs), Dyes & Pigments, Agrochemicals, Masterbatches, and Resins.',
      hsCode: 'HS: 2942 / 3204',
      accreditation: 'REACH & WHO-GMP',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 2v7.31"></path>
          <path d="M14 9.3V1.99"></path>
          <path d="M8.5 2h7"></path>
          <path d="M14 9.3a6.5 6.5 0 1 1-4 0"></path>
          <path d="M5.52 16h12.96"></path>
        </svg>
      ),
    },
    {
      title: 'Minerals, Ores & Natural Stones',
      desc: 'Polished Granite Slabs, Italian-Grade Indian Marble, Quartz, Iron Ore Pellets, and Feldspar.',
      hsCode: 'HS: 2516 / 6802',
      accreditation: 'CAPEXIL Certified',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 17 12 22 22 17"></polyline>
          <polyline points="2 12 12 17 22 12"></polyline>
        </svg>
      ),
    },
    {
      title: 'Pharmaceuticals & Nutraceuticals',
      desc: 'Finished Dosage Forms (Tablets, Capsules, Syrups), Herbal Extracts, Nutritional Supplements, and Surgical Consumables.',
      hsCode: 'HS: 3004 / 2106',
      accreditation: 'US-FDA & EU-GMP',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"></path>
          <path d="m8.5 8.5 7 7"></path>
        </svg>
      ),
    },
    {
      title: 'Consumer FMCG & Personal Care',
      desc: 'Herbal Cosmetics, Ayurveda formulations, Packaged Indian Condiments, Dehydrated Foods, and Confectionery.',
      hsCode: 'HS: 3304 / 2103',
      accreditation: 'FSSAI & BIS Certified',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <path d="M16 10a4 4 0 0 1-8 0"></path>
        </svg>
      ),
    },
    {
      title: 'Electrical & Industrial Supplies',
      desc: 'Copper Cables, Switchgear, Industrial Safety Equipment, LED Commercial Lighting, and Solar Panels.',
      hsCode: 'HS: 8544 / 8536',
      accreditation: 'CE Mark & UL Listed',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
        </svg>
      ),
    },
  ];

  return (
    <section className="section" id="products">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 48px' }}>
          <div className="section-label section-label-center">Commodity Portfolio</div>
          <h2 className="section-title">
            Export-Certified <span className="gold-text">Product Verticals</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            All product categories undergo stringent origin testing, phytosanitary checks, laboratory verification, and export-grade palletized container packing.
          </p>
        </div>

        <div className="products-grid">
          {products.map((product, index) => (
            <div className="corporate-card product-card" key={index}>
              <div className="card-icon-box">{product.icon}</div>
              <h3>{product.title}</h3>
              <p>{product.desc}</p>
              <div className="product-badge-row">
                <span className="spec-badge">{product.hsCode}</span>
                <span className="spec-badge" style={{ color: 'var(--color-navy)', background: 'var(--color-gold-soft)' }}>
                  {product.accreditation}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <Link href="/products" className="btn-primary">
            <span>Browse Complete Product Catalog & HS Code Index</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
