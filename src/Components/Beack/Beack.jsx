import React from 'react'
import './Beack.css'
import arrow_go from '../Assets/arrow_go.png'

export const Beack = (props) => {
    const {product} = props;
  return (
    <div className='beack'>
        Home <img className='imaa' src={arrow_go} alt="" /> Customer Menu<img className='imaa' src={arrow_go} alt="" /> {product.name}
    </div>
  )
}
