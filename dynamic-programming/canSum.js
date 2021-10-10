// is is possible to generate targetSum using the numbers in an array
// numbers will be allways positive and 
// exmpale 7, [2,3,4,5] should return true as we can generate 7 using 3 and 4;

function canSum(targetSum, numbers, memo = {}) {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return true;
    if (targetSum < 0) return false;

    for (let num of numbers) {
        let reminder = targetSum - num;
        if (canSum(reminder, numbers, memo)) {
            memo[targetSum] = true;
            return true;
        }
    }
    memo[targetSum] = false;
    return false;
}

console.log(canSum(7, [2, 3]));
console.log(canSum(7, [5, 3, 4, 7]));
console.log(canSum(7, [2, 4]));
console.log(canSum(8, [2, 3, 5]));
console.log(canSum(300, [7, 14]));
