import React from 'react'
import './Hero.css'
import hero from '../Assets/hero.png'
import arrow from '../Assets/arrow.png'
import food from '../Assets/food.png'

export const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>THE BEST WITH EMERAUDE</h2>
            <div>
                <div className="hand--with-food">
                    <p>the best</p>
                    <img src={hero}/>
                </div>
                <p>Available</p>
                <p>for everyone</p>
            </div>
            <div className="hero--check-bnt">
                <div>Food Available</div>
                <img src={arrow}/>
            </div>
        </div>
        <div className="hero-right">
            <img src={food}/>
        </div>
    </div>
  )
}
