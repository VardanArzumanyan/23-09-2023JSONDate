function getDay(str) {
  let date = new Date(str);
  let options = { weekday: "long" };
  let dayOfWeek = date.toLocaleString("en-US", options);
  return dayOfWeek;
}
console.log(getDay("12/07/2016"));