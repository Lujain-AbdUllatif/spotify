import React from "react";

import NavBar from "../../components/NavBar/NavBar";

import "./home.css";

export default function Home() {
  return (
    <div className="home-container">
      <NavBar homeState={true}></NavBar>
      <div className="home-div">Home Page</div>
    </div>
  );
}
