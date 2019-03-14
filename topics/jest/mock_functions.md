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

