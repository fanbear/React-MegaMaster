import React from 'react';
import {Container, Col, Row, Form} from 'react-bootstrap';
import "../Components/Callback.css"


class CallbackForm extends React.Component {

    constructor () {
        super();

        this.state = {
            name: "",
            phone: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        
    }
    handleSubmit(event) {
        event.preventDefault();
        console.log("кнопка нажата")
    }
    handleNameChange(event) {
        this.setState({name: event.target.value});
        console.log(this.state.name)
    }
    handlePhoneChange(event) {
        this.setState({phone: event.target.value});
        console.log(this.state.phone)
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
                    <Form onSubmit={this.handleSubmit}>
                        <Row>
                            <Col md="4">
                            <Form.Control placeholder="Имя" type="text" name="name" value={this.state.name} onChange={this.handleNameChange}/>
                            </Col>
                            <Col md="4">
                            <Form.Control placeholder="Телефон" type="phone" name="phone" value={this.state.phone} onChange={this.handlePhoneChange}/>
                            </Col>
                            <Col md="4">
                                <button>Заказать звонок</button>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </Container>
        )
    }
}

export default CallbackForm;