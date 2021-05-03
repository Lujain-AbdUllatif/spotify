import React, { useMemo, useRef } from "react";

// Components
import LikeBtn from "../LikeBtn/LikeBtn";
import TablePlayBtn from "../TablePlayBtn/TablePlayBtn";

// CSS
import "./table.css";

export default function Table({
  data,
  headers,
  filterTxt,
  setSongName,
  setAlbumName,
}) {
  // playBtnClicked
  const playBtnClicked = (track) => {
    setSongName(track.name);
    setAlbumName(track.album_name);
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
    <table className="table">
      <tr>
        <th className="table-header-play-btn"></th>
        {headersMemo.map((header) => {
          return <th className="table-header">{header}</th>;
        })}
        <th className="table-header-play-btn-extentions"></th>
      </tr>
      {finalTracks.map((track) => {
        return (
          <tr className="table-row">
            <td className="table-data-play-btn">
              <TablePlayBtn track={track} playBtnClicked={playBtnClicked} />
            </td>
            <td className="table-data table-data-like-btn">
              <LikeBtn value={Boolean(Math.round(Math.random()))} />
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
    </table>
  );
}
