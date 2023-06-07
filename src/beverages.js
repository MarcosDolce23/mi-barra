import React from 'react';
import './beverages.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Accordion, Card } from 'react-bootstrap'

class Beverages extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         beverages: [
    //             {
    //                 name: "Aperitivos",
    //                 image: "url(imgs/bebidas-icons/FernetPNG.png)",
    //                 drinks: ["Americano Gancia", "Campari", "Fernet", "Spritz Gancia", "Vermouth", "Vermouth Dulce", "Vermouth Rosso", "Vermouth Seco"]
    //             },
    //             {
    //                 name: "Bebidas Blancas",
    //                 image: "url(imgs/bebidas-icons/BebidasblancasPNG.png)",
    //                 drinks: ["Dry Gin", "Gin", "Malibu", "Tequila Blanco", "Tequila Reposado", "Tequila Oro", "Vodka"]
    //             },
    //             {
    //                 name: "Frutas",
    //                 image: "url(imgs/bebidas-icons/Frutasyverduras.png)",
    //                 drinks: ["Aceituna", "Ananá", "Durazno", "Frambuesa", "Frutilla", "Guinda", "Lima", "Limón", "Naranja", "Sandía", "Tomate cherry", "Kiwi"]
    //             },
    //             {
    //                 name: "Gaseosas",
    //                 image: "url(imgs/bebidas-icons/GaseosasPNG.png)",
    //                 drinks: ["Agua Tónica", "Gaseosa Cola", "Gaseosa Lima Limón", "Gaseosa Pomelo", "Soda"]
    //             },
    //             {
    //                 name: "Jugos",
    //                 image: "url(imgs/bebidas-icons/JugosPNG.png)",
    //                 drinks: ["Granadina", "Jugo de Ananá", "Jugo de Arandano", "Jugo de Frutilla", "Jugo de Limón", "Jugo de Manzana", "Jugo de Maracuyá", "Jugo de Naranja", "Jugo de Pepino", "Jugo de Pomelo", "Jugo de Tomate", "Jugo de Uva"]
    //             },
    //             {
    //                 name: "Licores",
    //                 image: "url(imgs/bebidas-icons/LicoresPNG.png)",
    //                 drinks: ["Amaretto", "Baileys", "Curaçao Azul", "Curaçao Rojo", "Curaçao de Naranja", "Jägermeister", "Licor Creme de Violette", "Licor de Café", "Licor de flor de Saúco", "Licor de Melón", "Licor de Menta Blanca", "Marrasquino", "Tía María", "Tripe Sec"]
    //             },
    //             {
    //                 name: "Vinos",
    //                 image: "url(imgs/bebidas-icons/VinosPNG.png)",
    //                 drinks: ["Chardonnay", "Champagne", "Vino Blanco"]
    //             },
    //             {
    //                 name: "Aguardientes",
    //                 image: "url(imgs/bebidas-icons/Aguardientes.png)",
    //                 drinks: ["Brandy", "Ginebra", "Ginebra Seca", "Ron", "Ron Blanco", "Ron Oscuro", "Whisky"]
    //             },
    //             {
    //                 name: "Cervezas",
    //                 image: "url(imgs/bebidas-icons/Cerveza.png)",
    //                 drinks: ["American IPA", "Golden", "Pale Lager", "Rubia Ale", "Rubia Lager", "Stout", "Negra"]
    //             },
    //             {
    //                 name: "Estimulantes",
    //                 image: "url(imgs/bebidas-icons/Estimulantes.png)",
    //                 drinks: ["Café Cold Brew","Energizante", "Té", "Té de Frutos"]
    //             },
    //             {
    //                 name: "Verduras",
    //                 image: "url(imgs/bebidas-icons/Verduras.png)",
    //                 drinks: ["Apio", "Albahaca", "Menta"]
    //             },
    //         ],
    //     };
    // }

    render() {
        return (
            <Container>
                { this.props.beverages.sort((a,b) => a.name.localeCompare(b.name)).map((item, i) => {
                    return (
                        <Row key={"1" + i}>
                            <Col>
                                <Accordion>
                                    <Card className="myCard">
                                        <Accordion.Toggle as={Card.Header} eventKey="0" className="myCardHeader">
                                            <div className="maincardCollapse">
                                                <div className="secondcard" style={{ backgroundImage: item.image }}></div>
                                                <div className="thirdcard"><p>{item.name}</p></div>
                                                <div className="plusCard" style={{backgroundImage: "url(imgs/mas.png)"}}></div>
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
                                                                {i < arr.length - 1 ? <hr className="line"></hr> : null }
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