//  1. Reverse a String
function reverseStr(str) {
  return str.split('').reverse().join('');
}

console.log(reverseStr("hello")); // ➜ "olleh"

//  2. Check Palindrome
function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

console.log(isPalindrome("madam")); // ➜ true

//  3. Count Vowels
function countVowels(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}

console.log(countVowels("hello")); // ➜ 2

//  4. Remove Duplicates from a String
function removeDuplicateChars(str) {
  return [...new Set(str)].join('');
}

console.log(removeDuplicateChars("banana")); // ➜ "ban"

//  5. Find First Non-Repeating Character
function firstUniqueChar(str) {
  const map = {};
  for (let char of str) map[char] = (map[char] || 0) + 1;
  for (let char of str) {
    if (map[char] === 1) return char;
  }
  return null;
}

console.log(firstUniqueChar("aabbcde")); // ➜ "c"