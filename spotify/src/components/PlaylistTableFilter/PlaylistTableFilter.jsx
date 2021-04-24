import React from "react";

// CSS
import "./playlistTableFilter.css";

export default function PlaylistTableFilter({ fun }) {
  const handleInput = (event) => {
    fun(event.target.value);
  };

  return (
    <div className="playlist-table-filter-bar">
      <span className="playlist-table-filter-icon">
        <i class="fas fa-search"></i>
      </span>
      <input
        type="text"
        placeholder="Filter"
        className="playlist-table-filter"
        onKeyUp={handleInput}
      ></input>
    </div>
  );
}
