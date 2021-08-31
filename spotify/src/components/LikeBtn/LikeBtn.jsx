import React from "react";

// (not) Liked
import liked from "../../assets/liked.png";
import notLiked from "../../assets/not_liked.png";

// CSS
import "./likeBtn.css";

export default function LikeBtn({ value }) {
  let [val, setVal] = React.useState(value);

  const handleClick = () => {
    setVal(!val);
  };

  return (
    <button className="like-btn" onClick={handleClick}>
      <img src={val ? liked : notLiked} alt="like" />
    </button>
  );
}
