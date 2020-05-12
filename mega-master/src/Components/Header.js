import React, { Component } from 'react';

//BOOTSTRAPP
import {Navbar, Nav, Container, Row, Col, Image} from 'react-bootstrap';

//IMAGE
import logo from '../Image/logo.jpg';
import close from '../Image/close.png';
import phone from '../Image/phone.png';


//DATABASE
import {addres_db, phone_db, menu_db} from '../Db/head.js';

//STYLE
import "../Components/Head.css";

//COMPONENTS
import {CallCourier} from "../Components/Callback";


class AddresItem extends React.Component {
    constructor() {
        super();

        this.state = {
            adr: addres_db
        }
    }
    render() {
        return (<Row>{
                this.state.adr.map(function (adr) {
                return (
                    <Col md="6" xs="6" key={adr.id} className="head--addres">
                        <div className="text-center">
                            <img width={16} height={16} className="mr-1" src={adr.img} alt={adr.metro}/>
                            <p className="m-0 text-left">{adr.metro}</p>
                            <small className="m-0">{adr.adress}</small>
                        </div>
                        
                    </Col>)
                })
            }</Row>);
    }
}
class PhoneItem extends React.Component {
    constructor() {
        super();

        this.state = {
            phn: phone_db
        }
    }
    render() {
        return (<div>{
                this.state.phn.map(function (phn) {
                    return(
                        <Col md="12" key={phn.id} className="head--phone">
                            <img width={16} height={16} src={phn.img} alt="телевон"/>
                            <a href={phn.src}>{phn.number}</a>
                        </Col>
                    )
                })
            }</div>
        );
    }
}
class Menu extends React.Component {
    constructor() {
        super();
        this.state = {
            menu: menu_db
        }
    }
    render () {
        return (
            <Navbar.Collapse id="responsive-navbar-nav">
                {this.state.menu.map(function(menu) {
                    return (
                        <Nav key={menu.id}> 
                        <Nav.Link href={menu.src}>
                            <p><img widht={34} height={34} src={menu.img} alt="картинка меню"/>{menu.text}</p>
                        </Nav.Link>
                        </Nav>
                    );
                })}
                
            </Navbar.Collapse>
        )
    }
}
class Header extends Component {
    constructor() {
        super()

        this.state = {
            callback: false,
            currerName: "",
            currerPhone: ""

        }
    }

    callbackPopup = () => {this.setState({callback: !this.state.callback})};
    callbackClose = () => {this.setState({callback: !this.state.callback})};
    render() {
        return (
            <div className="header">
                <Container className="head">

                    {this.state.callback ? 
                    <div className="head-popup-wrapper" md="12">
                        <div className="head--popup">
                            <Col md="12" className="popup-close"><button type="button" className="head-popup-close" onClick={this.callbackClose}><img src={close} alt="закрыть"/></button></Col>
                            <Col md="12" className="p-0"><h4>ЗАКАЗАТЬ ОБРАТНЫЙ ЗВОНОК</h4></Col>
                            <p>Оставьте заявку, и наш специалист свяжется с вами, чтобы ответить наваши вопросы.</p>
                            <input type="text"/>
                            <input type="text"/>
                            <button type="button" className="btn btn-popup">Заказать звонок</button>
                        </div>
                    </div>: null}
                    <Row>
                        <Col md="2" xs="12" className="head--logo">
                            <a href="/"> <Image src={logo} alt="logo"/></a> 
                        </Col>
                        <Col md="4" xs="12" className="addres-block">
                            <AddresItem />
                        </Col>
                        <Col md="2" xs="6" className="head--currer p-0">
                            <CallCourier />
                        </Col>
                        <Col md="2" xs="6" className="p-0">
                            <PhoneItem />
                        </Col>
                        <Col md="2" xs="12" className="p-0 d-none d-sm-block">
                            <button className="btn btn-callback" onClick={this.callbackPopup}>
                                <img width={20} heigh={20} src={phone} alt=""/>
                                <span>заказать звонок</span>
                            </button>
                        </Col>
                    </Row>
                </Container>
                <Container fluid className="p-0">
                    <Navbar collapseOnSelect expand="lg" variant="dark" className="menu">
                         <Container>
                                <Navbar.Brand className="d-block d-sm-none" href="#home">Мега-Мастер</Navbar.Brand>
                                <Navbar.Toggle aria-controls="responsive-navbar-nav" />  
                                <Menu />
                         </Container>   
                    </Navbar>
                </Container>
            </div>
        );
    }
}

export default Header;