import React, { useEffect, useState } from 'react'
import './popular.css'
import PopularCard from '../popularCard/PopularCard'

export type PopularType = {
    name: string,
    description: string,
    price: string,
    image: string
}

const Popular = () => {

  const [popularCoffes, setPopularCoffees] = useState<PopularType[] | null>()

  const fetchPopular = async () => {
    try {
      const response = await fetch("/popular.json");
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const data = await response.json();
      setPopularCoffees(data)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchPopular()
  },[])

  {/*Fetcheld be a popular.json-ból az adatokat és tárold le egy állapotváltozóban*/}

  {/*Hozz létre egy popularcard komponenst és a lementett adatokat ezen keresztül jelenítsd meg*/}
  return (
    <section id='popular' className='popular section'>
      <h2 className='section__title'>POPULAR CREATIONS</h2>
      <div className='popular__coffes'>
        {popularCoffes ? 
        popularCoffes.map(e => (
          <PopularCard {...e}/>
        ))
        : "Loading..."
        }

      </div>
    </section>
  )
}

export default Popular
