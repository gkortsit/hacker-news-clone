import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="navbar-container">
      <div className="nav-logo">
        <i className="fab fa-hacker-news" />
      </div>
      <div className="nav-brand">Hacker News</div>
      <div className="navbar">
        <div className="nav nav-item">new</div>
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
