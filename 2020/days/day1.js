const find2020ExpensesPt1 = (expenseReport) => {
  let result = 0;
  for (let i in expenseReport) {
    for (let j in expenseReport) {
      if (Number(expenseReport[i]) + Number(expenseReport[j]) === 2020) {
        result = Number(expenseReport[i]) * Number(expenseReport[j]);
        break;
      }
    }
  }

  return result;
}

// this doesn't work, I'm going to find a better way to write this function considering it's 3 nested loops
// over a huge data set
const find2020ExpensesPt2 = (expenseReport) => {
  let result = 0;

  for (let i in expenseReport) {
    for (let j in expenseReport) {
      for (let k in expenseReport) {
        if ((Number(expenseReport[i]) + Number(expenseReport[j]) + Number(expenseReport[k])) === 2020) {
          result = Number(expenseReport[i]) * Number(expenseReport[j]) * Number(expenseReport[k]);
          break;
        }
      }
    }
  }

  return result;
}

module.exports = {
  find2020ExpensesPt1,
  find2020ExpensesPt2
}