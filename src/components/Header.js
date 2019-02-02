import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <div className="navbar-container">
      <div className="nav-logo">
        <i className="fab fa-hacker-news" />
      </div>
      <Link to="/" className="nav-brand">
        Hacker News
      </Link>
      <div className="navbar">
        <Link to="/new" className="nav nav-item">
          new
        </Link>
        <div className="nav nav-item">comments</div>
        <div className="nav nav-item">show</div>
        <div className="nav nav-item">ask</div>
        <div className="nav nav-item">jobs</div>
        <div className="nav nav-button">login</div>
      </div>
    </div>
  );
};

export default Header;
