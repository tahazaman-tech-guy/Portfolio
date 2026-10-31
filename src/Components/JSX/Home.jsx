function Home() {
  return (
    <header className="site-header">
      <a className="site-brand" href="#home" aria-label="Taha Zaman, home">
        TZ<span>.</span>
      </a>
      <nav className="site-nav" aria-label="Main navigation">
        <a href="#home">Home</a>
        <a href="#about">About me</a>
        <a href="#contact">Contact</a>
      </nav>
      <section className="hero" id="home" aria-labelledby="hero-title">
        <p className="eyebrow">PERSONAL PORTFOLIO</p>
        <h1 id="hero-title">
          Hi, I&apos;m <span>Taha Zaman.</span>
        </h1>
        <p className="hero-description">
          I create thoughtful digital experiences and enjoy bringing ideas to
          life through code.
        </p>
        <a className="button-link" href="#about">
          More about me <span aria-hidden="true">↓</span>
        </a>
      </section>
    </header>
  )
}

export default Home
