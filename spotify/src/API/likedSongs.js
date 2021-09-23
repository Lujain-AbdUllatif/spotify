const access_token_headers = {
  "user-access-token": "d8998be7-5617-45f4-838c-0479a67adde3",
};

export function likedSongs() {
  return fetch("https://api.sprintt.co/spotify/liked_tracks", {
    headers: access_token_headers,
  })
    .then((response) => response.json())
    .catch((err) => {
      console.log(err);
      return "Something went wrong";
    });
}

//
export function postLike(id, val) {
  return fetch(
    `https://api.sprintt.co/spotify/liked_tracks/${id}?status=${val}`,
    {
      headers: access_token_headers,
      method: "POST",
    }
  )
    .then((response) => response.json())
    .catch((err) => {
      console.log(err);
      return "Something went wrong";
    });
}
