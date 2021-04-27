// import React, { useState, useMemo, useEffect } from "react";
// import { useTable } from "react-table";

// // Component
// import LikeBtn from "../LikeBtn/LikeBtn";

// // ICONS
// import playIcon from "../../assets/play_line_icon.png";

// // CSS
// import "./PlaylistTable.css";

// // Columns
// const COLUMNS = [
//   { Header: "PLAY-BTN" },
//   { Header: "", accessor: "is_liked" },
//   { Header: "TITLE", accessor: "name" },
//   { Header: "ARTIST", accessor: "artists_names" },
//   { Header: "ALBUM", accessor: "album_name" },
//   { Header: "RELEASE DATE", accessor: "release_date" },
//   { Header: "PLAY-BTN-RIGHT" },
// ];

// export default function PlaylistTable({ tracks, txtValue }) {
//   // Filter Table State
//   let [newData, setNewData] = useState(false);

//   //   Making sure that the data is not recreated in every render!
//   const columnsMemo = useMemo(() => {
//     return COLUMNS;
//   }, []);
//   const tracksMemo = useMemo(() => {
//     return tracks;
//   }, []);

//   // Table creation variables
//   const tableInstance = useTable({
//     columns: columnsMemo,
//     data: tracksMemo,
//   });

//   const {
//     getTableProps, //function needs to be destructure
//     getTableBodyProps, //function needs to be destructure
//     headerGroups, //array requiring us to use map to render each header SIMILAR to rendering a list of elements
//     rows,
//     prepareRow,
//   } = tableInstance;

//   // Table Filtering
//   useEffect(() => {
//     let newDataTemp = tracks.filter((rows) => {
//       // Filtering the data Array
//       let { id, release_date, ...row } = rows;
//       let values = Object.values(row);
//       let checkPresent = (elem) => {
//         let result = elem
//           .toString()
//           .toLowerCase()
//           .includes(txtValue.toLowerCase());
//         return result;
//       };
//       let present = values.some(checkPresent);
//       if (present) return true;
//     });
//     // Changing the newData State
//     if (txtValue) setNewData(newDataTemp);
//   }, [txtValue]);

//   let tdClassName = (cell) => {
//     return newData == false
//       ? `playlist-table-body`
//       : `playlist-table-body ${
//           newData
//             .map((song) => song.album_name)
//             .includes(cell.row.values.album_name)
//             ? ""
//             : " playlist-table-body-disappear"
//         }`;
//   };

//   if (newData.length === 0)
//     return <p className="playlist-table-not-found">track not found {":("}</p>;

//   return (
//     <table {...getTableProps()} className="playlist-table">
//       {/* TABLE HEADER */}
//       <thead>
//         {/* ROW & HEADER */}
//         {headerGroups.map((headerGroup) => {
//           return (
//             <tr {...headerGroup.getHeaderGroupProps()}>
//               {headerGroup.headers.map((column) => {
//                 if (column.Header == "PLAY-BTN") {
//                   return <th className="playlist-table-play-btn-header"></th>;
//                 }
//                 if (column.Header == "PLAY-BTN-RIGHT") {
//                   return (
//                     <th className="playlist-table-play-btn-header-right"></th>
//                   );
//                 }
//                 return (
//                   <th
//                     {...column.getHeaderProps()}
//                     className="playlist-table-head"
//                   >
//                     {column.render("Header")}
//                   </th>
//                 );
//               })}
//             </tr>
//           );
//         })}
//       </thead>

//       {/* TABLE BODY */}
//       <tbody {...getTableBodyProps()} className="playlist-table-all-body">
//         {/* ROW & DATA */}
//         {rows.map((row) => {
//           prepareRow(row);
//           return (
//             <tr {...row.getRowProps()} className="playlist-table-body-row">
//               {row.cells.map((cell) => {
//                 if (cell.column.Header === "") {
//                   return (
//                     <td className={tdClassName(cell)}>
//                       <LikeBtn cell={cell} />
//                     </td>
//                   );
//                 }

//                 if (cell.column.Header == "PLAY-BTN") {
//                   return (
//                     <td className="playlist-table-play-btn-data">
//                       <button className="playlist-table-play-btn">
//                         <img src={playIcon} />
//                       </button>
//                     </td>
//                   );
//                 }

//                 if (cell.column.Header == "PLAY-BTN-RIGHT") {
//                   console.log("yesss");
//                   return (
//                     <td className="playlist-table-play-btn-data-right"> </td>
//                   );
//                 }
//                 return (
//                   <td {...cell.getCellProps()} className={tdClassName(cell)}>
//                     {cell.render("Cell")}
//                   </td>
//                 );
//               })}
//             </tr>
//           );
//         })}
//       </tbody>
//     </table>
//   );
// }
