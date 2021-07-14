const access_token_headers = {
  "user-access-token": "d8998be7-5617-45f4-838c-0479a67adde3",
};

export default function postLike(track_id, is_liked) {
  return fetch(
    `https://api.sprintt.co/spotify/liked_tracks/${track_id}?status=${is_liked}`,
    { method: "POST", headers: access_token_headers }
  )
    .then((response) => response.json())
    .catch((err) => {
      console.log(err);
      return "Something went wrong";
    });
}
