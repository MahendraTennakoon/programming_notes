# Destructuring Assignment

## Introduction

Destructuring assignment is one of the most useful features introduced with ES6, and it can help you write much cleaner code. With destructuring assignment, we can assign the values in an array or properties in an object to a set of variables easily and with clean syntax. This can also simplify a lot of things when working with functions that have a large number of parameters. In this video, we will go through all of these and also the spread operator that comes in handy in many cases.

The term Destructuring Assignment itself is very descriptive of what it does. It simply extracts the values from array or object data structures and assigns them to some other variables.

## Array Destructuring

```
const colors = ["Cyan", "Magenta", "Yellow", "Black", "Red", "Green", "Blue"];

const [C, M, Y, K, ...rest] = colors;
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

