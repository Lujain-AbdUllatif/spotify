import React, { useMemo, useEffect } from "react";

// Components
import LikeBtn from "../LikeBtn/LikeBtn";
import TablePlayBtn from "../TablePlayBtn/TablePlayBtn";

// Context
import AppContext from "../../contextCustomHooks";

// CSS
import "./table.css";

export default function Table({ data, headers, filterTxt }) {
  // Context Hooks
  const {
    songName_Context,
    albumName_Context,
    songDuration_Context,
    songAudioElement_Context,
    songChanged_Context,
    play_Context,
    nextSong_Context,
    prevSong_Context,
  } = AppContext();

  // playBtnClicked
  const playBtnClicked = (track, e) => {
    console.log("track is clicked ", track.name);

    // setting the current song details
    songName_Context.setSongName(track.name);
    albumName_Context.setAlbumName(track.album_name);
    songDuration_Context.setSongDuration(track.duration);

    // setting the next and prev song details

    let prevSongElement =
      e.target.parentNode.parentNode.previousSibling?.childNodes[0]
        .childNodes[0];
    let nextSongElement =
      e.target.parentNode.parentNode.nextSibling?.childNodes[0].childNodes[0];

    console.log("PREV IS ", prevSongElement);
    console.log("NXT IS ", nextSongElement);

    if (nextSongElement) {
      // console.log("nxt song ID  ", nextSongElement);
      nextSong_Context.setNextSong({
        id: nextSongElement.id,
      });
    }
    if (prevSongElement) {
      // console.log("prv song ID  ", prevSongElement);
      prevSong_Context.setPrevSong({
        id: prevSongElement.id,
      });
    }
  };

  // USE EFFECT FOR PLAYING A SONG
  useEffect(() => {
    if (
      songAudioElement_Context.songAudioElement &&
      songChanged_Context.songChanged
    ) {
      songAudioElement_Context.songAudioElement
        .play()
        .then()
        .catch((err) => console.log("ERROR IS HERE", err));
      // console.log("PLAYING USE-EFFECT");
      songChanged_Context.setSongChanged(false);

      songAudioElement_Context.songAudioElement.addEventListener(
        "ended",
        () => {
          if (nextSong_Context.nextSong.id) {
            let nextSongBtn = document.getElementById(
              `${nextSong_Context.nextSong.id}`
            );

            nextSongBtn.click();
          }
        }
      );
    }
  }, [songAudioElement_Context.songAudioElement]);

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
      </tbody>
    </table>
  );
}
