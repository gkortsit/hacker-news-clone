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

    // <table className="header-body">
    //   <tbody>
    //     <i className="fab fa-hacker-news" />
    //     <tr className="header-brand">
    //       <td />
    //       <td className="title">Hacker News</td>
    //     </tr>
    //     <tr className="header-links">
    //       <td className="divider">new</td>
    //       <td className="divider">comments</td>
    //       <td className="divider">show</td>
    //       <td className="divider">ask</td>
    //       <td className="divider">jobs</td>
    //       <td>submit</td>
    //       <td className="login">login</td>
    //     </tr>
    //   </tbody>
    // </table>
  );
};

export default Header;
