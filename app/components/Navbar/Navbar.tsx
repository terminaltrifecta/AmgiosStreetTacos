'use client'

import {useState} from "react";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.css";

function Navbar() {
  const [clicked, setClicked] = useState(false);

  function switchClick() {
    setClicked(!clicked);
  }

  return (
    <nav id="nav" className={clicked ? "sticky-top active" : "sticky-top"}>
      <a  href="/" className="logo">
        <img src="\static\assets\amigoslogo.png" className="img-fluid" alt="" />
      </a>
      <div>
        <ul id="navbar" className={clicked ? "#navbar active" : "#navbar"}>
          <li>
            <a href="../routes/menu">Menu</a>
          </li>
          <li>
            <a href="/locations">Locations</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </div>
      <div id="orderMobileContainer">
        <a
          className="orderParent"
          href="https://food.google.com/?sei=CSMFYu9J0EmqERGSCnevhSDv&utm_campaign&ved&q=amigos%20street%20tacos&loc_q&fo_m=EhESAggCqgEKCggIARIEEgIIAg&lat=42.074968894897076&lng=-82.871581339737"
          target="_blank"
        >
          <div
            id="orderBody"
            className="d-flex align-items-center justify-content-center"
          >
            Order
          </div>
        </a>
        <div id="mobile">
          <i
            id="bar"
            className={clicked ? "fas fa-times" : "fas fa-bars"}
            onClick={switchClick}
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
