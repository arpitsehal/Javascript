# Arrays

**What it is:** A list that holds many values in order, accessed by index (starts at 0).

## Key points
- Create with `[ ]`. Get an item by index: `myArray[0]`.
- `push(x)` adds to the end. `pop()` removes the last.
- `unshift(x)` adds to the front. `shift()` removes the first.
- `join()` turns the array into a string: `"1,2,3"`.
- `slice(start, end)` copies a part. End is NOT included. Original stays same.
- `splice(start, count)` cuts items out. It CHANGES the original array.
- `concat(arr)` joins two arrays into a new one (good way to merge).
- `push(arr)` puts a whole array inside as one item (bad way to merge).
- `Array.isArray(x)` checks if something is an array.
- `Array.from("text")` turns a string into an array of letters.

```js
const a = [1, 2, 3, 4, 5];
a.push(6);       // [1,2,3,4,5,6]
a.slice(1, 3);   // [2,3]  (copy, original safe)
a.splice(1, 3);  // removes items, changes original
```

## Interview Qs
- Difference between slice and splice? slice copies, splice changes the original.
- Right way to merge two arrays? Use `concat`.
- How to check if a value is an array? Use `Array.isArray()`.
