import React, { Component } from "react";
import "./Popup.css";

class Popup extends Component {
  constructor() {
    super();
    this.title = "";
    this.value = "";
  }

  clearFields(){
      let title = document.querySelector("#form-title");
      let value = document.querySelector("#form-value");
      title.value = "";
      value.value = ""; 
  }

  _handleTitleChange(event) {
    this.title = event.target.value;
  }

  _handleValueChange(event) {
    this.value = event.target.value;
  }

  _createCard(event) {
    event.preventDefault();
    this.props.onCreateCard(this.title, this.value);
  }

  showPopup(){
    let form = document.querySelector("#form");  
    form.classList.remove("invisible");
  }

  hidePopup(){
    let form = document.querySelector("#form");  
    form.classList.add("invisible");
    this.clearFields();
  }

  render() {
    return (
      <section>
        <button
          type="submit"
          className="add-button" 
          onClick={this.showPopup.bind(this)}>+</button>
        <form className="form invisible" id="form" onSubmit={this._createCard.bind(this)}>
          <label>Title:</label>
          <input
            type="text"
            placeholder="Insert the title"
            id = "form-title"
            className="form-input"
            onChange={this._handleTitleChange.bind(this)}
          />
          <label>Value:</label>
          <input
            type="text"
            placeholder="Insert the value"
            id = "form-value"
            className="form-input"
            onChange={this._handleValueChange.bind(this)}
          />
          <button 
            className="form-submit"
            onClick={this.hidePopup.bind(this)}>Create card</button>
        </form>
      </section>
    );
  }
}

export default Popup;
