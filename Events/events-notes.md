# JavaScript Events

**What it is:** An *event* is a signal that something happened in the browser — a click, a key press, a page load, a mouse move. JS lets us *listen* for these signals and run code (a handler/callback) in response. This is what makes a page interactive.

---

## Ways to attach an event

```js
// 1. ❌ Inline HTML attribute — avoid (mixes JS into markup, hard to scale)
// <button onclick="alert('clicked')">Click</button>

// 2. ⚠️ DOM property (onclick) — works, but ONLY one handler.
//    A second assignment OVERWRITES the first.
btn.onclick = function () { console.log("hi"); };

// 3. ✅ addEventListener — preferred. Multiple handlers, phase control, removable.
btn.addEventListener("click", function (e) {
  console.log("clicked");
});
```

`addEventListener(type, callback, useCapture)`
- `type` → event name **without** `on` (`"click"`, not `"onclick"`).
- `callback` → function that receives the **event object**.
- `useCapture` → boolean, 3rd arg. Defaults to `false` (bubbling). `true` = capturing.

> **Why `addEventListener` wins:** multiple listeners on the same element, choose bubble vs capture phase, and you can detach later with `removeEventListener` (only works with a *named* function reference, not an anonymous one).

```js
function handler(e) { console.log("once"); }
btn.addEventListener("click", handler);
btn.removeEventListener("click", handler);   // must be the SAME reference
```

---

## The Event object

Every handler automatically receives an `event` object describing what happened.

Common properties:
- `e.type` → `"click"`, `"keydown"`, etc.
- `e.target` → the element that **actually** triggered the event (deepest element).
- `e.currentTarget` → the element the listener is **attached** to.
- `e.timeStamp` → ms since the page loaded.
- `e.clientX / e.clientY` → cursor position relative to the viewport.
- `e.screenX / e.screenY` → cursor position relative to the whole screen.
- `e.altKey / e.ctrlKey / e.shiftKey` → modifier keys held during the event.
- `e.key / e.code / e.keyCode` → keyboard info (`keyCode` is deprecated, prefer `e.key` / `e.code`).

```js
document.addEventListener("click", (e) => {
  console.log(e.type, e.target, e.clientX, e.clientY);
});
```

---

## Event Propagation: Bubbling vs Capturing

When you click a nested element, the event travels through the DOM in **two phases**:

1. **Capturing (trickle down):** `window` → ... → parent → target. *Off by default.*
2. **Bubbling (bubble up):** target → parent → ... → `window`. **This is the default.**

```js
// 3rd arg false (default) → fires during BUBBLING (child first, then parents)
child.addEventListener("click", () => console.log("child"));
parent.addEventListener("click", () => console.log("parent")); // runs AFTER child

// 3rd arg true → fires during CAPTURING (parent first, then child)
parent.addEventListener("click", () => console.log("parent capture"), true);
```

### Stopping the flow
- `e.stopPropagation()` → stops the event from travelling further up (or down) the tree.
- `e.preventDefault()` → cancels the browser's **default action** (link navigation, form submit, etc.). Does NOT stop propagation.

```js
link.addEventListener("click", (e) => {
  e.preventDefault();      // link won't navigate
  e.stopPropagation();     // won't reach parent listeners
  console.log("handled manually");
});
```

---

## Event Delegation (interview favourite)

Instead of adding a listener to every child, add **one** listener to the parent and use `e.target` to figure out which child was clicked. It relies on **bubbling**.

**Why use it:**
- Fewer listeners → better performance / memory.
- Works for elements added to the DOM **later** (dynamic content).

```js
document.querySelector("#images").addEventListener("click", (e) => {
  console.log(e.target.id);
  if (e.target.tagName === "IMG") {
    e.target.parentNode.remove();   // remove the <li> wrapping the clicked image
  }
});
```

---

## Quick interview Q&A

- **What is an event in JS?** → A signal that something happened (click, keypress, load); we attach handlers to react to it.
- **`onclick` property vs `addEventListener`?** → `onclick` holds only one handler (reassigning overwrites it); `addEventListener` supports multiple handlers, phase control, and removal.
- **What's in the event object?** → Info about the event: `type`, `target`, `currentTarget`, coordinates, modifier keys, timestamp, etc.
- **`target` vs `currentTarget`?** → `target` = element that actually triggered the event; `currentTarget` = element the listener is bound to.
- **Bubbling vs Capturing?** → Bubbling = target → up to ancestors (default). Capturing = ancestors → down to target (set 3rd arg `true`).
- **`stopPropagation()` vs `preventDefault()`?** → `stopPropagation` halts the event's travel through the DOM; `preventDefault` cancels the browser's default behaviour (e.g. form submit / link follow). They are independent.
- **What is event delegation & why?** → One listener on a parent handling many children via `e.target`. Fewer listeners (performance) and it works for dynamically added elements.
- **How do you remove a listener?** → `removeEventListener(type, fn)` with the **same** function reference used to add it (so anonymous functions can't be removed).
- **Why does delegation need bubbling?** → The child's event must bubble up to the parent for the parent's single listener to catch it.

---

## Cheat-sheet
- Prefer `addEventListener("type", cb, useCapture)`; default phase is **bubbling**.
- Event object: `target` (clicked) vs `currentTarget` (bound).
- `preventDefault()` = cancel default action; `stopPropagation()` = stop travel. Different jobs.
- Delegation = 1 parent listener + `e.target` → fewer listeners + handles dynamic elements.
- `removeEventListener` needs a named function reference.
