import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Office = () => {
    return (
        <div className='Office'>
            <div className="container">
                <img className='w-100 d-lg-block d-none' src="img/map.png" alt="" />
                <div className="blok">
                    <h4>Главный офис</h4>
                    <div className="d-flex  mb-3">
                        <div className="icon"><FontAwesomeIcon icon={faLocationDot} /></div>
                        <div className='d-flex flex-column'>
                            <a href="tel:+998988007719">Ташкентская область, Кибрайский район, Кибрайский район, Берунийский МФУ, улица Обихаёт, дом 36</a>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="icon"><FontAwesomeIcon icon={faPhone} /></div>
                        <div className='d-flex flex-column'>
                            <a href="tel:+998988007719">+998 (98) 800 77 19</a>
                            <a href="tel:+998955007719">+998 (95) 500 77 19</a>
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
    )
}

export default Office