// 🧩 What is filter() ?

//     filter() → creates a new array with all elements that pass a test(a condition inside a callback function).

// ✅ Returns → new filtered array
// ❌ Does NOT modify the original array

// Example 1
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 20, 50, 60];
const even = numbers.filter(num => num % 2 == 0);
// console.log(even);

// ⚙️ Realistic Examples (React + Node Style)
// 🔹 1. Filter users by age (Node backend or API)

const users = [
    { id: 1, name: "Alice", age: 19 },
    { id: 2, name: "Bob", age: 25 },
    { id: 3, name: "Eve", age: 17 },
];

const adults = users.filter(user => user.age >= 18);
// console.log(adults);


// // 2. Backend use:
// You can use this when you fetch all users and want to return only adults to the frontend:

/*

app.get("/users/getAdults", (req, res) => {
    const adults = users.filter(u => u.age >= 18);
    res.json(adults);
    })
*/

// 3. Filter tasks by completion in react
const tasks = [
    { id: 1, title: "Learn JS", done: true },
    { id: 2, title: "Learn React", done: false },
    { id: 3, title: "Learn Node", done: false },
];

const finishedTask = tasks.filter(task => task.done == true);
// console.log(finishedTask);

// 4. Filter by search text (React search bar)

const students = [
    { name: "Abhishek" },
    { name: "Aman" },
    { name: "Jim" }
];

const searchText = "a";
const results = students.filter(s =>
    s.name.toLowerCase().includes(searchText.toLowerCase())
);
// console.log(results);

// 5. Filter null, undefined, or falsy values
const data = ["hello", "", null, undefined, 0, "world", false, true];

const cleaned = data.filter(Boolean);
console.log(cleaned);
// removes null, undefined or false values
// 💡 Trick used often in Node.js before sending clean API data
// or in React before mapping over data.

// 💪 Practice Tasks for You

// Try these — they’ll strengthen both React & Node thinking:

// Q1 Filter students with marks ≥ 50

const students1 = [
    { name: "A", marks: 45 },
    { name: "B", marks: 72 },
    { name: "C", marks: 51 },
];

const studentsWithOver50Marks = students1.filter(s => s.marks >= 50);
console.log(studentsWithOver50Marks);

// Q2 Get products in stock

const products = [
    { name: "Pen", inStock: true },
    { name: "Pencil", inStock: false },
];

const stock = products.filter(p => p.inStock === false);
console.log(stock);