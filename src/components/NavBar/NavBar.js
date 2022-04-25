import React, { useState, useRef } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const open = useRef(null);

  const handleClick = () => {
    if (!menuOpen) {
      open.current = " open";
      setMenuOpen(true);
    } else {
      open.current = null;
      setMenuOpen(false);
    }
  };

  return (
    <nav>
      <Link to={"/"}>
        <img src={require("../../img/Logo.png")} alt="logo" className="logo" />
      </Link>
      <div className={open.current ? "icon" + open.current : "icon"}>
        <div className="nav-icon" id="search">
          <img src={require("../../img/Search.png")} alt="" />
        </div>
        <div className="nav-icon">
          <img src={require("../../img/Notification.png")} alt="" />
        </div>
        <div className="nav-icon" id="cart">
          <Link to="/check-out">
            <img src={require("../../img/ShoppingCart.png")} alt="" />
          </Link>
        </div>
        <div className="nav-icon" id="user">
          <img src={require("../../img/User.png")} alt="" />
        </div>
      </div>
      <div className="menu-btn" onClick={handleClick}>
        <div className="menu-btn-burger"></div>
      </div>
    </nav>
  );
};

export default NavBar;
