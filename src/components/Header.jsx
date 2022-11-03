import { Link } from 'react-router-dom'
import { getText } from '../locales'

const Header = () => {

    return (
        <div className='Header'>
            <div className="container">
                <div className="row">
                    <div className="col-7">
                        <div className="info">
                            <div className="logos">
                                <img src="img/headerLogo.png" alt="" />
                            </div>
                            <h1>{getText('header1')}</h1>
                            <div className="buttons d-flex d-md-block d-none">
                                <div className="mybtn order">
                                    <a href="tel: +998 (98) 800 77 19">{getText('order')}</a>
                                </div>
                                <div className="more">
                                    <Link to="/about">{getText('header2')}</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="buttons d-flex d-md-none d-block">
                        <div className="mybtn order">
                            <a href="tel: +998 (98) 800 77 19">{getText('order')}</a>
                        </div>
                        <div className="more">
                            <Link to="/about">{getText('header2')}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header