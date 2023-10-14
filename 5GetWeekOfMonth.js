const getWeekOfMonth = (date) => {
  let startOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  let dayOfWeek = startOfMonth.getDay();
  let dayOfMonth = date.getDate();

  let adjustedDate =
    dayOfMonth + (dayOfWeek >= 5 ? dayOfWeek - 5 : dayOfWeek + 2);
  return Math.ceil(adjustedDate / 7);
};

const result = getWeekOfMonth(new Date(2017, 10, 9));
console.log(result);
