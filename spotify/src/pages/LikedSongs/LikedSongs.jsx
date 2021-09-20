import React, { useEffect } from "react";

// components
import PlaylistHeader from "../../components/PlaylistHeader/PlaylistHeader";
import PlaylistTableFilter from "../../components/PlaylistTableFilter/PlaylistTableFilter";
import Table from "../../components/Table/Table";

// Contexts
import AppContext from "../../contextCustomHooks";

// API
import likedSongs from "../../API/likedSongs";

// liked songs image
import likedSongsImg from "../../assets/liked_songs.jpg";

// CSS
import "./likedSongs.css";

export default function LikedSongs() {
  // States
  const [data, setData] = React.useState();

  const { playlistImg_Context } = AppContext();

  const headerData = { name: "Liked Songs", image_url: likedSongsImg };
  useEffect(() => {
    likedSongs().then((data) => {
      playlistImg_Context.setPlaylistImg(likedSongsImg);
      setData(data.liked_tracks);
    });
  }, []);

  // Table headers
  const headers = ["", "TITLE", "ARTIST", "ALBUM", "REALEASE DATE"];

  return (
    <div className="liked-songs-container">
      {data ? (
        <PlaylistHeader
          data={headerData}
          tracksNum={data.length}
        ></PlaylistHeader>
      ) : (
        ""
      )}
      <PlaylistTableFilter></PlaylistTableFilter>
      {data ? <Table headers={headers} data={data}></Table> : ""}
    </div>
  );
}
