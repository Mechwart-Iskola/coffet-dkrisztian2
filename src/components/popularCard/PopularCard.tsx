import React from 'react'
import { PopularType } from '../Popular/Popular'
import './popularcard.css'

const PopularCard = (props:PopularType) => {
  return (
    <div className='popular__card'>
        <div className='popular__images'>
            <div className='popular__shape'></div>
            <img src='/img/bean-img.png' className='popular__bean-1'></img>
            <img src='/img/bean-img.png' className='popular__bean-2'></img>
            <img src={props.image} className='popular__coffe'></img>
        </div>
        <div className='popular__data'>
            <h3 className='popular__name'>{props.name}</h3>
            <p className='popular__description'>{props.description}</p>
            <button className='button button-dark'>Order now: {props.price}</button>
        </div>
    </div>
  )
}

export default PopularCard