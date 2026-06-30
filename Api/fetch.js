// ============================================================
//  THE fetch() API — Interview-Ready Notes
// ============================================================
//
//  fetch() is the modern, built-in, promise-based way to make
//  HTTP requests from the browser (and Node 18+). It replaces the
//  older XMLHttpRequest (XHR) with a much cleaner syntax.
//
//  Signature:  fetch(url, optionsObject)  ->  returns a Promise
//
// ============================================================


// ------------------------------------------------------------
// 1. BASIC GET REQUEST
// ------------------------------------------------------------
// fetch() returns a Promise that resolves to a Response object.
// The Response body is NOT ready yet — you must call .json()
// (or .text()) which ALSO returns a Promise. Hence two .then()s.

fetch('https://api.github.com/users/hiteshchoudhary')
    .then((response) => {
        return response.json(); // parses body, returns another promise
    })
    .then((data) => {
        console.log(data);      // the actual JS object
    })
    .catch((error) => {
        console.log('Error:', error);
    });


// ------------------------------------------------------------
// 2. SAME THING WITH async / await  (cleaner, preferred)
// ------------------------------------------------------------
async function getUser() {
    try {
        const response = await fetch('https://api.github.com/users/hiteshchoudhary');

        // IMPORTANT: fetch does NOT reject on HTTP errors (404, 500...).
        // It only rejects on NETWORK failure. So check response.ok yourself.
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log('Error:', error);
    }
}
getUser();


// ------------------------------------------------------------
// 3. POST REQUEST (sending data)
// ------------------------------------------------------------
// Pass a second "options" object with method, headers, and body.
// The body must be a STRING, so use JSON.stringify().

async function createPost() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: 'Hello',
            body: 'Learning fetch',
            userId: 1
        })
    });

    const data = await response.json();
    console.log(data);
}
createPost();


// ------------------------------------------------------------
// 4. THE Response OBJECT — useful properties / methods
// ------------------------------------------------------------
//   response.ok          -> true if status is 200–299
//   response.status      -> numeric status code (200, 404, 500...)
//   response.statusText  -> "OK", "Not Found"...
//   response.headers     -> Headers object
//   response.json()      -> Promise resolving to parsed JSON
//   response.text()      -> Promise resolving to raw text
//   response.blob()      -> Promise resolving to binary (images/files)


// ============================================================
//  5. HOW fetch() WORKS UNDER THE HOOD  (very common interview Q)
// ============================================================
//
//  JavaScript is single-threaded — it has ONE call stack.
//  Async work (fetch, setTimeout) is handed off to the browser's
//  Web APIs, so the stack is never blocked.
//
//  THE PIECES:
//   - Call Stack        : runs synchronous code, one frame at a time.
//   - Web APIs           : browser handles fetch / timers / DOM events.
//   - Microtask Queue    : holds resolved PROMISE callbacks (.then) —
//                          HIGH priority.
//   - Callback (Task) Queue : holds setTimeout / event callbacks —
//                          LOWER priority.
//   - Event Loop         : if the call stack is empty, it pushes the
//                          next task in. It DRAINS the entire microtask
//                          queue BEFORE touching the callback queue.
//
//  fetch() registers its work with the Web API. When the network
//  responds, its .then callback goes to the MICROTASK queue, so it
//  runs before any pending setTimeout callback.
//
//  Priority order:  Call Stack  >  Microtask Queue  >  Callback Queue


// ------------------------------------------------------------
// 6. PROOF: microtask vs callback queue ordering
// ------------------------------------------------------------
console.log('1: start (sync)');

setTimeout(() => {
    console.log('4: setTimeout (callback queue)');
}, 0);

Promise.resolve().then(() => {
    console.log('3: promise (microtask queue)');
});

console.log('2: end (sync)');

// OUTPUT ORDER:
//   1: start (sync)
//   2: end (sync)
//   3: promise (microtask queue)   <- microtasks run first
//   4: setTimeout (callback queue) <- then the task queue
//
// Even though setTimeout is 0ms, the promise still runs first
// because the microtask queue has higher priority.


// ============================================================
//  7. RAPID-FIRE INTERVIEW Q&A
// ============================================================
//
//  Q: What does fetch return?
//  A: A Promise that resolves to a Response object.
//
//  Q: Why do we need two .then()s?
//  A: First resolves the Response; .json() returns another promise
//     because reading/parsing the body is itself async.
//
//  Q: Does fetch reject on a 404 or 500?
//  A: NO. It only rejects on network failure. Check response.ok
//     (or response.status) yourself.
//
//  Q: fetch vs XHR?
//  A: fetch is promise-based, cleaner, supports async/await. XHR is
//     older, event/callback-based, more verbose.
//
//  Q: fetch vs axios?
//  A: axios is a third-party library: auto JSON parsing, rejects on
//     HTTP errors automatically, interceptors, wider browser support.
//
//  Q: Why does a resolved promise run before setTimeout(0)?
//  A: Promise callbacks go to the microtask queue, which the event
//     loop fully drains before the callback (task) queue.
//
//  Q: Is JavaScript multi-threaded?
//  A: No — the JS engine is single-threaded, but the browser/runtime
//     provides Web APIs that handle async work off the main thread.
