import React, { Component } from 'react';
import {Navbar, Nav, Container, Row, Col, Image } from 'react-bootstrap';
import logo from '../Image/logo.jpg';
import close from '../Image/close.png';
import phone from '../Image/phone.png';
import {addres_db, phone_db, menu_db} from '../Db/head.js';
import "../Components/Head.css"


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
                    <Col md="6" xs="12" key={adr.id} className="head--addres">
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
            currer: false,
            callback: false,

        }
    }
    currerPopup = () => {this.setState({currer: !this.state.currer})};
    currerClose = () => {this.setState({currer: !this.state.currer})};
    callbackPopup = () => {this.setState({callback: !this.state.callback})};
    callbackClose = () => {this.setState({callback: !this.state.callback})};
    render() {
        return (
            <div className="header">
                <Container className="head">
                    {this.state.currer ? 
                    <div className="head-popup-wrapper" md="12">
                        <div className="head--popup">
                            <Col md="12" className="popup-close"><button type="button" className="head-popup-close" onClick={this.currerClose}><img src={close} alt="закрыть"/></button></Col>
                            <Col md="12"><h4>ЗАКАЗАТЬ ВЫЗОВ КУРЬЕРА</h4></Col>
                            <p>Оставьте заявку, и наш специалист свяжется с вами, чтобы ответить наваши вопросы.</p>
                            <input type="text" name="name" placeholder="Имя"/>
                            <input type="text" name="phone" placeholder="Телефон"/>
                            <button type="button" className="btn btn-popup">Заказать звонок</button>
                        </div>
                    </div>: null}
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
                            <Image src={logo} alt="logo"/>
                        </Col>
                        <Col md="4" xs="12">
                            <AddresItem />
                        </Col>
                        <Col md="2" xs="12" className="head--currer p-0">
                            <p>ВЫЗОВ КУРЬЕРА</p>
                            <small>в любую точку Киева</small>
                            <button type="button" onClick={this.currerPopup} className="btn">ВЫЗВАТЬ КУРЬЕРА</button>
                        </Col>
                        <Col md="2" xs="12" className="p-0">
                            <PhoneItem />
                        </Col>
                        <Col md="2" xs="12" className="p-0">
                            <button className="btn btn-callback" onClick={this.callbackPopup}>
                                <img width={20} heigh={20} src={phone} alt=""/>
                                <span>заказать звонок</span>
                            </button>
                        </Col>
                    </Row>
                </Container>
                <Container fluid className="p-0">
                    <Navbar collapseOnSelect expend="md" className="menu">
                         <Container>
                                {/* <Navbar.Brand href="/"><img widht={40} height={40} src={home} alt="домой"/></Navbar.Brand> */}
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