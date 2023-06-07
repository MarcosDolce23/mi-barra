import React from 'react';
import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    render() {
        return (
            <div className="principal-div">
                <div>
                    <img src="imgs/Inicio-fondo-nuevo-05.svg" alt="Header"></img>
                    <img src="imgs/Inicio-frente.svg" alt="Cup" className="imgcup"></img>
                </div>

                <div className="maincard">
                    <Container fluid>
                        <Row className="rowcard">
                            <Col>
                                <Link to="/bar">
                                    <img src="imgs/bar-card.svg" alt="Home" style={{ width: "100%" }}></img>
                                </Link>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="colleft">
                                <Link to="/tragos" onClick={() => this.props.onClick("")}>
                                    <img src="imgs/drinks-card.svg" alt="Drinks" style={{ width: "100%" }}></img>
                                </Link>
                            </Col>
                            <Col className="colright">
                                <Link to="/favoritos">
                                    <img src="imgs/favorites-card.svg" alt="Favorites" style={{ width: "100%" }}></img>
                                </Link>
                            </Col>
                        </Row>
                        <Row>
                            <Col style={{ padding: "25px 25px 10px", marginTop: "15px" }}>
                                <h1 className="h1-home">Clasificación</h1>
                                <h2 className="h2-home">Tragos ordenados por su tipo.</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="colleft">
                                <Link to="/tragos" onClick={() => this.props.onClick("aperitivo")}>
                                    <img  src="imgs/homeImgs/aperitivos.png" alt="Aperitivos" style={{ width: "98.5%" }}></img>
                                </Link>
                                <Link to="/tragos" onClick={() => this.props.onClick("digestivo")}>
                                    <img  src="imgs/homeImgs/digestivos.png" alt="Aperitivos" style={{ width: "98.5%" }}></img>
                                </Link>
                            </Col>
                            <Col className="colright">
                                <Link to="/tragos" onClick={() => this.props.onClick("refrescante")}>
                                    <img  src="imgs/homeImgs/refrescantes.png" alt="Aperitivos" style={{ width: "98.5%" }}></img>
                                </Link>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}

export default Home;