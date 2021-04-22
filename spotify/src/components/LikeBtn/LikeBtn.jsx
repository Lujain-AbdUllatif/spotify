import React from "react";

// (not) Liked
import liked from "../../assets/liked.png";
import notLiked from "../../assets/not_liked.png";

// CSS
import "./likeBtn.css";

export default function LikeBtn({ cell }) {
  return (
    <button className="like-btn">
      <img src={cell.value ? liked : notLiked} />
    </button>
  );
}
