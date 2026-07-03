# JavaScript Notes

My personal JavaScript learning repo. Each folder has runnable `.js` examples
plus a short, plain-English `NOTES.md` that explains the idea, shows the key
code, and lists a few interview questions.

**How to run any file:**
```bash
node basics/print.js
```

## Learning path

Go top to bottom — each topic builds on the ones above it.

| # | Topic | Folder | What you learn |
|---|-------|--------|----------------|
| 1 | **Basics** | [`basics/`](basics/NOTES.md) | Variables (`let`/`const`/`var`), data types, type conversion, operators, printing |
| 2 | **Strings** | [`string/`](string/NOTES.md) | Template strings and string methods (slice, trim, replace…) |
| 3 | **Numbers & Maths** | [`Nums_and_Maths/`](Nums_and_Maths/NOTES.md) | Number methods and the `Math` object (round, random, PI…) |
| 4 | **Arrays** | [`Array/`](Array/NOTES.md) | Lists and methods: push/pop, slice/splice, concat, map-ready basics |
| 5 | **Objects** | [`Objects/`](Objects/NOTES.md) | Key-value data, `this`, freeze, merging, destructuring |
| 6 | **Control Flow** | [`Control_flow/`](Control_flow/NOTES.md) | `if/else`, `switch`, truthy/falsy, `??`, ternary |
| 7 | **Loops** | [`Loops/`](Loops/NOTES.md) | `for`, `while`, `for...of`/`for...in`, `forEach` |
| 8 | **Filter, Map, Reduce** | [`Filter_maps_reduce/`](Filter_maps_reduce/NOTES.md) | The 3 array power tools for transforming data |
| 9 | **Functions & Scope** | [`Functions/`](Functions/NOTES.md) | Functions, parameters, `return`, rest, arrow functions, scope |
| 10 | **IIFE** | [`IIFE/`](IIFE/NOTES.md) | Functions that run themselves immediately |
| 11 | **Memory: Stack & Heap** | [`memory/`](memory/NOTES.md) | Copy by value vs copy by reference |
| 12 | **Execution Context & Call Stack** | [`Execution_Context_and_Call_Stack/`](Execution_Context_and_Call_Stack/notes.md) | How JS actually runs your code, line by line |
| 13 | **Date & Time** | [`Date_and_time/`](Date_and_time/NOTES.md) | The `Date` object and timestamps |
| 14 | **DOM** | [`Dom/`](Dom/DOM-notes.md) | Reading and changing the web page from JS |
| 15 | **Events** | [`Events/`](Events/events-notes.md) | Event listeners, the event object, bubbling & delegation |
| 16 | **Async JavaScript** | [`Async_code/`](Async_code/async-notes.md) | Call stack, event loop, `setTimeout`, callbacks |
| 17 | **Promises & Fetch (API)** | [`Api/`](Api/promises-notes.md) | Promises, `async/await`, and calling APIs with `fetch` |
| 18 | **OOP** | [`OOP/`](OOP/notes.md) | Objects, `this`, constructor functions, `new` |
| 19 | **Prototypes & Classes** | [`Prototype/`](Prototype/prototype-notes.md) | Prototype chain, `class`, inheritance, `call`/`bind`, getters/setters |

### Prototype folder — deep dives

| Topic | Notes |
|-------|-------|
| Prototype chain | [`prototype-notes.md`](Prototype/prototype-notes.md) |
| Classes & inheritance | [`classes-inheritance-notes.md`](Prototype/classes-inheritance-notes.md) |
| `call` / `apply` / `bind` | [`call-notes.md`](Prototype/call-notes.md) · [`bind-notes.md`](Prototype/bind-notes.md) |
| Property descriptors | [`property-descriptors-notes.md`](Prototype/property-descriptors-notes.md) |
| Getters & setters | [`getter-setter-notes.md`](Prototype/getter-setter-notes.md) |

## How each NOTES file is laid out

- **What it is** — one-line plain explanation.
- **Key points** — the must-know rules as quick bullets.
- **Code** — a tiny example you can copy and run.
- **Interview Qs** — common questions to test yourself.
