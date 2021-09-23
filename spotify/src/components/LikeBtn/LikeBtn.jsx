import React from "react";

// (not) Liked
import liked from "../../assets/liked.png";
import notLiked from "../../assets/not_liked.png";

// API
import { postLike } from "../../API/likedSongs";

// CSS
import "./likeBtn.css";

export default function LikeBtn({ id, value }) {
  let [val, setVal] = React.useState(value === 1 ? true : false);

  const handleClick = () => {
    postLike(id, !val).then((data) => {
      if (data.status === "success") setVal(!val);
    });
  };

  return (
    <button className="like-btn" onClick={handleClick}>
      <img src={val ? liked : notLiked} alt="like" />
    </button>
  );
}
