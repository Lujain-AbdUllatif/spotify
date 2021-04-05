import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// pages
import Home from "./pages/Home/Home";
import Browse from "./pages/Browse/Browse";
import LikedSongs from "./pages/LikedSongs/LikedSongs";
// CSS
import "./App.css";

function App() {
  return (
    <Router>
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
      </Switch>
    </Router>
  );
}

export default App;
