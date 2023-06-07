import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import ListaTragos from './lista-tragos';
import './tragos.css';
import BackButton from './backButton.js';

class Tragos extends React.Component {
    render() {
        return (
            <div className="principal-div">
                <BackButton></BackButton>
                <div className="title">Tragos</div>
                <Container>
                    <Row>
                        <Col>
                            <div className="searchcontainer">
                                <div className="text">
                                    <input  
                                        type="text"
                                        placeholder="Busca tus bebidas"
                                        className="input"
                                        onChange={(e) => this.props.onChange(e)}>
                                    </input>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="list">
                    <ListaTragos
                        tragos={this.props.tragos.sort((a,b) => a.name.localeCompare(b.name))}
                        onClick={(sel) => this.props.onClick(sel)}
                        onClick_favorite={(fav) => this.props.onClick_favorite(fav)}
                        ></ListaTragos>
                </div>
            </div>
        )
    }
}

export default Tragos;