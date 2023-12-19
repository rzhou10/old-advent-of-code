const partOne = (answerList) => {
    let validAnswers = [];
    for (let answer of answerList) {
        const filtered = answer.replace(/\n/g, '');
        let letters = [];
        for (let letter of filtered) {
            if (!letters.includes(letter)) {
                letters.push(letter);
            }
        }
        validAnswers.push(letters.length);
    }

    return validAnswers.reduce((sum, a) => sum + a, 0);
}

// attempt at part 2 doesn't work
const partTwo = (answerList) => {
    let allAnswered = [];
    for (let answer of answerList) {
        const filtered = answer.replace(/\n/g, '');
        // try to create a set to see where answers are duplicated,
        // have tried an intersection before but probably messed that up
        let duplicatedLetters = new Set();
        let temp = new Set();
        for (const letter of filtered) {
            if (temp.has(letter)){
                duplicatedLetters.add(letter);
            } else {
                temp.add(letter)
            }
        }
        allAnswered.push(duplicatedLetters.size)
    }

    return allAnswered.reduce((sum, a) => sum + a, 0);
}

module.exports = {
    partOne,
    partTwo
}