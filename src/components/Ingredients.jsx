import React from 'react'

const Ingredients = () => {
    return (
        <div className='Ingr'>
            <div className="wave">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#2C8CC7" fillOpacity="1" d="M0,224L60,202.7C120,181,240,139,360,149.3C480,160,600,224,720,229.3C840,235,960,181,1080,170.7C1200,160,1320,192,1380,208L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
            </div>
            <div className="container">
                <div className="text-center">
                    <h2 className='main-title'>Состав воды</h2>
                </div>
                <div className="row justify-content-center">
                    <div className="col-10">
                        <div className="img">
                            <img className='w-100' src="img/sostav.png" alt="" />
                        </div>
                        <ul>
                            <li>Хлорид CI-</li>
                            <li>Калий К+</li>
                            <li>Гидро карбонат HCO3-</li>
                            <li>Сульфат SO4-</li>
                        </ul>
                        <ul>
                            <li>Натрий Na+</li>
                            <li>Магний Mg++</li>
                            <li>Кальций Ca++</li>
                        </ul>
                    </div>
                </div>

            </div>
            <div className="wave1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#2C8CC7" fillOpacity="1" d="M0,224L60,202.7C120,181,240,139,360,149.3C480,160,600,224,720,229.3C840,235,960,181,1080,170.7C1200,160,1320,192,1380,208L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
            </div>
     
        </div>
    )
}

export default Ingredients