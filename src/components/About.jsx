import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div className='About'>
            <div className="wave">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#DCEDF7" fillOpacity="1" d="M0,224L60,202.7C120,181,240,139,360,149.3C480,160,600,224,720,229.3C840,235,960,181,1080,170.7C1200,160,1320,192,1380,208L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
            </div>
            <div className="container">
                <div className="row align-items-center flex-lg-row flex-column-reverse">
                    <div className="col-lg-7 zet">
                        <div className="img">
                            <img className='w-100' src="img/about.png" alt="" />
                        </div>
                    </div>

                    <div className="col-lg-5 zet">
                        <div className="info">
                            <h2>О НАС</h2>
                            <img className='logo' src="img/headerlogo.png" alt="" />
                            <h6>Наш интернет-магазин реализует воду самых лучших марок и предлагает интересные новинки.</h6>
                            <p>Качество – это главный приоритет в нашей работе, поэтому мы обеспечиваем быструю доставку вкусной и полезной воды, помогая заботиться о своем здоровье и здоровье близких.</p>
                            <div className="more">
                                <Link to='/about'>Подробнее</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About