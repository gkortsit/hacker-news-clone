import React from "react";
import { Link } from "react-router-dom";

import "./SecondaryPart.css";

const SecondaryPart = ({ points, user, time_ago, comments_count }) => {
  return (
    <div className="sp-main">
      <div className="points">
        {points} points by {user}
      </div>
      <div className="sec-item mid-item">{time_ago}</div>
      <Link to="/item:id" className="sec-item">
        {comments_count} comments
      </Link>
    </div>
  );
};

export default SecondaryPart;
