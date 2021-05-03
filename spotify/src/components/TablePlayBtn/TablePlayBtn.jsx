import React from "react";

// ICONS
import playIcon from "../../assets/play_line_icon.png";

// CSS
import "./tablePlayBtn.css";

export default function TablePlayBtn({ track, playBtnClicked }) {
  const handleClick = () => {
    playBtnClicked(track);
  };

  return (
    <button className="table-play-btn" onClick={handleClick}>
      <img src={playIcon} alt="play" />
    </button>
  );
}
