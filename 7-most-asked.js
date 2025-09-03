//  1. Reverse an Array
//  Problem: Given an array, return a new array with elements in reverse order.
// Input: [1, 2, 3] → Output: [3, 2, 1]

function reverseArray(arr) {
  const result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}


//  2. Find Maximum Element
//  Problem: Return the largest number in an array.
//  Input: [1, 5, 3] → Output: 5

function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}


//  3. Remove Duplicates
//  Problem: Return a new array with duplicates removed.
//  Input: [1, 2, 2, 3] → Output: [1, 2, 3]

function removeDuplicates(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    let found = false;
    for (let j = 0; j < result.length; j++) {
      if (arr[i] === result[j]) {
        found = true;
        break;
      }
    }
    if (!found) result.push(arr[i]);
  }
  return result;
}


//  4. Count Even Numbers
//  Problem: Count how many numbers are even in the array.
//  Input: [1, 2, 4, 5] → Output: 2

function countEvens(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) count++;
  }
  return count;
}


//  5. Find Second Largest Number
//  Problem: Return the second highest number in the array.
//  Input: [5, 1, 3, 4] → Output: 4

function secondLargest(arr) {
  let max = -Infinity, second = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      second = max;
      max = arr[i];
    } else if (arr[i] > second && arr[i] !== max) {
      second = arr[i];
    }
  }
  return second;
}


//  6. Sum of All Elements
//  Problem: Return the sum of all values in the array.
//  Input: [1, 2, 3] → Output: 6

function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}


//  7. Check if Array is Sorted
//  Problem: Return true if array is sorted in ascending order.
//  Input: [1, 2, 3] → true, [1, 3, 2] → false

function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) return false;
  }
  return true;
}


//  8. Find Frequency of Each Element
//  Problem: Print how many times each element occurs in the array.
//  Input: [1, 2, 1, 3] → 1:2, 2:1, 3:1

function frequency(arr) {
  const freq = {};
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (freq[item] !== undefined) {
      freq[item]++;
    } else {
      freq[item] = 1;
    }
  }
  return freq;
}


//  9. Find All Pairs That Sum to Target
//  Problem: Print all pairs that add up to a target.
//  Input: [1, 2, 3, 4], target = 5 → Output: [ [1,4], [2,3] ]

function findPairs(arr, target) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        result.push([arr[i], arr[j]]);
      }
    }
  }
  return result;
}


//  10. Left Rotate Array by 1
//  Problem: Shift elements left by one place.
//  Input: [1, 2, 3] → Output: [2, 3, 1]

function leftRotate(arr) {
  if (arr.length === 0) return arr;
  const first = arr[0];
  for (let i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }
  arr[arr.length - 1] = first;
  return arr;
}


