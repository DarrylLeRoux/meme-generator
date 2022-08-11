import React from "react";
import logo from "./images/troll-face.png";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="meme face" />
        <p>Meme Generator</p>
      </div>
      <div className="course">
        <p>React Course - Project 3</p>
      </div>
    </header>
  );
};

export default Header;
