import React, { useContext } from "react";
import {
  SongNameContext,
  AlbumNameContext,
  PlaylistImgContext,
  PlayContext,
  SongAudioElementContext,
  ProgressBarContext,
  NextSongContext,
  PrevSongContext,
  VolumeContext,
  PlaylistTracks,
  PlaylistIdI,
} from "./App";

const AppContext = () => {
  const songName_Context = useContext(SongNameContext);
  const albumName_Context = useContext(AlbumNameContext);
  const playlistImg_Context = useContext(PlaylistImgContext);
  const play_Context = useContext(PlayContext);
  const songAudioElement_Context = useContext(SongAudioElementContext);
  const progressBar_Context = useContext(ProgressBarContext);

  const nextSong_Context = useContext(NextSongContext);
  const prevSong_Context = useContext(PrevSongContext);
  const volume_Context = useContext(VolumeContext);
  const playlistTracks_Context = useContext(PlaylistTracks);
  const playlistIdI_Context = useContext(PlaylistIdI);

  return {
    songName_Context,
    albumName_Context,
    playlistImg_Context,
    play_Context,
    songAudioElement_Context,
    progressBar_Context,

    nextSong_Context,
    prevSong_Context,
    volume_Context,
    playlistTracks_Context,
    playlistIdI_Context,
  };
};

export default AppContext;
