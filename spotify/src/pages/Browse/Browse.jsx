import React, { useEffect } from "react";

// Components
import Genre from "../../components/Genre/Genre";

// API
import { genreAPI } from "../../API/genreAPI";

// CSS
import "./browse.css";

export default function Browse() {
  const [genre, setGenres] = React.useState();

  useEffect(() => {
    genreAPI().then((data) => {
      setGenres(data.categories);
      // console.log("######## DATA ######## ", data.categories);
    });
  }, []);

  let genresGroups = [];

  if (genre) {
    const genres = genre?.map((genre, index) => {
      return (
        <Genre
          imgSrc={genre.image_url}
          title={genre.category_name}
          id={genre.category_id}
          key={index}
        />
      );
    });

    for (let i = 0, j = genres.length; i < j; i += 4) {
      genresGroups.push(genres.slice(i, i + 4));
    }
  }

  return (
    <div className="browse-container">
      <div className="browse-div">
        <p className="browse-title"> Genres </p>
        {genre ? (
          <div className="browse-genres">
            {genresGroups.map((group, index) => {
              return (
                <div className="browse-genres-group" key={index}>
                  {group}
                </div>
              );
            })}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
