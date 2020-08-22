import React, { Component } from 'react';
import Card from "../Card/Card";
import "./CardList.css";

class CardList extends Component{

    render(){
        return(
            <ul className="card-list">
                {this.props.cards.map((card, index) => {
                    return(
                        <li className="card-list-item" key={index}>
                            <Card title={card.title} value={card.value}/>
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default CardList;
