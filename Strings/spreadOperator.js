// 1. Copying arrays
const arr = [1, 2, 3];
const copy = [...arr];

console.log(copy); // [1, 2, 3]

// 2. Merging arrays
const arr1 = [1,2];
const arr2 = [3,4];
const arr3 = [...arr1, ...arr2];
console.log(arr3);
// 3. adding elements to array
const newArr = [1, ...arr, 5];

// 4.Copying objects
const user = {name: 'Abhishek', role: 'admin'};
const copyUser = {...user, age: 21};
console.log(copyUser);

// 5. Merging objects
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const merged = { ...obj1, ...obj2 };

console.log(merged); // { a: 1, b: 3, c: 4 }

// React based

// suppose issues = [{id:  1, title : 'A'}, {id: 2, title: 'B'}]
const addIssue = () => {
    const newIssue = {id: '3', age : 22};

    setIssues(prevIssues => [...prevIssues, newIssue]);
}