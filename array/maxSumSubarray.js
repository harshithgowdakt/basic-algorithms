function maxSum(arr) {
    let global_max = Number.MIN_SAFE_INTEGER;
    let local_max = 0;
    for (let i = 0; i < arr.length; i++) {
        local_max = Math.max(arr[i], local_max + arr[i]);
        if (local_max > global_max) {
            global_max = local_max;
        }
    }
    return global_max;
}

console.log(maxSum([-2, -3, 4, -1, -2, 1, 5, -3]));