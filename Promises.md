We’ll cover:

typeof function

typeof array

typeof class

Promises (manual + async/await)

Top-level await with module

Module execution order

Module scope vs Global scope

Why var is not global in module

✅ 1️⃣ Why typeof function is "function"?
🗣 Interview Answer:

In JavaScript, functions are actually objects internally.
But typeof returns "function" as a special case.
---------------------------------
function greet() {}

console.log(typeof greet); 
// "function"
--------------------------------
💬 Explanation:

Functions are objects.

But JavaScript gives special result "function" for better developer clarity.

Internally functions are callable objects.

If I check:
-----------------------------
console.log(greet instanceof Object); 
// true
----------------------------
So function is also an object.

✅ 2️⃣ Why typeof [] is "object"?
-------------------------------
const arr = [];

console.log(typeof arr); 
// "object"
--------------------------------
🗣 Interview Answer:

Arrays are special type of objects in JavaScript.

To properly check array:
------------------------------------
console.log(Array.isArray(arr)); 
// true
----------------------------------
Because typeof cannot differentiate array and object.

✅ 3️⃣ What is typeof class?
-----------------------------------
class Person {}

console.log(typeof Person);
// "function"
---------------------------------
🗣 Interview Answer:

Behind the scenes, a class in JavaScript is just a constructor function.

So:

Class is syntactic sugar

Internally it is still a function

That’s why:
--------------------------------------
console.log(Person instanceof Function);
// true
-----------------------------------
✅ 4️⃣ Promise — Create and Resolve on Button Click
🎯 Requirement:

Promise should stay pending

Resolve only when button is clicked

💻 Code
<button id="resolveBtn">Resolve</button>
<button id="rejectBtn">Reject</button>

<script type="module">
  let resolveFunction;
  let rejectFunction;

  // Promise created immediately
  const myPromise = new Promise((resolve, reject) => {
    resolveFunction = resolve; // storing resolve reference
    rejectFunction = reject;   // storing reject reference
  });

  // Handling resolve
  document.getElementById("resolveBtn").addEventListener("click", () => {
    resolveFunction("Promise Resolved Successfully");
  });

  // Handling reject
  document.getElementById("rejectBtn").addEventListener("click", () => {
    rejectFunction("Promise Rejected");
  });

  // Consuming Promise
  myPromise
    .then((result) => {
      console.log("Resolved:", result);
    })
    .catch((error) => {
      console.log("Rejected:", error);
    });
</script>
🗣 Interview Explanation:

Promise is created when page loads.

It remains pending.

We store resolve & reject references.

When button is clicked → we manually trigger resolve/reject.

Then .then() or .catch() runs.

✅ 5️⃣ Create Promise without new Promise

We can use async function.
------------------------------------
async function myFunc() {
  return "Hello";
}

console.log(myFunc()); 
// Promise { fulfilled: "Hello" }
----------------------------------
🗣 Interview Explanation:

Async function ALWAYS returns a Promise.

Even if we return a normal value, it gets wrapped in Promise.resolve().

✅ 6️⃣ Make async function pending using await
------------------------------------------
let externalResolve;

const pendingPromise = new Promise((resolve) => {
  externalResolve = resolve;
});

async function myFunc() {
  console.log("Start");

  const result = await pendingPromise;

  console.log("After Await:", result);
}

myFunc();

// later
externalResolve("Ainash");
--------------------------------------
🗣 Interview Explanation:

await pauses function execution.

It does NOT block main thread.

Function execution is suspended.

After promise resolves → it resumes from same line.

✅ 7️⃣ Does await block main thread?
🗣 Interview Answer:

No.

It pauses only that async function.

It frees the call stack.

Event loop continues running.

When promise resolves → execution resumes from that line.

✅ 8️⃣ Module Execution Order Question

You had:
-----------------------------------
script1.js
console.log("Script 1 Loaded");

export const name = "Ainash";
------------------------------------
script.js
console.log("Start");

import { name } from "./script1.js";

console.log(name);
🗣 Interview Answer:

Output:

Script 1 Loaded
Start
Ainash
--------------------------------------------
💬 Why?

Because:

ES Modules are hoisted.

Imports are executed before file execution.

Module dependency graph is resolved first.

✅ 9️⃣ Why var is not global in module?

In normal script:

<script>
var x = 10;
</script>

You can access in console:

x → 10

But in module:

<script type="module">
var x = 10;
</script>

Console:

x → ReferenceError
🗣 Interview Explanation:

When using type="module":

File runs in module scope

Variables are not attached to window object

Module has its own scope

🧠 Scope Structure in Module

Hierarchy:

Global Scope
   ↓
Module Scope
   ↓
Function Scope
   ↓
Block Scope
✅ Final Interview Summary (As Interviewee)

In this discussion, we covered:

Function is object internally

Class is syntactic sugar over function

Promise lifecycle

Async/await suspension behavior

Event loop resume behavior

Top-level await using module

Module execution order

Module scope vs global scope

🔥 What This Shows in Interview

If you answer like this:

You understand internals

You know event loop behavior

You understand execution context

You know module system deeply

You don’t just memorize — you reason