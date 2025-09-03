// 11. Find Deep Difference Between Two Objects
// Q:
// Get the difference between two nested objects:


const a = { x: 1, y: { z: 2 } };
const b = { x: 1, y: { z: 3 } };
// A:


function deepDiff(obj1, obj2) {
  const diff = {};
  for (let key in obj1) {
    if (typeof obj1[key] === "object" && typeof obj2[key] === "object") {
      const nestedDiff = deepDiff(obj1[key], obj2[key]);
      if (Object.keys(nestedDiff).length > 0) diff[key] = nestedDiff;
    } else if (obj1[key] !== obj2[key]) {
      diff[key] = [obj1[key], obj2[key]];
    }
  }
  return diff;
}

console.log(deepDiff(a, b)); // { y: { z: [2, 3] } }


// 🔺 12. Flatten Nested Object
// Q:
// Flatten this object:


const obj1 = { a: 1, b: { c: 2, d: { e: 3 } } };
// A:


function flatten(obj, prefix = "", res = {}) {
  for (let key in obj) {
    const newKey = prefix ? `${prefix}.${key}` : key;
    if (typeof obj[key] === "object" && obj[key] !== null) {
      flatten(obj[key], newKey, res);
    } else {
      res[newKey] = obj[key];
    }
  }
  return res;
}

console.log(flatten(obj1)); // { "a": 1, "b.c": 2, "b.d.e": 3 }


// 🔺 13. Sort Array of Objects by Multiple Fields
// Q:
// Sort by "name" then "age":


const users = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "John", age: 20 }
];
A:


const sorted = users.sort((a, b) => {
  if (a.name !== b.name) return a.name.localeCompare(b.name);
  return a.age - b.age;
});
console.log(sorted);
/*
[
  { name: "Jane", age: 25 },
  { name: "John", age: 20 },
  { name: "John", age: 30 }
]
*/

// 🔺 14. Intersection of Arrays of Objects by Key
// Q:
// Find objects with common id:


const arr1 = [{ id: 1 }, { id: 2 }];
const arr2 = [{ id: 2 }, { id: 3 }];
// A:


const ids = new Set(arr2.map(o => o.id));
const intersection = arr1.filter(o => ids.has(o.id));
console.log(intersection); // [{ id: 2 }]


// 🔺 15. Immutable Deep Update of Object Property
// Q:
// Immutably update "b.c" value in:


const obj = { a: 1, b: { c: 2, d: 3 } };
// A:


const updated = {
  ...obj,
  b: {
    ...obj.b,
    c: 100
  }
};
console.log(updated); // { a: 1, b: { c: 100, d: 3 } }