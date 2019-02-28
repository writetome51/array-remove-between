# removeBetween(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;numItemsToKeepAtEachEnd,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array<br>): void

Removes everything in `array` between `numItemsToKeepAtEachEnd`.  

## Example
```
let arr = [1,2,3,4,5,6,7,8,9,10];
removeBetween(3, arr); // Keeps first 3 items and last 3 items.
// arr is now [1, 2, 3, 8, 9, 10]

let arr = ['t', 'h', 20, 100, true, false];
removeBetween(1, arr); // Keeps first item and last item.
// arr is now ['t', false]
```

## Installation
`npm i @writetome51/array-remove-between`

## Loading
```
// if using TypeScript:
import {removeBetween} from '@writetome51/array-remove-between';

// if using ES5 JavaScript:
var removeBetween = require('@writetome51/array-remove-between').removeBetween;
```