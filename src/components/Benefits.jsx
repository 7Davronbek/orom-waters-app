import React from 'react'
import { getLanguage, getText } from '../locales'
import { LANGUAGE } from '../tools/constants'

const Benefits = () => {
    return (
        <div className='Benefits'>
            <div className="container">
                <div className="text-center">
                    <h2 className='main-title'>{getText('benefits1')}</h2>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-3 col-md-4 col-6 ">
                        <div className="card">
                            {getLanguage() === 'uz' ? <><img src="img/benefituz1.png" alt="" /></> : getLanguage() === 'en' ? <><img src="img/benefiten1.png" alt="" /></> : <><img src="img/benefit1.png" alt="" /></> }
                            
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-6 ">
                        <div className="card">
                            {getLanguage() === 'uz' ? <><img src="img/benefituz2.png" alt="" /></> : getLanguage() === 'en' ? <><img src="img/benefiten2.png" alt="" /></> : <><img src="img/benefit2.png" alt="" /></> }
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-6 ">
                        <div className="card">
                            {getLanguage() === 'uz' ? <><img src="img/benefituz3.png" alt="" /></> : getLanguage() === 'en' ? <><img src="img/benefiten3.png" alt="" /></> : <><img src="img/benefit3.png" alt="" /></> }
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-6 ">
                        <div className="card">
                            {getLanguage() === 'uz' ? <><img src="img/benefituz4.png" alt="" /></> : getLanguage() === 'en' ? <><img src="img/benefiten4.png" alt="" /></> : <><img src="img/benefit4.png" alt="" /></> }
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-6">
                        <div className="card">
                            {getLanguage() === 'uz' ? <><img src="img/benefituz5.png" alt="" /></> : getLanguage() === 'en' ? <><img src="img/benefiten5.png" alt="" /></> : <><img src="img/benefit5.png" alt="" /></> }
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-6">
                        <div className="card">
                            {getLanguage() === 'uz' ? <><img src="img/benefituz6.png" alt="" /></> : getLanguage() === 'en' ? <><img src="img/benefiten6.png" alt="" /></> : <><img src="img/benefit6.png" alt="" /></> }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Benefits