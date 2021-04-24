import React from "react";
import { useHistory } from "react-router-dom";

// CSS
import "./playList.css";

export default function PlayList({ data }) {
  let { image_url, name, description } = data;

  let history = useHistory();

  const handleClick = () => {
    history.push("/playlist", { data });
  };

  return (
    <div className="playlist-div" onClick={handleClick}>
      <img className="playlist-img" src={image_url} />
      <p className="playlist-name">{name}</p>
      <p className="playlist-description">{description}</p>
    </div>
  );
}
