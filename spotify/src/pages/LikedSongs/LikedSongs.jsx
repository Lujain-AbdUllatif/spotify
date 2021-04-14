import React from "react";

import NavBar from "../../components/NavBar/NavBar";

import "./likedSongs.css";

export default function LikedSongs() {
  return (
    <div className="liked-songs-container">
      <NavBar active="likedSongs"></NavBar>
      <div className="liked-songs-div">Liked Songs Page</div>
    </div>
  );
}