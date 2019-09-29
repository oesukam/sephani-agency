import React from 'react';
import CountryCard from '../common/CountryCard/CountryCard';
import categoryIcon from '../../assets/images/category-icon.png';
import chinaFlag from '../../assets/images/china-flag.png';
import usaFlag from '../../assets/images/usa-flag.jpg';
import ukFlag from '../../assets/images/uk-flag.jpg';
import swedenFlag from '../../assets/images/sweden-flag.png';
import './HomeCountries.css';
const countries = [
  {
    name: 'China',
    flag: chinaFlag
  },
  {
    name: 'USA',
    flag: usaFlag
  },
  {
    name: 'UK',
    flag: ukFlag
  },
  {
    name: 'Sweden',
    flag: swedenFlag
  }
];
const HomeCountries = ({ history }) => (
  <div className="container">
    <img className="country-category" src={categoryIcon} alt="category icon" />
    <h3 className="title is-1">Countries</h3>
    <div className="columns">
      {countries.map(country => (
        <div key={country.name} className="column">
          <CountryCard {...country} />
        </div>
      ))}
    </div>
  </div>
);

export default HomeCountries;
