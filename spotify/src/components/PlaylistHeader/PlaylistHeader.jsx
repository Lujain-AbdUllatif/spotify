import React from "react";

import "./playlistHeader.css";

export default function PlaylistHeader(props) {
  return (
    <div className="playlist-header-container">
      <div className="playlist-page-title-description">
        <h3>Saturday Morning Can't Be Better</h3>
        <p>Start off your saturday with great tunes</p>
      </div>
      <div className="playlist-page-length-duration">
        <h3>50 songs</h3>
        <p>2 hr 30 min</p>
      </div>
    </div>
  );
}
