import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

// Components
import PlaylistHeader from "../../components/PlaylistHeader/PlaylistHeader";
import PlayList from "../../components/PlayList/PlayList";

// API
import { genrePlaylistsAPI } from "../../API/genreAPI";

// CSS
import "./genrePage.css";

export default function GenrePage() {
  const [genrePlaylists, setGenrePlaylists] = React.useState();
  const [playlistsNum, setPlaylistsNum] = React.useState();

  //   data in history
  const history = useHistory();
  const { imgSrc, title, id } = history.location.state.data;
  const headerData = { image_url: imgSrc, name: title };

  useEffect(() => {
    genrePlaylistsAPI(id)
      .then((data) => {
        let playlistsArr = data.playlists.map((playlist) => {
          return <PlayList data={playlist} />;
        });
        setGenrePlaylists(playlistsArr);
        setPlaylistsNum(playlistsArr.length);
      })
      .catch((err) => {
        console.log(err);
        return "Something went wrong";
      });
  }, []);

  return (
    <div className="genre-page-container">
      <PlaylistHeader
        genre={true}
        data={headerData}
        tracksNum={playlistsNum ? playlistsNum : ""}
      />
      <div className="genre-page-grid">
        {genrePlaylists ? genrePlaylists : ""}
      </div>
    </div>
  );
}
