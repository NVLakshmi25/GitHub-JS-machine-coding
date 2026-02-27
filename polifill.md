✅ Step 1: First Understand Original Array.prototype.filter

Original method syntax:

arr.filter((currentValue, index, array) => {
  return condition;
});

It:

Iterates over array

Executes callback

If callback returns true → pushes value

Returns new array

Does NOT modify original array.

✅ Example Usage
const arr = [1, 2, 3, 4, 5];

const result = arr.myFilter((value, index, array) => {
  console.log("Value:", value);
  console.log("Index:", index);
  console.log("Array:", array);
  return value < 3;
});

console.log(result); // [1, 2]
🔥 Interview Thought Process (How You Should Explain)

First I understand how original filter works.
Then I attach my method to Array.prototype.
Then inside the function, this refers to the calling array.
I create a new result array.
I loop through array.
I execute callback with value, index and array.
If callback returns true → push value.
Finally return new array.

🚨 Important Interview Trap: Arrow Function Mistake

If you write:

Array.prototype.myFilter = (callback) => {
  console.log(this);
}

❌ WRONG

Why?

Because:

👉 Arrow functions DO NOT have their own this.
👉 They take lexical this.
👉 Here this will be window (browser) or undefined (strict mode).

Correct way:

Array.prototype.myFilter = function(callback) {
  console.log(this); // correct array
}
🔥 Why this Works Here?

When you call:

arr.myFilter()

JavaScript automatically binds:

this = arr

So inside function:

const array = this;

Now array is the original array.

🔥 How IF Condition Works

Inside loop:

if (shouldInclude) {
   result.push(array[i]);
}

Callback returns:

true → include

false → skip

Example:

value < 3

Returns:

1 < 3 → true

2 < 3 → true

3 < 3 → false

So result becomes [1,2]

🔥 Does It Support Index?

Yes.

Because we pass:

callback(array[i], i, array)

So:

(value, index, array)

Works perfectly.

🔥 Does It Support Original Array Parameter?

Yes.

Because we pass third parameter:

array

Original filter gives:

currentValue

index

originalArray

We support all 3.

🔥 What About thisArg?

Original filter supports optional second argument:

arr.filter(callback, thisArg)

We implemented:

callback.call(thisArg, ...)

So it behaves like real filter.

🔥 Edge Cases Covered

✅ Callback validation
✅ Sparse arrays handling (i in array)
✅ thisArg support
✅ No mutation
✅ Correct this binding
✅ Returns new array

🎤 Interview Explanation (How You Should Speak)

I attached my custom function to Array.prototype so it behaves like native filter.
Inside that function, this refers to the calling array.
I created a new result array.
Then I looped through the array.
I executed the callback with currentValue, index and original array.
If callback returns true, I push that value.
Finally I return the new array.
I also handled edge cases like sparse arrays and validated callback type.
I avoided arrow function because arrow does not bind its own this.

🔥 Common Follow-Up Questions They May Ask
❓ Why check i in array?

To skip empty slots in sparse arrays.

❓ Why use call?

To allow custom thisArg.

❓ Does filter mutate original array?

No. It returns new array.

💯 Final Clean Short Version (If Interviewer Wants Minimal)
Array.prototype.myFilter = function(callback) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }

  return result;
};
🧠 What This Tests in Interview

Prototype knowledge

this binding

Arrow vs normal function

Callback understanding

Internal working of array methods

Edge case thinking.
---------------------------------------------------------------------------------------------------------------------------------------------------------------------
✅ 1️⃣ Polyfill for map
🔥 How original map works
arr.map((value, index, array) => {
   return transformedValue;
});

Iterates

Transforms each element

Returns new array

Does NOT mutate original array

✅ Polyfill
if (!Array.prototype.myMap) {

  Array.prototype.myMap = function(callback, thisArg) {

    if (typeof callback !== "function") {
      throw new TypeError("Callback must be a function");
    }

    const array = this;
    const result = [];

    for (let i = 0; i < array.length; i++) {

      if (i in array) {  // skip sparse indexes

        const mappedValue = callback.call(
          thisArg,
          array[i],  // currentValue
          i,         // index
          array      // original array
        );

        result.push(mappedValue);
      }
    }

    return result;
  };
}
🎤 Interview Explanation

