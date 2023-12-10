const day2 = require('../days/day2');
const fs = require('fs');

test('day 2 validation', () => {
  fs.readFile('inputs/day2/day2.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    const day2Data = data.split("\n");

    expect(day2.partOne(day2Data)).toBe(600);
    expect(day2.partTwo(day2Data)).toBe(245);
  });
});

test('day 2 validation (example)', () => {
  fs.readFile('inputs/day2/day2Example.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    const day2Data = data.split("\n");

    expect(day2.partOne(day2Data)).toBe(2);
    expect(day2.partTwo(day2Data)).toBe(1);
  });
});