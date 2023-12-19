const day6 = require("../2020/days/day6.js");
const fs = require('fs');

fs.readFile('inputs/day6/day6Example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const day1Data = data.split(/\n\s*\n/);
  // console.log('day1Data: ', day1Data)
  console.log(day6.partTwo(day1Data));
});