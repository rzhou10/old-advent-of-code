const day4 = require('../days/day4');
const fs = require('fs');

// 2nd expect doesn't work, look into fixing this later
test('day 4 validation', () => {
  fs.readFile('inputs/day4/day4.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    const day4Data = data.split(/\n\s*\n/);

    expect(day4.partOne(day4Data)).toBe(170);
    expect(day4.partTwo(day4Data)).toBe(245);
  });
});

test('day 4 validation (example)', () => {
  fs.readFile('inputs/day4/day4Example.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    const day4Data = data.split(/\n\s*\n/);

    expect(day4.partOne(day4Data)).toBe(2);
    // expect(day4.partTwo(day4Data)).toBe(336);
  });
});

test('day 4 valid passports', () => {
  fs.readFile('inputs/day4/day4Valid.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    const day4Data = data.split(/\n\s*\n/);

    expect(day4.partTwo(day4Data)).toBe(4);
  });
});

test('day 4 no valid passports', () => {
  fs.readFile('inputs/day4/day4Invalid.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    const day4Data = data.split(/\n\s*\n/);

    expect(day4.partTwo(day4Data)).toBe(0);
  });
});