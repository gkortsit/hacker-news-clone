import React from "react";
import "./MainPart.css";

const MainPart = ({ title, domain }) => {
  return (
    <div className="main-part-container">
      <div className="post">
        <div className="greyed-items">
          <i className="fas fa-caret-up" />
        </div>
        <div className="item-title">
          {title} <span className="greyed-items">({domain})</span>
        </div>
      </div>
    </div>
  );
};

export default MainPart;
