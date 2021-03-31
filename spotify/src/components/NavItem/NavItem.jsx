import React from "react";
import "./navItem.css";
import homeIcon from "../../assets/home_icon.png";

export default function NavItem({ iconSrc, title }) {
  return (
    <div className="navItem-container">
      <div className="navItem-div">
        <img src={homeIcon} className="navItem-icon"></img>
        <div className="navItem-title">Home</div>
      </div>
    </div>
  );
}
