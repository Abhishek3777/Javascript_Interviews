// 🧩 1️⃣ Function Declaration
// ✅ Features:

// Hoisted → You can call it before it's defined.

// Has its own this (depends on call).

// Good for reusable utilities or global helpers.
console.log(add1(2, 3));
function add1(a, b) {
    return a + b;
}

// ⚡ 2️⃣ Function Expression
const add = function (a, b) {
    return a + b;
};


// ✅ Features:

// Not hoisted → must be defined before use.

// Treated as a variable.

// Useful for modular or inline logic.

// ⚔️ 3️⃣ Arrow Function (ES6)
// const add = (a, b) => a + b;


// ✅ Features:

// Shorter, cleaner syntax (used everywhere now).

// Does not have its own this → takes from surrounding scope (lexical this).

// Can be implicit return (if one expression).

// Great for React components, callbacks, array methods, etc.

const add2 = (a, b) => {
    return a + b;
}
console.log(add2(2, 3));
