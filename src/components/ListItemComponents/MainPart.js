import React from "react";
import "./MainPart.css";

const MainPart = ({ id, title, url }) => {
  return (
    <table className="main-table">
      <tbody>
        <tr>
          <td className="greyed-items">{id}.</td>
          <td className="greyed-items">
            <i className="fas fa-arrow-up" />
          </td>
          <td className="item-title">{title}</td>
          <td className="greyed-items">{url}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default MainPart;
