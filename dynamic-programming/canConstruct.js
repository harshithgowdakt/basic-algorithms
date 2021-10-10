function canConstruct(targetString, wordBank, memo = {}) {
    if (targetString in memo) return targetString[memo];
    if (targetString.length === 0) return true;

    for (let str of wordBank) {
        if (targetString.indexOf(str) === 0) {
            let subString = targetString.slice(str.length, targetString.length);
            if (canConstruct(subString, wordBank, memo) === true) {
                memo[targetString] = true;
                return true;
            }
        }
    }
    memo[targetString] = false;
    return false;
}
console.log(canConstruct('abcd', ['a', 'b', 'c', 'd']));
console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(canConstruct('abcdedewq', ['awd', 'qwdqw', 'qwdw', 'asd', 'add']));

