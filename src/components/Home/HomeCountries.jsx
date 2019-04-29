import React from "react";
import CountryCard from "../common/CountryCard/CountryCard";
import categoryIcon from "../../assets/images/category-icon.png";
import chinaFlag from "../../assets/images/china-flag.png";
import usaFlag from "../../assets/images/usa-flag.jpg";
import ukFlag from "../../assets/images/uk-flag.jpg";
import swedenFlag from "../../assets/images/sweden-flag.png";

const countries = [
  {
    name: "China",
    flag: chinaFlag
  },
  {
    name: "USA",
    flag: usaFlag
  },
  {
    name: "UK",
    flag: ukFlag
  },
  {
    name: "Sweden",
    flag: swedenFlag
  }
];
const HomeCountries = ({ history }) => (
  <div className="container">
    <h3>Countries</h3>
    <img src={categoryIcon} alt="category icon" />
    <div className="columns">
      {countries.map(country => (
        <div key={country.name} className="colum">
          <CountryCard {...country} />
        </div>
      ))}
    </div>
  </div>
);

export default HomeCountries;
