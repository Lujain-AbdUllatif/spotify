const access_token = "d8998be7-5617-45f4-838c-0479a67adde3";

const getEncryptedToken = (token) => {
  let date = new Date();
  let utcTime = `${date.getUTCHours()}:${date.getUTCMinutes()}:${date.getUTCSeconds()}`;
  let stringToEncrypt = `${token}===${utcTime}`;
  return btoa(stringToEncrypt);
};

const access_token_encrypted = getEncryptedToken(access_token);

export default function songAudio(song_id) {
  return `https://api.sprintt.co/spotify/play/${song_id}?access=${access_token_encrypted}`;
}
