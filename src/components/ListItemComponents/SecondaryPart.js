import React from "react";
import "./SecondaryPart.css";
import Time from "./Time";

const SecondaryPart = ({ score, author, time, comments }) => {
  return (
    <table className="sp-main">
      <tbody>
        <tr>
          <td>
            {score} points by {author}
          </td>
          <td className="divider-sec">
            <Time time={time} />
          </td>
          <td className="divider-sec">hide</td>
          <td>{comments} comments</td>
        </tr>
      </tbody>
    </table>
  );
};

export default SecondaryPart;
