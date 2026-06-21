# DOM (Document Object Model)

**What it is:** The browser's object-tree of the HTML page; JS uses it to read/change the page.

## Key points
- `window` → the global object (the browser tab).
- `document` → the page itself; the way into the DOM (`window.document`).
- Useful properties:
  - `document.title` → the page/tab title.
  - `document.documentElement` → the `<html>` element.
  - `document.body` → the `<body>` element.
- Move through the tree:
  - `.firstElementChild` → first child element.
  - `.lastElementChild` → last child element.
- `document.getElementById("id")` → pick an element by its id.
- You can change the page live, e.g. `document.title = "..."`.

```js
console.log(document.title);            // page title
const div = document.body.firstElementChild;
console.log(div.firstElementChild);     // first child
const heading = document.getElementById("title");
document.title = "DOM updated";         // changes tab title live
```

## Interview Qs
- **What is the DOM?** → The browser's object-tree of the HTML page.
- **What is `document`?** → The page itself; the entry into the DOM.
- **How do you pick an element by id?** → `document.getElementById("id")`.
