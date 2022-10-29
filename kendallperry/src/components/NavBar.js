import React from "react";
import logo from '../images/logo.png'

const NavBar = () => {
  return (
    <div id="nav">
      <h1>Kendall Perry</h1>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
      <img src={logo} alt="logo" id="logo" />
    </div>
  );
};

export default NavBar;
