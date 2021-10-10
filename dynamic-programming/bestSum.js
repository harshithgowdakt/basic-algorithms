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

console.log(bestSum(7, [2, 3].sort((a, b) => b - a)));
console.log(bestSum(7, [5, 3, 4, 7].sort((a, b) => b - a)));
console.log(bestSum(7, [2, 1, 3, 4, 5, 6, 8].sort((a, b) => b - a)));
console.log(bestSum(8, [2, 3, 5].sort((a, b) => b - a)));
console.log(bestSum(300, [7, 14].sort((a, b) => b - a)));