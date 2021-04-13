import React from "react";

import "./playList.css";

export default function PlayList({ data }) {
  let { image_url, name, description } = data;

  return (
    <div className="playlist-div">
      <img className="playlist-img" src={image_url} />
      <p className="playlist-name">{name}</p>
      <p className="playlist-description">{description}</p>
    </div>
  );
}
