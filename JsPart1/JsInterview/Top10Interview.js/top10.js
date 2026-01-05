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

// Reverse a string in js
// i) using built in method
let str = "hello world";
let revStr = str.split("").reverse().join("");
console.log(revStr);

// ii) not using built in method
let str1 = "";

for(let i = str.length - 1; i >= 0; i--){
    str1 += str[i];
}
console.log(str1);

// Ques 3 Find the largest number in an array
let arr2 = [1,2,3,56];
let maxi = 0;
for(let i = 0; i < arr2.length; i++){
    if(arr2[i] > maxi)
        maxi = arr2[i];
}
console.log(maxi);

// using spread operator or math.max
function findLargest(arr){
    return Math.max(...arr);
}
console.log(findLargest([2, 99, 566, 34]));

// Q4 Find frequency of elements in an array

function frequency(arr){
    const freq = {};
    for(let i = 0; i < arr.length; i++){
        if(freq[arr[i]]){
            freq[arr[i]] += 1;
        }
        else{
            freq[arr[i]] = 1;
        }
    }
    console.log((freq));
    
}

console.log(frequency([1,1,2,2,2,3,3,3,4]));




