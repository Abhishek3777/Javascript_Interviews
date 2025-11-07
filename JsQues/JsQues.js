const str = 'hello world';
let reversed = "";
for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
}
console.log(reversed);

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

console.log(checkPalindrome("naman"));

// Q3 count occurences of each character in a string
const str1 = "hello world";
const count = {};

for (let char of str1) {
    if (char !== ' ') {
        count[char] = (count[char] || 0) + 1;
    }
}
console.log(count);