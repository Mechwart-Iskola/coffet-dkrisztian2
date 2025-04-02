import React from 'react'
import './productcard.css'
import { ProductType } from '../Products/Products'

const ProductCard = (props: ProductType) => {
  return (
    <div className='products__card'>
        <div className='products__image'>
            <div className='products__shape'></div>
            <img src='/img/ice-img.png' className='products__ice-1'></img>
            <img src='/img/ice-img.png' className='products__ice-2'></img>
            <img src={props.image} className='products__coffe'></img>
        </div>

        <div className='products__data'>
            <h4 className='products__name'>{props.name}</h4>
            <h5 className='products__price'>${props.price}</h5>
            <button className='product__button'><i className="ri-shopping-cart-line"></i></button>
        </div>

    </div>
  )
}

export default ProductCard