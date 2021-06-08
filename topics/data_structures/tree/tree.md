# Tree

- A Tree data structure is hierarchical data structure as opposed to LinkedLists and arrays which are linear data structures
- Facebook comments are a tree data structure
- Document Object Model is also a tree
- Linked list is also a type of tree with just one path
- A node can only point to a child

## Binary Tree

- Each node can only have either 0, 1 or 2 nodes
- Each child can only have one parent

### Perfect binary tree

- Perfect binary tree: all the leaf nodes are full. A node either has 0 children or 2 children
- A perfect binary tree is highly efficient

### Full binary tree

- Full binary tree: each node has 2 or 0 children, but never 1
- No of nodes doubles when moving down the tree
- Number of nodes in the last layer = count of all the other nodes + 1 (therefore, about half of the nodes are at the last level)
- lookup: O(log N)
- insert: O(log N)
- delete O(log N)
- #nodes at level 0 = 2^0 = 1
- #nodes at level 1 = 2^1 = 2
- #nodes at level 2 = 2^2 = 4
