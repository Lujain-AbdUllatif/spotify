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

export default function NavBar({ homeState, browseState, likedSongsState }) {
  let history = useHistory();

  let handleHomeClick = () => {
    console.log("CLICKED!!!!!!");
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
      <img src={logo} className="navbar-logo"></img>
      {/* HOME */}
      <NavItem
        iconSrc={homeIcon}
        title="Home"
        activeState={homeState}
        onClickFunction={handleHomeClick}
      ></NavItem>
      {/* BROWSE */}
      <NavItem
        iconSrc={browseIcon}
        title="Browse"
        activeState={browseState}
        onClickFunction={handleBrowseClick}
      ></NavItem>
      {/* LIKED SONGS */}
      <NavItem
        iconSrc={likedSongsIcon}
        title="Liked Songs"
        activeState={likedSongsState}
        onClickFunction={handleLikedSongsClick}
      ></NavItem>
    </div>
  );
}
