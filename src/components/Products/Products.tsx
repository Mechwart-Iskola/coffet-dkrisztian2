import React, { useEffect, useState } from 'react'
import './products.css'
import ProductCard from '../productCard/ProductCard'

export type ProductType = {
    name: string,
    price: string,
    image: string
}

const Products = () => {
  const [products, setProducts] = useState<ProductType[] | null>()
  
    const fetchProducts = async () => {
      try {
        const response = await fetch("/products.json");
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data)
      } catch (error) {
        console.error(error);
      }
    }
  
    useEffect(() => {
      fetchProducts()
    },[])
  
  {/*Fetcheld be a products.json-ból az adatokat és tárold le egy állapotváltozóban*/}

  {/*Hozz létre egy productCard komponenst és a lementett adatokat ezen keresztül jelenítsd meg*/}
  return (
    <section id='products' className='products'>
      <h2 className='section__title'>THE MOST REQUESTED</h2>
      <div className='products__container'>
        {
          products ? 
          products.map(e => (
            <ProductCard {...e}/>
          )) :
          "Loading..."
        }
      </div>

    </section>
  )
}

export default Products
