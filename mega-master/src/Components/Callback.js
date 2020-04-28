import React from 'react';
import {Container, Col, Row, Form} from 'react-bootstrap';
import "../Components/Callback.css"


class CallbackForm extends React.Component {

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
          }else if(response.status === 'fail'){
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
                            <Form.Control placeholder="Имя" type="text" name="name" value={this.state.name} onChange={this.handleNameChange}/>
                            </Col>
                            <Col md="4" xs="12">
                            <Form.Control placeholder="Телефон" type="phone" name="phone" value={this.state.phone} onChange={this.handlePhoneChange}/>
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

export default CallbackForm;