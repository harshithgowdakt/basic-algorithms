// check hom many wasys we can construct target string using word bank
// words can be reused

function countConstruct(targetString, wordBank, memo = {}) {
    if (targetString in memo) return memo[targetString];
    if (targetString.length === 0) return 1;

    let count = 0;
    for (let str of wordBank) {
        if (targetString.indexOf(str) === 0) {
            let subString = targetString.slice(str.length);
            let result = countConstruct(subString, wordBank, memo);
            count += result;
        }
    }
    memo[targetString] = count;
    return count;
}

console.log(countConstruct('abcd', ['a', 'b', 'c', 'd', 'abcd', 'ab', 'cd', 'abc', 'bcd']));
console.log(countConstruct('abcdef', ['ab', 'abctrue', 'cd', 'def', 'abcd']));
console.log(countConstruct('abcdedewq', ['awd', 'qwdqw', 'qwdw', 'asd', 'add']));
console.log(countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e']));

