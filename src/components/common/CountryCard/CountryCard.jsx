import React, { Component } from 'react';

import './CountryCard.css';

class CountryCard extends Component {
  onCardClick = e => {
    console.log(e.target);
  };
  render() {
    const { flag, name, text } = this.props;
    return (
      <div className="country-card" onClick={this.onCardClick}>
        <img src={flag} alt="country flag" className="country-card__image" />
        <div className="country-card__content">
          <h1 className="country-name">{name}</h1>
          <p>{text}</p>
        </div>
      </div>
    );
  }
}

export default CountryCard;
