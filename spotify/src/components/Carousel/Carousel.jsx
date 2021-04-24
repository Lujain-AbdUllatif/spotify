import React from "react";

// Components
import PlayList from "../PlayList/PlayList";

// CSS
import "./carousel.css";

export default function Carousel({ title, data }) {
  // States
  let [arrow, setArrow] = React.useState(false);
  let [disBtn, setDisBtn] = React.useState(false);
  let [greyBtn, setGreyBtn] = React.useState(false);

  if (!data)
    return (
      <div className="carousel-div">
        <div className="carousel-title-arrow">
          <p>{title}</p>
        </div>
      </div>
    );

  let playLists = data.playlists.map((a) => {
    return <PlayList data={a}></PlayList>;
  });

  // Click Handler
  let handleRightClick = () => {
    setArrow(true);
    setDisBtn(true);
    setGreyBtn(true);
  };
  let handleLeftClick = () => {
    setArrow(false);
    setDisBtn(false);
    setGreyBtn(false);
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
            <i class="fas fa-chevron-left"></i>
          </button>
          <button
            className={`carousel-btn ${greyBtn ? "carousel-grey-btn" : ""}`}
            onClick={handleRightClick}
            disabled={disBtn}
          >
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
      <div className="carousel-playlists">
        <div className={`carousel-1st ${arrow ? "carousel-disappear" : ""}`}>
          {playLists.slice(0, 5)}
        </div>
        <div className={`carousel-2nd ${arrow ? "" : "carousel-disappear"}`}>
          {playLists.slice(5, 10)}
        </div>
      </div>
    </div>
  );
}
