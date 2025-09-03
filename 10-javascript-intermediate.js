// 6. Group Array of Objects by a Property
// Q:
// Group this array by the "city" property:

const people = [
  { name: "Alice", city: "NY" },
  { name: "Bob", city: "LA" },
  { name: "Carol", city: "NY" }
];
// Aneswer:

const grouped = people.reduce((acc, person) => {
  const { city } = person;
  acc[city] = acc[city] || [];
  acc[city].push(person);
  return acc;
}, {});
console.log(grouped);
/*
{
  NY: [ { name: "Alice", city: "NY" }, { name: "Carol", city: "NY" } ],
  LA: [ { name: "Bob", city: "LA" } ]
}
*/


// 🔸 7. Flatten a Nested Array
// Q:
// Flatten this deeply nested array:

const arr1 = [1, [2, [3, 4], 5]];
// Aneswer:

const flat = arr.flat(Infinity);
console.log(flat); // [1, 2, 3, 4, 5]

// 🔸 8. Remove Duplicate Objects Based on a Property
// Q:
// Remove duplicates based on id:

const arr2 = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 1, name: "A" }
];
A:

const uniqueById = arr.filter((obj, index, self) =>
  index === self.findIndex(o => o.id === obj.id)
);
console.log(uniqueById);
// [ { id: 1, name: "A" }, { id: 2, name: "B" } ]


// 🔸 9. Deep Clone an Object
// Q:
// How do you deeply clone this object?

const original = { a: 1, b: { c: 2 } };
// Aneswer:

const clone1 = JSON.parse(JSON.stringify(original));
console.log(clone1); // { a: 1, b: { c: 2 } }

const clone2 = structuredClone(original);

// 🔸 10. Convert Array to Object with Index as Key
// Q:
// Convert this array to an object where index becomes the key:

const arr = ["a", "b", "c"];
// Aneswer:

const obj = Object.assign({}, arr);
// or:
const obj2 = arr.reduce((acc, val, i) => {
  acc[i] = val;
  return acc;
}, {});
console.log(obj); // {0: "a", 1: "b", 2: "c"}


// 🔸 11. Count Characters in a String
function countCharacters(str) {
  const count = {};
  for (let char of str) {
    count[char] = (count[char] || 0) + 1;
  }
  return count;
}

console.log(countCharacters("aabbbc")); // { a: 2, b: 3, c: 1 }