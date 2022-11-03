import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper";
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from 'reactstrap';

import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import axios from 'axios';
import { API_PATH } from '../tools/constants';
import { getText } from '../locales';

const Services = () => {
    const [open, setOpen] = useState('0');
    const [services, setServices] = useState([])
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };
    const [activeTab, setActiveTab] = useState('1');

    const toggle1 = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    const getServices = async () => {
        await axios.get(API_PATH + '/services/')
            .then((res) => {
                setServices(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        getServices()
    }, [])


    return (
        <div className='Services'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="info">
                            <h2 className='main-title'>{getText('services1')}</h2>
                            <h6>{getText('services2')}</h6>
                            <Nav tabs className='myNavs border-none'>
                                <Accordion className='service__list w-100 border2' open={open} toggle={toggle}>
                                    {services && services.map((item, index) => (
                                        <NavItem key={index}>
                                            <NavLink
                                                className={classnames({ active: activeTab === item.id })}
                                                onClick={() => { toggle1(item.id); }}>
                                                <AccordionItem className='wrap'>
                                                    <AccordionHeader targetId={item.id.toString()}>
                                                        <div className='burger'>
                                                            <div className="burger1"></div>
                                                            <div className="burger2"></div>
                                                        </div>
                                                        {item.name}
                                                    </AccordionHeader>
                                                    <AccordionBody accordionId={item.id.toString()}>
                                                        <p>{item.description}</p>
                                                    </AccordionBody>
                                                </AccordionItem>
                                            </NavLink>
                                        </NavItem>
                                    ))}
                                </Accordion>
                            </Nav>

                        </div>
                    </div>
                    <div className="col-lg-6">
                        <TabContent activeTab={activeTab}>

                            {services && services.map((item, index) => (
                                <TabPane key={index} tabId={index + 1}>
                                    <Swiper pagination={true} autoplay={true} modules={[Pagination, Autoplay]} className="mySwiper">
                                        {item.service_images && item.service_images.map((item2, index2) => (
                                            <>
                                                <SwiperSlide key={index2}><img className='w-100' src={item2.image} alt="orom suvlari" /></SwiperSlide>
                                            </>
                                        ))}
                                    </Swiper>
                                </TabPane>
                            ))}

                        </TabContent>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services