// ✅ 1. Object Creation

const user = {
    name: "Sam",
    age: "21"
};
// ✅ 2. Access Properties (dot vs bracket)
console.log(user.name);

// bracket notation - when key is dynamic or has spaces
const obj1 = {"user name" : "abhi"};
console.log(obj1["user name"]);

// ✅ 3. Add, Update, Delete Keys

user.city = 'Bangalore';
console.log(user);

user.age = 22;
console.log(user);

delete user.city;
console.log(user);

// ✅ 4. Object Destructuring (VERY IMPORTANT for React)

const {name, age} = user;
console.log(name,age);

// 5. Looping over objects
for(let [key, value] of Object.entries(user)){
    console.log(key, value);
}