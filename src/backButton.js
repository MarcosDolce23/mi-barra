import React from 'react';
import './backButton.css';

class BackButton extends React.Component {
    handleClick() {
        window.history.back();
    }

    render() {
        return (
            <img
                src={this.props.backWhite === true ? "./imgs/backWhite.svg" : "./imgs/back.svg"}
                className="backButton"
                onClick={() => this.handleClick()} 
                alt="Back"
            >
            </img>
        )
    }
}

export default BackButton;