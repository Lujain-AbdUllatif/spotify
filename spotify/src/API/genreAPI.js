const access_token_headers = {
  "user-access-token": "d8998be7-5617-45f4-838c-0479a67adde3",
};

export function genreAPI() {
  return fetch("https://api.sprintt.co/spotify/categories", {
    headers: access_token_headers,
  })
    .then((response) => response.json())
    .catch((err) => {
      console.log(err);
      return "Something went wrong";
    });
}

export function genrePlaylistsAPI(genre_id) {
  return fetch(
    `https://api.sprintt.co/spotify/category_playlists/${genre_id}`,
    {
      headers: access_token_headers,
    }
  )
    .then((response) => response.json())
    .catch((err) => {
      console.log(err);
      return "Something went wrong";
    });
}
