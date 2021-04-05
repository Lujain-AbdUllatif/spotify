import React from "react";

import NavBar from "../../components/NavBar/NavBar";

import "./browse.css";

export default function Browse() {
  return (
    <div className="browse-container">
      <NavBar browseState={true}></NavBar>
      <div className="browse-div">Browse Page</div>
    </div>
  );
}
