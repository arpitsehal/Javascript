# Filter, Map, Reduce

## filter
**What it is:** Makes a new array with only the items that pass a condition.

**Key points:**
- Returns a **new array** (old one stays the same).
- Keeps items where the callback is true.
- Works on objects too (e.g. filter by `genre` or `year`).
- Body can be short (`num > 5`) or a block with `return`.

```js
const newNums = myNums.filter((num) => num > 5);
const fiction = books.filter((bk) => bk.genre === "Fiction");
```

**Interview Qs:**
- What does filter return? A new array of items that passed.
- Does filter change the original array? No.

## map
**What it is:** Makes a new array by changing every item.

**Key points:**
- Returns a **new array** of the same length.
- Runs the callback on each item and stores the result.
- You can chain `.map()` and `.filter()` together.

```js
const doubled = myNum.map((num) => num * 2);
const result = myNum.map(n => n * 10).filter(n => n > 20);
```

**Interview Qs:**
- Difference between map and filter? map changes items, filter picks items.
- Can you chain map and filter? Yes, each returns a new array.

## reduce
**What it is:** Turns a whole array into one single value.

**Key points:**
- Callback takes `(acc, curval)` — accumulator and current value.
- Second argument is the starting value of `acc` (e.g. `0`).
- `acc` carries the running result through each item.
- Works with a normal function or an arrow function.

```js
const total = myNums.reduce((acc, curval) => acc + curval, 0);
```

**Interview Qs:**
- What two arguments does the reducer get? accumulator and current value.
- What is the second argument to reduce? The starting value of the accumulator.
