import React from "react";
import "./SecondaryPart.css";

const SecondaryPart = ({ points, user, time_ago, comments_count }) => {
  return (
    <div className="sp-main">
      <div className="points">
        {points} points by {user}
      </div>
      <div className="sec-item mid-item">{time_ago}</div>
      <div className="sec-item">{comments_count} comments</div>
    </div>
  );
};

export default SecondaryPart;
