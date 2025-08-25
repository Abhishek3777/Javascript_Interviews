const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2);
console.log(doubled);

const todos = [
    {
        id: 1,
        task: "Code backend",
        description: 'Express'
    },
    {
        id: 2,
        task: 'Test',
        description: 'Postman'
    },
    {
        id: 3,
        task: 'Code',
        description: 'Code frontend'
    }
];

// 1. if you want to log only todos where task is something
todos.map(todo => {
    if (todo.task === 'Code') {
        console.log(todo);
    }
});

// 2. Using filter
const result = todos.filter(todo => todo.task === 'Code');
console.log(result);

// 3. 
// const openIssues = issues.filter(issue => issue.status === 'Open');
