import { Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { API_PATH } from '../tools/constants'

const Catalog = () => {
    const [activeTab, setActiveTab] = useState('0');
    const [categories, setCategories] = useState([])
    const [productId, setProductId] = useState('')
    const [filterProducts, setFilterProducts] = useState([])
    const [loader, setLoader] = useState(false)

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    const getCategories = async () => {
        await axios.get(API_PATH + '/category/')
            .then((res) => {
                setCategories(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const getProductBiId = async () => {
        setLoader(true)
        await axios.get(API_PATH + `/products/?category_id=${productId}`)
            .then((res) => {
                setFilterProducts(res.data)
                setLoader(false)
            })
            .catch((err) => {
                console.log(err);
                setLoader(false)
            })
    }

    useEffect(() => {
        getCategories()
        getProductBiId()
    }, [productId])

    return (
        <>
            <div className='Catalog'>
                <div className="text-center mb-3">
                    <h2 className='main-title'>Каталог</h2>
                </div>
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-12">
                            <Nav tabs className='myNavs'>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab === '0' })}
                                        onClick={() => { toggle('0'); setProductId('') }}>
                                        Все категории
                                    </NavLink>
                                </NavItem>
                                {categories && categories.slice(0,2).map((item, index) => (
                                    <NavItem key={index + 1}>
                                        <NavLink
                                            className={classnames({ active: activeTab === item.id })}
                                            onClick={() => { toggle(item.id); setProductId(item.id) }}>
                                            {item.name}
                                        </NavLink>
                                    </NavItem>
                                ))}
                            </Nav>

                            <div className="tab-content">
                                <div className="row">
                                    {loader ? <>
                                        <div className="col-lg-4 col-6 mb-lg-5 mb-3 Loader"><div className="cards"></div></div>
                                    </> :
                                        filterProducts && filterProducts.slice(0,3).map((item, index) => (
                                            <div key={index} className="col-lg-4 col-6 mb-lg-5 mb-3">
                                                <div className="card">
                                                    <div className="card-content">
                                                        <div className="img">
                                                            <img src={item.image} alt={item.name} />
                                                        </div>
                                                        <div className="info">
                                                            <h4>{item.name}</h4>
                                                            <p className='d-none d-lg-block'>{item.description}</p>
                                                            <p className='d-block d-lg-none'>{item.description.length > 44 ? item.description.slice(0, 44) : item.description}</p>

                                                            <div className="d-lg-flex justify-content-between">
                                                                {item.is_exist ?
                                                                    <h5>   <span><img src="/img/green.svg" alt="orom suvlari" /></span>  Есть в наличии  </h5> :
                                                                    <h5> <span><img src="/img/red.svg" alt="orom suvlari" /></span>  Нет в наличии </h5>
                                                                }
                                                                <div>
                                                                    <h6 className='oldPrice'>{item.price} сум</h6>
                                                                    <h6>{item.new_price} сум</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="more">
                                                        <a href="tel: +998988007719">Заказать</a>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            </div>


                            <div className="mybtn text-end">
                                <Link to="/catalog">Ещё <FontAwesomeIcon icon={faChevronRight} /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Catalog