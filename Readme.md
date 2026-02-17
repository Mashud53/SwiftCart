## 1. What is the difference between `null` and `undefined`?

**Answer:**\
`null` and `undefined` both represent absence of value, but they are
different in meaning and usage.

-   **undefined** means a variable has been declared but not assigned a
    value.
    -   Variable declared but not assigned
    -   Function without a return value
    -   Missing function parameter
-   **null** means an intentional absence of value.\
    It is manually assigned when a developer wants to say:\
    *"This variable currently has no value."*

------------------------------------------------------------------------

## 2. What is the use of the `map()` function in JavaScript? How is it different from `forEach()`?

**Answer:**\
Both `map()` and `forEach()` are array methods.

-   **map()** is used to transform elements of an array and returns a
    new array.
-   **forEach()** is used to loop through an array but does not return a
    new array.

------------------------------------------------------------------------

## 3. What is the difference between `==` and `===`?

**Answer:**\
- `==` compares values only and performs type conversion
automatically. - `===` compares both value and type .

------------------------------------------------------------------------

## 4. What is the significance of `async/await` in fetching API data?

**Answer:**\
`async/await` is used to handle asynchronous operations (like API calls)
in a clean, readable, and manageable way.

When fetching data from an API, the request takes time. JavaScript does
not wait; it continues running other code.\
`async/await` helps handle that delay properly.

-   `async` makes a function return a Promise.
-   `await` pauses execution until the Promise resolves.

------------------------------------------------------------------------

## 5. Explain the concept of Scope in JavaScript (Global, Function, Block).

**Answer:**

### Global Scope

A variable declared outside any function or block has global scope.\
It can be accessed from anywhere in the file.

### Function Scope

A variable declared inside a function is only accessible inside that
function.

### Block Scope

A block is anything inside `{}` like: - if statement - for loop - while
loop
