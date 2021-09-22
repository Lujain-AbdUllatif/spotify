import React, { useMemo } from "react";
import { useHistory } from "react-router-dom";

// Components
import LikeBtn from "../LikeBtn/LikeBtn";
import TablePlayBtn from "../TablePlayBtn/TablePlayBtn";

// Context
import AppContext from "../../contextCustomHooks";

// liked songs image
import likedSongsImg from "../../assets/liked_songs.jpg";

// CSS
import "./table.css";

export default function Table({ data, headers, filterTxt, playlistData }) {
  console.log(
    " IN TABLE $$$$$$$$$$$$$$$$$ DATA ##########################",
    data
  );
  console.log(
    "IN TABLE  IN TABLE $$$$$$$$$$$$$$$$$ PLAYLIST DATA ##########################",
    playlistData
  );

  // Context Hooks
  const {
    songName_Context,
    albumName_Context,
    playlistImg_Context,
  } = AppContext();

  // history
  const history = useHistory();

  // playBtnClicked
  const playBtnClicked = (track, e) => {
    if (history.location.pathname === "/liked-songs")
      playlistImg_Context.setPlaylistImg(likedSongsImg);
    // setting the current song details
    songName_Context.setSongName(track.name);
    albumName_Context.setAlbumName(track.album_name);
  };

  // Filtering Data
  let filteredData;
  if (filterTxt) {
    filteredData = data.filter((track) => {
      const all = `${track.name} ${track.artists_names} ${track.album_name}`
        .toString()
        .toLowerCase();
      return all.includes(filterTxt.toLowerCase());
    });
  }

  //   Making sure that the data is not recreated in every render!
  const headersMemo = useMemo(() => {
    return headers;
  }, []);
  let tracksMemo = useMemo(() => {
    return data;
  }, []);

  // Filtering data results
  let finalTracks = filteredData || tracksMemo;

  if (filteredData && filteredData.length === 0)
    return <p className="table-not-found">track not found &#128533;</p>;

  return (
    /***TABLE***/
    <table className="table">
      <tbody>
        {/**** HEADERS ****/}
        <tr>
          <th className="table-header-play-btn"></th>
          {headersMemo.map((header) => {
            return (
              <th className="table-header" key={header.slice(0, 2)}>
                {header}
              </th>
            );
          })}
          <th className="table-header-play-btn-extentions"></th>
        </tr>
        {finalTracks.map((track) => {
          return (
            /**** ROWS ****/
            <tr className="table-row" key={track.track_id}>
              <td className="table-data-play-btn">
                <TablePlayBtn
                  id={track.track_id}
                  track={track}
                  playBtnClicked={playBtnClicked}
                  playlistData={playlistData}
                />
              </td>
              <td className="table-data table-data-like-btn">
                <LikeBtn value={track.is_liked} id={track.track_id} />
              </td>
              <td className="table-data" id="song-name">
                {track.name}
              </td>
              <td className="table-data" id="artist-name">
                {track.artists_names}
              </td>
              <td className="table-data" id="album-name">
                {track.album_name}
              </td>
              <td className="table-data">{track.release_date}</td>
              <td className="table-data-play-btn-extention"></td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
