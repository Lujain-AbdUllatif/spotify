import React, { useEffect } from "react";
// import { NextSongContext } from "../../App";

// API
import songAudio from "../../API/songAudio";

// Contexts
import AppContext from "../../contextCustomHooks";

// CSS
import "./progressBar.css";

export default function ProgressBar({ total, setProgress, progress }) {
  // let [progress, setProgress] = React.useState(0);

  // Context Hooks
  const {
    play_Context,
    songAudioElement_Context,
    songChanged_Context,
    nextSong_Context,
    // SongName, AlbumName, Play, SongAudioElement, SongDuration, SongChanged, NextSongAudioElement
    songName_Context,
    albumName_Context,
    songDuration_Context,
  } = AppContext();

  useEffect(() => {
    // event listener to audio
    if (
      songAudioElement_Context.songAudioElement &&
      songChanged_Context.songChanged === true
    ) {
      songAudioElement_Context.songAudioElement.addEventListener(
        "ended",
        () => {
          console.log("finfish!!!!");
          console.log("NEXT SONG CONTEXT ", nextSong_Context);

          // songName_Context.setSongName(nextSong_Context.nextSong.song_name);
          // albumName_Context.setAlbumName(nextSong_Context.nextSong.album_name);
          // console.log("duration ", nextSong_Context.nextSong.duration);
          // songDuration_Context.setSongDuration(
          //   nextSong_Context.nextSong.duration
          // );
          /**********/
          // play_Context.setPlay({
          //   state: false,
          //   nowPlaying: nextSong_Context.nextSong.id,
          // });
          // songChanged_Context.setSongChanged(true);
        }
      );
    }

    // if the song is changed the progress is set back to zero
    if (songChanged_Context.songChanged) setProgress(0);

    const interval = setInterval(() => {
      if (progress < total && !play_Context.play.state)
        setProgress(progress + 1000);
      else {
        return () => clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [progress, total]);

  // Calculating the progress
  let timeProgress = progress === 0 ? 0 : (progress / total) * 100;

  return (
    <div className="progress-bar">
      <div
        className="progress-line"
        style={{ width: `${timeProgress}%` }}
      ></div>
    </div>
  );
}
