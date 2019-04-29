import React, { Component } from "react";

import "./CountryCard.css";

class CountryCard extends Component {
  onCardClick = e => {
    console.log(e.target);
  };
  render() {
    const { image, title, text, history } = this.props;
    return (
      <div className="country-card" onClick={this.onCardClick}>
        <img src={image} alt="country flag" className="country-card__image" />
        <div className="country-card__content">
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      </div>
    );
  }
}

export default CountryCard;
