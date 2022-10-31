import React from 'react'

const Cleaning = () => {
    return (
        <div className='Cleaning'>
            <div className="text-center">
                <h2 className='main-title'>Этапы очистки воды</h2>
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
                                <h4>Механическая очистка</h4>
                                <img src="img/line.png" alt="" />
                                <p>Прохождения воды через механический фильтр, которая очищают воду от песка и мелких примесей.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 mytop">
                        <div className="card">
                            <div className="img">
                                <img className='w-100' src="img/clean2.png" alt="" />
                            </div>
                            <div className="info">
                                <h4>Активированный уголь</h4>
                                <img src="img/line.png" alt="" />
                                <p>Поглощает вредные вещества, улучшает цвет и вкус воды. Незаменим процесс очистки.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 mytop">
                        <div className="card">
                            <div className="img">
                                <img className='w-100' src="img/clean3.png" alt="" />
                            </div>
                            <div className="info">
                                <h4>Мембранная очистка</h4>
                                <img src="img/line.png" alt="" />
                                <p>Удаления из воды солей жесткости, делая воду мягче и много приятнее на вкус.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 mytop">
                        <div className="card">
                            <div className="img">
                                <img className='w-100' src="img/clean4.png" alt="" />
                            </div>
                            <div className="info">
                                <h4>Мембранная очистка</h4>
                                <img src="img/line.png" alt="" />
                                <p>Вода проходит через мембраны, которые задерживают все вредные и пропускают полезные вещества.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 mytop">
                        <div className="card">
                            <div className="img">
                                <img className='w-100' src="img/clean5.png" alt="" />
                            </div>
                            <div className="info">
                                <h4>Ультрафиолет</h4>
                                <img src="img/line.png" alt="" />
                                <p>Уничтожает все вредные вирусы и бактерии. Считает наиболее эффективным и безопасным методом дезинфекции воды.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 mytop">
                        <div className="card">
                            <div className="img">
                                <img className='w-100' src="img/clean6.png" alt="" />
                            </div>
                            <div className="info">
                                <h4>Озонирование</h4>
                                <img src="img/line.png" alt="" />
                                <p>Уничтожает все известные микроорганизмы, при этом не удаляет необходимые человеку вещества. Придает воде свежий вкус.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cleaning