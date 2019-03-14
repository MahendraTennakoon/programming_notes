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
