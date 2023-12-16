const partOne = (boardingPatterns) => {
    let highestId = 0;

    for (const pattern of boardingPatterns) {
        // convert to binary
        const toBinary = pattern.replace(/[F]/g, '0').replace(/[B]/g, '1').replace(/[R]/g, '1').replace(/[L]/g, '0');
        const fb = toBinary.slice(0, 7);
        const lr = toBinary.slice(7);

        const row = parseInt(fb, 2);
        const column = parseInt(lr, 2);

        const id = (8 * row) + column;
        
        if (id > highestId) {
            highestId = id;
        }
    }

    return highestId;
}

const partTwo = (boardingPatterns) => {
    const seatIds = []

    for (const pattern of boardingPatterns) {
        // convert to binary
        const toBinary = pattern.replace(/[F]/g, '0').replace(/[B]/g, '1').replace(/[R]/g, '1').replace(/[L]/g, '0');
        const fb = toBinary.slice(0, 7);
        const lr = toBinary.slice(7);

        const row = parseInt(fb, 2);
        const column = parseInt(lr, 2);

        const id = (8 * row) + column;
        seatIds.push(id);
    }

    return highestId;
}

module.exports = {
    partOne
}