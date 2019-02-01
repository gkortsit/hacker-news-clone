import React from "react";
import "./SecondaryPart.css";

const SecondaryPart = ({ points, user, time_ago, comments_count }) => {
  return (
    <table className="sp-main">
      <tbody>
        <tr>
          <td>
            {points} points by {user}
          </td>
          <td className="divider-sec">
            <span>{time_ago}</span>
          </td>
          <td className="divider-sec">hide</td>
          <td>{comments_count} comments</td>
        </tr>
      </tbody>
    </table>
  );
};

export default SecondaryPart;
