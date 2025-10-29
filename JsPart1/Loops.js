//1.  For Loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// 2. For of -> Arrays, strings, maps, set
const arr = ['apple', 'banana', 'mango'];
const obj = { name: 'Dexter', age: 22 };

for (let fruit of arr) {
    console.log(fruit);
}

//3.  For in -> Objects, arrays
for (let key in obj) {
    console.log(key, '', obj[key]);
}

// 4. For each -> Arrays only
arr.forEach((fruit, i) => console.log(fruit, i));


// 🟩 for → full control (index, break, continue)
// 🟦 for...of → “of values” (arrays, strings)
// 🟨 for...in → “in keys” (objects)
// 🟧 forEach → “array method” (no break, no async)