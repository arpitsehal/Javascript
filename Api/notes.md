# API & XMLHttpRequest (XHR) — Interview Prep Notes

These notes explain the code in `api.html` and the concepts an interviewer
commonly asks about.

```js
// XML Http req is the oldest way
const requestURL = 'https://api.github.com/users'
const xhr = new XMLHttpRequest();
xhr.open('GET', requestURL)
console.log(xhr.readyState);
xhr.send()
```

---

## 1. What is an API?

**API = Application Programming Interface** — a contract that lets two
programs talk to each other.

A **Web API** is usually an HTTP endpoint that returns data (most often
JSON). In the code above we hit GitHub's REST API at
`https://api.github.com/users`.

## 2. What is XMLHttpRequest (XHR)?

XHR is the **oldest built-in browser way** to make HTTP requests
**asynchronously** (this is what "AJAX" refers to) without reloading the page.

**Modern alternatives:**
- `fetch()` — built-in, promise-based, cleaner syntax.
- `axios` — popular third-party library (auto JSON parsing, interceptors).

**Why still learn XHR?** It exposes the underlying request lifecycle that
`fetch()` hides — and it's a frequent interview question.

## 3. The 4 steps of an XHR request

| Step | Code | What it does |
|------|------|--------------|
| 1. Create | `new XMLHttpRequest()` | Creates the request object |
| 2. Open | `xhr.open(method, url)` | **Configures** the request (does NOT send) |
| 3. Handle | `xhr.onreadystatechange = ...` | (optional) Reacts to progress |
| 4. Send | `xhr.send()` | Actually fires the request |

## 4. `readyState` — the key interview topic

`readyState` tracks the request's progress through **5 states (0–4):**

| Value | Constant | Meaning |
|-------|----------|---------|
| 0 | UNSENT | Object created, `open()` not called yet |
| 1 | OPENED | `open()` has been called |
| 2 | HEADERS_RECEIVED | `send()` called, headers + status arrived |
| 3 | LOADING | Downloading the response body |
| 4 | DONE | Request finished, response is ready |

> **Why does the code log `1`?**
> Because `console.log(xhr.readyState)` runs **right after `open()`** but
> **before `send()`** — so it's in the OPENED state.

## 5. How to actually use the response

The request is asynchronous, so you listen for state changes and check for
**state 4 (DONE)** + **status 200 (OK):**

```js
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const data = JSON.parse(xhr.responseText); // string -> JS object
    console.log(data);
  }
};
```

**Why `JSON.parse()`?** The response arrives as a **string**. `JSON.parse()`
converts it into a usable JavaScript object/array. (The reverse is
`JSON.stringify()`.)

## 6. Quick rapid-fire Q&A

- **Synchronous vs asynchronous?** Async doesn't block the main thread — the
  page stays responsive while waiting for the server.
- **Common HTTP methods?** GET (read), POST (create), PUT/PATCH (update),
  DELETE (remove).
- **Common status codes?** 200 OK, 201 Created, 301/302 Redirect,
  400 Bad Request, 401 Unauthorized, 404 Not Found, 500 Server Error.
- **XHR vs fetch?** `fetch` is promise-based and cleaner; `fetch` does NOT
  reject on HTTP error codes (only network failures), so you must check
  `response.ok` yourself.
- **What is CORS?** Cross-Origin Resource Sharing — a browser security rule
  controlling which origins can call an API.
