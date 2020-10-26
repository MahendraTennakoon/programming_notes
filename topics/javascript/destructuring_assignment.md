# Destructing Assignment

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

