import React, { useEffect } from "react";

// components
import PlaylistHeader from "../../components/PlaylistHeader/PlaylistHeader";
import PlaylistTableFilter from "../../components/PlaylistTableFilter/PlaylistTableFilter";
import Table from "../../components/Table/Table";

// Contexts
import AppContext from "../../contextCustomHooks";

// API
import { likedSongs } from "../../API/likedSongs";

// liked songs image
import likedSongsImg from "../../assets/liked_songs.jpg";

// CSS
import "./likedSongs.css";

export default function LikedSongs() {
  // States
  const [data, setData] = React.useState();
  const [playlistData, setPlaylistData] = React.useState();
  let [txtValue, setTxtValue] = React.useState();

  // Table headers
  const headerData = { name: "Liked Songs", image_url: likedSongsImg };
  const headers = ["", "TITLE", "ARTIST", "ALBUM", "REALEASE DATE"];

  useEffect(() => {
    likedSongs().then((data) => {
      setData(data.liked_tracks);
      setPlaylistData({
        image_url: likedSongsImg,
        playlist_id: "likedSongs",
        playlist_tracks: data.liked_tracks.length,
        tracks: data.liked_tracks,
      });
    });
  }, []);

  // console.log("BOOOOOOOOOOOOMMMMM", playlistData);

  if (data?.length === 0 || data === undefined) {
    return (
      <div className="liked-songs-container">
        <PlaylistHeader data={headerData} tracksNum={0}></PlaylistHeader>
      </div>
    );
  }

  return (
    <div className="liked-songs-container">
      <PlaylistHeader
        data={headerData}
        tracksNum={data.length}
      ></PlaylistHeader>

      <PlaylistTableFilter fun={setTxtValue}></PlaylistTableFilter>

      <Table
        headers={headers}
        data={data}
        playlistData={playlistData}
        filterTxt={txtValue}
      ></Table>
    </div>
  );
}
