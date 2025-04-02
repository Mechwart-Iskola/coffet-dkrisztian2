import React, { useEffect, useState } from 'react'
import "remixicon/fonts/remixicon.css"
import "./header.css"

const Header = () => {

    const [toggle, setToggle] = useState<boolean>()
    const [hasShadow, setHasShadow] = useState<boolean>(false)

  
    {/*Hozz létre egy boolean állapotváltozót. Értéke alapján hozzáadja a nav_menu osztállyal ellátott elemhez a show-menu osztályt.*/}

    {/*Hozz létre egy állapotváltozót boolean típussal, amely azt figyeli, hogy kell-e árnyékot állítani a headernek. */}

    {/* Ha 50 px-rel lejjebb görgetünk (window.scrollY >= 50), akkor a header osztályú elemhez adjuk hozzá a shadow-header osztályt. */}

    {/*Generáld le a HOME, POPULAR, ABOUT US, PRODUCTS, CONTACT listaelemeket. Mindegyik a megfelelő helyre mutasson az oldalon*/}
        
    {/*A szükséges css osztályokat megtalálod a header.css - ben.*/}

    {/*importáld a remixicont: import "remixicon/fonts/remixicon.css"; */}

    {/*close ikon osztálya: ri-close-large-line */}

    {/*toggle ikon osztálya: ri-apps-2-fill */}

    useEffect(() => {
        const handleScroll = () => {
            setHasShadow(window.scrollY >= 50)
        };
        window.addEventListener("scroll", handleScroll)
    },[])

    const handleSetToggle = (b:boolean) => {setToggle(b)}

    return(
        <div className={`header ${hasShadow && `header shadow-header`}`}>
            <nav>
                <a className='nav__logo' href=''>STAR COFFEE</a>
                <div className={`nav__menu ${toggle && 'show-menu'}`}>       
                    <ul className='nav__list'>
                        <li><a className='nav__link' href='#home'>HOME</a></li>
                        <li><a className='nav__link' href='#popular'>POPULAR</a></li>
                        <li><a className='nav__link' href='#products'>PRODUCTS</a></li>
                        <li><a className='nav__link' href='#about'>ABOUT US</a></li>
                        <li><a className='nav__link' href='#contact'>CONTACT</a></li>
                    </ul>

                    <div className='nav__close' onClick={()=> handleSetToggle(false)}>
                        <i className='ri-close-large-line'></i>
                    </div>
                </div>

                <div className='nav__toggle' onClick={()=> handleSetToggle(true)}>
                    <i className='ri-apps-2-fill'></i>
                </div>
                
            </nav>
        </div>
        
    )
}

export default Header
