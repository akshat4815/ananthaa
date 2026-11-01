export default function Stats() {
  const stats = [
    { number: '$50M+', label: 'Annual Trade Volume', sub: 'Across all product verticals' },
    { number: '40+', label: 'Countries Served', sub: 'Americas, Europe, Gulf & APAC' },
    { number: '500+', label: 'Active Clients', sub: 'Importers, distributors & retailers' },
    { number: '98.5%', label: 'On-Time Delivery', sub: 'Industry-leading reliability' },
  ];

  return (
    <section className="stats-section" id="stats">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div className="stat-item" key={index}>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-sublabel">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
