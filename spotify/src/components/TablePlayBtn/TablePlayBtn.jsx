import React from "react";

// ICONS
import playIcon from "../../assets/play_line_icon.png";

// CSS
import "./tablePlayBtn.css";

export default function TablePlayBtn(props) {
  return (
    <button className="table-play-btn">
      <img src={playIcon} alt="play" />
    </button>
  );
}
