import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Switch, Route, Link, useRouteMatch } from "react-router-dom";
import './index.css';
import Home from './home';
import Bar from './bar';
import Bebidas from './bebidas';
import Tragos from './tragos';
import Trago from './trago';
import Favoritos from './favoritos';
import { initializeFavorites } from './storage';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drinksList: [],
            drinksCount: 0,
            tragos: initializeFavorites(),
            coincidences: [],
            trago: null,
            page: "",
            beverages: [
                {
                    name: "Aperitivos",
                    image: "url(imgs/bebidas-icons/FernetPNG.png)",
                    drinks: ["Americano Gancia", "Campari", "Fernet", "Spritz Gancia", "Vermouth", "Vermouth Dulce", "Vermouth Rosso", "Vermouth Seco"]
                },
                {
                    name: "Bebidas Blancas",
                    image: "url(imgs/bebidas-icons/BebidasblancasPNG.png)",
                    drinks: ["Dry Gin", "Gin", "Malibu", "Tequila Blanco", "Tequila Reposado", "Tequila Oro", "Vodka"]
                },
                {
                    name: "Frutas",
                    image: "url(imgs/bebidas-icons/Frutasyverduras.png)",
                    drinks: ["Aceituna", "Ananá", "Durazno", "Frambuesa", "Frutilla", "Guinda", "Lima", "Limón", "Naranja", "Sandía", "Tomate cherry", "Kiwi", "Mandarina", "Manzana"]
                },
                {
                    name: "Gaseosas",
                    image: "url(imgs/bebidas-icons/GaseosasPNG.png)",
                    drinks: ["Agua Tónica", "Gaseosa Cola", "Gaseosa Lima Limón", "Gaseosa Pomelo", "Soda"]
                },
                {
                    name: "Jugos",
                    image: "url(imgs/bebidas-icons/JugosPNG.png)",
                    drinks: ["Limonada", "Granadina", "Jugo de Ananá", "Jugo de Arándano", "Jugo de Frutilla", "Jugo de Lima", "Jugo de Limón", "Jugo de Manzana", "Jugo de Maracuyá", "Jugo de Naranja", "Jugo de Pepino", "Jugo de Pomelo", "Jugo de Tomate", "Jugo de Uva"]
                },
                {
                    name: "Licores",
                    image: "url(imgs/bebidas-icons/LicoresPNG.png)",
                    drinks: ["Amaretto", "Baileys", "Curaçao Azul", "Curaçao Rojo", "Curaçao de Naranja", "Jägermeister", "Licor Creme de Violette", "Licor de Café", "Licor de flor de Saúco", "Licor de Melón", "Licor de Menta Blanca", "Marrasquino", "Tía María", "Triple Sec"]
                },
                {
                    name: "Vinos",
                    image: "url(imgs/bebidas-icons/VinosPNG.png)",
                    drinks: ["Chardonnay", "Champagne", "Vino Blanco"]
                },
                {
                    name: "Aguardientes",
                    image: "url(imgs/bebidas-icons/Aguardientes.png)",
                    drinks: ["Brandy", "Ginebra", "Ginebra Seca", "Ron Blanco", "Ron Oscuro", "Whisky", "Caña de Durazno"]
                },
                {
                    name: "Cervezas",
                    image: "url(imgs/bebidas-icons/Cerveza.png)",
                    drinks: ["American IPA", "Golden", "Pale Lager", "Rubia Ale", "Rubia Lager", "Stout", "Negra"]
                },
                {
                    name: "Estimulantes",
                    image: "url(imgs/bebidas-icons/Estimulantes.png)",
                    drinks: ["Café Cold Brew", "Energizante", "Té", "Té de Frutos"]
                },
                {
                    name: "Verduras",
                    image: "url(imgs/bebidas-icons/Verduras.png)",
                    drinks: ["Apio", "Albahaca", "Menta"]
                },
            ]
        };
    }

    handleInputChange(beverage) {
        function count_similarities(arrayA, arrayB) {
            var matches = 0;
            for (var i = 0; i < arrayA.length; i++) {
                if (arrayB.indexOf(arrayA[i]) !== -1)
                    matches++;
            }
            return matches;
        }

        function count_selectables(ingredientes, beverages) {
            let selectable = 0;
            ingredientes.forEach(element => {
                for (var i = 0; i < beverages.length; i++) {
                    if (beverages[i].drinks.includes(element)) {
                        selectable += 1;
                        break;
                    }
                }
            })
            return selectable;
        }

        let drinksCount = 0;
        let drinksList = this.state.drinksList;
        let coincidences = [];
        let tragos = this.state.tragos.map(a => ({ ...a }));
        let beverages = this.state.beverages.map(a => ({ ...a }));

        if (drinksList.includes(beverage)) {
            drinksList = drinksList.filter(e => e !== beverage);
        } else {
            drinksList.push(beverage);
        }

        tragos.forEach(element => {
            let count = count_similarities(drinksList, element.ingredientes);
            let aux = count_selectables(element.ingredientes, beverages);
            let coincidenceRate = (count * 100) / aux;
            if (coincidenceRate > 65) {
                drinksCount++;
                coincidences.push(element);
                element.coincidences = count;
            }
        });

        this.setState({ drinksList: drinksList });
        this.setState({ drinksCount: drinksCount });
        this.setState({ coincidences: coincidences })
    }

    handleClick() {
        this.setState({ drinksList: [] });
        this.setState({ drinksCount: 0 });
        this.setState({ coincidences: [] });
    }

    setPath(path) {
        this.setState({ page: path });
    }

    selectTrago(sel) {
        this.setState({ trago: sel });
    }

    saveFavorite(fav) {

        function setFavorite(obj, name, val) {
            for (var i in obj) {
                if (obj[i].name === name) {
                    obj[i].favorite = val;
                    break; //Stop this loop, we found it!
                }
            }
        }

        let tragos = this.state.tragos.map(a => ({ ...a }));
        let coincidences = this.state.coincidences.map(a => ({ ...a }));

        let storage = window.localStorage;
        let value = storage.getItem(fav);
        if (value) {
            storage.removeItem(fav)
            setFavorite(tragos, fav, false);
            setFavorite(coincidences, fav, false);
        } else {
            storage.setItem(fav, true)
            setFavorite(tragos, fav, true);
            setFavorite(coincidences, fav, true);
        }

        this.setState({ tragos: tragos, coincidences: coincidences });
    }

    saveFavoriteTrago(fav) {

        function setFavorite(obj, name, val) {
            for (var i in obj) {
                if (obj[i].name === name) {
                    obj[i].favorite = val;
                    break; //Stop this loop, we found it!
                }
            }
        }

        let tragos = this.state.tragos.map(a => ({ ...a }));
        let coincidences = this.state.coincidences.map(a => ({ ...a }));
        let trago = this.state.trago;

        let storage = window.localStorage;
        let value = storage.getItem(fav);
        if (value) {
            storage.removeItem(fav)
            trago.favorite = false;
            setFavorite(tragos, fav, false);
            setFavorite(coincidences, fav, false);
        } else {
            storage.setItem(fav, true)
            trago.favorite = true;
            setFavorite(tragos, fav, true);
            setFavorite(coincidences, fav, true);
        }

        this.setState({ tragos: tragos, coincidences: coincidences });
        this.setState({ trago: trago });
    }

    filtrarTragos(e) {
        var filter = e.target.value.toUpperCase();

        var divs = document.getElementsByClassName("myCard");
        for (var i = 0; i < divs.length; i++) {
            var a = divs[i].getElementsByClassName("h1-card")[0];

            if (a) {
                if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                    divs[i].style.display = "";
                } else {
                    divs[i].style.display = "none";
                }
            }
        }

    }

    // ========================================

    render() {

        function FooterButton({ label, to, activeOnlyWhenExact, onClickFooter, imagen }) {
            let match = useRouteMatch({
                path: to,
                exact: activeOnlyWhenExact
            });

            return (
                <Link to={to} onClick={onClickFooter}>
                    <div className="buttonfooter">
                        <img className={match ? "link-img-active" : "link-img"} src={imagen} alt={label} />
                        <p className={match ? "textbuttonfooter-active" : "textbuttonfooter"}>{label}</p>
                    </div>
                </Link>
            );
        }

        return (
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home
                            onClick={(page) => this.setPath(page)}
                        />
                    </Route>
                    <Route exact path="/bar">
                        <Bar
                            value={this.state.drinksList}
                            drinksCount={this.state.drinksCount}
                            coincidences={this.state.coincidences}
                            beverages={this.state.beverages}
                            onChange={(beverage) => this.handleInputChange(beverage)}
                        />
                    </Route>
                    <Route exact path="/tragos">
                        <Tragos
                            tragos={this.state.page === "" ? this.state.tragos : this.state.tragos.filter(a => a.clasificacion === this.state.page)}
                            onClick={(sel) => this.selectTrago(sel)}
                            onClick_favorite={(fav) => this.saveFavorite(fav)}
                            onChange={(e) => this.filtrarTragos(e)}
                        />
                    </Route>
                    <Route exact path="/favoritos">
                        <Favoritos
                            tragos={this.state.tragos.filter(e => e.favorite === true)}
                            onClick={(sel) => this.selectTrago(sel)}
                            onClick_favorite={(fav) => this.saveFavorite(fav)}
                            onChange={(e) => this.filtrarTragos(e)}
                        />
                    </Route>
                    <Route exact path="/bar/bebidas">
                        <Bebidas
                            value={this.state.drinksList}
                            tragos={this.state.coincidences.sort((a, b) => { return b.coincidences - a.coincidences })}
                            onClick={(sel) => this.selectTrago(sel)}
                            onClick_favorite={(fav) => this.saveFavorite(fav)}
                            onClick_beverage={(beverage) => this.handleInputChange(beverage)}
                            onClick_reset={() => this.handleClick()}
                        />
                    </Route>
                    <Route exact path="/tragos/trago">
                        <Trago
                            value={this.state.trago}
                            onClick_favorite={(fav) => this.saveFavoriteTrago(fav)}
                        />
                    </Route>
                </Switch>
                <div className="footer">
                    <FooterButton
                        label="Inicio"
                        to="/"
                        activeOnlyWhenExact={true}
                        onClickFooter={() => this.handleClick()}
                        imagen="imgs/home.svg"
                    />
                    <FooterButton
                        label="Mi Barra"
                        to="/bar"
                        activeOnlyWhenExact={false}
                        imagen="imgs/bar.svg"
                    />
                    <FooterButton
                        label="Tragos"
                        to="/tragos"
                        activeOnlyWhenExact={false}
                        onClickFooter={() => this.setPath("")}
                        imagen="imgs/drinks.svg"
                    />
                    <FooterButton
                        label="Favoritos"
                        to="/favoritos"
                        activeOnlyWhenExact={true}
                        imagen="imgs/favorites.svg"
                    />
                </div>
            </Router>
        );
    }
}

// ========================================

function startApp() {
    var exitApp = false, intval = setInterval(function () { exitApp = false; }, 1000);
    document.addEventListener("backbutton", function (e) {
        e.preventDefault();
        if (exitApp) {
            clearInterval(intval)
                (navigator.app && navigator.app.exitApp())
        }
        else {
            exitApp = true
            window.history.back();
        }
    }, false);

    ReactDOM.render(<App />, document.getElementById('root'));

    window.StatusBar.overlaysWebView(true);
    window.StatusBar.backgroundColorByHexString('#33000000');

}

if (window.cordova) {
    document.addEventListener('deviceready', startApp, false);
} else {
    ReactDOM.render(<App />, document.getElementById('root'));
};