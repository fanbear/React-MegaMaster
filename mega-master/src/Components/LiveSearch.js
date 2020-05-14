import React from 'react';
import "../Components/LiveSearch.css"
import {Form, Col, Row} from 'react-bootstrap';
import db_liveSearch from "../Db/livesearch";


class SearchInput extends React.Component {
    constructor(){
        super();

        this.state = {
            value: "",
            response: []
        }
        this.searchChange = this.searchChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
    }
    searchChange(event) {
        const query = event.target.value
        if (this.state.value.length < 1) {
            this.setState({
                response: null
            })
        }
        this.setState({
            value: query,
            response: db_liveSearch.filter(it => it.title.toLowerCase().includes(this.state.value.toLowerCase())),
        });

    }
    render() {
        const {value, response} = this.state
        const filterValue = value.toLowerCase();
        return(
            <div>
            <Form onSubmit={this.handleSubmit} className="search-container-form">
                <Form.Label>Введите модель телефона</Form.Label>
                <Form.Control type="text"  name="search" value={this.state.value} onChange={this.searchChange} className="search--input-form" />
            </Form>
            { this.state.response != null ? 
                <Col className="search--response">
                    <Row>
                        {this.state.response.map((data) => {
                        return(
                                <Col md="4" className="response--item" key={data.title}>
                                    <a href={data.src}>
                                        <img width={30} height={30} src={data.img} alt={data.name} />
                                        <span>{data.title} {data.name}</span>
                                    </a> 
                                </Col>
                        
                            );
                        })}
                        
                    </Row>
                </Col>
                : null }
        </div>
        )
    }
}
class SearchContainer extends React.Component {
    render() {
        return (
            <div className="search-container">
                <SearchInput />
            </div>
        )
    }
}

export default SearchContainer;