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
export let SongNameContext = React.createContext();
export let AlbumNameContext = React.createContext();
export let PlaylistImgContext = React.createContext();
export let PlayContext = React.createContext();
export let SongAudioElementContext = React.createContext();

function App() {
  // Context States
  let [songName, setSongName] = React.useState();
  let [albumName, setAlbumName] = React.useState();
  let [playlistImg, setPlaylistImg] = React.useState();
  let [play, setPlay] = React.useState({ state: true, nowPlaying: null });
  let [songAudioElement, setSongAudioElement] = React.useState();

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
                  <PlaybackBar />
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
            {/* CONTEXT START */}
            <SongNameContext.Provider value={{ songName, setSongName }}>
              <AlbumNameContext.Provider value={{ albumName, setAlbumName }}>
                <PlaylistImgContext.Provider
                  value={{ playlistImg, setPlaylistImg }}
                >
                  <PlayContext.Provider value={{ play, setPlay }}>
                    <SongAudioElementContext.Provider
                      value={{ songAudioElement, setSongAudioElement }}
                    >
                      {/* CONTEXT ENDS */}
                      <PlaylistPage />
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
