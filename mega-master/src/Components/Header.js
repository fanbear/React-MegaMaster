import React, { Component } from 'react';
import {Media, Container, Row, Col, Image } from 'react-bootstrap';
import logo from '../Image/logo.jpg';
import addres_db from '../Db/adress.js';


class AddresItem extends React.Component {
    constructor() {
        super();

        this.state = {
            adr: addres_db
        }
    }
    render() {
        console.log("db", this.state.adr);
    return (<Row>{
            this.state.adr.map(function (adr) {
            return (
                <Col md="4" key={adr.id}>
                    <Media>
                        <img
                            width={20}
                            height={20}
                            className="mr-1"
                            src={adr.img}
                            alt={adr.metro}
                        />
                        <Media.Body>
                            <h6 className="m-0 text-left">{adr.metro}</h6>
                        </Media.Body>
                    </Media>
                    <small className="m-0 text-left">{adr.adress}</small>
                </Col>)
            })
        }</Row>);
    }
}

class Header extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col md="2">
                            <Image src={logo} alt="logo"/>
                        </Col>
                        <Col md="6">
                            <AddresItem />
                        </Col>
                        <Col md="2">
                            
                        </Col>
                        <Col md="2">
                            
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Header;