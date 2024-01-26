import React from "react";
import OnePieceLogo from "./assets/onepiece-logo.svg";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header">
        <img src={OnePieceLogo} alt="One Piece Logo" className="logo" />
        <div className="buttons">
          <Link to="/characters">
            <button className="button">Characters</button>
          </Link>
          <Link to="/fruits">
            <button className="button">Fruits</button>
          </Link>
          <Link to="/crews">
            <button className="button">Crews</button>
          </Link>
          <Link to="/haki">
            <button className="button">Haki</button>
          </Link>
          <Link to="/locations">
            <button className="button">Locations</button>
          </Link>
          <Link to="/tomes">
            <button className="button">Tomes</button>
          </Link>
        </div>
        <h1>OnePiece Wiki</h1>
      </header>
      <div style={{ height: 100 + "px" }}></div>
    </>
  );
};

export default Header;
