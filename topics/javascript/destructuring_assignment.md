# Destructuring Assignment

## Introduction

Destructuring assignment is one of the most useful features introduced with ES6, and it can help you write much cleaner code. With destructuring assignment, we can assign the values in an array or properties in an object to a set of variables easily and with clean syntax. This can also simplify a lot of things when working with functions that have a large number of parameters. In this video, we will go through all of these and also the rest pattern that comes in handy in many cases.

The term Destructuring Assignment itself is very descriptive of what it does. It simply extracts the values from array or object data structures and assigns them to some other variables.

## Array Destructuring

Let's consider the following array.

```
const colors = ["Cyan", "Magenta", "Yellow", "Black", "Red", "Green", "Blue"];
```
The first 4 colors are the 4 basic colors used in color printing. Suppose we wanted to assign them to variables. We can do that by assiging each value in the array by its index.

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

As you can notice, the order of the variables does matter here since it is in that order the values are assigned. However, it is possible to skip values with commas. To make this more interesting, let's mix up the colors in the array. Red, Geen and Blue are the colors in the RGB color model which are primarily used for digital work while CMYK is used for print. So, let's mix them up.

```
const colors = ["Cyan", "Red", "Magenta", "Yellow", "Black", "Green", "Blue"];
const [c, m, y, k] = colors;
console.log(c, m, y, k) // Cyan Red Magenta Yellow
```

Since this is not what we want, We can simply ignore Red at index 01 of the array.

```
const colors = ["Cyan", "Red", "Magenta", "Yellow", "Black", "Green", "Blue"];
const [c, ,m, y, k] = colors;
console.log(c, m, y, k) // Cyan Magenta Yellow Black
```

That works as expected.

It is important to note that variables can assigned separately from their declarations.

```
let c, m, y, k;
[c, m, y, k] = colors;

console.log(c, m, y, k) // Cyan Magenta Yellow Black
```

It is possible to assign a default value to a variable when destructuing. The default will value will be used if the corresponding value in the array is undefined.

```
const colors = ["Cyan", "Magenta", "Yellow"];
const [c, m, y, k="Black"] = colors;

console.log(c, m, y, k) // Cyan Magenta Yellow Black
```

So far, in every example we considered, we unpacked only a portion of the array and left out the rest. What if we wanted to assign the rest of the values in the array to another variable?

This can be done with the rest pattrn.

```
const colors = ["Cyan", "Magenta", "Yellow", "Black", "Red", "Green", "Blue"];

const [c, m, y, k, ...rest] = colors;
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

