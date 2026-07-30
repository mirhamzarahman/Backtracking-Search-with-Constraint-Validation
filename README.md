# Backtracking Search with Constraint Validation

## Overview

This project demonstrates the **Backtracking** algorithm combined with **Constraint Validation** to solve constraint satisfaction problems.

Instead of trying every possible combination blindly, the algorithm validates each decision before moving forward. If a decision leads to an invalid state, it immediately backtracks and explores another possibility.

This approach significantly reduces unnecessary computation compared to brute-force search.

---

## Algorithm

The solution follows a recursive **Depth-First Search (DFS)** strategy:

1. Find the next unresolved position.
2. Try every possible candidate.
3. Validate whether the candidate satisfies all constraints.
4. If valid:
   - Place the candidate.
   - Recursively solve the remaining problem.
5. If recursion fails:
   - Remove the candidate.
   - Try the next one.
6. Continue until all positions satisfy the constraints.

---

## Core Concepts

- Backtracking
- Depth-First Search (DFS)
- Constraint Satisfaction Problem (CSP)
- Recursive Search
- Pruning Invalid States
- Decision Tree Exploration

---

## Time Complexity

Worst Case:

```
O(9^(N))
```

where **N** is the number of unresolved positions.

Due to constraint checking and pruning, the practical runtime is much faster than the theoretical worst case.

### Space Complexity

```
O(N)
```

- Recursive call stack
- No additional data structures are required besides recursion.

---

## Features

- Recursive implementation
- In-place modification
- Early pruning of invalid states
- Constraint validation before recursion
- Efficient depth-first exploration
- Clean and easy-to-understand logic

---

## Applications

Backtracking with constraint validation is widely used in:

- Sudoku solving
- N-Queens Problem
- Crossword generation
- Graph Coloring
- Cryptarithmetic puzzles
- Maze solving
- Constraint Satisfaction Problems (CSP)
- Scheduling and allocation problems
- Puzzle solving
- AI search algorithms

---

## Key Idea

Instead of exploring every possible solution, the algorithm eliminates impossible choices as early as possible.

```
Choose
   ↓
Validate
   ↓
Recurse
   ↓
Success?
 ├── Yes → Done
 └── No
        ↓
   Backtrack
        ↓
 Try Next Choice
```

---

## Learning Outcomes

This project helps understand:

- Recursive problem solving
- Backtracking techniques
- Search space pruning
- Constraint checking
- Depth-First Search (DFS)
- State-space exploration
- Efficient decision making in recursive algorithms

---

## License

This project is intended for educational and learning purposes.
