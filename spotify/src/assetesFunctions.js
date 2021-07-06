// milliSeconds to Minutes
export const sec2min = (num) => {
  let str =
    (parseInt(num / 60000) === 0
      ? "00"
      : (num / 60000).toString().split(".")[0].length === 1
      ? "0" + (num / 60000).toString().split(".")[0]
      : (num / 60000).toString().split(".")[0]) +
    ":" +
    (num % 60000 < 10000
      ? num % 60000 < 1000
        ? "00"
        : "0" + (num % 60000).toString().slice(0, -3)
      : (num % 60000).toString().slice(0, 2));
  return str;
};
