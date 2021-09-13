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
export const ProgressBarContext = React.createContext();
export const NextSongContext = React.createContext();
export const PrevSongContext = React.createContext();
export const VolumeContext = React.createContext();
export const PlaylistTracks = React.createContext();
export const PlaylistIdI = React.createContext();

function App() {
  // Context States
  const [songName, setSongName] = React.useState();
  const [albumName, setAlbumName] = React.useState();
  const [playlistImg, setPlaylistImg] = React.useState();
  const [play, setPlay] = React.useState({
    state: true,
    nowPlayingPlaylist: null,
  });
  const [songAudioElement, setSongAudioElement] = React.useState();
  const [progressBar, setProgressBar] = React.useState();

  const [nextSong, setNextSong] = React.useState();
  const [prevSong, setPrevSong] = React.useState();
  const [volume, setVolume] = React.useState();
  const [playlistTracks, setPlaylistTracks] = React.useState();
  const [playlistIdI, setPlaylistIdI] = React.useState();

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
                  <ProgressBarContext.Provider
                    value={{ progressBar, setProgressBar }}
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
                          <PlaylistTracks.Provider
                            value={{ playlistTracks, setPlaylistTracks }}
                          >
                            <PlaylistIdI.Provider
                              value={{ playlistIdI, setPlaylistIdI }}
                            >
                              {/**********/}
                              <PlaybackBar />
                              {/**********/}
                            </PlaylistIdI.Provider>
                          </PlaylistTracks.Provider>
                        </VolumeContext.Provider>
                      </PrevSongContext.Provider>
                    </NextSongContext.Provider>
                  </ProgressBarContext.Provider>
                </SongAudioElementContext.Provider>
              </PlayContext.Provider>
            </PlaylistImgContext.Provider>
          </AlbumNameContext.Provider>
        </SongNameContext.Provider>
        {/* ROUTES */}
        <Switch>
          {/* HOME */}
          <Route exact path="/">
            <AlbumNameContext.Provider value={{ albumName, setAlbumName }}>
              <PlaylistImgContext.Provider
                value={{ playlistImg, setPlaylistImg }}
              >
                <SongNameContext.Provider value={{ songName, setSongName }}>
                  <PlaylistTracks.Provider
                    value={{ playlistTracks, setPlaylistTracks }}
                  >
                    <SongAudioElementContext.Provider
                      value={{ songAudioElement, setSongAudioElement }}
                    >
                      <PlayContext.Provider value={{ play, setPlay }}>
                        <PlayContext.Provider value={{ play, setPlay }}>
                          <PlaylistIdI.Provider
                            value={{ playlistIdI, setPlaylistIdI }}
                          >
                            {/**********/}
                            <Home />
                            {/**********/}
                          </PlaylistIdI.Provider>
                        </PlayContext.Provider>
                      </PlayContext.Provider>
                    </SongAudioElementContext.Provider>
                  </PlaylistTracks.Provider>
                </SongNameContext.Provider>
              </PlaylistImgContext.Provider>
            </AlbumNameContext.Provider>
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
                      <ProgressBarContext.Provider
                        value={{ progressBar, setProgressBar }}
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
                              <PlaylistTracks.Provider
                                value={{ playlistTracks, setPlaylistTracks }}
                              >
                                <PlaylistIdI.Provider
                                  value={{ playlistIdI, setPlaylistIdI }}
                                >
                                  {/**********/}
                                  <PlaylistPage />
                                  {/**********/}
                                </PlaylistIdI.Provider>
                              </PlaylistTracks.Provider>
                            </VolumeContext.Provider>
                          </PrevSongContext.Provider>
                        </NextSongContext.Provider>
                      </ProgressBarContext.Provider>
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
