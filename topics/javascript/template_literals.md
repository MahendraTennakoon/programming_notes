# Template literals
- string literals(fixed values) that allow embedded expressiions
- multi line strings and string interpolation(evaluating string literals with placeholders) features can be used
- were called "template strings" in prior editions of ES2015
- template literals are enclosed by the back-tick(\`) character instead of double or single quotes
- can contain placeholders indicated by the dollar sign and curly braces. ```${expression}```
- the expressions in the placeholder and the text between the backticks gets passed to a function
  - the default function just concatenates these parts into a single string

## Tagged templates
- contains an expression(tag) before the template literal

## IE and Edge support?

## Cross site scripting vulnerabilities


# Introduction
Introduced in ES2015(ES6), template literals are quite useful when working with strings in JavaScript. Instead of single or double quotes, template literals are enclosed by the backtick(\`) character.

```javascript
console.log(`The quick brown fox jumps over the lazy dog`)
``` 

> Fun fact: "The quick brown fox jumps over the lazy dog" is an English [pangram](https://en.wikipedia.org/wiki/Pangram)(a sentence containing all the letters of the alphabet).



- if the expression is not a string, it will be converted to a string
- can be escaped with \
- all whitespaces in the template including newlines are included in the output
