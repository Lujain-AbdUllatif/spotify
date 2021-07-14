import React from "react";

// (not) Liked
import liked from "../../assets/liked.png";
import notLiked from "../../assets/not_liked.png";

// API
import postLike from "../../API/like";

// CSS
import "./likeBtn.css";

export default function LikeBtn({ value, id }) {
  let [val, setVal] = React.useState(value);

  const handleClick = () => {
    postLike(id, val ? false : true).then((data) => {
      if (data.status == "success") setVal(!val);
    });
  };

  return (
    <button className="like-btn" onClick={handleClick}>
      <img src={val ? liked : notLiked} alt="like" />
    </button>
  );
}
