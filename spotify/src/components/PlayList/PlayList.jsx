import React from "react";
import { useHistory } from "react-router-dom";

// API
import playlistSongs from "../../API/playlistAPI";

// Context
import AppContext from "../../contextCustomHooks";

// play pause icons
import playImg from "../../assets/play_line_icon_white.png";
import pauseImg from "../../assets/pause_line_icon_white.png";

// Assests Functions
import { buildPlaylistIdI } from "../../assetesFunctions";

// CSS
import "./playList.css";

export default function PlayList({ data }) {
  let { image_url, name, description, playlist_id } = data;

  // Context Hooks
  const {
    albumName_Context,
    playlistImg_Context,
    songName_Context,
    playlistTracks_Context,
    playlistIdI_Context,
    play_Context,
  } = AppContext();

  let history = useHistory();

  let curPlaylist =
    !play_Context?.play.state &&
    parseInt(play_Context?.play.nowPlayingPlaylist) === playlist_id;

  const handleClick = () => {
    history.push("/playlist", { data });
  };

  const handleBtnClick = (e) => {
    // if it is Indeed the curPlaylist then pause the whatever is playing
    curPlaylist = playlist_id === play_Context?.play.nowPlayingPlaylist;

    if (curPlaylist) {
      play_Context?.setPlay((prev) => {
        return { ...prev, state: !prev.state };
      });
    } else {
      albumName_Context?.setAlbumName(name);
      playlistImg_Context?.setPlaylistImg(image_url);

      playlistSongs(playlist_id).then((data) => {
        playlistTracks_Context?.setPlaylistTracks({
          tracks: data.tracks,
          tracks_num: data.playlist_tracks,
        });

        playlistIdI_Context?.setPlaylistIdI(buildPlaylistIdI(data.tracks));

        play_Context?.setPlay((prev) => {
          return {
            state: false,
            nowPlayingPlaylist: playlist_id,
            song_id: data.tracks[0].track_id,
          };
        });

        songName_Context?.setSongName(data.tracks[0].name);
      });
    }
  };

  return (
    <div className="playlist-div">
      <div className="playlist-img-div">
        <div
          className={
            "playlist-img-div-cover " +
            `${curPlaylist ? "playlist-img-div-cover-visible" : ""}`
          }
        ></div>
        <img className="playlist-img" src={image_url} alt="playlist img" />
        <button
          className={"playlist-play-pause-btn "}
          onClick={handleBtnClick}
          id={playlist_id}
        >
          <img
            className={
              "playlist-play-pause-img " +
              `${curPlaylist ? "playlist-play-pause-img-visible" : ""}`
            }
            src={!curPlaylist ? playImg : pauseImg}
            alt="play-pause-btn"
          />
        </button>
      </div>
      <div onClick={handleClick}>
        <p className="playlist-name">{name}</p>
        <p className="playlist-description">{description}</p>
      </div>
    </div>
  );
}
