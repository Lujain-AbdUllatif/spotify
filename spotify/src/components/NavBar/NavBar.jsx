import React from "react";
import "./navBar.css";

// Components
import NavItem from "../NavItem/NavItem";

// Icons
import logo from "../../assets/logo.png";
import homeIcon from "../../assets/home_icon.png";
import browseIcon from "../../assets/browse_icon.png";
import likedSongsIcon from "../../assets/liked_songs_icon.png";

// Hooks
import { useHistory, useLocation } from "react-router-dom";

export default function NavBar() {
  // Active State from the buttons
  let homeState,
    browseState,
    likedSongsState = false;

  // Navigation - History
  let history = useHistory();
  let location = useLocation();
  let active = location.pathname;

  if (active === "/" || active === "/playlist") homeState = true;
  if (active === "/browse") browseState = true;
  if (active === "/liked-songs") likedSongsState = true;

  let handleHomeClick = () => {
    history.push("/");
  };
  let handleBrowseClick = () => {
    history.push("/browse");
  };
  let handleLikedSongsClick = () => {
    history.push("/liked-songs");
  };

  return (
    <div className="navBar-container">
      {/* LOGO */}
      <img src={logo} className="navbar-logo" alt="LOGO"></img>
      {/* HOME */}
      <button className="navbar-btn">
        <NavItem
          iconSrc={homeIcon}
          title="Home"
          activeState={homeState}
          onClickFunction={handleHomeClick}
        ></NavItem>
      </button>
      {/* BROWSE */}
      <button className="navbar-btn">
        <NavItem
          iconSrc={browseIcon}
          title="Browse"
          activeState={browseState}
          onClickFunction={handleBrowseClick}
        ></NavItem>
      </button>
      {/* LIKED SONGS */}
      <button className="navbar-btn">
        <NavItem
          iconSrc={likedSongsIcon}
          title="Liked Songs"
          activeState={likedSongsState}
          onClickFunction={handleLikedSongsClick}
        ></NavItem>
      </button>
    </div>
  );
}
