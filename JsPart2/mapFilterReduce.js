/*
1. Map
Purpose - Transforms each item
Output - New Array (same length)
return new item

2. filter()
Purpose - Keeps only items that pass a condition
Output - New array (<= length)
Return true/false

3. reduce()
Purpose - Accumulates array into a single value
Output - Single value
Return new accumulator value
*/

// map()
const nums = [1, 2, 3, 4];
const newnums = nums.map((n) => n * 2);
// console.log(newnums);

// fitler()
const even = nums.filter((n) => n % 2 == 0);
console.log(even);

// reduce()
const total = nums.reduce((acc, curr) => acc + curr, 0);
console.log(total);


