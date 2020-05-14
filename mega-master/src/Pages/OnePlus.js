import React from 'react';
import {Breadcrumb, Container, Col, Row} from 'react-bootstrap';
import "../Components/Content.css";
import banner_1 from "../Image/Banner/banner-1.jpg";
import banner_2 from "../Image/Banner/banner-2.jpg";
import banner_3 from "../Image/Banner/banner-3.jpg";
import banner_4 from "../Image/Banner/banner-4.jpg";
import onePlus from "../Db/onePlus";
import reviews_db from "../Db/reviews.js";
import LiveSearch from "../Components/LiveSearch";


class Breadcrumbs extends React.Component {
    render() {
        return (
            <Breadcrumb>
                <Breadcrumb.Item href="/">Главная</Breadcrumb.Item>
                <Breadcrumb.Item href="http://www.testproject.pro/remont-mobilnyix-telefonov.html">
                    Все мобильные телефоны / Все телефоны OnePlus
                </Breadcrumb.Item>
            </Breadcrumb>
        );
    }
}

class HeadTitle extends React.Component {
    render() {
        return(
            <div className="content--text">
                <h1>ВСЕ ТЕЛЕФОНЫ OnePlus</h1>
                {/* <p>Ремонт телефонов – это основная специализация нашего СЦ. 
                Встретить сегодня человека без мобильного телефона просто невозможно. 
                И даже не особо важно, у вас ультрамодный девайс или обычный сенсорный смартфон, 
                для большинства, поломка и ремонт мобильного, привычного устройства становится глобальной проблемой, 
                ведь все мы знаем, как сейчас трудно в Киеве найти качественный ремонт телефонов с подходящей, 
                не особо «кусачей» ценовой политикой.</p> */}
            </div>
        );
    }
}

class Banner extends React.Component {
    render() {
        return (
            <div className="banner-wrapper">
                <div className="banner--item"><img className="img-fluid" src={banner_1} alt="баннер-1"/></div>
                <div className="banner--item"><img className="img-fluid" src={banner_2} alt="баннер-2"/></div>
                <div className="banner--item"><img className="img-fluid" src={banner_3} alt="баннер-3"/></div>
                <div className="banner--item"><img className="img-fluid" src={banner_4} alt="баннер-4"/></div>
            </div>
        )
    }
}

class ProductItem extends React.Component {
    constructor() {
        super();

        this.state = {
            mb_brend: onePlus
        }
    }
    render() 
    {
        return(
            <Row >
                {
                    this.state.mb_brend.map( function(mb_brend) {
                        return (
                            <Col className="product-wrapper" md="4" xs="6" key={mb_brend.id}>
                                <Col className="product--item">
                                    <a href={mb_brend.src}>
                                        <p className="product---title">{mb_brend.title}</p>
                                        <p className="product---name">{mb_brend.name}</p>
                                        <img className="img-fluid" src={mb_brend.img} alt={mb_brend.name}/>
                                    </a>
                                </Col>
                            </Col>
                        );
                    })
                }
            </Row>
        );
    }
}

class Reviews extends React.Component {
    constructor() {
        super();

        this.state = {
            reviews: reviews_db
        }
    }
    
    render()
        {
            return (
                
                <div className="reviews-item">
                    {
                        this.state.reviews.map(reviews => {
                            return (
                                <div className="reviews-layout" key={reviews.id} id={reviews.id}>
                                    <hr/>
                                    <img src={reviews.icon} alt="icon"/>
                                    <small>{reviews.name}</small>
                                    <small> | </small>
                                    <small>{reviews.data}</small>
                                    <hr style={{width: 120}}/>
                                    <p>{reviews.text}</p>
                                    <hr/>
                                </div>
                            )
                        })
                    }
                </div>
            );
        }
}

class OnePlus extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md="12" className="p-0"><Breadcrumbs /></Col>
                    <Col md="12" className="p-0"><LiveSearch /></Col>
                    <Col md="12"><HeadTitle /></Col>
                    <Col md="3" className="p-0"><Banner /><Reviews /></Col>
                    <Col md="9"><ProductItem /></Col>
                </Row>
            </Container>
        );
    }
}

export default OnePlus;