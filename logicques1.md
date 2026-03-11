1️⃣ Reverse a String
✅ Definition (Interview Answer)

Reversing a string means arranging its characters in the opposite order.
Example: "hello" → "olleh"

✅ Why we use this approach

split("") → converts string into array (because arrays have reverse method)

reverse() → reverses array elements

join("") → converts array back to string

Strings are immutable in JavaScript, so we convert to array first.

✅ Code with Comments
function reverse(str){
    // Convert string to array of characters
    // Reverse the array
    // Join characters back into string
    return str.split("").reverse().join("");
}

console.log(reverse("hello")); // olleh
✅ Alternative Methods

Method 2 — Loop (No built-in reverse)

function reverse(str){
    let result = "";
    for(let i = str.length - 1; i >= 0; i--){
        result += str[i];
    }
    return result;
}

Method 3 — Recursion

function reverse(str){
    if(str === "") return "";
    return reverse(str.slice(1)) + str[0];
}
2️⃣ Find Largest Number in Array
✅ Definition

Find the maximum value from a list of numbers.

✅ Why we use this approach

Spread operator ... expands array into individual values

Math.max() accepts numbers, not arrays

✅ Code with Comments
function largest(arr){
    // Spread converts [3,4,2,6] → 3,4,2,6
    return Math.max(...arr);
}

console.log(largest([3,4,2,6])); // 6
✅ Alternative Methods

Method 2 — Loop

function largest(arr){
    let max = arr[0];
    for(let num of arr){
        if(num > max){
            max = num;
        }
    }
    return max;
}

Method 3 — Reduce

function largest(arr){
    return arr.reduce((max, num) => num > max ? num : max);
}
3️⃣ Palindrome Check
✅ Definition

A palindrome reads the same forward and backward.
Examples:

madam ✅

level ✅

hello ❌

✅ Why we use this approach

If reversed string equals original → palindrome.

✅ Code with Comments
function palindrome(str){
    // Reverse the string
    let reversed = str.split("").reverse().join("");
    
    // Compare original and reversed
    return str === reversed;
}

console.log(palindrome("madam")); // true
✅ Alternative Methods

Method 2 — Two Pointer Technique

function palindrome(str){
    let left = 0;
    let right = str.length - 1;

    while(left < right){
        if(str[left] !== str[right]) return false;
        left++;
        right--;
    }
    return true;
}
4️⃣ Remove Duplicates from Array
✅ Definition

Remove repeated values and keep only unique elements.

✅ Why we use this approach

Set stores only unique values

Spread converts Set back to array

✅ Code with Comments
function removeDuplicates(arr){
    // Set removes duplicates
    // Spread converts Set → Array
    return [...new Set(arr)];
}

console.log(removeDuplicates([1,2,2,3,3,4])); // [1,2,3,4]
✅ Alternative Methods

Method 2 — Filter

function removeDuplicates(arr){
    return arr.filter((item, index) => arr.indexOf(item) === index);
}
5️⃣ Count Vowels in String
✅ Definition

Count how many vowels (a, e, i, o, u) are present in a string.

✅ Why we use this approach

Loop through each character

Check if it exists in vowel string using includes()

✅ Code with Comments
function countVowels(str){
    let vowels = "aeiou";
    let count = 0;

    for(let char of str.toLowerCase()){
        if(vowels.includes(char)){
            count++;
        }
    }
    return count;
}

console.log(countVowels("javascript")); // 3
✅ Alternative Methods

Method 2 — Regex

function countVowels(str){
    let matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}
6️⃣ Factorial
✅ Definition

Factorial of n = product of all numbers from 1 to n
Example: 5! = 5×4×3×2×1 = 120

✅ Why we use loop

Multiply numbers step-by-step and store result.

✅ Code with Comments
function factorial(n){
    let result = 1;
    for(let i = 1; i <= n; i++){
        result *= i; // multiply each number
    }
    return result;
}

console.log(factorial(5)); // 120
✅ Alternative Methods

Method 2 — Recursion

function factorial(n){
    if(n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}
7️⃣ FizzBuzz
✅ Definition

Print numbers from 1 to N:

Multiple of 3 → "Fizz"

Multiple of 5 → "Buzz"

Multiple of both → "FizzBuzz"

✅ Why condition order matters

Check both first, otherwise it prints only "Fizz" for 15.

✅ Code with Comments
for(let i = 1; i <= 20; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    }
    else if(i % 3 === 0){
        console.log("Fizz");
    }
    else if(i % 5 === 0){
        console.log("Buzz");
    }
    else{
        console.log(i);
    }
}
✅ Alternative Method
for(let i=1;i<=20;i++){
    let output = "";
    if(i%3===0) output += "Fizz";
    if(i%5===0) output += "Buzz";
    console.log(output || i);
}
8️⃣ Flatten Array
✅ Definition

Convert nested array into single-level array.
Example: [1,[2,3],[4,5]] → [1,2,3,4,5]

✅ Why we use flat()

Built-in method to flatten nested arrays easily.

✅ Code with Comments
function flattenArray(arr){
    return arr.flat(); // default depth = 1
}

console.log(flattenArray([1,[2,3],[4,5]]));
✅ Alternative Methods

Method 2 — Deep Flatten

arr.flat(Infinity);

Method 3 — Recursion

function flatten(arr){
    let result = [];
    for(let item of arr){
        if(Array.isArray(item)){
            result = result.concat(flatten(item));
        } else {
            result.push(item);
        }
    }
    return result;
}