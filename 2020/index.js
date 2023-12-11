const day4 = require("../2020/days/day4.js");
const fs = require('fs');

fs.readFile('inputs/day4/day4.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const day1Data = data.split(/\n\s*\n/);
  console.log('day1Data: ', day1Data)
  console.log(day4.partTwo(day1Data));
});