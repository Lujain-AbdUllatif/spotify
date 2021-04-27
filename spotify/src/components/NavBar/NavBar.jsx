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
import { useHistory } from "react-router-dom";

export default function NavBar({ active }) {
  // Active State from the buttons
  let homeState = false;
  let browseState = false;
  let likedSongsState = false;

  if (active === "home") {
    homeState = true;
  }
  if (active === "browse") {
    browseState = true;
  }
  if (active === "likedSongs") {
    likedSongsState = true;
  }

  // Navigation - History
  let history = useHistory();

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
