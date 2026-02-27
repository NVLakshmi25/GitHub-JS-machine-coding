✅ React 19+
✅ Tailwind CSS
✅ LocalStorage persistence
✅ Add / Delete
✅ Alphabetical Sort (A→Z, Z→A toggle)
✅ Using modern toSorted() (new JS method)
✅ Separate files
✅ Clean explanation
✅ Interview-style answers

🔥 Why toSorted() Instead of sort()?

sort() mutates original array ❌
toSorted() returns new array ✅

React requires immutability.

🧠 Interview Explanation (How You Should Speak)
❓ How did you approach this problem?

I first separated concerns into components.
Then I created a custom hook for localStorage to make it reusable.
I handled add/delete using functional state updates.
For sorting, I used the new toSorted() method to avoid mutation.
I ensured UI updates automatically via state.

❓ Why functional update?
setTodos(prev => [...prev, newTodo])

Because state updates are asynchronous.
Using functional form ensures we get latest state.

❓ Why localStorage in custom hook?

To separate logic from UI.
It makes component cleaner and reusable.

❓ What happens on refresh?

Todos are retrieved from localStorage in initial state.

❓ Any improvements possible?

Add unique IDs

Add edit functionality

Add useReducer

Use context for global state

Use memoization for performance

💯 What This Demonstrates

React fundamentals

State management

Immutability

Custom hooks

Component architecture

Tailwind usage

Sorting logic

LocalStorage persistence