import React, { useMemo, useContext } from "react";

// Components
import LikeBtn from "../LikeBtn/LikeBtn";
import TablePlayBtn from "../TablePlayBtn/TablePlayBtn";

// Context
import { SongNameContext, AlbumNameContext } from "../../App";

// CSS
import "./table.css";

export default function Table({ data, headers, filterTxt }) {
  /*************************************************/
  // Green background for specific row????
  // State
  let [green, setGreen] = React.useState(false);
  /*************************************************/
  // Context Hooks
  const songName_Context = useContext(SongNameContext);
  const albumName_Context = useContext(AlbumNameContext);

  // playBtnClicked
  const playBtnClicked = (track) => {
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
          <tr
            className="table-row"
            style={green ? { background: "rgba(29, 185, 84, 0.2)" } : {}}
          >
            <td className="table-data-play-btn">
              <TablePlayBtn
                id={track.track_id}
                track={track}
                playBtnClicked={playBtnClicked}
                setGreen={setGreen}
                // GREEN BACKGROUND ????
              />
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
