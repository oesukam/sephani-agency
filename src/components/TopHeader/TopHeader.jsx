import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./TopHeader.css";
import chinaFlag from "../../assets/images/china-flag.png";
import usaFlag from "../../assets/images/usa-flag.jpg";
import ukFlag from "../../assets/images/uk-flag.jpg";
import swedenFlag from "../../assets/images/sweden-flag.png";

export default class TopHeader extends Component {
  state = {
    mobileMenu: false
  };

  render() {
    return (
      <nav
        className="navbar fixed-nav"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="top-header-top">
          <div className="topbar">
            <span>
              Contact: <i>+(86) 136 2867 0439</i>
            </span>
            <span>
              Stay Connected:
              <span className="socials">
                <a
                  href="https://www.facebook.com/sephanie.mbembamulengesi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-facebook" />
                </a>
                {/* <a href="http://linkedin.com">
                  <i className="fa fa-linkedin" />
                </a>
                <a href="http://twitter.com">
                  <i className="fa fa-twitter" />
                </a> */}
              </span>
            </span>
          </div>
        </div>
        <div className="container top-header-bottom">
          <div className="navbar-brand">
            <a className="navbar-item" href="/">
              Mubase Admission
            </a>

            <a
              role="button"
              className="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item">Home</a>

              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">Countries</a>

                <div className="navbar-dropdown">
                  <Link to="/countries/china" className="navbar-item">
                    <img
                      src={chinaFlag}
                      alt="china flag"
                      className="navbar-item__flag"
                    />
                    China
                  </Link>
                  <Link to="/countries/usa" className="navbar-item">
                    <img
                      src={usaFlag}
                      alt="china flag"
                      className="navbar-item__flag"
                    />
                    USA
                  </Link>
                  <Link to="/countries/uk" className="navbar-item">
                    <img
                      src={ukFlag}
                      alt="china flag"
                      className="navbar-item__flag"
                    />
                    UK
                  </Link>
                  <Link to="/countries/sweden" className="navbar-item">
                    <img
                      src={swedenFlag}
                      alt="china flag"
                      className="navbar-item__flag"
                    />
                    Sweden
                  </Link>
                </div>
              </div>
              <a className="navbar-item">Contact</a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
