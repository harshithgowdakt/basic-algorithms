function contains(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) return true;
    }
    return false;
}

function isValidString(arr) {
    if (arr.length > 2) {
        return false;
    } else if (arr.length === 1) {
        return true;
    } else {
        arr = arr.sort((a, b) => {
            return b - a;
        });
        return (arr[0] - arr[1] < 2);
    }
}

function validateSting(inputString) {
    let alphabetCount = [];
    let uniqueAlphabet = [];
    for (const character of inputString) {
        if (alphabetCount[character] === undefined) {
            alphabetCount[character] = 1;
        } else {
            alphabetCount[character] += 1;
        }
    }
    console.log(alphabetCount);
    for (key in alphabetCount) {
        if (!contains(uniqueAlphabet, alphabetCount[key])) {
            uniqueAlphabet.push(alphabetCount[key]);
        }
    }
    return isValidString(uniqueAlphabet);
}
console.log(validateSting("PQPQQQPSSSS"));