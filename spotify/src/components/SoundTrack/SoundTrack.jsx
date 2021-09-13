import React, { useEffect } from "react";
import Sound from "react-sound";

// API
import songAudio from "../../API/songAudio";

// Contexts
import AppContext from "../../contextCustomHooks";

// CSS
import "./soundTrack.css";

export default function SoundPBB() {
  const [num, setNum] = React.useState(0);

  // Contexts
  const {
    playlistTracks_Context,
    play_Context,
    playlistIdI_Context,
    songDuration_Context,
  } = AppContext();

  useEffect(() => {
    // setting the number
    let cur_song_id = play_Context.play.song_id;
    let cur_song_index = playlistIdI_Context.playlistIdI[cur_song_id];
    console.log(cur_song_index);
    setNum(cur_song_index);

    // setting the duration

    console.log(
      "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
      playlistTracks_Context.playlistTracks.tracks[cur_song_index].duration
    );
    songDuration_Context.setSongDuration(
      playlistTracks_Context.playlistTracks.tracks[cur_song_index].duration
    );
  }, [play_Context.play.song_id]);

  const handleFinishPlaying = () => {
    console.log(playlistTracks_Context.playlistTracks.tracks_num);
    console.log(num);

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

      // setSongChanged(true);
    } else {
      play_Context.setPlay((prev) => {
        return { state: true };
      });
    }
  };

  if (!play_Context.play.song_id && play_Context.play.state) return "";

  return (
    <Sound
      url={songAudio(play_Context.play.song_id)}
      playStatus={
        !play_Context.play.state ? Sound.status.PLAYING : Sound.status.PAUSING
      }
      // playStatus={Sound.status.PAUSING}
      onFinishedPlaying={handleFinishPlaying}
    />
  );
}
