const day1 = require("../2020/days/day1.js");
const day2 = require("../2020/days/day2.js");
const fs = require('fs');

fs.readFile('inputs/day1/day1pt1.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const day1Data = data.split("\n");
  console.log(day1.find2020ExpensesPt1(day1Data));
  console.log(day1.find2020ExpensesPt2(day1Data));
});

console.log('-----------')

fs.readFile('inputs/day2/day2Example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const day2Data = data.split("\n");
  console.log(day2.partOne(day2Data));
  console.log(day2.partTwo(day2Data));
});
