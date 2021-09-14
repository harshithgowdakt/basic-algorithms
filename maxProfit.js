let startTime = [1, 2, 4, 5], endTime = [3, 4, 5, 6], profit = [20, 10, 30, 40]

let jobs = [{ start: 1, end: 3, profit: 10 }, { start: 2, end: 5, profit: 5 }, { start: 4, end: 6, profit: 12 }, { start: 4, end: 11, profit: 15 }, { start: 7, end: 14, profit: 2 }]
let maxProfitJobs = []

jobs = jobs.sort((a, b) => a.start - b.start);
maxProfitJobs.push(jobs[0]);

for (let i = 1; i < jobs.length; i++) {
    let previousJob = maxProfitJobs[maxProfitJobs.length - 1];
    if (jobs[i].start >= previousJob.end) {
        maxProfitJobs.push(jobs[i]);
    } else if (jobs[i].profit > previousJob.profit) {
        maxProfitJobs.pop();
        maxProfitJobs.push(jobs[i]);
    }
}

console.log(maxProfitJobs);
console.log(maxProfitJobs.reduce((a, b) => {
    return { profit: a.profit + b.profit }
}))