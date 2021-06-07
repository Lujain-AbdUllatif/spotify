import React, { useContext, useEffect, useState } from "react";

// ICONS
import playIcon from "../../assets/play_line_icon.png";
import pauseIcon from "../../assets/pause_line_icon.png";

// Audio str
import songAudio from "../../API/songAudio";

// Context
import { PlayContext } from "../../App";

// CSS
import "./tablePlayBtn.css";

export default function TablePlayBtn({ track, playBtnClicked, id }) {
  // Context Hook
  const play_Context = useContext(PlayContext);

  // States
  let [playState, setPlayState] = useState(false);
  let [songAudioElement, setSongAudioElement] = useState();
  let [songAudioSource, setSongAudioSource] = useState();

  let handleClick = (e) => {
    console.log("HERE");
    console.log(typeof parseInt(e.target.parentElement.id));

    // setting song and album name
    playBtnClicked(track);
    // play button simultaneously to playback bar
    play_Context.setPlay(parseInt(e.target.parentElement.id));
    setPlayState(!playState);
    // song audio id in the API link
    // setSongAudioElement(new Audio(songAudio(e.currentTarget.id)));
    // console.log("songAudioElement   ", songAudioElement);
    if (!playState) e.currentTarget.childNodes[1].pause();
    else {
      setSongAudioSource(songAudio(e.currentTarget.id));
      // console.log("songAudioSource   ", songAudioSource);
      // console.log("TARGET IS ", e.currentTarget.childNodes[1]);
      // e.currentTarget.childNodes[1].load();
      // e.currentTarget.childNodes[1].play();
      console.log("PLAYED");
    }
  };

  return (
    <button
      className="table-play-btn"
      onClick={handleClick}
      id={id}
      style={playState ? { visibility: "visible" } : {}}
    >
      <img src={!playState ? playIcon : pauseIcon} alt="play pause" />
      {/* AudioElement */}
      <audio>
        <source src={songAudioSource} />
      </audio>
      {/* SongAudioElement */}
      {/* {songAudioElement ? songAudioElement : "nth"} */}
    </button>
  );
}
