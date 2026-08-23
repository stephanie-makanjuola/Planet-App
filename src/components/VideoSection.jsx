function VideoSection() {
  return (
    <section className="video-section">
      <div className="video-wrapper">
        <video autoPlay muted loop playsInline>
          <source src="/spacevideo.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="video-text">
        <h2>How Planetary Data Helps Us Understand Space</h2>
       <p>
  Planetary science goes beyond images. Comparing <strong className="highlight">mass</strong>, <strong className="highlight">diameter</strong>, <strong className="highlight">gravity</strong>, and <strong className="highlight">density</strong>, we gain insight into how planets form, behave, and interact within the solar system.
       </p>  
      </div>
    </section>
  )
}

export default VideoSection