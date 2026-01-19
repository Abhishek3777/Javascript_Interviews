// Question 1
// Reverse a string
// i) using built in method
const str = "backend";
const revStr = str.split("").reverse().join("");
console.log(revStr);

// ii) using 
let revStr1 = "";

for (let i = str.length - 1; i >= 0; i--) {
    revStr1 += str[i];
}
console.log(revStr1);

// Question2 Check if a string is palindrome

const palYes = "naman";
const palNo = "don";

function palindrome(s) {
    let i = 0;
    let j = s.length - 1;

    while (i < j) {
        if (s[i] != s[j]) return false;
        i++;
        j--;
    }
    return true;
}
console.log(palindrome(palYes));
console.log(palindrome(palNo));

// Question 3 Frequency map

const objMap = {};
const s = "swiss"
for (let i = 0; i < s.length; i++) {
    if (objMap[s[i]]) {
        objMap[s[i]]++;
    }
    else {
        objMap[s[i]] = 1;
    }
}
console.log(objMap);

// Question 4 Find the First Non-Repeating Character in a String

for (let i = 0; i < s.length; i++) {
    if (objMap[s[i]] == 1) {
        console.log(s[i]);
        break;
    }
}

// Question 5
// Remove duplicates from an array
const arr = [1, 2, 3, 4, 98, 1000];

// using set
const freqMap = {};
for (let i = 0; i < arr.length; i++) {
    freqMap[arr[i]]++;
}
const newArr = [];
for (let i = 0; i < arr.length; i++) {
    if (!freqMap[arr[i]]) {
        freqMap[arr[i]] = true;
        newArr.push(arr[i]);
    }
}
console.log(newArr);

// Question 7 Find second largest element in an array
let maxi1 = -Infinity;
let maxi2 = -Infinity;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxi1) {
        maxi2 = maxi1;
        maxi1 = arr[i];
    }
    else if (arr[i] > maxi2) {
        maxi2 = arr[i];
    }
}
console.log(maxi2);

