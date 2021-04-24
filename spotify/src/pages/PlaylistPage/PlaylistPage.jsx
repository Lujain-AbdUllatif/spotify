import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

// API
import playlistSongs from "../../API/playlistAPI";

// Components
import NavBar from "../../components/NavBar/NavBar";
import PlaylistHeader from "../../components/PlaylistHeader/PlaylistHeader";
import PlaylistTableFilter from "../../components/PlaylistTableFilter/PlaylistTableFilter";
import PlaylistTable from "../../components/PlaylistTable/PlaylistTable";

// CSS
import "./playlistPage.css";

export default function PlaylistPage() {
  let history = useHistory();
  // States
  let [duration, setDuration] = React.useState();
  let [tracksNum, setTracksNum] = React.useState();
  let [tracks, setTracks] = React.useState();
  let [txtValue, setTxtValue] = React.useState("");

  useEffect(() => {
    playlistSongs(history.location.state.data.playlist_id).then((data) => {
      setDuration(data.playlist_duration);
      setTracksNum(data.playlist_tracks);
      setTracks(data.tracks);
    });
  }, [duration, tracksNum, tracks]);

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
          <PlaylistTable tracks={tracks} txtValue={txtValue}></PlaylistTable>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
