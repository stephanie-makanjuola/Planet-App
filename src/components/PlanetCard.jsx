function PlanetCard({ planet }) {
  return (
    <figure className="planet-card">
      <img src={planet.image} alt={planet.planet} />
      <figcaption>
        <p className="planet-name">{planet.planet}</p>
        <p className="planet-distance">{planet.distanceFromSun} million km from Sun</p>
      </figcaption>
    </figure>
  )
}

export default PlanetCard