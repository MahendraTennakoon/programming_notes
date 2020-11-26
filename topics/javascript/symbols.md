# Symbols

## Introduction

Symbol is a new JavaScript primitive data type introduced with ES6. In this video, we will go through how to create and use symbols and also what problems we can solve with them.

```
- undefined
- Boolean
- Number
- String
- Bigint
- Symbol
```

## Creating Symbols

We can create a symbol by calling the global function `Symbol()`. This is in contrast to the other primitive types that have a literal syntax. (TODO: find literal syntax, add examples)

```
console.log(Symbol()); // Symbol()
```

Symbol() is not a consturctor. If we try to use it as one, it will throw an error/

```
new Symbol(); // TypeError: Symbol is not a constructor
```

## Description argument

The `Symbol()` function accepts an optional description argument.

```
const sym1 = Symbol("speed");
const sym2 = Symbol("direction");

console.log(sym1.toString()); // speed
console.log(sym2.toString()); // direction
```

This description property can be accessed by calling `toString` on the symbol. Actually, we can remove it here since `console.log()` calls `toString()` implicitly.

```
console.log(sym1);
console.log(sym2);
```

The description property can make debugging easier. However, it does not affect the uniqueness of the symbol in any way.

```
const sym1 = Symbol("speed");
const sym2 = Symbol("speed");

console.log(sym1 === sym2); // false
```
As you can see, the symbols are still unique eventhough the description is the same.


## typeof

We can use the typeof operator to check whether a variable is a sybol.

```
const sym1 = Symbol("speed");
console.log(typeof sym1);
```

## Symbols as object keys

It is possible to use symbols as object keys and this is prbobably where you will use them the most.

Let's assume we have the following object to represent a todo in a todo app.

```
const todo = {
    id: '001',
    description: 'deploy services',
}

console.log(todo);
```
What if we do the following somewhere in our code.

```
...

todo.id = '002';
console.log(todo);
```

This overwrites `id` in the todo object. This is a simple example, but there are instances in real world applications where we need to ensure that certain object properties are uncollidable to avoid avoid scenarios like this.

Let's try this again this with a Symbol.

```
const id = Symbol('id');

const todo = {
    id: '001',
    description: 'deploy services',
}

todo.id = '002';
console.log(todo); // { id: '002', description: 'deploy services' }
```

As you can see, that didn't change anything. This is because the key `id` on the todo object is still treated as a string key. We need to wrap it in sqaure brackets to indicate that it is a Symbol.

```
const id = Symbol('id');

const todo = {
    [id]: '001',
    description: 'deploy services',
}

todo.id = '002';
console.log(todo); // { id: '002', [Symbol(id)]: '001', description: 'deploy services' }
```

Now, although `todo.id` still adds a string key `id` to the object, it also has a Symbol `id` key that was not overwritten. We can use the same notation with square brackets to access the the Symbol key.

```
...
console.log(todo.id); // 002
console.log(todo[id]); // 001
```
