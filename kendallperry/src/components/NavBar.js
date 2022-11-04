import React from "react";
import logo from "../images/logo.png";

const NavBar = ({ updatePage }) => {
  return (
    <div id="nav">
      {/* <button onClick={() => updatePage("Home")}></button> */}
      <h1 className="nav-name">Kendall Perry</h1>
      <button onClick={() => updatePage("About")}>About</button>
      <button onClick={() => updatePage("Projects")}>Projects</button>
      <button onClick={() => updatePage("Skills")}>Skills</button>
      <button onClick={() => updatePage("Contact")}>Contact</button>
      <img src={logo} alt="logo" id="logo" />
    </div>
  );
};

export default NavBar;
