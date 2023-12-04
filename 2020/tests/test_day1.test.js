const day1 = require('../days/day1');
const fs = require('fs');

// TODO: Fix unexpected token somwwhere
test('day 1 validation', () => {
    fs.readFile('../inputs/day1pt1.txt', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
      
        const day1pt1Data = data.split("\n");
      
        expect(day1.find2020ExpensesPt1(day1pt1Data)).toBe(1014171);
      });
  });