I attached the method to Array.prototype.
Inside the function, this refers to calling array.
I loop through the array.
I call the callback with value, index and original array.
I push the returned value into result array.
Finally return the result.

✅ 2️⃣ Polyfill for reduce
🔥 How original reduce works
arr.reduce((accumulator, currentValue, index, array) => {
   return updatedAccumulator;
}, initialValue);
✅ Polyfill
if (!Array.prototype.myReduce) {

  Array.prototype.myReduce = function(callback, initialValue) {

    if (typeof callback !== "function") {
      throw new TypeError("Callback must be a function");
    }

    const array = this;
    let accumulator;
    let startIndex;

    // If initial value is provided
    if (arguments.length > 1) {
      accumulator = initialValue;
      startIndex = 0;
    } else {
      accumulator = array[0];
      startIndex = 1;
    }

    for (let i = startIndex; i < array.length; i++) {

      if (i in array) {
        accumulator = callback(
          accumulator,
          array[i],
          i,
          array
        );
      }
    }

    return accumulator;
  };
}
🎤 Interview Explanation

Reduce accumulates values.
If initial value is provided, we start from index 0.
If not, first element becomes accumulator and loop starts from index 1.
On each iteration, we update accumulator.
Finally return accumulated result.

✅ 3️⃣ Debounce Implementation
🔥 What is Debounce?

Execute function only after delay stops.

Used in:

Search input

Resize events

API calls

✅ Code
function debounce(callback, delay) {

  let timer;

  return function (...args) {

    clearTimeout(timer);

    timer = setTimeout(() => {
      callback.apply(this, args);
    }, delay);
  };
}
🎤 Interview Explanation

Debounce clears previous timer.
It waits until user stops triggering event.
Only last call executes.

✅ 4️⃣ Throttle Implementation
🔥 What is Throttle?

Execute function once per time interval.

Used in:

Scroll

Mousemove

Resize

✅ Code
function throttle(callback, delay) {

  let lastCall = 0;

  return function (...args) {

    const now = Date.now();

    if (now - lastCall >= delay) {
      lastCall = now;
      callback.apply(this, args);
    }
  };
}
🎤 Interview Explanation

Throttle limits execution frequency.
Even if event fires 1000 times,
function runs only once per interval.

✅ 5️⃣ Deep Dive into this Binding 🔥

This is VERY IMPORTANT in interviews.

There are 4 main ways this works:

1️⃣ Global Context
console.log(this);

Browser → window
Node → {}

2️⃣ Function Context
function test() {
  console.log(this);
}

test();

Normal mode → window
Strict mode → undefined

3️⃣ Object Method
const obj = {
  name: "React",
  show() {
    console.log(this.name);
  }
};

obj.show(); // React

Here:
this = obj

4️⃣ Arrow Function
const obj = {
  name: "React",
  show: () => {
    console.log(this.name);
  }
};

obj.show(); // undefined

Arrow function:

DOES NOT have its own this

Takes lexical this

🔥 call, apply, bind
call
function greet() {
  console.log(this.name);
}

greet.call({ name: "Venky" });
apply

Same as call but arguments in array.

bind

Returns new function with bound this.

🧠 Why Arrow Failed in Polyfill?

Because:

Array.prototype.myFilter = () => {
  console.log(this);
}

Arrow takes lexical this → global object.

We need:

Array.prototype.myFilter = function() {
  console.log(this); // correct array
}
🔥 Interview Final Summary

If interviewer asks:

❓ What did you implement?

I implemented polyfills for map and reduce using prototype.
I implemented debounce and throttle for performance optimization.
I explained deep this binding including lexical binding of arrow functions.

💯 What This Proves in Interview

Strong JS fundamentals

Prototype understanding

Closure knowledge

Event optimization

this binding clarity

Edge case thinking.