// 1. Reversing a string in js
const str = 'hello';
const reversed = str.split("").reverse().join("");
// console.log(reversed);

// 2. Palindrome string check

const Palindrome = (str1) => {
    const clean = str1.toLowerCase().replace(/[^a-z0-9]/g, "");
    const rev1 = clean.split("").reverse().join("");

    return rev1 === clean;
}
// console.log(Palindrome("RaceCar")); // true
// console.log(Palindrome("A man a plan a canal Panama"));

// 3. Count frequency in an array like a map
// const arr = [1, 2, 2, 3, 1, 4, 2];
const arr = 'hello';
const freq = {};

for (const el of arr) {
    freq[el] = (freq[el] || 0) + 1;
}
for (const [element, count] of Object.entries(freq)) {
    console.log(element, count);
}
// 4. CRUD on an array of objects

let data = [
    {
        id: 1,
        name: 'david',
        age: 21
    },
    {
        id: 2,
        name: 'bob',
        age: 22
    },
    {
        id: 3,
        name: 'sam',
        age: 23
    },
    {
        id: 5,
        name: 'student',
        age: 17
    }
]

const createUser = (entry) => {
    data.push(entry);
}

createUser({
    id: 4,
    name: 'new',
    age: 22
});

for (const entry of data) {
    console.log(entry);
}

// find filter objects
const user = data.find(u => u.id === 2);
console.log(user);

const youngUsers = data.find(u => u.age < 18);
console.log(youngUsers);

// update modify an object patch style
const patchUser = (id, newData) => {
    const user = data.find(u => u.id === id);
    if (user) {
        Object.assign(user, newData);
    }
};

patchUser(1, { name: 'David edited', age: 26 });
console.log(data);

const putUser = (id, newData) => {
    const index = data.findIndex(u => u.id === id);
    if (index !== -1) {
        data[index] = { id, ...newData };
    }

};
putUser(1, { name: 'David edited again', age: 40 });
console.log(data);

// delete an object
const deleteUser = (id) => {
    data = data.filter(u => u.id !== id);
};

deleteUser(1);
console.log(data);

// Ques 1 - > Add marks column and take sum of it
const users = [
    { id: 1, name: "Abhi", age: 22 },
    { id: 2, name: "Riya", age: 24 },
];

const updated = (users.map(u => ({ ...u, marks: Math.floor(Math.random() * 50) })));

const total = updated.reduce((acc, u) => acc + u.marks, 0);
console.log(updated, total);

// Remove duplicates from an array
const arr3 = [1, 2, 2, 3, 3, 4, 4];
const uniqueArr = [...new Set(arr3)];
console.log(uniqueArr);

// Closure of
function outer() {
    let outerVar = "I'm in the outer scope";
    function inner() {
        console.log(outerVar);
    }
    return inner;
}
const closure = outer();
closure();

// do some cleaning 
