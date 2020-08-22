import React, { Component } from "react";
import Popup from "./components/Popup/Popup";
import CardList from "./components/CardList/CardList";
import "./assets/App.css";
import './assets/index.css';

class App extends Component {
  
  constructor(){
    super();
    this.state = {
      cards: []
    };
  }

  createCard(title, value){
    let newCard = {title, value};
    let newArrayCards = [...this.state.cards, newCard];
    let newState = {cards: newArrayCards};
    this.setState(newState);
  }
  
  render() {
    return (
      <section className="content">
        <Popup onCreateCard={this.createCard.bind(this)}/>
        <CardList cards={this.state.cards}/>
      </section>
    );
  }
}

export default App;
