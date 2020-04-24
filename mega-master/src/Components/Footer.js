import React from "react"
import { Container, Col, Row } from "react-bootstrap";
import facebook from '../Image/facebook.svg';
import ins from '../Image/instagram.svg';
import youtube from '../Image/youtube.svg';
import call from '../Image/call.svg';
import email from '../Image/email.svg';
import clock from '../Image/clock.svg';
import "../Components/Footer.css";
import {addres_db, phone_db} from '../Db/head.js';

class Footer extends React.Component {
    constructor() {
        super();

        this.state = {
            adr: addres_db,
            phn: phone_db
        }
    }
    render(){
        return(
            <footer>
                <Container>
                    <Row>
                        <Col md="3">
                            <div className="main-logo"><a href="/">Мега-Мастер</a></div>
                            <div className="main-text"><small>Дадим вторую жизнь вашему Гаджету с Гарантией </small></div>
                            <div className="social">
                                <a href="https://www.facebook.com/megamasterkiev"><img src={facebook} alt="фейсбук"/></a>
                                <a href="https://www.instagram.com/megamaster_kiev/"><img src={ins} alt="инстаграм"/></a>
                                <a href="https://www.youtube.com/channel/UCAXCxLnFFQohkr2JalI2_gA?view_as=subscriber"><img src={youtube} alt="youtube"/></a>
                            </div>
                        </Col>
                        <Col md="3">
                            <div className="footer-menu">
                                <p className="footer-title">Меню</p>
                                <ul>
                                    <li><a href="http://www.testproject.pro/remont-mobilnyix-telefonov.html">Ремонт мобильных телефонов</a></li>
                                    <li><a href="http://www.testproject.pro/remont-noutbukov.html">Ремонт ноутбуков</a></li>
                                    <li><a href="http://www.testproject.pro/planshety.html">Ремонт планшетов</a></li>
                                    <li><a href="http://www.testproject.pro/pc-service.html">Ремонт компьютеров</a></li>
                                    <li><a href="http://www.testproject.pro/brands/apple.html">Ремонт Apple</a></li>
                                    <li><a href="http://www.testproject.pro/articles.html">Блог</a></li>
                                </ul>
                            </div>
                        </Col>
                        <Col md="3">
                        <p className="footer-title">Сервисные центры</p>
                            {this.state.adr.map(adr => {
                                return (
                                <div key={adr.id} className="footer-addres">
                                    <div className="text-left">
                                        <img width={25} height={25} className="mr-1" src={adr.img} alt={adr.metro}/>
                                        <p className="m-0 text-left">{adr.metro}</p>
                                        <small className="m-0">{adr.adress}</small>
                                    </div>
                                </div>
                                )
                            })}
                        </Col>
                        <Col md="3">
                            <p className="footer-title">КОНТАКТЫ</p>
                            <div className="footer-phone">
                                {this.state.phn.map(phn => {
                                    return (
                                    <div key={phn.id}>
                                        <img width={24} height={24} src={call} alt="телевон"/>
                                        <a href={phn.src}>{phn.number}</a>
                                    </div>
                                    )
                                })}
                                <div >
                                    <img src={email} alt="email" width={24} height={24}/>
                                    <a href="mailto:info@megamaster.kiev.ua">info@megamaster.kiev.ua</a>
                                </div>
                                <div className="work-time">
                                    <img src={clock} alt="" width={24} height={24}/>
                                    <span>Время работы</span>
                                    <span>С 10:00 до 19:00</span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        );
    }
}
export default Footer;