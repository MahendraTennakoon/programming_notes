# Queues

- FIFO (First In First Out)
- Can be used to implement wait lists (eg: wait list to buy tickets)
- Booking tables in a restaurant app
- Requesting a ride in Uber
- Print queue on a printer (the person who requests first gets the first printout)
- Why use a LinkedList vs an array to build a queue?
  - it's very inefficinet to remove the first element of an array. O(n) because the rest of the elements have to be shifted after removing the element at index 0. The same operation is O(1) with a LinkedList

## Big O

- lookup: O(n)
- enqueue: O(n)
- dequeue: O(n)
- peek: O(1)
