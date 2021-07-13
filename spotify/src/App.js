import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Navbar + PlaybackBar
import NavBar from "./components/NavBar/NavBar";
import PlaybackBar from "./components/PlaybackBar/PlaybackBar";
// pages
import Home from "./pages/Home/Home";
import Browse from "./pages/Browse/Browse";
import LikedSongs from "./pages/LikedSongs/LikedSongs";
import PlaylistPage from "./pages/PlaylistPage/PlaylistPage";

// CSS
import "./App.css";

// Creating Contexts
export const SongNameContext = React.createContext();
export const AlbumNameContext = React.createContext();
export const PlaylistImgContext = React.createContext();
export const PlayContext = React.createContext();
export const SongAudioElementContext = React.createContext();
export const SongDurationContext = React.createContext();
export const SongChangedContext = React.createContext();
export const NextSongContext = React.createContext();
export const PrevSongContext = React.createContext();
export const VolumeContext = React.createContext();

function App() {
  // Context States
  const [songName, setSongName] = React.useState();
  const [albumName, setAlbumName] = React.useState();
  const [playlistImg, setPlaylistImg] = React.useState();
  const [play, setPlay] = React.useState({ state: true, nowPlaying: null });
  const [songAudioElement, setSongAudioElement] = React.useState();
  const [songDuration, setSongDuration] = React.useState();
  const [songChanged, setSongChanged] = React.useState(false);
  const [nextSong, setNextSong] = React.useState();
  const [prevSong, setPrevSong] = React.useState();
  const [volume, setVolume] = React.useState();

  return (
    <div>
      <Router>
        {/* NAV-BAR */}
        <NavBar />
        {/* PLAYBACK-BAR */}
        <SongNameContext.Provider value={{ songName, setSongName }}>
          <AlbumNameContext.Provider value={{ albumName, setAlbumName }}>
            <PlaylistImgContext.Provider
              value={{ playlistImg, setPlaylistImg }}
            >
              <PlayContext.Provider value={{ play, setPlay }}>
                <SongAudioElementContext.Provider
                  value={{ songAudioElement, setSongAudioElement }}
                >
                  <SongDurationContext.Provider
                    value={{ songDuration, setSongDuration }}
                  >
                    <SongChangedContext.Provider
                      value={{ songChanged, setSongChanged }}
                    >
                      <NextSongContext.Provider
                        value={{
                          nextSong,
                          setNextSong,
                        }}
                      >
                        <PrevSongContext.Provider
                          value={{
                            prevSong,
                            setPrevSong,
                          }}
                        >
                          <VolumeContext.Provider
                            value={{
                              volume,
                              setVolume,
                            }}
                          >
                            {/**********/}
                            <PlaybackBar />
                            {/**********/}
                          </VolumeContext.Provider>
                        </PrevSongContext.Provider>
                      </NextSongContext.Provider>
                    </SongChangedContext.Provider>
                  </SongDurationContext.Provider>
                </SongAudioElementContext.Provider>
              </PlayContext.Provider>
            </PlaylistImgContext.Provider>
          </AlbumNameContext.Provider>
        </SongNameContext.Provider>
        {/* ROUTES */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/browse">
            <Browse />
          </Route>
          <Route path="/liked-songs">
            <LikedSongs />
          </Route>
          <Route path="/playlist">
            <SongNameContext.Provider value={{ songName, setSongName }}>
              <AlbumNameContext.Provider value={{ albumName, setAlbumName }}>
                <PlaylistImgContext.Provider
                  value={{ playlistImg, setPlaylistImg }}
                >
                  <PlayContext.Provider value={{ play, setPlay }}>
                    <SongAudioElementContext.Provider
                      value={{ songAudioElement, setSongAudioElement }}
                    >
                      <SongDurationContext.Provider
                        value={{ songDuration, setSongDuration }}
                      >
                        <SongChangedContext.Provider
                          value={{ songChanged, setSongChanged }}
                        >
                          <NextSongContext.Provider
                            value={{
                              nextSong,
                              setNextSong,
                            }}
                          >
                            <PrevSongContext.Provider
                              value={{
                                prevSong,
                                setPrevSong,
                              }}
                            >
                              <VolumeContext.Provider
                                value={{
                                  volume,
                                  setVolume,
                                }}
                              >
                                {/**********/}
                                <PlaylistPage />
                                {/**********/}
                              </VolumeContext.Provider>
                            </PrevSongContext.Provider>
                          </NextSongContext.Provider>
                        </SongChangedContext.Provider>
                      </SongDurationContext.Provider>
                    </SongAudioElementContext.Provider>
                  </PlayContext.Provider>
                </PlaylistImgContext.Provider>
              </AlbumNameContext.Provider>
            </SongNameContext.Provider>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
