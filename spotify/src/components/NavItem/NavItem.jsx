import React from "react";

// CSS
import "./navItem.css";

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
        <img src={iconSrc} className="navItem-icon" alt="nav item img"></img>
        <div className="navItem-title">{title}</div>
      </div>
    </div>
  );
}
