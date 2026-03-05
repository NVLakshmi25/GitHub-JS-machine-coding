✅ 1️⃣ HTML Structure
```html
<!DOCTYPE html>

Tells browser this is an HTML5 document.

---

### ```html
<html lang="en">

Root element of the page.

```html
<meta charset="UTF-8"> ```

Supports all character types.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0"> ```

Makes page responsive on mobile devices.

```html
<title>Document</title> ```

Title displayed in browser tab.

✅ 2️⃣ Body Section
```html
<h1 id="title">Hello World</h1> ```

Important line 👇

Creates an <h1> element.

id="title" allows us to select it in JavaScript.

Initial text = Hello World

💬 Interviewer checks:

Do you understand id selector?

```html
<script src="app.js"></script>

External JS file link.

Even though you're writing inline JS below, this line shows understanding that scripts should be loaded at bottom for performance.

Why bottom?

Because:
- HTML loads first
- Then JS runs
- Prevents DOM not found errors

🔥 Good practice knowledge.

---

# ✅ 3️⃣ JavaScript Section

---

## Step 1: Array

```js
const names = ["Niha", "Kushi", "Nidi", "AA"];

Array of names.

Stored using const because reference does not change.

💬 Interviewer thinking:

Why const and not let?

Correct answer:
Because we are not reassigning the array itself.

Step 2: Select DOM Element
const heading = document.getElementById("title");

Selects <h1> using its id.

Stores reference in heading.

This is called DOM selection.

💬 Interviewer checks:

Difference between getElementById and querySelector?

Step 3: Maintain Index State
let currentIndex = 0;

This acts like "state".

In vanilla JS:
You manually manage state using variables.

In React:
You use useState.

🔥 Important concept:
This variable persists in memory because it's in script scope.

Step 4: Add Click Event
heading.onclick = function () {

Attaches click event to heading.

Alternative modern way:

heading.addEventListener("click", function() {})

💬 Interviewer checks:

Do you know difference between onclick and addEventListener?

Inside Click Function
Change Text
heading.textContent = names[currentIndex];

Updates text inside <h1>.

Important:

textContent changes only text.
Safer than innerHTML.

💬 Interviewer thinking:

Why not innerHTML?

Correct answer:
Because innerHTML parses HTML and can cause security risks (XSS).

🔥 Strong answer.

Increment Index
currentIndex++;

Moves to next name.

Reset Logic
if (currentIndex === names.length) {
  currentIndex = 0;
}

If index reaches array length → reset to 0.

Example:

0 → 1 → 2 → 3 → 4

When it becomes 4 (equal to length) → reset to 0.

This creates circular behavior.

🔥 Execution Flow

Initial:

Hello World
currentIndex = 0

Click 1:

Show names[0] = Niha
currentIndex becomes 1

Click 2:

Show names[1] = Kushi
currentIndex becomes 2

Click 3:

Show names[2] = Nidi
currentIndex becomes 3

Click 4:

Show names[3] = AA
currentIndex becomes 4
Reset to 0

Click 5:

Show names[0]
🧠 Interviewer Thought Process

While you explain this, interviewer checks:

✅ 1️⃣ DOM Knowledge

Can you select elements?

Can you modify text?

Do you understand DOM tree?

✅ 2️⃣ Event Handling Knowledge

What happens when user clicks?

How event system works?

✅ 3️⃣ JavaScript Fundamentals

Array indexing

Variable scope

Increment operator

Condition checking

✅ 4️⃣ State Understanding Without Framework

This line is key:

let currentIndex = 0;

This is manual state.

Interviewer wants to see:

Do you understand that frameworks like React automate this concept?

🔥 Very Important Comparison (React vs JS)

In Vanilla JS:

You manually:

Select element

Update DOM

Maintain state

Reset index

In React:

You:

Store state

React updates DOM automatically

💬 Strong interview answer:

“In vanilla JavaScript, we directly manipulate the DOM and manage state manually using variables. In React, we manage state declaratively using hooks, and React handles DOM updates through reconciliation.”

🔥 That answer shows maturity.

🚨 Advanced Questions They May Ask
❓ What happens if names array is empty?

Then names[currentIndex] is undefined.

Better solution:

if (names.length === 0) return;
❓ What is time complexity?

O(1)

❓ What is scope of currentIndex?

Global to script.
Accessible inside click handler due to closure.

🔥 If you say "closure", interviewer impressed.

🎯 Perfect Short Interview Explanation

You can say:

“This program selects an H1 element and cycles through an array of names on each click. I maintain a currentIndex variable as state and update textContent dynamically. When the index reaches array length, I reset it to create circular behavior.”

Clean. Professional. Clear.