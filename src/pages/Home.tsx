function Home() {
  return (
    <main className="home">
      <nav className="navbar">
        <h2>RideSafe</h2>

        <div className="nav-links">
          <span>Safety</span>
          <span>About</span>
          <button>Login</button>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <p className="tag">SAFE • SMART • REAL-TIME</p>

          <h1>
            Your Ride,
            <br />
            <span>Safer Than Ever.</span>
          </h1>

          <p className="hero-text">
            Book rides, track your journey in real time,
            and stay connected with the people who matter.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">Book a Ride</button>
            <button className="secondary-btn">Drive with RideSafe</button>
          </div>
        </div>

        <div className="hero-card">
          <div className="map-placeholder">
            <span>Live Map</span>
            <p>Real-time ride tracking</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;