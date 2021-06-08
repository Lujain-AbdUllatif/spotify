import React, { useContext, useEffect, useState } from "react";

// ICONS
import playIcon from "../../assets/play_line_icon.png";
import pauseIcon from "../../assets/pause_line_icon.png";

// Audio str
import songAudio from "../../API/songAudio";

// Context
import { PlayContext, SongAudioElementContext } from "../../App";

// CSS
import "./tablePlayBtn.css";

export default function TablePlayBtn({ track, playBtnClicked, id }) {
  // Context Hook
  const play_Context = useContext(PlayContext);
  const songAudioElement_Context = useContext(SongAudioElementContext);

  let isItMe = id === play_Context.play.nowPlaying;

  useEffect(() => {
    if (songAudioElement_Context.songAudioElement) {
      songAudioElement_Context.songAudioElement.play();
    }
  }, [songAudioElement_Context.songAudioElement]);

  let handleClick = (e) => {
    console.log(songAudio(id));
    // setting song and album name
    playBtnClicked(track);
    // play button simultaneously to playback bar
    if (isItMe) {
      if (!play_Context.play.state) {
        songAudioElement_Context.songAudioElement.pause();
        console.log("PAUSED");
      } else {
        songAudioElement_Context.songAudioElement.play();
        console.log("PLAYED");
      }
    }
    if (!isItMe) {
      if (songAudioElement_Context.songAudioElement) {
        songAudioElement_Context.songAudioElement.pause();
      } else {
        songAudioElement_Context.setSongAudioElement(new Audio(songAudio(id)));
        songAudioElement_Context.songAudioElement &&
          songAudioElement_Context.songAudioElement.play();
      }
      console.log("NEW SONG");
    }

    play_Context.setPlay((prev) => {
      return { state: !prev.state, nowPlaying: id };
    });
  };

  return (
    <button
      className="table-play-btn"
      onClick={handleClick}
      id={id}
      style={isItMe ? { visibility: "visible" } : {}}
    >
      {isItMe ? (
        <img
          src={play_Context.play.state ? playIcon : pauseIcon}
          alt="play pause"
        />
      ) : (
        <img src={playIcon} alt="play pause" />
      )}
    </button>
  );
}
