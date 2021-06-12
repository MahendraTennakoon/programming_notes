# Graphs

- A graph is simply a set of values that are related in a pairwise fashion
- Each item is a node(a.k.a vertex)
- Nodes are connected with edges
- Graphs are great for modelling real world relationships

## Directed Graphs

- Can traverse in one direction only
- For systems where movement is not bi-directional

## Undirected Graphs

- Can traverse in both directions

## Weighted Graphs

- Data is in both nodes and edges

## Unweighted Graphs

- Data is in nodes

## Acyclic Graphs

- Nodes are connected in a cycle

## Cyclic Graphs

## Creating Graphs

### Edge List

const graph = [[0, 2], [2, 3], [2, 1], [1, 3]]

### Adjacent List

- The index of the array is the value of the graph
  const graph = [[2], [2, 3], [0, 1, 3], [1, 2]]

### Adjacent Matrix

const graph = [[0, 0, 1, 0], [0, 0, 1, 1], [1, 1, 0, 1], [0, 1, 1, 0]]
