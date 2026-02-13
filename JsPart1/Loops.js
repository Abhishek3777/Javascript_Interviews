//1.  For Loop
for (let i = 0; i < 5; i++) {
    // console.log(i);
}

// 2. For of -> Arrays, strings, maps, set
const arr = ['apple', 'banana', 'mango'];
const obj = { name: 'Dexter', age: 22 };

for (let fruit of arr) {
    // console.log(fruit);
}
const array = [1, 2, 3, 4, 5, 6];
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

//3.  For in -> Objects, arrays
for (let key in obj) {
    // console.log(key, '', obj[key]);
}

// 4. For each -> Arrays only
arr.forEach((fruit, i) => console.log(fruit, i));


// 🟩 for → full control (index, break, continue)
// 🟦 for...of → “of values” (arrays, strings)
// 🟨 for...in → “in keys” (objects)
// 🟧 forEach → “array method” (no break, no async)

// looping thru an array of objects

// 1. 🧩 1. Array of Objects
const users = [
    { id: 1, name: "Abhi", age: 22 },
    { id: 2, name: "Riya", age: 24 },
    { id: 3, name: "Aman", age: 20 },
];
// using traditional for loop
for (let i = 0; i < users.length; i++) {
    // console.log(users[i].id, users[i].name, users[i].age);
}
// using forEach loop
// users.forEach(user =>
//     // console.log(user.id, user.name, user.age)
// )

// 2. Object of objects
const users1 = {
    user1: { name: "Abhi", age: 22 },
    user2: { name: "Riya", age: 24 },
    user3: { name: "Aman", age: 20 },
};

for (const [key, value] of Object.entries(users)) {
    console.log(key, value.name, value.age);
}

// JSON text to object 
// case 1 with array of objects

const json = '[{"id":1,"name":"Abhi"},{"id":2,"name":"Riya"}]';

const arr1 = JSON.parse(json);

for (let user of arr1) {
    console.log(user.id, user.name);
}
//  Case 2 can be json is in form of objects of objects

// Sending data to an api

// JSON.stringify() -> Object -> JSON object

const obj1 = {name : 'Dexter', age: 21};
const jsonString = JSON.stringify(obj1);
console.log(jsonString);
