# Loops

## for loop
**What it is:** Repeat code a fixed number of times using a counter.

**Key points:**
- Has start, condition, step: `for(let i=0; i<10; i++)`.
- `let i` is block scoped — `i` does not exist outside the loop.
- You can nest a loop inside another (outer + inner).
- Loop an array with `i < array.length` and `array[i]`.
- `break` exits the loop early.

```js
for(let i = 0; i <= 20; i++){
  if(i === 10) break;
  console.log(i);
}
```

**Interview Qs:**
- Why can't you use `i` after the loop? It is block scoped.
- What does `break` do? Stops the loop right away.

## for...of and for...in
**What it is:** Easier loops for arrays, strings, maps, and objects.

**Key points:**
- `for...of` gives the **values** (arrays, strings, maps).
- `for...in` gives the **keys/index** — get value with `obj[key]`.
- A Map uses `for (const [key, value] of map)`.

```js
for (const element of arr) console.log(element);
for (const key in obj) console.log(`${key}: ${obj[key]}`);
```

**Interview Qs:**
- Difference between for...of and for...in? `of` = values, `in` = keys.
- Which loop works on a string? for...of.

## while and do...while
**What it is:** Loop while a condition stays true.

**Key points:**
- `while` checks the condition first, then runs.
- `do...while` runs once first, then checks.
- Change the variable inside or it loops forever.

```js
let i = 0;
while (i <= 10){ console.log(i); i = i + 2; }
```

**Interview Qs:**
- Difference between while and do...while? do...while runs at least once.

## forEach loop
**What it is:** Runs a function once for every item in an array.

**Key points:**
- Takes a function (normal, arrow, or named function).
- Callback can use `(value, index, array)`.
- Returns nothing (undefined).

```js
coding.forEach((value, index) => console.log(value, index));
```

**Interview Qs:**
- Does forEach return a new array? No, it returns undefined.
- What arguments does the callback get? value, index, array.
