# Destructuring Assignment

## Introduction

Destructuring assignment is one of the most useful features introduced with ES6, and it can help you write much cleaner code. With destructuring assignment, we can assign the values in an array or properties in an object to a set of variables easily and with clean syntax. This can also simplify a lot of things when working with functions that have a large number of parameters. In this video, we will go through all of these and also the spread operator that comes in handy in many cases.

The term Destructuring Assignment itself is very descriptive of what it does. It simply extracts the values from array or object data structures and assigns them to some other variables.

## Array Destructuring

Let's consider the following array.

```
const colors = ["Cyan", "Magenta", "Yellow", "Black", "Red", "Green", "Blue"];
```
Suppose we wanted to assign the first four colors to variables. We can do that by assiging each value in the array by its index.

```
const c = colors[0];
const m = colors[1];
const y = colors[2];
const k = colors[3];

console.log(c, m, y, k) // Cyan Magenta Yellow Black
```

There's nothing wrong with this approach, but its far more concise with destructuring.

```
const [c, m, y, k] = colors;
console.log(c, m, y, k) // Cyan Magenta Yellow Black
```
As you can notice, the order of the variables does matter here since it is in that order the values are assigned. However, it is possible to skip values with commas.

```
const [c,, y, k] = colors;
console.log(c, y, k) // Cyan Yellow Black
```

## Object Destructuring

### The rest pattern "..."

When there are more properties in the object than there are variables, we can assign the "rest" of them to a variable with the rest pattern.

```
let options = {
  width: 100,
  height: 200,
  weight: 50
}

const { width, ...rest } = options;

alert(width);
alert(JSON.stringify(rest));
```

### Nested Destructuring

