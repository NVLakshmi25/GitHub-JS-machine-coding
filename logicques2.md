🔹 STRING PROBLEMS
1️⃣ Reverse a String
✅ Question Definition

Reverse the order of characters in a string.

✅ Answer Definition

Reversing means last character becomes first.

✅ Why this approach

Strings are immutable → convert to array → reverse → join.

✅ Code
function reverseString(str){
  // Convert string to array
  // Reverse array
  // Convert back to string
  return str.split('').reverse().join('');
}
✅ Dry Run

"hello"
→ ['h','e','l','l','o']
→ ['o','l','l','e','h']
→ "olleh"

✅ Alternative (Loop)
function reverseString(str){
  let res = '';
  for(let i=str.length-1;i>=0;i--){
    res += str[i];
  }
  return res;
}
2️⃣ Palindrome
✅ Question Definition

Check if string reads same forward and backward.

✅ Concept

Original === Reversed

✅ Code
function isPalindrome(str){
  let rev = str.split('').reverse().join('');
  return str === rev;
}
✅ Dry Run

"madam" === "madam" → true

✅ Alternative (Two Pointer)
function isPalindrome(str){
  let l=0,r=str.length-1;
  while(l<r){
    if(str[l]!==str[r]) return false;
    l++; r--;
  }
  return true;
}
3️⃣ Count Vowels
✅ Definition

Count a,e,i,o,u in string.

✅ Code
function countVowels(str){
  let vowels="aeiouAEIOU";
  let count=0;
  for(let ch of str){
    if(vowels.includes(ch)) count++;
  }
  return count;
}
✅ Dry Run

"hello" → e,o → 2

✅ Alternative (Regex)
const countVowels=s=>(s.match(/[aeiou]/gi)||[]).length;
4️⃣ First Non-Repeating Character
✅ Definition

Character appearing only once.

✅ Code
function firstUnique(str){
  for(let ch of str){
    if(str.indexOf(ch)===str.lastIndexOf(ch)){
      return ch;
    }
  }
}
✅ Dry Run

"aabbcde" → c

✅ Alternative (Map)
function firstUnique(str){
  let map={};
  for(let ch of str) map[ch]=(map[ch]||0)+1;
  for(let ch of str) if(map[ch]===1) return ch;
}
5️⃣ Anagrams
✅ Definition

Same letters, different order.

✅ Code
function isAnagram(a,b){
  return a.split('').sort().join('')===
         b.split('').sort().join('');
}
✅ Dry Run

listen → eilnst
silent → eilnst → true

✅ Alternative (Frequency Count)
function isAnagram(a,b){
  if(a.length!==b.length) return false;
  let m={};
  for(let ch of a) m[ch]=(m[ch]||0)+1;
  for(let ch of b){
    if(!m[ch]) return false;
    m[ch]--;
  }
  return true;
}
6️⃣ Capitalize First Letter
function capitalize(str){
  return str.split(' ')
    .map(w=>w[0].toUpperCase()+w.slice(1))
    .join(' ');
}

Dry Run: "hello world" → "Hello World"

Alt:

str.replace(/\b\w/g,c=>c.toUpperCase());
7️⃣ Longest Word
function longestWord(str){
  return str.split(' ')
    .reduce((a,b)=>a.length>b.length?a:b);
}

Dry Run: "I love javascript" → javascript

🔹 ARRAY PROBLEMS
8️⃣ Largest Number
const largest=arr=>Math.max(...arr);

Alt:

arr.reduce((a,b)=>a>b?a:b);
9️⃣ Smallest Number
const smallest=arr=>Math.min(...arr);
🔟 Remove Duplicates
const unique=arr=>[...new Set(arr)];

Alt:

arr.filter((v,i)=>arr.indexOf(v)===i);
1️⃣1️⃣ Reverse Array
arr.reverse();

Alt:

arr.reduce((a,b)=>[b,...a],[]);
1️⃣2️⃣ Sort Array
arr.sort((a,b)=>a-b); // asc
arr.sort((a,b)=>b-a); // desc
1️⃣3️⃣ Second Largest
function secondLargest(arr){
  return [...new Set(arr)].sort((a,b)=>b-a)[1];
}
1️⃣4️⃣ Missing Number
function missing(arr,n){
  return n*(n+1)/2 - arr.reduce((a,b)=>a+b,0);
}
1️⃣5️⃣ Merge Arrays
[...a,...b];

Alt:

a.concat(b);
1️⃣6️⃣ Flatten Array
arr.flat(Infinity);

Alt (Recursion)

function flat(arr){
  return arr.reduce((a,b)=>
    a.concat(Array.isArray(b)?flat(b):b),[]);
}
1️⃣7️⃣ Rotate Array
function rotate(arr,k){
  k%=arr.length;
  return arr.slice(-k).concat(arr.slice(0,-k));
}

Dry: [1,2,3,4,5],k=2 → [4,5,1,2,3]

🔹 NUMBER / MATH
1️⃣8️⃣ Factorial
function factorial(n){
  let res=1;
  for(let i=1;i<=n;i++) res*=i;
  return res;
}

Alt:

n<=1?1:n*factorial(n-1);
1️⃣9️⃣ Fibonacci
function fib(n){
  let a=0,b=1;
  for(let i=0;i<n;i++){
    console.log(a);
    [a,b]=[b,a+b];
  }
}
2️⃣0️⃣ Prime Check
function prime(n){
  if(n<2) return false;
  for(let i=2;i<=Math.sqrt(n);i++)
    if(n%i===0) return false;
  return true;
}
2️⃣1️⃣ Armstrong
function armstrong(n){
  let p=String(n).length;
  return n===[...String(n)]
    .reduce((s,d)=>s+d**p,0);
}
2️⃣2️⃣ Sum of Digits
const sumDigits=n=>[...String(n)]
  .reduce((s,d)=>s+Number(d),0);
2️⃣3️⃣ Swap Numbers

With temp:

let t=a; a=b; b=t;

Without temp:

[a,b]=[b,a];
🔹 LOGIC / MIXED
2️⃣4️⃣ FizzBuzz
for(let i=1;i<=n;i++){
  console.log(
    i%15===0?"FizzBuzz":
    i%3===0?"Fizz":
    i%5===0?"Buzz":i
  );
}
2️⃣5️⃣ Debounce
Definition

Delays function execution until calls stop.

function debounce(fn,delay){
  let t;
  return (...args)=>{
    clearTimeout(t);
    t=setTimeout(()=>fn(...args),delay);
  };
}