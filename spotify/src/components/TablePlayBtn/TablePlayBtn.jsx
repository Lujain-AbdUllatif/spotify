import React, { useContext, useState } from "react";

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
  // States
  let [playState, setPlayState] = useState(true);
  // Context Hook
  const play_Context = useContext(PlayContext);

  // song audio
  let songAudioElement;
  let songAudioSource;

  const handleClick = (e) => {
    // setting song and album name
    playBtnClicked(track);
    // play button simultaneously to playback bar
    play_Context.setPlay(!play_Context.play);
    setPlayState(!playState);
    // song audio id in the API link
    songAudioElement = new Audio(songAudio(e.currentTarget.id));
    console.log("songAudioElement   ", songAudioElement);
    songAudioSource = songAudio(e.currentTarget.id);
    console.log("songAudioSource   ", songAudioSource);
  };

  return (
    <button className="table-play-btn" onClick={handleClick} id={id}>
      <img src={playState ? playIcon : pauseIcon} alt="play pause" />
      {/* SongAudioElement */}
      {songAudioElement ? songAudioElement : "nth, "}
      {/* SongAudioSource */}
      {songAudioSource ? (
        <audio controls src={songAudioSource}></audio>
      ) : (
        "nth2"
      )}
      {/* Normal Audio */}
      <audio src="http://api.sprintt.co/spotify/play/2916?access=ZDg5OThiZTctNTYxNy00NWY0LTgzOGMtMDQ3OWE2N2FkZGUzPT09MTE6Mjo0OA=="></audio>
    </button>
  );
}
