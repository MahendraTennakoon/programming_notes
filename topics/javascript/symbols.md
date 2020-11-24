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

The `Symbol()` function always creates a unique value when you call it.

```
const sym1 = Symbol();
const sym2 = Symbol();
console.log(sym1 === sym2); // false
```

