import React from 'react';
import { Link } from 'react-router-dom';
import './lista-tragos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap'

class ListaTragos extends React.Component {
    render() {

        function capitalize(s) {
            return s[0].toUpperCase() + s.slice(1);
        }

        return (
            <Container style={this.props.tragos.length > 0 ? null : { backgroundImage: "url(imgs/no-tragos.svg)", backgroundRepeat: "no-repeat", backgroundPosition: "center", height: "290px" }}>
                { this.props.tragos.map((item, i) => {
                    return (
                        <Row key={"1" + i}>
                            <Col>
                                <Card className="myCard">
                                    <div className="maincardtragos">
                                        <Link to="/tragos/trago" style={{ width: "100%" }} onClick={() => this.props.onClick(item)}>
                                            <div className="secondcardtragos" style={{ backgroundImage: item.imagen }}></div>
                                            <div className="thirdcardtragos">
                                                <div id="name" className="h1-card">{item.name}</div>
                                                <div className="h2-card">{capitalize(item.clasificacion)}</div>
                                                <div className="h3-card">{item.ingredientes.join(", ")}</div>
                                            </div>
                                        </Link>
                                        <div
                                            className="plusCardTragos"
                                            onClick={() => this.props.onClick_favorite(item.name)}
                                            style={item.favorite === true ? { backgroundImage: "url(imgs/Boton_favoritos.svg)" } : { backgroundImage: "url(imgs/Favoritos-gris.svg)" }}
                                        // style={{ backgroundImage: "url(imgs/plus-unselected.svg)" }}
                                        ></div>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    )
                })
                }
            </Container>
        )
    }
}

export default ListaTragos;