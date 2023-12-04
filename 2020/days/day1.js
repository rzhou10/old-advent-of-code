const find2020ExpensesPt1 = (expenseReport) => {
  for (let firstNum of expenseReport) {
    for (let secondNum of expenseReport) {
      if (Number(firstNum) + Number(secondNum) === 2020) {
        return Number(firstNum) * Number(secondNum);
      }
    }
  }
}

// I'm honestly not sure why this doesn't work considering 
const find2020ExpensesPt2 = (expenseReport) => {
  for (let i = 0; i < expenseReport.length - 1; i += 1) {
    for (let j = i + 1; j < expenseReport.length; j += 1) {
      for (let k = i + 1; k < expenseReport.length; k += 1) {
        if (expenseReport[i] + expenseReport[j] + expenseReport[k] == 2020) {
          return expenseReport[i] * expenseReport[j] * expenseReport[k];
        }
      }
    }
  }
}

module.exports = {
  find2020ExpensesPt1,
  find2020ExpensesPt2
}