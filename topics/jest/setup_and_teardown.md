# Jest

## Setup and Teardown

### Repeating setup for many tests

Use **beforeEach** and **afterEach** for work that has to be repeated for many tests.

```javascript
// will be executed before each test.
beforeEach(() => {
  initializeMovieDatabase();
});

// will be executed after each test.
afterEach(() => {
  clearMovieDatabase();
});

test('movie database has Terminator', () => {
  expect(isMovie('Terminator')).toBeTruthy();
});

test('movie database has Lord of the Rings', () => {
  expect(isMovie('Lord of the Rings')).toBeTruthy();
});
```
**beforeEach** and **afterEach** can either take a done parameter or return a promise.

```javascript
beforeEach(() => {
  // initializeMovieDatabase returns a promise that will be resolved when the database is initialized.
  return initializeMovieDatabase();
});
```
### One-Time Setup

Use **beforeAll** and **afterAll** for work that has to be performed once per file.

```javascript
// the MovieDatabse will be reused between tests.

// will be executed before all tests.
beforeAll(() => {
  return initializeMovieDatabase();
});

// will be executed after all tests.
afterAll(() => {
  return clearMovieDatabase();
});

test('movie database has Terminator', () => {
  expect(isMovie('Terminator')).toBeTruthy();
});

test('movie database has Lord of the Rings', () => {
  expect(isMovie('Lord of the Rings')).toBeTruthy();
});
```
### Scoping

* **before** and **after** blocks apply to every test in a file by default. 
* tests can be grouped together by using a **describe** block.
* **before** and **after** blocks within a **describe** block only apply to tests within that describe block.

```javascript
// applies to all tests in this file.
beforeEach(() => {
  return initializeMovieDatabase();
});

test('movie database has Terminator', () => {
  expect(isMovie('Terminator')).toBeTruthy();
});

test('movie database has Lord of the Rings', () => {
  expect(isMovie('Lord of the Rings')).toBeTruthy();
});

describe('mathcing actors to movies', () => {
  // only applies to tests within this describe block.
  beforeEach(() => {
    return initializeActorDatabase();
  });
  
  test('Arnold stars in Terminator', () => {
    expect(isActorInMovie('Arnold', 'Terminator')).toBeTruthy();
  });
  
  test('Elijah Wood stars in Lord of the Rings', () => {
    expect(isActorInMovie('Elijah Wood', 'Lord of the Rings')).toBeTruthy();
  });
});
```
**Note:** *the top-level beforeEach executes before the beforeEach within the describe block.*

### Order of execution of describe and test blocks

* **describe** handlers in a file are executed before any of the actual tests.
* After the **descrie blocks** complete, by default jest executes all the tests serially in the order they were encountered, waiting for each test to finish and be tidied up before moving on.

### Tip: test.only
use test.only to make it the only test that runs (this is helpful for debugging / identifying what causes a test to fail).

```javascript
test.only('this will be the only test that runs', () => {
  // ...
});
test('this test will not run', () => {
  // ...
});
```
