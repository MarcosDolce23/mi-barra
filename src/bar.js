import React from 'react';
import './bar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container, Row, Col } from 'react-bootstrap';
import Beverages from './beverages';
import { Link } from 'react-router-dom';
import BackButton from './backButton';

class Bar extends React.Component {
    render() {
        return (
            <div className="principal-div">
                <BackButton></BackButton>
                <div className="title">Mi Barra</div>
                <div className="list">
                    <Beverages
                        value={this.props.value}
                        beverages={this.props.beverages}
                        onChange={(beverage) => this.props.onChange(beverage)}
                    />
                </div>
                <div className="drinksButton">

                    {this.props.drinksCount > 0 ? <div className="counter">{this.props.drinksCount}</div> : null}

                    <Link to='/bar/bebidas'>
                        <img src="imgs/inbox.svg" alt="Drinks"></img>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Bar;
