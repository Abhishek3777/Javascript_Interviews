// Objects in javascript
// Question 1 - What's the output

const obj = {
    a: "one",
    b: "two",
    a: "three", // overwrite
};
// console.log(obj);

// Question 2 - Create a function multiplyTwoObj(that) multiplies
// all numeric property values of nums by 2

let nums = {
    a: 100,
    b: 200,
    c: "title"
};

function multiplyNumeric(nums) {
    for (let [key, value] of Object.entries(nums)) {
        if (typeof (value) === "number")
            nums[key] = value * 2;
    }
}
multiplyNumeric(nums);
// console.log(nums);

// Question 3
// What's the output?

const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;
a[c] = 456;

// console.log(a[b]);
/*
Both b and c become the same key when used as object keys.
In JavaScript objects, non-string keys get converted to strings:
String(b)  →  "[object Object]"
String(c)  →  "[object Object]"
So your object ends up like:
a["[object Object]"] = 123;
a["[object Object]"] = 456; // overwrites previous one
That’s why:
console.log(a[b]); // 456
*/

// Question 4 What's JSON.stringify and JSON.parse

const user = {
    name: "Piyush",
    age: 24,
};
const strObj = JSON.stringify(user);
// localStorage.setItem("key", strObj);
// console.log((localStorage.getItem("key")));

// Question 5 What's the ouput
console.log([..."Hello"]);

