// is is possible to generate targetSum using the numbers in an array
// numbers will be allways positive and 
// exmpale 7, [2,3,4,5, 7] should return [3,4] or [7] as we can generate 7 using 3 and 4 or 7;

function howSum(targetSum, numbers, memo = {}) {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    for (let num of numbers) {
        let remainder = targetSum - num;
        let result = howSum(remainder, numbers, memo);
        if (result !== null) {
            memo[targetSum] = [...result, num];
            return memo[targetSum];
        }
    }
    memo[targetSum] = null;
    return null;
}

console.log(howSum(7, [2, 3]));
console.log(howSum(7, [5, 3, 4, 7]));
console.log(howSum(7, [2, 4]));
console.log(howSum(8, [2, 3, 5]));
console.log(howSum(300, [7, 14]));