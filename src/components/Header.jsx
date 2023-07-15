import React, { useState } from "react";
import logo from "../assets/logo.png"

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
      <img src={logo}/>
      </div>
      <div>
        <a className="active" href="#Start">Start</a>
        <a className="pad" href="#Expenses">Expenses</a>
        <a className="pad" href="#Calculator">Calculator</a>
    </div>
    </header>
  );
};

export default Header;
