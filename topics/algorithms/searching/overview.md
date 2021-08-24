- If you know a solution is not far from the root of the tree: BFS (because it searches closest nodes to the parent first)

- If the tree is very deep and solutions are rare: BFS (DFS will take long because the solutions are rare and it will traverse very deep)

- If the tree is very wide: DFS (BFS will need too much memory)

- If solutions are frequent but located deep in the tree: DFS

- Determining whether a path exists between two nodes: DFS

- Finding the shortest path: BFS

## BFS

- Very good for finding the shortest path
- Requires more memory than DFS

## DFS

- Requires less memory
- Very good at ansering the question: does the path exist?
- Can get slow
- Space complexity is equal to the height of the tree O(height)
