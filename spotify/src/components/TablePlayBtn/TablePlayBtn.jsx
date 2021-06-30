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

  // create a constant to know if the play song matches the curr
  let curPlay = id === play_Context.play.song_id && !play_Context.play.state;
  let curSong = id === play_Context.play.song_id && play_Context.play.state;

  useEffect(() => {
    if (songAudioElement_Context.songAudioElement) {
      songAudioElement_Context.songAudioElement.play();

      console.log("PLAYING!!!");
    }
  }, [songAudioElement_Context.songAudioElement]);

  let handleClick = (e) => {
    // setting song and album name
    playBtnClicked(track);

    //play when the clicked song is already the current song
    if (curSong) {
      songAudioElement_Context.songAudioElement.play();
    }
    // pause if the playing song is the clicked song
    if (curPlay) {
      songAudioElement_Context.songAudioElement.pause();
    }
    // if neither then update the song (when the song state is updated the useEffect works to play it)
    if (!curPlay && !curSong) {
      play_Context.setPlay((prev) => {
        return { state: true, song_id: null };
      });
      if (songAudioElement_Context.songAudioElement)
        songAudioElement_Context.songAudioElement.pause();
      songAudioElement_Context.setSongAudioElement(new Audio(songAudio(id)));
    }

    // changing the play state
    play_Context.setPlay((prev) => {
      return { state: !prev.state, song_id: id };
    });
  };

  return (
    <button
      className="table-play-btn"
      onClick={handleClick}
      id={id}
      style={curPlay ? { visibility: "visible" } : {}}
    >
      <img src={curPlay ? pauseIcon : playIcon} alt="play pause" />
    </button>
  );
}
