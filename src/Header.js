import React from "react";
import logo from "./images/troll-face.png";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="meme face" />
        <p>Meme Generator</p>
      </div>
    </header>
  );
};

export default Header;
