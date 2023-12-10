const partOne = (treePatterns) => {
    return calculateCollision(treePatterns, 1, 3);
}

const partTwo = (treePatterns) => {
    return calculateCollision(treePatterns, 1, 1) * partOne(treePatterns) * calculateCollision(treePatterns, 1, 5) * calculateCollision(treePatterns, 1, 7) * calculateCollision(treePatterns, 2, 1)
}

const calculateCollision = (trees, down, right) => {
    let treesEncountered = 0;
    let y = 0;
    for (let i = 0; i < trees.length; i += down) {
        let row = trees[i];
        if (row[y] === '#') {
            treesEncountered++;
        }
        // make sure to account if right will exceed row length, get the same index as if it were extended
        y = (y + right) % row.length
    }

    return treesEncountered;
}

module.exports = {
    partOne,
    partTwo
}