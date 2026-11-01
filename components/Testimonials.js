export default function Testimonials() {
  const testimonials = [
    {
      initials: 'RK',
      name: 'Robert Kessler',
      role: 'VP Procurement, AmeriSource Commodities &bull; New York, USA',
      text: 'Ananthaa Global has managed our annual 200+ container imports of Indian non-basmati rice and spices. Their US-FDA documentation, lab certificates of analysis (CoA), and JNPT vessel schedules have never failed a single audit.',
      corridor: 'Americas Corridor',
    },
    {
      initials: 'AH',
      name: 'Ahmed Al-Hashimi',
      role: 'Managing Director, Gulf Petro & Agro FZE &bull; Dubai, UAE',
      text: 'Their understanding of the India-UAE CEPA trade pact reduced our import customs duty to zero on select textile batches. Fast turnaround via Jebel Ali and instant WhatsApp updates make them our primary Mumbai trade desk.',
      corridor: 'Gulf (GCC) Corridor',
    },
    {
      initials: 'SM',
      name: 'Sophie Moreau',
      role: 'Head of Global Sourcing, EuroTrade Chem GmbH &bull; Hamburg, Germany',
      text: 'For European buyers, REACH compliance and strict batch traceability are non-negotiable. Ananthaa Global delivers transparent third-party testing, flawless UCP 600 Letter of Credit operations, and pristine marine packing.',
      corridor: 'European Union Corridor',
    },
  ];

  return (
    <section className="section section-alt" id="testimonials">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 40px' }}>
          <div className="section-label section-label-center">Client Endorsements</div>
          <h2 className="section-title">
            Trusted by <span className="gold-text">Importers Worldwide</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Hear from commercial procurement executives across North America, the Middle East, and Europe who rely on Ananthaa Global for critical supply lines.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, index) => (
            <div className="testimonial-card" key={index}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <svg className="testimonial-quote-icon" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <span style={{
                    fontSize: '0.68rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--color-gold)',
                    fontWeight: 700,
                    textTransform: 'uppercase'
                  }}>
                    {t.corridor}
                  </span>
                </div>
                <p className="testimonial-text">&ldquo;{t.text}&rdquo;</p>
              </div>

              <div className="testimonial-author">
                <div className="testimonial-avatar">{t.initials}</div>
                <div className="testimonial-info">
                  <h4>{t.name}</h4>
                  <p>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
