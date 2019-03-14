# Mock Functions

mock functions make it easy to test links between code by:
* erasing the actual implementation of a function.
* capturing calls to the function and the parameters passed.
* capturing instances of constructor functions when instantiated with new.
* allowing test-time configuration of return values.

there are two ways to mock functions:
* creating a mock function to use in test code.
* writing a manual mock to override a module dependency.

## Using a mock function

```javascript
// invokes a callback for each item in a supplied array.
function forEach(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}

/**
 * Use a mock function and inspect the mock's state to ensure the callback is invoked as expected.
 */
const mockCallback = jest.fn(x => 42 + x);

forEach([0, 1], mockCallback);

test("the mock function is called twice.", () => {
  expect(mockCallback.mock.calls.length).toBe(2);
});

test("the first argument to the first call to the function was 0", () => {
  expect(mockCallback.mock.calls[0][0]).toBe(0);
});

test("the first argument to the second call to the function was 1", () => {
  expect(mockCallback.mock.calls[1][0]).toBe(1);
});

test("the return value of the second call to the function was 43", () => {
  expect(mockCallback.mock.results[1].value).toBe(43);
});

```
