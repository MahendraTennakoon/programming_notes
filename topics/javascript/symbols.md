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

An interesting thing about symbols is that they can be used as object keys.

```
const slot = Symbol('slot');
const voltage = Symbol('voltage');

const ram = {
  speed: 3200,
  capacity: '8 GB',
  [slot]: 'DDR4',
  [voltage]: '1.35V'
}
```

This way, we can have unique object keys that will never conflict with the other string or symbol keys of the object.
