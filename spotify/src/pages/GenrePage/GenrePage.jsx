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

  //   data in history
  const history = useHistory();
  const { imgSrc, title, id } = history.location.state.data;
  const headerData = { image_url: imgSrc, name: title };

  useEffect(() => {
    genrePlaylistsAPI(id).then((data) => {
      //   console.log("####### GENRE DATA #######", data.playlists);
      setGenrePlaylists();
      data.playlists.map((playlist) => {
        return <PlayList data={playlist} />;
      });
    });
  }, []);

  return (
    <div className="genre-page-container">
      <PlaylistHeader
        genre={true}
        data={headerData}
        //   duration={} tracksNum={}
      />
      <h1>WELCOME TO THE GENRE PAGE !!!!!!!!!!!!!</h1>
      <div>{genrePlaylists ? genrePlaylists : "NOTH"}</div>
    </div>
  );
}
