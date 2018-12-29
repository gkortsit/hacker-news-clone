import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <table className="header-body">
      <tbody>
        <tr>
          <td>
            <i className="fab fa-hacker-news" />
          </td>
          <td className="title">Hacker News</td>
          <td className="divider">new</td>
          <td className="divider">comments</td>
          <td className="divider">show</td>
          <td className="divider">ask</td>
          <td className="divider">jobs</td>
          <td>submit</td>
          <td className="login">login</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Header;
