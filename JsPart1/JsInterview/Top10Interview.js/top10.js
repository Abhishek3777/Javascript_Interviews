const { set } = require("mongoose");

// Q1 Flatten a 1D Array
function flattenArray(arr) {
    let result = [];
    for (let item of arr) {
        if (Array.isArray(item)) {
            result.push(...flattenArray(item));
        }
        else {
            result.push(item);
        }
    }
    return result;
}

let arr = [1, [2, 3], [4, 5]];
console.log(flattenArray(arr));

// Q2 Remove duplicates
let dup = [1, 2, 2, 3, 4, 4];
let ans = [];
ans.push(dup[0]);

for (let i = 1; i < dup.length; i++) {
    if (dup[i] == dup[i - 1]) continue;
    else
        ans.push(dup[i]);
}
console.log(ans);

// using set
let uniqueArr = [...new Set(dup)];
console.log(uniqueArr);


