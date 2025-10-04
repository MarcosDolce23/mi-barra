import React from 'react';
import './beverages.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Accordion, Card } from 'react-bootstrap'

class Beverages extends React.Component {
    render() {
        return (
            <Container>
                {this.props.beverages.sort((a, b) => a.name.localeCompare(b.name)).map((item, i) => {
                    return (
                        <Row key={"1" + i}>
                            <Col>
                                <Accordion>
                                    <Card className="myCard">
                                        <Accordion.Toggle as={Card.Header} eventKey="0" className="myCardHeader">
                                            <div className="maincardCollapse">
                                                <div className="secondcard" style={{ backgroundImage: item.image }}></div>
                                                <div className="thirdcard"><p>{item.name}</p></div>
                                                <div className="plusCard" style={{ backgroundImage: "url(imgs/mas.png)" }}></div>
                                            </div>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body style={{ padding: "0px" }}>
                                                <div className="content">
                                                    {item.drinks.sort().map((beverage, i, arr) => {
                                                        return (
                                                            <div key={"C1" + i} className="light">
                                                                <label>
                                                                    <span name={beverage} className="nameLabel">{beverage}</span>
                                                                    <input
                                                                        type="checkbox"
                                                                        id={beverage}
                                                                        name={beverage}
                                                                        value={beverage}
                                                                        className="input-checkbox"
                                                                        onChange={() => this.props.onChange(beverage)}
                                                                        checked={this.props.value.includes(beverage)}
                                                                    ></input>
                                                                    <span className="design"></span>
                                                                    <span className="text-bebidas" name={beverage}>{beverage}</span>

                                                                </label>
                                                                {i < arr.length - 1 ? <hr className="line"></hr> : null}
                                                            </div>
                                                        )
                                                    }
                                                    )
                                                    }
                                                </div>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </Col>
                        </Row>
                    )
                })
                }
            </Container >
        )
    }
}

export default Beverages;