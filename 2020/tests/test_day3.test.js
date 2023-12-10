const day3 = require('../days/day3');
const fs = require('fs');

test('day 3 validation', () => {
  fs.readFile('inputs/day3/day3.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    const day2Data = data.split("\n");

    expect(day3.partOne(day2Data)).toBe(270);
    expect(day3.partTwo(day2Data)).toBe(245);
  });
});

test('day 3 validation (example)', () => {
  fs.readFile('inputs/day3/day3Example.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    const day2Data = data.split("\n");

    expect(day3.partOne(day2Data)).toBe(7);
    expect(day3.partTwo(day2Data)).toBe(336);
  });
});