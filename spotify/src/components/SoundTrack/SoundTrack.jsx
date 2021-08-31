import React, { useEffect } from "react";
import Sound from "react-sound";

// API
import songAudio from "../../API/songAudio";

// Contexts
import AppContext from "../../contextCustomHooks";

// CSS
import "./soundTrack.css";

export default function SoundPBB() {
  const [url, setUrl] = React.useState();
  const [num, setNum] = React.useState(0);
  const [songChanged, setSongChanged] = React.useState(false);

  // Contexts
  const {
    playlistTracks_Context,
    play_Context,
    playlistIdI_Context,
  } = AppContext();

  // const playState = play_Context.play.state;

  useEffect(() => {
    let song_id = play_Context.play.song_id;
    if (song_id) {
      setUrl(songAudio(song_id));
      // setting the song's place
      let index = playlistIdI_Context.playlistIdI[song_id];
      setNum(index);
    }

    // if the song is changed then set the url and the num
    if (songChanged) {
      let song_id = play_Context.play.song_id;
      console.log("<<<<<<<<<< CUR SONG ID >>>>>>>>>>", song_id);

      let song_index = playlistIdI_Context.playlistIdI[song_id];
      console.log("<<<<<<<<<< CUR SONG INDEX >>>>>>>>>>", song_index);

      // let new_song_obj =
      //   playlistTracks_Context.playlistTracks.tracks[song_index + 1];
      // console.log("<<<<<<<<<< NEXT SONG OBJECT >>>>>>>>>>", new_song_obj);

      // let new_song_id = new_song_obj.track_id;
      // console.log("<<<<<<<<<< NEXT SONG ID >>>>>>>>>>", new_song_id);

      setUrl(songAudio(song_id));
      setNum((prev) => {
        return prev + 1;
      });

      setSongChanged(false);
    }
  }, [
    playlistTracks_Context.playlistTracks,
    num,
    playlistIdI_Context.playlistIdI,
    songChanged,
  ]);

  // console.log(
  //   "<<<<<<<<<< TRACKS NUM >>>>>>>>>>",
  //   playlistTracks_Context.playlistTracks?.tracks_num
  // );
  // console.log("<<<<<<<<<< NUM >>>>>>>>>>", num);

  const handleFinishPlaying = () => {
    // current song details
    let song_id = play_Context.play.song_id;
    let song_index = playlistIdI_Context.playlistIdI[song_id];

    // next song details and setting
    if (num < playlistTracks_Context.playlistTracks.tracks_num - 1) {
      let new_song_obj =
        playlistTracks_Context.playlistTracks.tracks[song_index + 1];
      let new_song_id = new_song_obj.track_id;

      console.log(
        "//////////////////////// CUR SONG ID ////////////////////////",
        song_id
      );
      console.log(
        "//////////////////////// CUR SONG INDEX ////////////////////////",
        song_index
      );
      console.log(
        "//////////////////////// NEXT SONG OBJECT ////////////////////////",
        new_song_obj
      );
      console.log(
        "//////////////////////// NEXT SONG ID ////////////////////////",
        new_song_id
      );

      play_Context.setPlay((prev) => {
        return { ...prev, song_id: new_song_id };
      });
      // setUrl(songAudio(new_song_id));
      // setNum((prev) => {
      //   return prev + 1;
      // });

      setSongChanged(true);
    } else {
      play_Context.setPlay((prev) => {
        return { state: true };
      });
    }
  };

  if (!url) {
    return "";
  }

  return (
    <Sound
      url={url}
      playStatus={
        !play_Context.play.state ? Sound.status.PLAYING : Sound.status.PAUSING
      }
      // playStatus={Sound.status.PAUSING}
      onFinishedPlaying={handleFinishPlaying}
    />
  );
}
