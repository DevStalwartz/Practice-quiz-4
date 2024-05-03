// Write you code here
 // Flatten the two-dimensional array into a single array
 // Sort the flattened array in ascending order

function flattenAndSort(array) {
    const flattenedArray = array.reduce((acc, curr) => acc.concat(curr), []);
    const sortedArray = flattenedArray.sort((a, b) => a - b);

    return sortedArray;
}

// Example:
const input = [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]];
console.log(flattenAndSort(input)); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
