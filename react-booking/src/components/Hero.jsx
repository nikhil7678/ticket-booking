function Hero({ onBrowseMatches }) {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="eyebrow">The roar is calling</p>
        <h1>Every match.<br />Every moment.</h1>
        <p className="hero-description">
          Feel the energy of IPL 2026 live. Find your match and be there when it happens.
        </p>
        <button className="hero-button" type="button" onClick={onBrowseMatches}>
          Explore matches <span aria-hidden="true">→</span>
        </button>
      </div>
      <div className="hero-mark" aria-hidden="true">
        <span>IPL</span>
        <strong>2026</strong>
      </div>
      <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
      <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
    </section>
  )
}

export default Hero
