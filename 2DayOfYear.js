function dayOfYear(str) {
  let [month, day, year] = str.split("/");
  let date = new Date(year, month - 1, day);
  let days =
    Math.floor(
      (date.getTime() - new Date(year, 0, 1).getTime()) / (24 * 60 * 60 * 1000)
    ) + 1;
  return days;
}

console.log(dayOfYear("12/13/2020"));
