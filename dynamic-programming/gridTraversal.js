// find number of ways one can travel from start to end in grid of m*n;
// one can move only to down or rigth;
// in 2*2 there are 2 ways to reach from start to end;

// (1, 0) = 0, (1,1) = 1, (*, 0)/(0, *) = 0;

function gridTraversal(m, n, memo = {}) {
    if (memo[`${m},${n}`]) return memo[`${m},${n}`];
    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;

    memo[`${m},${n}`] = gridTraversal(m - 1, n, memo) + gridTraversal(m, n - 1, memo);
    return memo[`${m},${n}`];
}

console.log(gridTraversal(10, 10));