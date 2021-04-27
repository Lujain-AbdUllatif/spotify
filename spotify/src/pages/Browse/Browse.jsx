import React from "react";

// Components
import NavBar from "../../components/NavBar/NavBar";

import "./browse.css";

export default function Browse() {
  return (
    <div className="browse-container">
      <NavBar active="browse"></NavBar>
      <div className="browse-div">Browse Page</div>
    </div>
  );
}
