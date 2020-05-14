import React from 'react';
import {Container, Col, Row, Form} from 'react-bootstrap';
import "../Components/Callback.css";
import close from '../Image/close.png';

// Вызвать курьер хидер
export class CallCourier extends React.Component{
    constructor(){
        super();

        this.state = {
            currerCall: false,
            name: "",
            phone: "",
            isLoaded: false,
            messageSucsess: "",
            error: false,
            messageErorr: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.NameChange = this.NameChange.bind(this);
        this.PhoneChange = this.PhoneChange.bind(this);
    }

    NameChange (event) {
        this.setState({
            name: event.target.value
        });
        console.log(this.state.name)
    }

    PhoneChange (event) {
        this.setState({
            phone: event.target.value
        });
        console.log(this.state.phone)
    }

    handlePopup = () => {
        this.setState({
            currerCall: !this.state.currerCall
        })
    };

    handleClose = () => {
        this.setState({
            currerCall: !this.state.currerCall
        })
    };

    handleSubmit (e) {
        e.preventDefault();

        fetch("send.php", {
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then (
            (response) => (response.json())
        ).then((response)=>{
            if (response.status === 'success'){
                this.setState ({
                    isLoaded: true,
                     messageSucsess: response.message
                });
            }
            else if(response.status === 'fail'){
                this.setState ({
                    error: true,
                    messageError: response.error
                })
            }
            const timer = setTimeout(() => {
                this.setState({
                    isLoaded: false,
                    eroor: false,
                    currerCall: false
                })
            }, 6000);
            return () => clearTimeout(timer);
        })
    }

    render() {
        return (
            <div>
                {this.state.currerCall  ? 
                    <div className="head-popup-wrapper" md="12">
                        <div className="head--popup">
                            <Col md="12" className="popup-close"><button type="button" className="head-popup-close" onClick={this.handleClose}><img src={close} alt="закрыть"/></button></Col>
                            <Col md="12"><h4>ЗАКАЗАТЬ ВЫЗОВ КУРЬЕРА</h4></Col>
                            <p>Оставьте заявку, и наш специалист свяжется с вами, чтобы ответить наваши вопросы.</p>
                            <Form  onSubmit={this.handleSubmit} method="POST">
                            <Form.Control placeholder="Имя" type="text" name="name" required value={this.state.name} onChange={this.NameChange}/>
                            <Form.Control placeholder="Телефон" type="phone" name="phone" required value={this.state.phone} onChange={this.PhoneChange}/>
                            <button type="submit" className="btn btn-popup">Заказать звонок</button>
                            <Col md="12">{this.state.isLoaded ? <div className="sucsess-massege">{this.state.messageSucsess}</div> : false}</Col>
                            <Col md="12">{this.state.error ? <div className="error-massege">{this.state.messageErorr}</div> : false}</Col>
                            </Form>
                        </div>
                    </div>: null}
            <p>ВЫЗОВ КУРЬЕРА</p>
            <small>в любую точку Киева</small>
            <button type="button" onClick={this.handlePopup} className="btn">ВЫЗВАТЬ КУРЬЕРА</button>
            </div>
        )
    }
}
// Обратный звонок футер
export class CallbackForm extends React.Component {

    constructor () {
        super();

        this.state = {
            name: "",
            phone: "",
            isLoaded: false,
            messageSucsess: "",
            error: false,
            messageErorr: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        
    }
    handleNameChange(event) {
        this.setState({name: event.target.value});
    }
    handlePhoneChange(event) {
        this.setState({phone: event.target.value});
    }
    handleSubmit(e) {
        e.preventDefault();

        fetch('send.php', {
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
          }).then(
            (response) => (response.json())
           ).then((response)=>{
                if (response.status === 'success'){
                    this.setState ({
                        isLoaded: true,
                         messageSucsess: response.message
                    });
                }
                else if(response.status === 'fail'){
                    this.setState ({
                        error: true,
                        messageError: response.error
                    })
                }
                const timer = setTimeout(() => {
                    this.setState({
                        isLoaded: false,
                        eroor: false
                    })
                }, 6000);
                return () => clearTimeout(timer);
            })
        }
    render() {
        return (
            <Container fluid className="footer-form">
                <Container>
                    <Col md="12" className="form--title"><p>ЗАКАЖИТЕ ЗВОНОК И МЫ ОБЯЗАТЕЛЬНО ПОМОЖЕМ!</p></Col>
                    <Col md="12" className="form--text"><p>Все эти и многие другие проблемы с вашими портативными устройствами
                        мы решаем в сервисном центре «Мегамастер», который находится в самом
                        центре Киева.</p>
                    </Col>
                    <Form  onSubmit={this.handleSubmit} method="POST">
                        <Row>
                            <Col md="4" xs="12">
                            <Form.Control placeholder="Имя" type="text" name="name" required value={this.state.name} onChange={this.handleNameChange}/>
                            </Col>
                            <Col md="4" xs="12">
                            <Form.Control placeholder="Телефон" type="phone" name="phone" required value={this.state.phone} onChange={this.handlePhoneChange}/>
                            </Col>
                            <Col md="4" xs="12">
                                <button type="submit">Заказать звонок</button>
                            </Col>
                            <Col md="12">{this.state.isLoaded ? <div className="sucsess-massege">{this.state.messageSucsess}</div> : false}</Col>
                            <Col md="12">{this.state.error ? <div className="error-massege">{this.state.messageErorr}</div> : false}</Col>
                        </Row>
                    </Form>
                </Container>
            </Container>
        )
    }
}
//Обратный звонок хидер
export class Callback extends React.Component{
    constructor(){
        super();

        this.state = {
            Callback: false,
            name: "",
            phone: "",
            isLoaded: false,
            messageSucsess: "",
            error: false,
            messageErorr: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.NameChange = this.NameChange.bind(this);
        this.PhoneChange = this.PhoneChange.bind(this);
    }

    NameChange (event) {
        this.setState({
            name: event.target.value
        });
        console.log(this.state.name)
    }

    PhoneChange (event) {
        this.setState({
            phone: event.target.value
        });
        console.log(this.state.phone)
    }

    handlePopup = () => {
        this.setState({
            Callback: !this.state.Callback
        })
    };

    handleClose = () => {
        this.setState({
            Callback: !this.state.Callback
        })
    };

    handleSubmit (e) {
        e.preventDefault();

        fetch("send.php", {
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then (
            (response) => (response.json())
        ).then((response)=>{
            if (response.status === 'success'){
                this.setState ({
                    isLoaded: true,
                    messageSucsess: response.message
                });
            }
            else if(response.status === 'fail'){
                this.setState ({
                    error: true,
                    messageError: response.error
                })
            }
            const timer = setTimeout(() => {
                this.setState({
                    isLoaded: false,
                    eroor: false,
                    Callback: false
                })
            }, 6000);
            return () => clearTimeout(timer);
        })
    }

    render() {
        return (
            <div>
                {this.state.Callback  ? 
                    <div className="head-popup-wrapper" md="12">
                        <div className="head--popup">
                            <Col md="12" className="popup-close"><button type="button" className="head-popup-close" onClick={this.handleClose}><img src={close} alt="закрыть"/></button></Col>
                            <Col md="12"><h4>ЗАКАЗАТЬ ОБРАТНЫЙ ЗВОНОК</h4></Col>
                            <p>Оставьте заявку, и наш специалист свяжется с вами, чтобы ответить наваши вопросы.</p>
                            <Form  onSubmit={this.handleSubmit} method="POST">
                                <Form.Control placeholder="Имя" type="text" name="name" required value={this.state.name} onChange={this.NameChange}/>
                                <Form.Control placeholder="Телефон" type="phone" name="phone" required value={this.state.phone} onChange={this.PhoneChange}/>
                                <button type="submit" className="btn btn-popup">Заказать звонок</button>
                                <Col md="12">{this.state.isLoaded ? <div className="sucsess-massege">{this.state.messageSucsess}</div> : false}</Col>
                                <Col md="12">{this.state.error ? <div className="error-massege">{this.state.messageErorr}</div> : false}</Col>
                            </Form>
                        </div>
                    </div>: null}
            <button type="button" onClick={this.handlePopup} className="btn btn-callback">Заказать звонок</button>
            </div>
        )
    }
}
