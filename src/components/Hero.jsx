function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Explore Our Solar System Through Data</h1>
        <p>Understand the planets not just by name, but by measurable facts. 
        From size and mass to gravity and density, this page breaks down 
        the solar system in a clear, data-driven way.</p>
        <div className="hero-buttons">
          <button onClick={() => scrollTo('planets')} className="btn-primary">
            Explore the Data
          </button>
          <button onClick={() => scrollTo('contact')} className="btn-secondary">
            Contact Us
          </button>
        </div>
      </div>
      <div className="hero-image">
        <img src="solarsystem.jpg" alt="Earth" />
      </div>
    </section>
  )
}

export default Hero