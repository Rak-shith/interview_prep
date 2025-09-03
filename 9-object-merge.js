// 1. Deep Merge Function (merges two objects deeply)
function deepMerge(target, source) {
  for (let key in source) {
    if (
      source[key] instanceof Object &&
      key in target &&
      target[key] instanceof Object
    ) {
      deepMerge(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  }
  return target;
}

const obj1 = { a: 1, b: { x: 1 } };
const obj2 = { b: { y: 2 }, c: 3 };

const merged = deepMerge(obj1, obj2);
console.log(merged);
// Output: { a: 1, b: { x: 1, y: 2 }, c: 3 }


// 2. Deep Equality Function (compares two objects)
function deepEqual(a, b) {
  if (a === b) return true;

  if (typeof a !== 'object' || typeof b !== 'object' || a == null || b == null) {
    return false;
  }

  const keysA = Object.keys(a);
  const keysB = Object.keys(b);
  if (keysA.length !== keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
      return false;
    }
  }

  return true;
}




