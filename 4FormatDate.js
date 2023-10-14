let formatDate = (date) => {
  let options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString(undefined, options);
};

console.log("Actual output: ", formatDate(new Date("2020-05-14")));
console.log("Expected output", "14 May 2020");
