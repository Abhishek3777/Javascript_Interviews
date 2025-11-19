// 🚀 What is reduce? (Simple Explanation)

// reduce() is used to take an array and reduce it to a single value.

// That value can be:

// a number (sum),

// an object (grouping),

// an array (flattening),

// or anything.

// It’s SUPER important in:

// React (state calculations, aggregating data, cart totals)

// Node/Express (processing arrays from DB)

// Frontend interviews (common question!)
// Array.reduce((accumulator, currentValue) => {
//     // logic
//     return accumulator;
// }, initialValue);

// Ques 1 Sum
const nums = [10, 20, 30];
const total = nums.reduce((acc, curr) => acc + curr, 0);
console.log(total);

// Ques 2 Max value
const maxi = nums.reduce((acc, curr) => Math.max(acc, curr));
console.log(maxi);

// 3 3️⃣ Counting occurrences (VERY useful)
const letters = ['a', 'b', 'a', 'c', 'b', 'a'];

const count = letters.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
}, {});
console.log(count);

// 4 Sum of a field in an array of objects

// Common in React (cart), backend totals.
const cart = [
    { item: "Shop", price: 2000 },
    { item: "Shirt", price: 3000 },
    { item: "Pant", price: 3000 }
];

const total1 = cart.reduce((acc, curr) => acc + curr.price, 0);
console.log(total1);

// Practice
// Q1 Count how many users belong to each city
const city = [
    { name: "A", city: "Delhi" },
    { name: "B", city: "Mumbai" },
    { name: "C", city: "Delhi" }
];
// We start it as {} (empty object):
const count1 = city.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
},
    {});
