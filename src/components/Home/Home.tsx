import React from 'react'
import './home.css'
import { homeImages } from '../../data/data'

const Home = () => {
  {/*A komponens megírásához szükséges css osztályokat a home.css-ben találod.*/}
    
  {/*A kép több másik képből tevődik össze ezeket egy tömbben találod a data mappában.*/}

  {/*A kép hátterében egy alakzat van.*/}

  {/*A gomb mutasson az about részre */}
  return (
    <section id='home' className='home section'>
      <h1 className='home__title'>COLD COFFEE</h1>   
      <div className='home__images'>
      <div className='home__shape'></div>
        {
          homeImages.map(e => (
            <img src={e.src} className={e.className} alt={e.alt} />
          ))
        }
      </div>
      <img src='/img/home-sticker.svg' className='home__sticker'></img>
      <div className='home__data'>
        <p className='home__description'>
          Find delicious hot and cold coffees with the 
          best varieties, calm the pleasure and enjoy 
          a good coffee, order now.
        </p>
        <a href='#about' className='button'>Learn More</a>
      </div>
      
      
    </section>
  )
}

export default Home
