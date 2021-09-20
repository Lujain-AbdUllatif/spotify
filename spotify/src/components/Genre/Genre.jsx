import React from "react";
import { useHistory } from "react-router-dom";

// CSS
import "./genre.css";

export default function Genre({ imgSrc, title, id }) {
  const history = useHistory();

  const handleClick = () => {
    history.push("/genre", { data: { imgSrc, title, id } });
  };

  return (
    <div className="genre-container" id={id} onClick={handleClick}>
      <img className="genre-img" src={imgSrc} alt="genre-img"></img>
      <div className="genre-black-box">
        <p className="genre-title">{title}</p>
      </div>
    </div>
  );
}
