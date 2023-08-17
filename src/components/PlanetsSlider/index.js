import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="carousel-container">
      <div className="slider-container" data-testid="planets">
        <Slider {...settings}>
          {planetsList.map(eachPlanet => (
            <PlanetItem planetDetails={eachPlanet} key={eachPlanet.id} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default PlanetsSlider

//
//   <div className="slider-container" >
//     <Slider {...settings}>
//
//     </Slider>
//   </div>
// </div>
