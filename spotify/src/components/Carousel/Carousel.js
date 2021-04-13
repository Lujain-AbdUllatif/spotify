import React from "react";

// Components
import PlayList from "../PlayList/PlayList";

import arrowRight from "../../assets/controller_icons/next.svg";
import arrowLeft from "../../assets/controller_icons/prev.svg";

// Icons >>>>> REACT ICONS
// import { MdKeyboardArrowRight } from "react-icons/Md";
// import { MdKeyboardArrowLeft } from "react-icons/Md";

// function RightArrow() {
//   return (
//     <IconContext.Provider>
//       <MdKeyboardArrowRight />
//     </IconContext.Provider>
//   );
// }

// function LeftArrow() {
//   return (
//     <IconContext.Provider>
//       <MdKeyboardArrowLeft />
//     </IconContext.Provider>
//   );
// }

import "./carousel.css";
import { IconContext } from "react-icons/lib";

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
            <img src={arrowLeft} />
          </button>
          <button
            className={`carousel-btn ${greyBtn ? "carousel-grey-btn" : ""}`}
            onClick={handleRightClick}
            disabled={disBtn}
          >
            <img src={arrowRight} />
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
