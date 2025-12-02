// // Strings and methods
// // 1. Searching and Checking

// // i) substring
const str = 'dad@gmail.com';
const substr = str.substring(0, 3); // last gets excluded
console.log(substr);

// ii) slice
console.log(str.slice(0, 4));
console.log("str slice from -1",str.slice(-1));

// ii) includes
// includes // - return true / false

console.log(str.includes('dad'));
// true
console.log(str.includes('mom'));

// iii) charAt
console.log(str.charAt(2));
console.log(str.indexOf('d'));
// -> indexOf return first occurence value or -1
console.log(str.lastIndexOf('d'));
// finds last occurence

// Modifying
// 1. trim
const str1 = '  hello  ';
console.log(str1);
console.log(str1.trim());

// 2. Replce
const url = 'https://hitesh.com/hitesh%20choudhary';
console.log(url.replace('%20', '-'));
console.log(str.split('-'));

const arr = [4, 5, 6, 7];
console.log("arr slice1",arr.slice(1));

const strr = "hello";
const rev = strr.split('').reverse().join('');
console.log(rev);


