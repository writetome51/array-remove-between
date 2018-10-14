You call this function when you want to remove a big chunk of adjacent items from the 
middle of the array, but know you want to keep an exact number of items at the beginning 
and end.  You pass that number as the first argument.
Example:

let arr = [1,2,3,4,5,6,7,8,9,10];

removeBetween(3, arr); // Keeps first 3 items and last 3 items.

arr is now [1, 2, 3, 8, 9, 10]
