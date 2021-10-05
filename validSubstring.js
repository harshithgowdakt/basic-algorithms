function getMaxOccurrences(components, minLength, maxLength, maxUnique) {
    let componentsArr = components.split("");
    let combinationsCount = {};
    while (minLength <= maxLength) {
        for (let i = 0; i < componentsArr.length; i++) {
            let substring = "";
            for (let j = i; j < (i + minLength); j++) {
                substring += componentsArr[j];
            }
            if (substring.length === minLength) {
                if (combinationsCount[substring]) {
                    combinationsCount[substring] += 1;
                } else {
                    combinationsCount[substring] = 1;
                }
            }
        }
        minLength += 1;
    }
    console.log(combinationsCount);
    let values = Object.values(combinationsCount);
    return values.reduce((a, b) => Math.max(a, b), 0);
}

console.log(getMaxOccurrences("aabcde", 2, 4, 26))