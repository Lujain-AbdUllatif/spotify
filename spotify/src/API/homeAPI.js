const access_token_headers = {
  "user-access-token": "d8998be7-5617-45f4-838c-0479a67adde3",
};

export function recentlyPlayed() {
  return fetch(
    "https://api.sprintt.co/spotify/recently_played_playlists?limit=10",
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

export function featuredPlaylists() {
  return fetch("https://api.sprintt.co/spotify/featured_playlists?limit=10", {
    headers: access_token_headers,
  })
    .then((response) => response.json())
    .catch((err) => {
      console.log(err);
      return "Something went wrong";
    });
}

export function mood() {
  return fetch("https://api.sprintt.co/spotify/mood_playlists?limit=10", {
    headers: access_token_headers,
  })
    .then((response) => response.json())
    .catch((err) => {
      console.log(err);
      return "Somthing went wrong";
    });
}
