# Destructuring Assignment

## Introduction

Destructuring assignment is one of the most useful features introduced with ES6, and it can help you write much cleaner code. With destructuring assignment, we can assign the values in an array or properties in an object to a set of variables easily and with clean syntax. This can also simplify a lot of things when working with functions that have a large number of parameters. In this video, we will go through all of these and also the rest pattern that comes in handy in many cases.

The term Destructuring Assignment itself is very descriptive of what it does. It simply extracts the values from array or object data structures and assigns them to some other variables.

Let's start with Array Destructuring.

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

There's nothing wrong with this approach, but it's far more concise with destructuring.

```
const [c, m, y, k] = colors;
console.log(c, m, y, k) // Cyan Magenta Yellow Black
```

As you can notice, the order of the variables does matter here since it is in that order the values are assigned. However, it is possible to skip values with commas. To make this more interesting, let's mix up the colors in the array. Red, Geen and Blue are the colors in the RGB color model which are primarily used for digital work while CMYK is used for print. Let's mix them up.

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

It is important to note that variables can be assigned separately from their declarations.

```
let c, m, y, k;
[c, m, y, k] = colors;

console.log(c, m, y, k) // Cyan Magenta Yellow Black
```

It is possible to assign a default value to a variable when destructuing. The default value will be used if the corresponding value in the array is undefined.

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

console.log(c, m, y, k, rest)
```
Let's have a second look at this "...rest" syntax. The variable rest is very commonly used in situations like this, but it can be named whatever we want. So, if I rename it to rgb, it works without any issues.

```
const colors = ["Cyan", "Magenta", "Yellow", "Black", "Red", "Green", "Blue"];
const [c, m, y, k, ...rgb] = colors;

console.log(c, m, y, k, rgb)
```

Let's move onto Object Destructuring now.

## Object Destructuring

Objects can be destructured using the object keys, and in most cases this is much more useful than array destructuring. I will create an object with a few properties of the dragon space-craft. I'll name it dragon. It is resuable and since this is a cargo space-craft, crew is zero and I'll add the capacity as well just for fun.

```
const dragon = {
    isReusable: true,
    crew: 0,
    capacity: "3500 kg"
}

// we can simply destructure it ilke this. Since this is an object, we'll use curly braces.
const { isReusable, crew, capacity } = dragon;

console.log(isReusable, crew, capacity)
```
Just like with arrays, we can declare the the variables first and have the assignment separately.

```
const dragon = {
    isReusable: true,
    crew: 0,
    capacity: "3500 kg"
}
let isReusable, crew, capacity;

{ isReusable, crew, capacity } = dragon;

```
However, if we try to do this, it throws an error since what we have on the left hand side is considered a code block and not an object. As you probably know, a code block like this is usually used to group a set of statements. We can wrap the whole thing in paranthesis to let JS know that this is not a code block.

```
const dragon = {
    isReusable: true,
    crew: 0,
    capacity: "3500 kg"
}
let isReusable, crew, capacity;

({ isReusable, crew, capacity } = dragon);

```

As you can see, it works fine now.

We can also assign the properties in the object to variables that have different names than the keys of the object. This can be done with a colon.

```
const dragon = {
    isReusable: true,
    crew: 0,
    capacity: "3500 kg"
}

const { isReusable, crew, capacity: payload } = dragon;

console.log(isReusable, crew, payload)
```

What it basically does is, it takes the property capacity from the dragon object and assigns it to variable payload.

Just like with array, we can assign default values to variables.

```
const dragon = {
    isReusable: true,
    crew: 0,
    capacity: "3500 kg"
}

const { isReusable, crew, capacity, length = "6.1m" } = dragon;

console.log(isReusable, crew, capacity, length);
```

Since length is not a property of the dragon object, the default value is assigned to it.

We can also assign to new variable names and have default values at the same time. That will look something like this.

```
const dragon = {
    isReusable: true,
    crew: 0,
    capacity: "3500 kg"
}

const { isReusable, crew, capacity: payload = "4000 kg", length = "6.1m" } = dragon;

console.log(isReusable, crew, payload, length);
```
If we remove capacity from the dragon object, payload gets the default value.

When there are more properties in the object than there are variables, we can assign the "rest" of them to a variable with the rest pattern just like we did with arrays.

```
const dragon = {
    isReusable: true,
    crew: 0,
    capacity: "3500 kg"
}

const { crew, ...rest } = dragon;

console.log(crew);
console.log(rest);
```
As you can see, rest is an object with the properties of dragon except crew.


My favorite use case of object destructuring is to use it with function parameters. Let's say we have a function named describe to print an object such as this one.

I'll use template literals to format the output here. If you are not familiar with template literals, I have a whole video on it which I have linked in the description.

```
function describe(crew, capacity) {
    console.log(`${crew} crew space-craft with a capacity of ${capacity}` )
}

describe(dragon.crew, dragon.capacity);
```

What we usually do is, have separate parameters like this. This can work in most cases, but it is really a pain to work with when there is a large number of parameters. We can pass in an object as the parameter and use the object properties with the dot notation. Even better, we can destructure the object that is passed in as a parameter.

So, I will pass in the entire dragon object and unpack only the values I need.

```
function describe({crew, capacity}) {
    console.log(`${crew} crew space-craft with a capacity of ${capacity}` )
}

describe(dragon);
```

We can also perform all the things that we did with object destructuring before. So, I'll add a new property "name" and assign a default value and it will work perfectly fine. We can also have different variables names as before. This is really useful in many real world situations. 

```
function describe({name = "Dragon", crew, capacity: payload}) {
    console.log(`${name} is a ${crew} crew space-craft with a capacity of ${payload}` )
}

describe(dragon);
```

We can easily destructure nested properties as well. 

```

```
