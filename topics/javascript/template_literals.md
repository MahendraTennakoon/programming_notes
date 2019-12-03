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
Introduced in ES2015 (ES6), template literals are quite useful when working with strings in JavaScript. Instead of single or double quotes, template literals are enclosed by the backtick (\`) character.

```javascript
console.log(`The quick brown fox jumps over the lazy dog`);
```

> Fun fact: "The quick brown fox jumps over the lazy dog" is an English [pangram](https://en.wikipedia.org/wiki/Pangram) (a sentence containing all the letters of the alphabet).

The most common use case of template literals is string interpolation or in simpler terms substitution of placeholders with their corresponding values. The placeholders are indicated by the dollar sign and curly braces.

```javascript
const guyFawkesDay = "Fifth of November";
console.log(`Remember, remember, the ${guyFawkesDay}`);
``` 

The value substituted in the placeholder can be any JavaScript expression and if it is not a string, it will be converted to a string.

Template literals support multiline strings. Notice how all whitespaces (including newlines) are preserved in the output.

```javascript
const riddleOfStrider = `
  All that is gold does not glitter,
  Not all those who wander are lost;
  The old that is strong does not wither,
  Deep roots are not reached by the frost.
  
  From the ashes, a fire shall be woken,
  A light from the shadows shall spring;
  Renewed shall be blade that was broken,
  The crownless again shall be king.
`;
console.log(riddleOfStrider);
``` 
To escape a backtick in a template literal, the backslash (\\) character can be used.

```javascript
console.log(`Template literals are enclosed by the backtick (\`) character.`);
``` 

### Tagged templates
Tagged templates support more advanced manipulations on strings. A tag (denoted before the opening backtick) is simply a function that parses the template literal.

```javascript
const movie = 'The Lord of the Rings: The Return of the King';
const awardsCount = 11;
const styled = (strings, movieName, awards) => {}
const template = styled`${movie} won all Oscar awards for which it was nominated. It won ${awardsCount} awards in total`;
``` 
As mentioned previously, the first argument to the tag function is an array of strings in the template delimited by placeholders. If we are to log ```strings``` in the above code snippet, it would be the array below.

```
["", " won all Oscar awards for which it was nominated. It won ", " awards in total"]
```
Value of each placeholder is passed in as an argument to the tag function. The tag function can return any value b
