import React from "react";
import { NavLink } from "react-router-dom";
import "./MyNavbar.scss";

const MyNavbar = () => {
  return (
    <div className="navbar">
      <NavLink className="nav_title" to="/">
        SDH
      </NavLink>
      <div className="nav_icons">
        <img
          src="https://findicons.com/files/icons/772/token_light/256/search.png"
          alt="search"
          width="30px"
        />
        <img
          src="https://www.sunsetlearning.com/wp-content/uploads/2019/09/User-Icon-Grey-300x300.png"
          alt="users"
          width="30px"
        />
      </div>
    </div>
  );
};

export default MyNavbar;
