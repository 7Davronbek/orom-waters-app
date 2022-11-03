
import { faFacebookF, faInstagram, faTelegramPlane } from '@fortawesome/free-brands-svg-icons'
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import { getText } from '../locales'

const Footer = () => {
    return (
        <div className='Footer'>
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-2">
                        <div className="row">
                            <div className="col-4">
                                <div className="logo">
                                    <a href="/"><img className='w-100' src="img/logo.png" alt="" /></a>
                                </div>
                            </div>
                            <div className="col-12">
                                <p className='paragraf'>{getText('footer1')}</p>
                                <div className="socials">
                                    <ul>
                                        <li>
                                            <a href="https://t.me/zamaan3"><FontAwesomeIcon icon={faTelegramPlane} /></a>
                                        </li>
                                        <li>
                                            <a href="https://t.me/zamaan3"><FontAwesomeIcon icon={faFacebookF} /></a>
                                        </li>
                                        <li>
                                            <a href="https://t.me/zamaan3"><FontAwesomeIcon icon={faInstagram} /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 d-lg-block d-none offset-lg-1">
                        <div className="wrap">
                            <h4>{getText('footer2')}</h4>
                            <div className="d-flex mb-3">
                                <div className="icon"><FontAwesomeIcon icon={faPhone} /></div>
                                <div className='d-flex flex-column'>
                                    <a href="tel:+998988007719">+998 (98) 800 77 19</a>
                                    <a href="tel:+998955007719">+998 (95) 500 77 19</a>
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="icon"><FontAwesomeIcon icon={faLocationDot} /></div>
                                <div className='d-flex flex-column'>
                                    <a href="tel:+998988007719">{getText('office2')}</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-2 d-lg-block d-none offset-lg-1">
                        <div className="wrap">
                            <h4>{getText('footer3')}</h4>
                            <ul className='links-menu'>
                                <li><Link to="/about">{getText('footer2')}</Link></li>
                                <li><Link to="/catalog">{getText('catalog')}</Link></li>
                                <li><Link to="/contacts">{getText('footer3')}</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 d-lg-block d-none offset-lg-1">
                        <div className="wrap">
                            <h4>{getText('footer4')}</h4>
                            <ul className='links-menu'>
                                <li><a href="/about">{getText('footer5')}</a></li>
                                <li><a href="/questions">{getText('footer6')}</a></li>
                                <li><a href="/contacts">{getText('footer7')}</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="copyright">
                <h6>Copyright 2022 <a target={'_blank'} rel="noreferrer" href="https://zamaan.uz/"><i><img src="/img/footerLogo.svg" alt="zamaan" /></i></a> All rights reserved.</h6>
            </div>
        </div>
    )
}

export default Footer