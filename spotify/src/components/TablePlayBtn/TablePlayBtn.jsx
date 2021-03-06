import React from "react";

// ICONS
import playIcon from "../../assets/play_line_icon.png";
import pauseIcon from "../../assets/pause_line_icon.png";

// Context
import AppContext from "../../contextCustomHooks";

// Assets Functions
import { buildPlaylistIdI } from "../../assetesFunctions";

// CSS
import "./tablePlayBtn.css";

export default function TablePlayBtn({
  track,
  playBtnClicked,
  id,
  playlistData,
}) {
  // Context Hook
  const {
    play_Context,
    playlistImg_Context,
    playlistIdI_Context,
    playlistTracks_Context,
  } = AppContext();

  // create a constant to know if the play song matches the curr
  let curPlay = id === play_Context.play.song_id && !play_Context.play.state;
  let curSong = id === play_Context.play.song_id && play_Context.play.state;

  let handleClick = (e) => {
    // setting contexts
    playBtnClicked(track, e);

    //play when the clicked song is already the current song
    if (curSong) {
      play_Context.setPlay((prev) => {
        return { ...prev, state: !prev.state };
      });
    }
    // pause if the playing song is the clicked song
    else if (curPlay) {
      play_Context.setPlay((prev) => {
        return { ...prev, state: !prev.state };
      });
    }
    // if neither then update the song (when the song state is updated the useEffect works to play it)
    else {
      play_Context.setPlay((prev) => {
        return {
          state: false,
          nowPlayingPlaylist: playlistData.playlist_id,
          song_id: id,
        };
      });

      playlistTracks_Context.setPlaylistTracks({
        tracks: playlistData.tracks,
        tracks_num: playlistData.playlist_tracks,
      });

      playlistIdI_Context.setPlaylistIdI(buildPlaylistIdI(playlistData.tracks));

      playlistImg_Context.setPlaylistImg(playlistData.image_url);
    }
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
