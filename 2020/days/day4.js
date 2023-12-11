const partOne = (passportArray) => {
    let validPassports = 0;
    const fields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];

    for (const passport of passportArray) {
        const temp = passport.replace('\n', ' ')
        if (fields.every(x => temp.indexOf(x) > -1)) {
            validPassports++;
        }
    }

    return validPassports
}

const partTwo = (passportArray) => {
    let validPassports = 0;

    for (const passport of passportArray) {
        const temp = passport.replace(/\n/g, ' ');
        if (['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'].every(x => temp.indexOf(x) > -1)) {
            const fieldList = temp.split(' ');
            let isBadPassport = false;
            
            for (const element of fieldList) {
                const [field, value] = element.split(':');

                if (field === 'byr') {
                    const year = Number(value);
                    if (year < 1920 || year > 2002) {
                        isBadPassport = true;
                    }
                } else if (field === 'iyr') {
                    const year = Number(value);
                    if (year < 2010 || year > 2020) {
                        isBadPassport = true;
                    }
                } else if (field === 'eyr') {
                    const year = Number(value);
                    
                    if (year < 2020 || year > 2030) {
                        isBadPassport = true;
                    }
                } else if (field === 'hgt') {
                    const sliceIndex = value.length - 2;
                    const num = Number(value.slice(0, sliceIndex))
                    const units = value.slice(sliceIndex)

                    if (units === 'cm') {
                        if (num <= 150 || num >= 193) {
                            isBadPassport = true;
                        }
                    } else if (units === 'in') {
                        if (num <= 59 || num >= 76) {
                            isBadPassport = true;
                        }
                    }
                } else if (field === 'hcl') {
                    if (!new RegExp('#[0-9a-f]{6}').test(value)) {
                        isBadPassport = true;
                    }
                } else if (field === 'ecl') {
                    if (!['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(value)) {
                        isBadPassport = true;
                    }
                } else if (field === 'pid') {
                    if (!new RegExp('([0-9]){9}').test(value)) {
                        isBadPassport = true;
                    }
                }
            }

            if (!isBadPassport) {
                validPassports++;
            }
        }
    }

    return validPassports;
}

module.exports = {
    partOne,
    partTwo
}