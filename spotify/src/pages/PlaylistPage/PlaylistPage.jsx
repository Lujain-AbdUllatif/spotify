import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

// API
import playlistSongs from "../../API/playlistAPI";

// Components
import NavBar from "../../components/NavBar/NavBar";
import PlaylistHeader from "../../components/PlaylistHeader/PlaylistHeader";
import PlaylistTableFilter from "../../components/PlaylistTableFilter/PlaylistTableFilter";
import Table from "../../components/Table/Table";
import PlaybackBar from "../../components/PlaybackBar/PlaybackBar";

// CSS
import "./playlistPage.css";

export default function PlaylistPage() {
  let history = useHistory();
  // States
  let [duration, setDuration] = React.useState();
  let [tracksNum, setTracksNum] = React.useState();
  let [tracks, setTracks] = React.useState();
  let [txtValue, setTxtValue] = React.useState();

  // const headers = ["", "TITLE", "ARTIST", "ALBUM", "REALEASE DATE"];

  useEffect(() => {
    playlistSongs(history.location.state.data.playlist_id).then((data) => {
      setDuration(data.playlist_duration);
      setTracksNum(data.playlist_tracks);
      setTracks(data.tracks);
    });
  }, []);

  return (
    <div className="playlist-page-container">
      {/* NAV-BAR */}
      <NavBar active="home"></NavBar>
      <div className="playlist-page-div">
        {/* HEADER */}
        <PlaylistHeader
          data={history.location.state.data}
          duration={duration}
          tracksNum={tracksNum}
        ></PlaylistHeader>
        {/* FILTER */}
        <PlaylistTableFilter fun={setTxtValue}></PlaylistTableFilter>
        {/* TABLE */}
        {tracks ? (
          <Table
            data={tracks}
            headers={["", "TITLE", "ARTIST", "ALBUM", "REALEASE DATE"]}
            filterTxt={txtValue}
          ></Table>
        ) : (
          ""
        )}
      </div>
      {/* PLAYBACK BAR */}
      <PlaybackBar />
    </div>
  );
}
