
// Variables declared with var are hoisted, but only their declaration, not their value
console.log(a);
var a = 5;

// Let/ const hoisting (TDZ)
// Variables declared with let or const are also hoisted,
// but not initialised, so accessing them before declaration causes an error
// console.log(b);
// let b = 5;

// console.log(c);
// const c = 5;

// Function declarations are completely hoisted
sayhi();

function sayhi() {
    console.log('hi');
}
