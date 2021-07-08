import React, { useEffect } from "react";

// API
import { recentlyPlayed, featuredPlaylists, mood } from "../../API/homeAPI";

// Components
import Carousel from "../../components/Carousel/Carousel";

// CSS
import "./home.css";

export default function Home() {
  let [recentlyPlayedData, setRecentlyPlayedData] = React.useState();
  let [featuredPlaylistsData, setFeaturedPlaylistsData] = React.useState();
  let [moodData, setMoodData] = React.useState();

  useEffect(() => {
    recentlyPlayed().then((data) => setRecentlyPlayedData(data));
    featuredPlaylists().then((data) => setFeaturedPlaylistsData(data));
    mood().then((data) => setMoodData(data));
  }, []);

  return (
    <div className="home-container">
      <div className="home-div">
        {!recentlyPlayedData ? (
          <Carousel
            title="Recently Played"
            data={recentlyPlayedData}
          ></Carousel>
        ) : (
          ""
        )}

        <Carousel
          title="Featured playlists"
          data={featuredPlaylistsData}
        ></Carousel>

        <Carousel title="Mood" data={moodData}></Carousel>
      </div>
    </div>
  );
}
