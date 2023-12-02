const day1 = require("../2020/days/day1.js")
const fs = require('fs');

fs.readFile('inputs/day1pt1.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const day1pt1Data = data.split("\n");
  console.log(day1.find2020ExpensesPt1(day1pt1Data));
  console.log(day1.find2020ExpensesPt2(day1pt1Data));
});
