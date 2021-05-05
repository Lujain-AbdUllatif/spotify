import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";

// API
import playlistSongs from "../../API/playlistAPI";

// Components
import PlaylistHeader from "../../components/PlaylistHeader/PlaylistHeader";
import PlaylistTableFilter from "../../components/PlaylistTableFilter/PlaylistTableFilter";
import Table from "../../components/Table/Table";

// Context
import { PlaylistImgContext } from "../../App";

// CSS
import "./playlistPage.css";

export default function PlaylistPage() {
  // Table States
  let [duration, setDuration] = React.useState();
  let [tracksNum, setTracksNum] = React.useState();
  let [tracks, setTracks] = React.useState();
  let [txtValue, setTxtValue] = React.useState();

  let history = useHistory();

  // Context Hooks
  const playlistImg_Context = useContext(PlaylistImgContext);
  playlistImg_Context.setPlaylistImg(history.location.state.data.image_url);

  useEffect(() => {
    // Fetching playlist data
    playlistSongs(history.location.state.data.playlist_id).then((data) => {
      // Setting States for the table
      setDuration(data.playlist_duration);
      setTracksNum(data.playlist_tracks);
      setTracks(data.tracks);
      console.log("DEITA", data);
    });
  }, []);

  // Table headers
  const headers = ["", "TITLE", "ARTIST", "ALBUM", "REALEASE DATE"];

  return (
    <div className="playlist-page-container">
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
            headers={headers}
            filterTxt={txtValue}
            // setSongName={setSongName}
            // setAlbumName={setAlbumName}
          ></Table>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
