'use client';

export default function CountryMarquee() {
  /* Row 1 — Americas & Europe */
  const row1 = [
    { code: 'us', name: 'United States', corridor: 'Americas' },
    { code: 'ca', name: 'Canada', corridor: 'Americas' },
    { code: 'gb', name: 'United Kingdom', corridor: 'Europe' },
    { code: 'de', name: 'Germany', corridor: 'Europe' },
    { code: 'nl', name: 'Netherlands', corridor: 'Europe' },
    { code: 'fr', name: 'France', corridor: 'Europe' },
    { code: 'it', name: 'Italy', corridor: 'Europe' },
    { code: 'es', name: 'Spain', corridor: 'Europe' },
    { code: 'br', name: 'Brazil', corridor: 'Americas' },
    { code: 'mx', name: 'Mexico', corridor: 'Americas' },
    { code: 'be', name: 'Belgium', corridor: 'Europe' },
    { code: 'ch', name: 'Switzerland', corridor: 'Europe' },
  ];

  /* Row 2 — Gulf (GCC) & Asia-Pacific */
  const row2 = [
    { code: 'ae', name: 'United Arab Emirates', corridor: 'Gulf GCC' },
    { code: 'sa', name: 'Saudi Arabia', corridor: 'Gulf GCC' },
    { code: 'qa', name: 'Qatar', corridor: 'Gulf GCC' },
    { code: 'om', name: 'Oman', corridor: 'Gulf GCC' },
    { code: 'kw', name: 'Kuwait', corridor: 'Gulf GCC' },
    { code: 'bh', name: 'Bahrain', corridor: 'Gulf GCC' },
    { code: 'sg', name: 'Singapore', corridor: 'APAC' },
    { code: 'au', name: 'Australia', corridor: 'APAC' },
    { code: 'jp', name: 'Japan', corridor: 'APAC' },
    { code: 'my', name: 'Malaysia', corridor: 'APAC' },
    { code: 'za', name: 'South Africa', corridor: 'Africa' },
    { code: 'eg', name: 'Egypt', corridor: 'MENA' },
  ];

  const renderItems = (items) =>
    items.map((item, idx) => (
      <div className="marquee-item" key={idx}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://flagcdn.com/w80/${item.code}.png`}
          srcSet={`https://flagcdn.com/w160/${item.code}.png 2x`}
          alt={`${item.name} flag`}
          className="marquee-flag-img"
          loading="lazy"
          width="24"
          height="16"
        />
        <span className="marquee-country">{item.name}</span>
        <span className="marquee-corridor">{item.corridor}</span>
      </div>
    ));

  return (
    <section className="marquee-section" aria-label="Global Trade Destinations">
      <div className="marquee-header-wrap">
        <p className="marquee-label">Certified Export Corridors &bull; 40+ Destination Nations</p>
      </div>

      {/* Row 1 — Leftward movement */}
      <div className="marquee-track">
        <div className="marquee-content">
          {renderItems(row1)}
          {renderItems(row1)}
        </div>
      </div>

      {/* Row 2 — Rightward movement */}
      <div className="marquee-track">
        <div className="marquee-content reverse">
          {renderItems(row2)}
          {renderItems(row2)}
        </div>
      </div>
    </section>
  );
}
