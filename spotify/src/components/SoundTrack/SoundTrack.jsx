import React, { useEffect } from "react";
import Sound from "react-sound";

// API
import songAudio from "../../API/songAudio";

// Contexts
import AppContext from "../../contextCustomHooks";

// CSS
import "./soundTrack.css";

export default function SoundTrack({ disableFun }) {
  const [num, setNum] = React.useState(0);

  // Contexts
  const {
    playlistTracks_Context,
    play_Context,
    playlistIdI_Context,
    progressBar_Context,
    nextSong_Context,
    prevSong_Context,
    volume_Context,
  } = AppContext();

  useEffect(() => {
    if (nextSong_Context.nextSong) {
      playNextSong();
      nextSong_Context.setNextSong(false);
    }

    if (prevSong_Context.prevSong) {
      playPrevSong();
      prevSong_Context.setPrevSong(false);
    }
    // setting the number
    let cur_song_id = play_Context.play.song_id;
    let cur_song_index = playlistIdI_Context.playlistIdI[cur_song_id];

    setNum(cur_song_index);
    if (cur_song_index === 0) disableFun("prev");
    else if (
      cur_song_index ===
      playlistTracks_Context.playlistTracks.tracks_num - 1
    )
      disableFun("next");
    else {
      disableFun("both");
    }
  }, [play_Context.play.song_id, nextSong_Context, prevSong_Context]);

  const playNextSong = () => {
    if (num < playlistTracks_Context.playlistTracks.tracks_num - 1) {
      // current song details
      let song_id = play_Context.play.song_id;
      let song_index = playlistIdI_Context.playlistIdI[song_id];
      // next song details and setting
      let new_song_obj =
        playlistTracks_Context.playlistTracks.tracks[song_index + 1];
      let new_song_id = new_song_obj.track_id;

      play_Context.setPlay((prev) => {
        return { ...prev, song_id: new_song_id };
      });
      // setUrl(songAudio(new_song_id));
      setNum((prev) => {
        return prev + 1;
      });
    }
  };

  const playPrevSong = () => {
    if (num > 0) {
      // current song details
      let song_id = play_Context.play.song_id;
      let song_index = playlistIdI_Context.playlistIdI[song_id];
      // next song details and setting
      let new_song_obj =
        playlistTracks_Context.playlistTracks.tracks[song_index - 1];
      let new_song_id = new_song_obj.track_id;

      play_Context.setPlay((prev) => {
        return { ...prev, song_id: new_song_id };
      });
      // setUrl(songAudio(new_song_id));
      setNum((prev) => {
        return prev - 1;
      });
    }
  };

  const handleFinishPlaying = () => {
    if (num < playlistTracks_Context.playlistTracks.tracks_num - 1) {
      playNextSong();
    } else {
      play_Context.setPlay((prev) => {
        return { state: true };
      });
    }
  };

  const handleOnPlaying = (obj) => {
    progressBar_Context.setProgressBar({
      position: obj.position,
      duration: obj.duration,
    });
  };

  if (
    (!play_Context.play.song_id && play_Context.play.state) ||
    play_Context.play.state === undefined
  )
    return "";

  return (
    <Sound
      url={songAudio(play_Context.play.song_id)}
      playStatus={
        !play_Context?.play?.state
          ? Sound?.status?.PLAYING
          : Sound?.status?.PAUSING
      }
      onFinishedPlaying={handleFinishPlaying}
      onPlaying={handleOnPlaying}
      volume={volume_Context.volume ? volume_Context.volume : 100}
    />
  );
}
