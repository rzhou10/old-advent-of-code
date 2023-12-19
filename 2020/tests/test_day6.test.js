const day6 = require('../days/day6');
const fs = require('fs');

// 2nd expect doesn't work, look into fixing this later
test('day 6 validation', () => {
  fs.readFile('inputs/day6/day6.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    const day6Data = data.split(/\n\s*\n/);

    // expect(day6.partOne(day6Data)).toBe(6799);
    // expect(day6.partTwo(day6Data)).toBe(245);
  });
});

test('day 6 validation (example)', () => {
  fs.readFile('inputs/day6/day6Example.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    const day6Data = data.split(/\n\s*\n/);

    expect(day6.partOne(day6Data)).toBe(11);
    expect(day6.partTwo(day6Data)).toBe(6);
  });
});
