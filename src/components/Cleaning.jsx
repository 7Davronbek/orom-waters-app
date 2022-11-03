import React from 'react'
import { getText } from '../locales'

const Cleaning = () => {
    return (
        <div className='Cleaning'>
            <div className="text-center">
                <h2 className='main-title'>{getText('cleaning1')}</h2>
            </div>
            <div className="container">
                <div className="vector">
                    <img src="img/cleaning.png" alt="" />
                </div>
                <div className="row">
                    <div className="col-lg-2 mytop">
                        <div className="card">
                            <div className="img">
                                <img className='w-100' src="img/clean1.png" alt="" />
                            </div>
                            <div className="info">
                                <h4>{getText('cleaning2')}</h4>
                                <img src="img/line.png" alt="" />
                                <p>{getText('cleaning3')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 mytop">
                        <div className="card">
                            <div className="img">
                                <img className='w-100' src="img/clean2.png" alt="" />
                            </div>
                            <div className="info">
                                <h4>{getText('cleaning4')}</h4>
                                <img src="img/line.png" alt="" />
                                <p>{getText('cleaning5')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 mytop">
                        <div className="card">
                            <div className="img">
                                <img className='w-100' src="img/clean3.png" alt="" />
                            </div>
                            <div className="info">
                                <h4>{getText('cleaning6')}</h4>
                                <img src="img/line.png" alt="" />
                                <p>{getText('cleaning7')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 mytop">
                        <div className="card">
                            <div className="img">
                                <img className='w-100' src="img/clean4.png" alt="" />
                            </div>
                            <div className="info">
                                <h4>{getText('cleaning8')}</h4>
                                <img src="img/line.png" alt="" />
                                <p>{getText('cleaning9')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 mytop">
                        <div className="card">
                            <div className="img">
                                <img className='w-100' src="img/clean5.png" alt="" />
                            </div>
                            <div className="info">
                                <h4>{getText('cleaning10')}</h4>
                                <img src="img/line.png" alt="" />
                                <p>{getText('cleaning11')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 mytop">
                        <div className="card">
                            <div className="img">
                                <img className='w-100' src="img/clean6.png" alt="" />
                            </div>
                            <div className="info">
                                <h4>{getText('cleaning12')}</h4>
                                <img src="img/line.png" alt="" />
                                <p>{getText('cleaning13')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cleaning