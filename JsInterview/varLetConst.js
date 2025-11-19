// var let const
// 1. Scope

{
    var a = 5;
}
console.log(a); // only var will work, let const wont

// 2. Shadowing
function test() {
    let a = "Hello";

    if (true) {
        let a = "Hi";
        console.log(a);
    }
    console.log(a);
}
test();

// console.log(d, e, f);
const d = 30; // cannt be accessed
let e = 20; // cannt be accessed, 
var a = 10; // undefined

// let, const are hoisted but in tdz
// tdz - is the term used to describe variables in scope but not been declared yet

// tip - when we've a variable in local scope we dont go for global scope

// Params vs Arguments

function square(num){ // Params
    console.log(num * num);
}
square(5); // Arguments

// Spread Rest operator

function add(...arr){ // Rest operator
    console.log(arr[0] + arr[1]);
}
var arr = [5,6]; 
add(...arr); // Spread operator

// const fn = (a, ...numbers, x, y) => { // rest operator comes at last
//     console.log(a, numbers, x, y);
// };
// fn(5,6,3,7,8,9);

const fn1 = (a, x, y, ...numbers) => { // rest operator comes at last
    console.log(a, numbers, x, y);
};
fn1(5,6,3,7,8,9);