import React from "react";

// Components
import PlayList from "../PlayList/PlayList";

// CSS
import "./carousel.css";

export default function Carousel({ title, data }) {
  // States
  const [greyState, setGreyState] = React.useState({
    arrow: false,
    disBtn: false,
    greyBtn: false,
  });
  const { arrow, disBtn, greyBtn } = greyState;

  if (!data)
    return (
      <div className="carousel-div">
        <div className="carousel-title-arrow">
          <p>{title}</p>
        </div>
      </div>
    );

  let playLists = data.playlists?.map((playlistData) => {
    return (
      <PlayList data={playlistData} key={playlistData.playlist_id}></PlayList>
    );
  });

  // Click Handler
  let handleRightClick = () => {
    setGreyState(() => {
      return { arrow: true, disBtn: true, greyBtn: true };
    });
  };
  let handleLeftClick = () => {
    setGreyState(() => {
      return { arrow: false, disBtn: false, greyBtn: false };
    });
  };

  return (
    <div className="carousel-div">
      <div className="carousel-title-arrow">
        <p>{title}</p>
        <div>
          <button
            className={`carousel-btn ${greyBtn ? "" : "carousel-grey-btn"}`}
            onClick={handleLeftClick}
            disabled={!disBtn}
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            className={`carousel-btn ${greyBtn ? "carousel-grey-btn" : ""}`}
            onClick={handleRightClick}
            disabled={disBtn}
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
      <div className="carousel-playlists">
        <div className={`carousel-1st ${arrow ? "carousel-disappear" : ""}`}>
          {playLists?.slice(0, 5)}
        </div>
        <div className={`carousel-2nd ${arrow ? "" : "carousel-disappear"}`}>
          {playLists?.slice(5, 10)}
        </div>
      </div>
    </div>
  );
}
