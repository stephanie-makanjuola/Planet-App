function TableSection() {
  return (
    <section className="table-section">
      <h2>Planetary Facts at a Glance</h2>
      <p>Below is a comparative table of major planets in our solar system.</p>
      <p className="table-note">Data about the planets of our solar system (Planetary facts taken from NASA)</p>
      <div className="table-wrapper">
        <table className="planet-table">
          <thead>
            <tr>
              <th colSpan="2"></th>
              <th>Name</th>
              <th>Mass (10²⁴kg)</th>
              <th>Diameter (km)</th>
              <th>Density (kg/m³)</th>
              <th>Gravity (m/s²)</th>
            </tr>
          </thead>
          <tbody>
            {/* Terrestrial Planets */}
            <tr>
              <td className="group-cell" rowSpan="4">Terrestrial Planets</td>
              <td className="empty-cell"></td>
              <td>Mercury</td>
              <td>0.330</td>
              <td>4,878</td>
              <td>5427</td>
              <td>3.7</td>
            </tr>
            <tr>
              <td className="empty-cell"></td>
              <td>Venus</td>
              <td>4.87</td>
              <td>12,104</td>
              <td>5243</td>
              <td>8.9</td>
            </tr>
            <tr>
              <td className="empty-cell"></td>
              <td>Earth</td>
              <td>5.97</td>
              <td>12,756</td>
              <td>5514</td>
              <td>9.8</td>
            </tr>
            <tr>
              <td className="empty-cell"></td>
              <td>Mars</td>
              <td>0.642</td>
              <td>6,792</td>
              <td>3933</td>
              <td>3.7</td>
            </tr>
            {/* Jovian Planets - Gas Giants */}
            <tr>
              <td className="group-cell" rowSpan="4">Jovian Planets</td>
              <td className="subgroup-cell" rowSpan="2">Gas Giants</td>
              <td>Jupiter</td>
              <td>1898</td>
              <td>142,984</td>
              <td>1326</td>
              <td>23.1</td>
            </tr>
            <tr>
              <td>Saturn</td>
              <td>568</td>
              <td>120,536</td>
              <td>687</td>
              <td>9.0</td>
            </tr>
            {/* Jovian Planets - Ice Giants */}
            <tr>
              <td className="subgroup-cell" rowSpan="2">Ice Giants</td>
              <td>Uranus</td>
              <td>86.8</td>
              <td>51,118</td>
              <td>1271</td>
              <td>8.7</td>
            </tr>
            <tr>
              <td>Neptune</td>
              <td>102</td>
              <td>49,528</td>
              <td>1638</td>
              <td>11.0</td>
            </tr>
            {/* Dwarf Planets */}
            <tr>
              <td className="group-cell">Dwarf Planets</td>
             <td className="empty-cell"></td>
              <td>Pluto</td>
              <td>0.0130</td>
              <td>2,376</td>
              <td>2095</td>
              <td>0.7</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default TableSection