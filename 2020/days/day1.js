const find2020ExpensesPt1 = (expenseReport) => {
  for (let firstNum of expenseReport) {
    for (let secondNum of expenseReport) {
      if (Number(firstNum) + Number(secondNum) === 2020) {
        return Number(firstNum) * Number(secondNum);
      }
    }
  }
}

const find2020ExpensesPt2 = (expenseReport) => {
  for (let i = 0; i < expenseReport.length - 2; i += 1) {
    for (let j = i + 1; j < expenseReport.length - 1; j += 1) {
      for (let k = j + 1; k < expenseReport.length; k += 1) {
        if (Number(expenseReport[i]) + Number(expenseReport[j]) + Number(expenseReport[k]) == 2020) {
          return Number(expenseReport[i]) * Number(expenseReport[j]) * Number(expenseReport[k]);
        }
      }
    }
  }
}

module.exports = {
  find2020ExpensesPt1,
  find2020ExpensesPt2
}