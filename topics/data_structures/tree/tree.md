# Tree

- A Tree data structure is hierarchical data structure as opposed to LinkedLists and arrays which are linear data structures
- Facebook comments are a tree data structure
- Document Object Model is also a tree
- Linked list is also a type of tree with just one path
- A node can only point to a child

## Binary Tree

- Each node can only have either 0, 1 or 2 nodes
- Each child can only have one parent

### Perfect Binary Tree

- Perfect binary tree: all the leaf nodes are full. A node either has 0 children or 2 children
- A perfect binary tree is highly efficient

### Full Binary Tree

- Full binary tree: each node has 2 or 0 children, but never 1
- No of nodes doubles when moving down the tree
- Number of nodes in the last layer = count of all the other nodes + 1 (therefore, about half of the nodes are at the last level)
- lookup: O(log N)
- insert: O(log N)
- delete O(log N)
- #nodes at level 0 = 2^0 = 1
- #nodes at level 1 = 2^1 = 2
- #nodes at level 2 = 2^2 = 4
- #nodes in the tree = 2^h - 1 (h is height and h starts from 1)
- The above can be simplified. log nodes = h
- maximum number of decisions to make when looking for a node in a binary tree is log n

### Binary Search Tree

- Value of nodes increases when traversing right
- Value of nodes decreases when traversing left
- A node can only have upto 2 children
- lookup: O(log N)
- insert: O(log N)
- delete: O(log N)

### Balanced vs Unbalanced Binary Search Tree

- Ideally, we need balanced BSTs since they are more efficient

#### Unbalanced BST

- lookup: O(n)
- insert: O(n)
- delete: O(n)

### BST Pros

- All operations are better than O(n)
- Ordered
- Flexible size

### BST Cons

- no O(1) operations
