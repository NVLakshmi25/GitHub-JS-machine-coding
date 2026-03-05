✅ 1️⃣ HTML Structure
<!DOCTYPE html>

Tells browser this is an HTML5 document.

<html lang="en">

Root element of the webpage.

<meta charset="UTF-8">

Supports all characters (Unicode).

<meta name="viewport" content="width=device-width, initial-scale=1.0">

Makes page responsive on mobile.

<title>Document</title>

Title shown in browser tab.

✅ 2️⃣ CSS Section
body {
  margin: 0;
  height: 100vh;
  overflow: hidden;
}
Why?

margin: 0 → removes default browser margin.

height: 100vh → full screen height.

overflow: hidden → prevents scrollbars when circles overflow.

💬 Interviewer checks:

Do you understand viewport units?

.circle {
  position: absolute;
  border: 2px solid red;
  border-radius: 50%;
}
Why?

position: absolute → allows free positioning.

border-radius: 50% → makes it a circle.

border → visible outline.

🔥 Important:
Absolute elements are positioned relative to the nearest positioned ancestor.
Here, body is default reference.

✅ 3️⃣ JavaScript Section
Store maximum 2 circles
let circles = [];

Global array to store circle data.

Each element looks like:

{
  x: number,
  y: number,
  radius: number
}

💬 Interviewer thinking:

Why array? Why not object? Why not Map?

Correct answer:
Because we want ordered collection and simple indexing.

✅ Random Function
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

This generates random number between min and max (inclusive).

Math breakdown:

Math.random() → 0 to 0.999
(max - min + 1) → range size
+ min → shift starting point

💬 Interviewer checks:

Do you understand random range logic?

✅ Intersection Function
function isIntersecting(c1, c2) {

Takes two circle objects.

const dx = c1.x - c2.x;
const dy = c1.y - c2.y;

Difference in X and Y coordinates.

const distance = Math.sqrt(dx * dx + dy * dy);

Distance formula (Pythagoras theorem):

√
(
(
𝑥
1
−
𝑥
2
)
2
+
(
𝑦
1
−
𝑦
2
)
2
)
√((x1−x2)
2
+(y1−y2)
2
)
return distance < (c1.radius + c2.radius);

If distance < sum of radii → circles overlap.

🔥 This is computational geometry.

💬 Interviewer checks:

Do you know basic math behind collision detection?

✅ Click Event
document.addEventListener("click", (e) => {

We attach event listener to entire document.

Whenever user clicks → function runs.

Reset Logic
if (circles.length === 2) {
  document.querySelectorAll(".circle").forEach(c => c.remove());
  circles = [];
}

If already 2 circles exist:

Remove all elements with class "circle"

Reset array

💬 Interviewer thinking:

Do you understand DOM querying?
Do you understand state reset?

Generate Radius
const radius = getRandom(10, 100);

Random radius between 10px and 100px.

Create DOM Element
const circle = document.createElement("div");
circle.classList.add("circle");

We dynamically create a div.

Add class for styling.

💬 Interviewer checks:

Do you know how to create elements dynamically?

Set Width & Height
circle.style.width = radius * 2 + "px";
circle.style.height = radius * 2 + "px";

Why radius * 2?

Because width = diameter.

Position the Circle
circle.style.left = (e.clientX - radius) + "px";
circle.style.top = (e.clientY - radius) + "px";

Very important concept 👇

Click gives center position.

But CSS positioning starts from top-left corner.

So we subtract radius to properly center it.

🔥 This shows coordinate understanding.

Add To DOM
document.body.appendChild(circle);

Now circle becomes visible.

Save Circle Data
circles.push({
  x: e.clientX,
  y: e.clientY,
  radius
});

We store geometry data for later intersection check.

Intersection Check
if (circles.length === 2) {
  const result = isIntersecting(circles[0], circles[1]);
  console.log("Intersecting:", result);
}

Only when 2 circles exist → check overlap.

🧠 Interviewer Thought Process

When you explain this, interviewer silently evaluates:

1️⃣ Do you understand DOM?

createElement

appendChild

querySelectorAll

classList

2️⃣ Do you understand event handling?

addEventListener

event object

clientX, clientY

3️⃣ Do you understand math?

Distance formula
Collision detection

4️⃣ Do you understand positioning?

Absolute positioning
Coordinate centering

5️⃣ Do you understand state concept (without React)?

You manually manage state with circles array.

🔥 Very Important Comparison
This Version → Imperative Programming

You manually:

Create element

Insert element

Remove element

Update state

You control everything.

React Version → Declarative Programming

You just update state:

setCircles(updated)

React:

Decides what to render

Handles DOM updates

Does diffing

💬 Interview Power Answer:

“In vanilla JS, we manually manipulate the DOM. In React, we manage state and React handles DOM reconciliation efficiently using virtual DOM.”

🔥 That answer impresses.

🚀 If Interviewer Goes Deeper

They might ask:

What if I click 1000 times?

How to optimize?

How to prevent circle going outside screen?

How to color circle when intersecting?

Time complexity of intersection check?

Correct answer:
Intersection check → O(1) (constant time)

🎯 Perfect Short Interview Explanation

You can say:

“This program dynamically creates circles on mouse click. I calculate random radius, position the circle using absolute positioning, and store its center coordinates. When two circles exist, I use distance formula to detect collision.”

Clean. Clear. Confident.