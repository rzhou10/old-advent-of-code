const day5 = require("../2020/days/day5.js");
const fs = require('fs');

fs.readFile('inputs/day5/day5Example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const day1Data = data.split("\n");
  // console.log('day1Data: ', day1Data)
  console.log(day5.partOne(day1Data));
});