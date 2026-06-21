# Stack and Heap (Memory)

**What it is:** Two places where JS stores data in memory.

## Key points
- **Stack** → stores primitive types (string, number, etc.). Fast.
- **Heap** → stores non-primitive types (objects). Slower.
- Primitives are copied by **value** (a real copy is made).
  - Changing the copy does NOT change the original.
- Objects are copied by **reference** (both point to the same object).
  - Changing one ALSO changes the other.

```js
let name = "Arpit"
let anotherName = name      // copy of value (stack)
anotherName = "Sehal"
// name stays "Arpit"

let user1 = { email: "arpit@gmail.com" }
let user2 = user1           // same object (heap)
user2.email = "sehal@gmail.com"
// user1.email also changes
```

## Interview Qs
- **What goes in the stack?** → Primitive values.
- **What goes in the heap?** → Objects (non-primitives).
- **Why does changing `user2` change `user1`?** → Both point to the same object in heap.
