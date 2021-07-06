import React, { useContext, useEffect, useState } from "react";

// ICONS
import playIcon from "../../assets/play_line_icon.png";
import pauseIcon from "../../assets/pause_line_icon.png";

// Audio str
import songAudio from "../../API/songAudio";

// Context
import AppContext from "../../contextCustomHooks";

// CSS
import "./tablePlayBtn.css";

export default function TablePlayBtn({ track, playBtnClicked, id }) {
  // Context Hook
  const {
    play_Context,
    songAudioElement_Context,
    songChanged_Context,
    // songDuration_Context,
  } = AppContext();

  // create a constant to know if the play song matches the curr
  let curPlay = id === play_Context.play.song_id && !play_Context.play.state;
  let curSong = id === play_Context.play.song_id && play_Context.play.state;

  // useEffect(() => {
  //   console.log("CHANGED!");
  //   if (songAudioElement_Context.songAudioElement) {
  //     songAudioElement_Context.songAudioElement
  //       .play()
  //       .then()
  //       .catch((err) => console.log("ERROR IS HERE", err));
  //     console.log("PLAYING");
  //     songChanged_Context.setSongChanged(false);
  //   }
  // }, [songChanged_Context.songChanged]);

  let handleClick = (e) => {
    // setting song and album name
    playBtnClicked(track, e);

    //play when the clicked song is already the current song
    if (curSong) {
      songAudioElement_Context.songAudioElement.play();
    }
    // pause if the playing song is the clicked song
    if (curPlay) {
      songAudioElement_Context.songAudioElement.pause();
    }
    // if neither then update the song (when the song state is updated the useEffect works to play it)
    if (!curSong) {
      if (songAudioElement_Context.songAudioElement) {
        songAudioElement_Context.songAudioElement.pause();
        console.log("PAUSE 2");
        play_Context.setPlay((prev) => {
          return { state: true, song_id: null };
        });
      }
      songAudioElement_Context.setSongAudioElement(new Audio(songAudio(id)));
      songChanged_Context.setSongChanged(true);
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
      data-album_name={track.album_name}
      data-song_name={track.name}
      data-duration={track.duration}
      id={id}
      style={curPlay ? { visibility: "visible" } : {}}
    >
      <img src={curPlay ? pauseIcon : playIcon} alt="play pause" />
    </button>
  );
}
