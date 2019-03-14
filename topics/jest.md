# Jest

## Setup and Teardown

### Repeating setup for many tests

Use **beforeEach** and **afterEach** for tests that have to be repeated for many tests.

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
