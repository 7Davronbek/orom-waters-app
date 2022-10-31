import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
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
                            <h2 className='main-title'>Наши услуги</h2>
                            <h6>Наша служба доставки предоставляет целый комплекс услуг:</h6>
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
                                    <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                                        {item.service_images && item.service_images.map((item2, index2) => (
                                            <>
                                                <SwiperSlide key={index2}><img className='w-100' src={item2.image} alt="orom suvlari" /></SwiperSlide>
                                            </>
                                        ))}
                                    </Swiper>
                                </TabPane>
                            ))}
                            {/* <TabPane tabId="1">
                                <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                                    <SwiperSlide><img className='w-100' src="img/service (1).png" alt="" /></SwiperSlide>
                                    <SwiperSlide><img className='w-100' src="img/service (2).png" alt="" /></SwiperSlide>
                                    <SwiperSlide><img className='w-100' src="img/service (3).png" alt="" /></SwiperSlide>
                                    <SwiperSlide><img className='w-100' src="img/service (4).png" alt="" /></SwiperSlide>

                                </Swiper>
                            </TabPane>
                            <TabPane tabId="2">
                                <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                                    <SwiperSlide><img className='w-100' src="img/service (5).png" alt="" /></SwiperSlide>
                                    <SwiperSlide><img className='w-100' src="img/service (6).png" alt="" /></SwiperSlide>
                                    <SwiperSlide><img className='w-100' src="img/service (7).png" alt="" /></SwiperSlide>
                                    <SwiperSlide><img className='w-100' src="img/service (8).png" alt="" /></SwiperSlide>

                                </Swiper>
                            </TabPane>
                            <TabPane tabId="3">
                                <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                                    <SwiperSlide><img className='w-100' src="img/service (13).png" alt="" /></SwiperSlide>
                                    <SwiperSlide><img className='w-100' src="img/service (14).png" alt="" /></SwiperSlide>
                                    <SwiperSlide><img className='w-100' src="img/service (15).png" alt="" /></SwiperSlide>
                                    <SwiperSlide><img className='w-100' src="img/service (16).png" alt="" /></SwiperSlide>
                                    <SwiperSlide><img className='w-100' src="img/service (17).png" alt="" /></SwiperSlide>
                                    <SwiperSlide><img className='w-100' src="img/service (18).png" alt="" /></SwiperSlide>
                                    <SwiperSlide><img className='w-100' src="img/service (19).png" alt="" /></SwiperSlide>

                                </Swiper>
                            </TabPane> */}

                        </TabContent>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services