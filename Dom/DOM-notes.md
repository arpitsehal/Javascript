# DOM (Document Object Model)

**What it is:** The browser's object-tree representation of the HTML page. The browser reads HTML, builds a tree of objects (nodes), and JS uses that tree to read/change the page live.

---

## DOM Intro & Selecting Elements

### Key points
- `window` → the global object (the browser tab). Everything hangs off it.
- `document` → the page itself; the entry point into the DOM (`window.document`).
- The DOM is a **tree**: `document` → `<html>` → `<head>`/`<body>` → elements → text.
- Everything in the tree is a **node** (element node, text node, comment node, attribute node).

### Useful document properties
- `document.title` → page/tab title (can be set live: `document.title = "..."`).
- `document.documentElement` → the `<html>` element.
- `document.head` / `document.body` → the `<head>` / `<body>`.

### Selecting elements (the big 4)
| Method | Returns | Notes |
|---|---|---|
| `getElementById("id")` | single element / `null` | id only, no `#` |
| `getElementsByClassName("cls")` | **live HTMLCollection** | no `.` |
| `querySelector("css")` | **first** match / `null` | full CSS selector |
| `querySelectorAll("css")` | **static NodeList** | full CSS selector |

```js
const h1     = document.getElementById("title");
const items  = document.getElementsByClassName("list-item"); // live
const first  = document.querySelector("#title");             // first match
const allBtn = document.querySelectorAll(".btn");            // NodeList
const nested = document.querySelector("ul li:first-child");  // CSS selectors work
```

### Reading / writing an element
- `el.innerHTML` → HTML inside (parses tags).
- `el.textContent` → all text incl. hidden, ignores tags.
- `el.innerText` → only visible/rendered text.
- `el.getAttribute("href")` / `el.setAttribute("href", "...")`.

```js
title.innerHTML   = "<em>Hello</em>";  // renders italic
title.textContent = "<em>Hi</em>";     // shows the literal tags
```

### Styling from JS
```js
title.style.backgroundColor = "green";   // camelCase, not background-color
title.style.padding = "15px";
```

### Interview Qs
- **What is the DOM?** → Browser's object-tree of the HTML page that JS can manipulate.
- **`innerHTML` vs `textContent` vs `innerText`?** → `innerHTML` parses HTML; `textContent` = all raw text (incl. hidden, faster, safer); `innerText` = only visible text (layout-aware, slower).
- **`getElementById` vs `querySelector`?** → former takes only an id (faster), latter takes any CSS selector and returns the first match.

---

## NodeList vs HTMLCollection & Traversal

### HTMLCollection vs NodeList (very common interview Q)
| | HTMLCollection | NodeList |
|---|---|---|
| From | `getElementsByClassName`, `getElementsByTagName` | `querySelectorAll`, `childNodes` |
| Live? | **Live** (auto-updates with DOM) | **Static** (snapshot) — except `childNodes` is live |
| Contains | elements only | element + text + comment nodes |
| `.forEach()`? | ❌ No | ✅ Yes |
| Indexing | `[i]` works | `[i]` works |

- **Both are array-like, NOT real arrays** — no `map`/`filter`/`reduce` directly.
- Convert to a real array first:
```js
const arr = Array.from(items);        // best
const arr2 = [...document.querySelectorAll(".btn")]; // spread
arr.forEach(el => console.log(el));
```

### Traversal / moving through the tree
Element-only (skip text/whitespace nodes — **preferred**):
- `.parentElement`
- `.children` → HTMLCollection of child elements
- `.firstElementChild` / `.lastElementChild`
- `.nextElementSibling` / `.previousElementSibling`
- `.childElementCount`

Node-level (includes text/comment nodes — be careful):
- `.parentNode`, `.childNodes`, `.firstChild`, `.lastChild`, `.nextSibling`

```js
const ul = document.querySelector("ul");
ul.children;             // HTMLCollection of <li>s
ul.firstElementChild;    // first <li>
ul.children[1].nextElementSibling; // third <li>
```

### Interview Qs
- **HTMLCollection vs NodeList?** → HTMLCollection is live & elements-only; NodeList (from `querySelectorAll`) is static and can hold text nodes. NodeList has `forEach`, HTMLCollection does not.
- **Why can't I call `.map()` on `querySelectorAll` result?** → It's a NodeList (array-like), not a real array. Convert with `Array.from()` or spread.
- **`children` vs `childNodes`?** → `children` = element nodes only (HTMLCollection); `childNodes` = all nodes incl. text/whitespace/comments (NodeList).

---

## Creating, Adding & Editing Elements

### Create an element
```js
const div = document.createElement("div");
div.className = "main";
div.id = "myId";
div.setAttribute("title", "tooltip");
div.style.backgroundColor = "blue";
```

