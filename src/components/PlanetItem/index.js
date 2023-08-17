import './index.css'

const PlanetItem = props => {
  const {planetDetails} = props
  const {name, imageUrl, description} = planetDetails
  return (
    <div className="planet-container">
      <h1 className="heading"> PLANETS </h1>
      <img src={imageUrl} alt={`planet ${name}`} className="planet-img" />
      <h1 className="planet-heading">{name}</h1>
      <p className="planet-description">{description}</p>
    </div>
  )
}

export default PlanetItem
