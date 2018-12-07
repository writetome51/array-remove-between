# removeBetween(numItemsToKeepAtEachEnd, array): void

Removes everything in array between numItemsToKeepAtEachEnd.  
Example:
```
let arr = [1,2,3,4,5,6,7,8,9,10];
removeBetween(3, arr); // Keeps first 3 items and last 3 items.
// arr is now [1, 2, 3, 8, 9, 10]

let arr = ['t', 'h', 20, 100, true, false];
removeBetween(1, arr); // Keeps first item and last item.
// arr is now ['t', false]
```