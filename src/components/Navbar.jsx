import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const [navbar, setNavbar] = useState(false)
    const [burger, setBurger] = useState(false)
    const location = useLocation()

    const changeNavbar = () => {
        if (window.scrollY >= 50) {
            setNavbar(true);
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeNavbar);
    return (
        <>
            <div className={`Navbar ${navbar ? 'active' : ''}`}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-1">
                            <div className="logo">
                                <Link to="/"><img src="img/logo.svg" alt="" /></Link>
                            </div>
                        </div>
                        <div className={`col-3 offset-lg-1 mobileWrap ${burger ? '' : 'burgered'}`}>
                            <ul className="nav-menu">
                                <li><Link className={location.pathname === '/' && 'active'} onClick={() => setBurger(!burger)} to="/">Главная</Link></li>
                                <li><Link className={location.pathname === '/about' && 'active'} onClick={() => setBurger(!burger)} to="/about">О компании</Link></li>
                                <li><Link className={location.pathname === '/catalog' && 'active'} onClick={() => setBurger(!burger)} to="/catalog">Каталог</Link></li>
                            </ul>
                            <div className="imggg d-lg-none d-block">
                                <img src="img/burger.png" alt="" />
                            </div>
                        </div>
                        <div className="col-2 offset-lg-5 d-lg-block d-none">
                            <div className="btns">
                                <div className="search">
                                    <input id='search' type="search" />
                                    <label htmlFor="search"><FontAwesomeIcon icon={faSearch} /></label>
                                </div>
                                <div className="order mybtn">
                                    <a href="tel: +998 (98) 800 77 19">Заказать</a>
                                </div>
                            </div>
                        </div>

                        <div onClick={() => setBurger(!burger)} className={`burger pr-4 ml-auto d-flex d-lg-none ${burger ? 'burgered' : ''}`}>
                            <div className="burger1"></div>
                            <div className="burger2"></div>
                            <div className="burger3"></div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="navbarLine"></div>
        </>
    )
}

export default Navbar