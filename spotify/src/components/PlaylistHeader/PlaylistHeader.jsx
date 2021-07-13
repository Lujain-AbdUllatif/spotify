import React from "react";

import "./playlistHeader.css";

export default function PlaylistHeader({ data, duration, tracksNum }) {
  const { name, description, image_url } = data;

  return (
    <div
      className="playlist-header-container"
      style={{
        background: `url(${image_url})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="playlist-page-title-description">
        <h3>{name}</h3>
        <p>{description ? description : ""}</p>
      </div>
      <div className="playlist-page-length-duration">
        <h3>{tracksNum} songs</h3>
        <p>{duration}</p>
      </div>
    </div>
  );
}
