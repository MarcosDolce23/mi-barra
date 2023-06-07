import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './trago.css';
import BackButton from './backButton.js';

class Trago extends React.Component {
    render() {

        const beverages = this.props.value.ingredientes.map(item => {
            return (
                <p key={item} className="cardText">{item}</p>
            );
        });

        return (
            <div className="principal-div">
                {/* <div className="title-home">Mi Barra</div>
                <div className="trago-header" style={{ backgroundImage: this.props.value.imagen }}></div> */}
                <BackButton backWhite={true}></BackButton>
                <div>
                    <img src={this.props.value.headerImage} alt="Header" style={{ width: "100%"}}></img>
                    <div className="title-home">Tragos</div>
                    {/* <img src="imgs/trago-header.svg"></img> */}
                </div>
                <div className="trago-body">
                    <div className="trago-body-div">
                        <div className="name-trago">{this.props.value.name}</div>
                        <img
                        className="img-favorite"
                        src={this.props.value.favorite === true ? "imgs/Boton_favoritos.svg" :  "imgs/Favoritos-gris.svg"}
                        alt="Favorito"
                        onClick={() => this.props.onClick_favorite(this.props.value.name)}
                        ></img>
                    </div>
                    <hr className="trago-hr"></hr>
                    <div className="ingredientes-trago">Ingredientes</div>
                    <div>{beverages}</div>
                    <hr className="trago-hr"></hr>
                    <div className="ingredientes-trago">Preparación</div>
                    <div style={{ marginTop: "15px" }}>
                        {this.props.value.preparacion.map((item, i) => {
                            return (
                                <div key={"c" + i} className="div-list">
                                    <div className="content-item">
                                        <div className="number-item">{i + 1}</div>
                                    </div>

                                    <div key={"c" + i} className="content-list">
                                        <div>{item}</div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Trago;