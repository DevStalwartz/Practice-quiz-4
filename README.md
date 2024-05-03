# Practice-quiz-4

# Deliverables

Challenge:
Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.
Example:

Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].
Addendum:
Please, keep in mind, that JavaScript is by default sorting objects alphabetically

# Solution 

By using Javascript we start by defining the function flattenAndSort
```
function flattenAndSort(array) {
  // Good luck, brave code warrior!
}
```

We then use the concat method to concatenate the array and sort it in ascending order.
```
function flattenAndSort(array) {
  return array.flat().sort((a,b) => a - b);
}
```

## Test Cases
```
Test.assertSimilar(flattenAndSort([]), []);
Test.assertSimilar(flattenAndSort([[], [1]]), [1]);
Test.assertSimilar(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]), [1, 2, 3, 4, 5, 6, 7, 8, 9])