### Add text/content — `createTextNode` vs `innerHTML`
```js
// Safer / faster — no HTML parsing:
const text = document.createTextNode("Chai aur code");
div.appendChild(text);

// Quick but parses HTML (XSS risk with user input):
div.innerHTML = "Chai aur code";
```
> Optimized way: `createElement` + `createTextNode` + `appendChild` avoids re-parsing the whole DOM that `innerHTML` triggers.

### Insert into the DOM
- `parent.appendChild(node)` → add as last child.
- `parent.append(node|string)` → can add multiple, supports strings (no return).
- `parent.prepend(node)` → add as first child.
- `parent.insertBefore(newNode, refNode)`.
- `el.before(node)` / `el.after(node)` → as siblings.

### Edit / replace / remove
```js
// Edit text:
li.textContent = "new text";                  // simple, preferred
li.innerHTML = "<b>bold</b>";                  // when you need HTML

// Replace:
parent.replaceChild(newLi, oldLi);
oldLi.replaceWith(newLi);

// Remove:
li.remove();                                   // modern
parent.removeChild(li);                        // older
```

### Reusable helper pattern (from the video)
```js
function addLanguage(langName) {
  const li = document.createElement("li");
  li.innerHTML = `${langName}`;                // or appendChild(createTextNode)
  document.querySelector(".language").appendChild(li);
}
addLanguage("python");
addLanguage("javascript");
```

### Interview Qs
- **`createElement` + `appendChild` vs `innerHTML` for adding nodes?** → `innerHTML` re-parses & rebuilds, is risky with user input (XSS) and slower in loops; `createElement`/`appendChild` is safer and more performant.
- **`append` vs `appendChild`?** → `appendChild` takes one Node, returns it; `append` takes multiple nodes **or strings**, returns nothing (`undefined`).
- **How to remove an element?** → `el.remove()` (modern) or `parent.removeChild(el)`.

---

## Events & Event Handling

### Ways to attach events (use addEventListener)
```js
// ❌ Inline HTML attribute  — avoid (mixes JS in HTML)
// <button onclick="alert('hi')">

// ❌ Property — only ONE handler, later overrides earlier
btn.onclick = () => {};

// ✅ addEventListener — multiple handlers, more control
btn.addEventListener("click", handler, false);
```
`addEventListener(type, callback, useCapture)` — 3rd arg defaults to `false` (bubbling phase).

### The event object
Handler receives an `event` object with useful info:
- `event.type`, `event.target` (element actually clicked), `event.currentTarget`.
- `event.timeStamp`, `clientX/clientY`, `screenX/screenY`.
- `event.altKey`, `ctrlKey`, `shiftKey`, `keyCode`.

### Propagation: Bubbling vs Capturing
- **Bubbling (default):** event fires on the target, then travels **up** to ancestors (child → parent).
- **Capturing (trickling):** event travels **down** from ancestor to target. Enable with `true` as 3rd arg.
- `event.stopPropagation()` → stop the event traveling further.
- `event.preventDefault()` → stop the browser's default action (e.g. link navigation, form submit).

```js
document.getElementById("owl").addEventListener("click", (e) => {
  e.stopPropagation();         // don't let it bubble to parent <ul>
  console.log("owl clicked");
});
```

### Event delegation (key concept + interview favorite)
Attach **one** listener on a parent and use `e.target` to handle many children (incl. dynamically added ones). Efficient — fewer listeners.
```js
document.querySelector("#images").addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    e.target.parentNode.remove();   // remove the clicked image's <li>
  }
});
```

### Interview Qs
- **Why `addEventListener` over `onclick`?** → Allows multiple handlers for the same event, control over capture/bubble phase, and easy `removeEventListener`. The `onclick` property holds only one handler.
- **Bubbling vs Capturing?** → Bubbling goes child→parent (default); capturing goes parent→child (set 3rd arg `true`).
- **`target` vs `currentTarget`?** → `target` = element that triggered the event; `currentTarget` = element the listener is attached to.
- **What is event delegation & why use it?** → One listener on a parent handling events from many children via `e.target`. Fewer listeners (better performance) and works for elements added later.
- **`stopPropagation()` vs `preventDefault()`?** → `stopPropagation` halts the event's travel through the DOM; `preventDefault` cancels the browser's default behavior (e.g., form submit / link follow).

---

## Quick revision cheat-sheet
- Select: `getElementById`, `querySelector` (1st), `querySelectorAll` (NodeList).
- HTMLCollection = live, elements-only, no `forEach`; NodeList = static, has `forEach`.
- Array-like ≠ array → `Array.from()` / spread before `map`/`filter`.
- Traverse with element-only props (`children`, `firstElementChild`, `nextElementSibling`).
- Create: `createElement` + `createTextNode` + `appendChild` (safer than `innerHTML`).
- Events: prefer `addEventListener`; know bubbling vs capturing, delegation, `target` vs `currentTarget`, `stopPropagation` vs `preventDefault`.
