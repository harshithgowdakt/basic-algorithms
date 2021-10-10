// is is possible to generate targetSum using the numbers in an array
// numbers will be allways positive and 
// exmpale 7, [2,3,4,5, 7] should return [7] as we can generate 7 using  7;

function bestSum(targetSum, numbers, memo = {}) {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    for (let num of numbers) {
        let remainder = targetSum - num;
        let result = bestSum(remainder, numbers, memo);
        if (result !== null) {
            memo[targetSum] = [...result, num];
            return memo[targetSum];
        }
    }
    memo[targetSum] = null;
    return null;
}

function bestSumApproach2(targetSum, numbers, memo = {}) {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    let shortestCombination = null;
    for (let num of numbers) {
        let remainder = targetSum - num;
        let result = bestSumApproach2(remainder, numbers, memo);
        if (result !== null) {
            let combination = [...result, num];
            if (shortestCombination === null
                || combination.length < shortestCombination.length) {
                shortestCombination = combination;
                memo[targetSum] = shortestCombination;
            }
        }
    }
    return shortestCombination;
}

console.log("First approach");
console.log(bestSum(7, [2, 3].sort((a, b) => b - a)));
console.log(bestSum(7, [5, 3, 4, 7].sort((a, b) => b - a)));
console.log(bestSum(7, [2, 1, 3, 4, 5, 6, 8].sort((a, b) => b - a)));
console.log(bestSum(8, [2, 3, 5].sort((a, b) => b - a)));
console.log(bestSum(300, [7, 14].sort((a, b) => b - a)));

console.log("Second approach");
console.log(bestSumApproach2(7, [1, 2, 3, 4, 5, 6]));
console.log(bestSumApproach2(8, [1, 2, 3, 4, 5, 6, 7]));
console.log(bestSumApproach2(9, [2, 1, 3, 4, 5, 6, 8, 7]));
console.log(bestSumApproach2(10, [2, 3, 5, 6, 4]));
console.log(bestSumApproach2(300, [7, 14, 1]));