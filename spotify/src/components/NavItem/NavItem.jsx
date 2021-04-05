import React from "react";
import "./navItem.css";
import homeIcon from "../../assets/home_icon.png";

export default function NavItem({
  iconSrc,
  title,
  activeState,
  onClickFunction,
}) {
  let classNames = activeState
    ? "navItem-container navItem-container-active"
    : "navItem-container";
  return (
    <div className={classNames} onClick={onClickFunction}>
      <div className="navItem-div">
        <img src={iconSrc} className="navItem-icon"></img>
        <div className="navItem-title">{title}</div>
      </div>
    </div>
  );
}
