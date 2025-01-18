# Binary Tree Longest Zigzag Path

A solution to find the longest zigzag path in a binary tree starting from the root. A zigzag path is created by making turns while traversing down the tree, alternating between left and right child nodes.

## Problem Description

Given a binary tree, find the length of the longest zigzag path that starts at the root. A turn in the path occurs when we switch from going left to right or from right to left. The length of the zigzag path is equal to the number of turns in the path.

## Solution Approach

The solution uses DFS (Depth-First Search) with the following strategy:
- Track current direction (left/right)
- Count turns when changing direction
- Reset counter when continuing in same direction
- Maintain global maximum for longest path found

## Complexity

- Time: O(N) - visits each node once
- Space: O(H) - recursive call stack depth equals tree height
