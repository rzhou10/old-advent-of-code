const day5 = require('../days/day5');
const fs = require('fs');

test('day 1 validation', () => {
  fs.readFile('inputs/day5/day5.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    const day5Data = data.split("\n");

    expect(day5.partOne(day5Data)).toBe(3);
    // expect(day5.find2020ExpensesPt2(day5Data)).toBe(46584630);
  });
});

test('day 1 validation (example)', () => {
  fs.readFile('inputs/day5/day5Example.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    const day5Data = data.split("\n");

    expect(day5.partOne(day5Data)).toBe(357);
    // expect(day5.find2020ExpensesPt2(day5Data)).toBe(241861950);
  });
});