import React from 'react';
import './bebidas.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import ListaTragos from './lista-tragos';
import BackButton from './backButton.js';


class Bebidas extends React.Component {
    render() {

        const beverages = this.props.value.map(item => {
            return (
                <p key={item} className="cardText" onClick={() => this.props.onClick_beverage(item)} >{item}
                    <div style={{backgroundImage: "url(imgs/Delete-icon-x.png)"}} className="deleteIcon"></div>
                </p>
            );
        });

        return (
            <div className="principal-div" style={{ paddingBottom: "40%" }}>
                <BackButton></BackButton>
                <div className="title">Mi Barra</div>

                <Container>
                    <Row>
                        <Col>
                            <img src="imgs/Delete-icon.svg" alt="delete" className="deleteImage" onClick={() => this.props.onClick_reset()}></img>
                            <div className="card-bebidas">
                                {beverages}
                            </div>
                        </Col>
                    </Row>
                </Container>
                <ListaTragos
                    tragos={this.props.tragos}
                    onClick={(sel) => this.props.onClick(sel)}
                    onClick_favorite={(fav) => this.props.onClick_favorite(fav)}
                    ></ListaTragos>
            </div>
        )

    }
}

export default Bebidas;