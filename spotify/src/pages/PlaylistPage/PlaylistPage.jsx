import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

// API
import playlistSongs from "../../API/playlistAPI";

// Components
import PlaylistHeader from "../../components/PlaylistHeader/PlaylistHeader";
import PlaylistTableFilter from "../../components/PlaylistTableFilter/PlaylistTableFilter";
import Table from "../../components/Table/Table";

// CSS
import "./playlistPage.css";

export default function PlaylistPage() {
  // Table States
  let [duration, setDuration] = React.useState();
  let [tracksNum, setTracksNum] = React.useState();
  let [tracks, setTracks] = React.useState();
  let [txtValue, setTxtValue] = React.useState();
  let [playlistData, setPlaylistData] = React.useState();

  let history = useHistory();

  useEffect(() => {
    let playlistData = history.location.state.data;

    // Fetching playlist data
    playlistSongs(playlistData.playlist_id).then((data) => {
      // Setting States for the table
      setPlaylistData({ ...data, image_url: playlistData.image_url });
      setTracks(data.tracks);
      setDuration(data.playlist_duration);
      setTracksNum(data.playlist_tracks);
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
            playlistData={playlistData}
          ></Table>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
