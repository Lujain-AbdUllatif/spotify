import { useContext } from "react";
import {
  SongNameContext,
  AlbumNameContext,
  PlaylistImgContext,
  PlayContext,
  SongAudioElementContext,
  SongDurationContext,
  SongChangedContext,
  NextSongContext,
} from "./App";

const AppContext = () => {
  const songName_Context = useContext(SongNameContext);
  const albumName_Context = useContext(AlbumNameContext);
  const playlistImg_Context = useContext(PlaylistImgContext);
  const play_Context = useContext(PlayContext);
  const songAudioElement_Context = useContext(SongAudioElementContext);
  const songDuration_Context = useContext(SongDurationContext);
  const songChanged_Context = useContext(SongChangedContext);
  const nextSong_Context = useContext(NextSongContext);

  return {
    songName_Context,
    albumName_Context,
    playlistImg_Context,
    play_Context,
    songAudioElement_Context,
    songDuration_Context,
    songChanged_Context,
    nextSong_Context,
  };
};

export default AppContext;
