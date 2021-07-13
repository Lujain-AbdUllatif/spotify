import React, { useEffect } from "react";

// components
import PlaylistHeader from "../../components/PlaylistHeader/PlaylistHeader";
import PlaylistTableFilter from "../../components/PlaylistTableFilter/PlaylistTableFilter";
import Table from "../../components/Table/Table";

// API
import likedSongs from "../../API/likedSongs";

// liked songs image
import likedSongsImg from "../../assets/liked_songs.jpg";

// CSS
import "./likedSongs.css";

export default function LikedSongs() {
  const headerData = { name: "Liked Songs", image_url: likedSongsImg };
  useEffect(() => {
    likedSongs().then((data) => {
      console.log("liked songs data  ", data);
    });
  }, []);

  return (
    <div className="liked-songs-container">
      <PlaylistHeader data={headerData}></PlaylistHeader>
      {/* <PlaylistTableFilter></PlaylistTableFilter>
      <Table></Table> */}
    </div>
  );
}
