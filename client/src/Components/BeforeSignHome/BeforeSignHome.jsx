import React from 'react'
import "./BeforeSignHome.css";
import ControlledCarousel from '../Carousel/ControlledCarousel';

const BeforeSignHome = () => {
  return (
    <div className='before-sing-home'>
        
        <div className="before-sign-home-heading_wrapper">
             <h2 className="before-sign-heading">
                 Discovery All Recipes in the World
             </h2>
        </div>

        <ControlledCarousel />
    </div>
  )
}

export default BeforeSignHome