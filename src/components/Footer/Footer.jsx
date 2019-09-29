import React from 'react';
import './Footer.css';
const Footer = () => (
  <div className="footer">
    <div className="columns">
      <div className="column">
        <h1 className="title is-1">Mubase Admission</h1>
      </div>
      <div className="column">
        <div className="footer-social">
          <a href="" target="_blank" className="social">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="" target="_blank" className="social">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="" target="_blank" className="social">
            <i className="fa fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
    <div className="columns">
      <div className="column"></div>
      <div className="column"></div>
      <div className="column"></div>
    </div>
  </div>
);

export default Footer;
