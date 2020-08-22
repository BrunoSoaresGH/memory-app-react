import React, { Component } from 'react';
import "./Card.css";

class Card extends Component{
    render(){
        return(
            <section className="card">
                <header className="card-header">
                    <h3 className="card-title">{this.props.title}</h3>
                </header>
                <p className="card-value">{this.props.value}</p>
            </section>
        );
    }
}

export default Card;
