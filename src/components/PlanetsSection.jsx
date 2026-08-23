import { useState, useEffect } from 'react'
import PlanetCard from './PlanetCard'

function PlanetsSection() {
  const [planets, setPlanets] = useState([])

  useEffect(() => {
    fetch('https://anurella.github.io/json/planets.json')
      .then(response => response.json())
      .then(data => setPlanets(data))
  }, [])

  return (
    <section id="planets" className="planets-section">
      <h2>Visualizing the Differences Between Planets</h2>
      <p>Each planet in our solar system has unique physical characteristics. 
      Visual comparisons help highlight how vastly different terrestrial planets 
      are from gas giants and ice giants.</p>
      <div className="planets-grid">
        {planets.map((planet) => (
          <PlanetCard key={planet.planet} planet={planet} />
        ))}
      </div>
    </section>
  )
}

export default PlanetsSection