const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1);

console.log(today);
console.log(tomorrow); // 2025-10-23T09:02:21.781Z

// 2. Only Date without time - Thu Oct 23 2025
console.log(tomorrow.toDateString());

// 3. To get date in a formatted way  (YYYY-MM-DD)
const formatted = tomorrow.toISOString().split("T")[0];
