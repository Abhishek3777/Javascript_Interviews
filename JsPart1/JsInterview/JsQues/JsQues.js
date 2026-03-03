const str = 'hello world';
let reversed = "";
for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
}
// console.log(reversed);

function checkPalindrome(s) {
    let i = 0;
    let j = s.length - 1;

    while (i < j) {
        if (s[i] != s[j]) return false;
        i++;
        j--;
    }
    return true;
}

// console.log(checkPalindrome("naman"));

// Q3 count occurences of each character in a string
const str1 = "hello world";
const count = {};

for (let char of str1) {
    if (char !== ' ') {
        count[char] = (count[char] || 0) + 1;
    }
}
// console.log(count);

let students = [
    { name: "Piyush", rollNumber: 1, marks: 80 },
    { name: "Kushan", rollNumber: 31, marks: 69 },
    { name: "Drake", rollNumber: 13, marks: 35 },
    { name: "Abhishek", rollNumber: 37, marks: 55 }
]
// Ques 1 return only names of students in capital

const ans = students.map((student) => student.name.toUpperCase());
// console.log(ans);

// Ques 2 Return only details of those who scored moret than 60
const studentsWithOver60Marks = students.filter((student) => student.marks > 60);
// console.log(studentsWithOver60Marks);

// Ques 3 More than 60 marks and rollNumber > 15
const ans1 = students.filter((student) => student.marks > 60 && student.rollNumber > 15);
// console.log(ans1);

// Q4 Sum of marks of all students

const total = students.reduce((acc, curr) => acc + curr.marks, 0);
// console.log(total);

// Q5 Return total marks for students with marks greater than 60
// after 20 marks have been added to those who scored less than 60

const stu = students.filter((student) => student.marks > 60)
    .map((student) => student.name);
console.log(stu);

// Q6 Return total marks for students with marks greater 
const totalMarks = students.map((stu) => {
    if (stu.marks < 60) {
        stu.marks += 20;
    }
    return stu; // important
}).filter((stu) => stu.marks > 60).reduce((acc, curr) => acc + curr.marks, 0);

console.log(totalMarks);
