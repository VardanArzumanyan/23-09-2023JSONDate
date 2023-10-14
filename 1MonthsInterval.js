const monthNumber = {
  0: "January",
  1: "February",
  2: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December",
};

function monthsInterval(dateStart, dateEnd) {
  let arr = [];

  let month1 = dateStart.getMonth();
  let month2 = dateEnd.getMonth();
  let year1 = dateStart.getFullYear();
  let year2 = dateEnd.getFullYear();

  if (year1 === year2) {
    while (month1 <= month2) {
      arr.push(monthNumber[month1]);
      month1++;
    }
    return arr;
  } else {
    while (month1 <= 11) {
      arr.push(monthNumber[month1]);
      month1++;
    }
    let i = 0;
    while (i <= month2) {
      if (arr.includes(monthNumber[i])) {
        return arr;
      } else {
        arr.push(monthNumber[i]);
        i++;
      }
    }
    return arr;
  }
}
let january = new Date(2017, 11, 1);
let march = new Date(2018, 0, 1);

console.log(monthsInterval(january, march));
