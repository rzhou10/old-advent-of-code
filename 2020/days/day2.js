const partOne = (passwordList) => {
    let validPasswords = 0;
    for (let password of passwordList) {
        let [numbers, letter, word] = password.split(' ');
        numbers = numbers.trim();
        letter = letter.replace(':', '').trim();
        word = word.trim();
        const [min, max] = numbers.split('-').map(x => Number(x));

        let currentCount = 0;
        for (const char of word) {
            if (char === letter) {
                currentCount++;
            }
        }

        if (currentCount >= min && currentCount <= max) {
            validPasswords++;
        }
    }

    return validPasswords;
}

const partTwo = (passwordList) => {
    let validPasswords = 0;
    for (let password of passwordList) {
        let [numbers, letter, word] = password.split(' ');
        numbers = numbers.trim();
        letter = letter.replace(':', '').trim();
        word = word.trim();
        const [firstNum, secondNum] = numbers.split('-').map(x => Number(x));

        if ((word[firstNum - 1] === letter && word[secondNum - 1] !== letter) || (word[firstNum - 1] !== letter && word[secondNum - 1] === letter)) {
            validPasswords++;
        }
    }

    return validPasswords;
}

module.exports = {
    partOne,
    partTwo
}