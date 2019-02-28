"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var arrays_match_1 = require("@writetome51/arrays-match");
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Test 1:
index_1.removeBetween(1, arr);
if (arrays_match_1.arraysMatch(arr, [1, 10]))
    console.log('test 1 passed');
else
    console.log('test 1 failed');
// Test 2: make sure those items were removed from array:
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
index_1.removeBetween(2, arr);
if (arrays_match_1.arraysMatch(arr, [1, 2, 9, 10]))
    console.log('test 2 passed');
else
    console.log('test 2 failed');
// Test 3
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
index_1.removeBetween(4, arr);
if (arrays_match_1.arraysMatch(arr, [1, 2, 3, 4, 7, 8, 9, 10]))
    console.log('test 3 passed');
else
    console.log('test 3 failed');
// Test 4:
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
index_1.removeBetween(6, arr);
if (arrays_match_1.arraysMatch(arr, [1, 2, 3, 4, 5, 6, 11, 12, 13, 14, 15, 16]))
    console.log('test 4 passed');
else
    console.log('test 4 failed');
// Test 5:
arr = [1, 2, 3, 4, 5, 6, 7, 8, [1, 2, 3], 10, 11, 12, 13, 14, 15, 16, 17];
index_1.removeBetween(8, arr);
if (arrays_match_1.arraysMatch(arr, [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17]))
    console.log('test 5 passed');
else
    console.log('test 5 failed');
// Test 6: if there is no middle past the number of items you want to ignore, trigger
// error:
var errorTriggered = false;
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
try {
    index_1.removeBetween(8, arr);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 6 passed');
else
    console.log('test 6 failed');
// Test 7: if the num items to preserve at each end times 2 exceeds length of array,
// trigger error:
errorTriggered = false;
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
try {
    index_1.removeBetween(9, arr);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 7 passed');
else
    console.log('test 7 failed');
// Test 8: if num items to keep at each end is less than 1, trigger error:
errorTriggered = false;
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
try {
    index_1.removeBetween(0, arr);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 8 passed');
else
    console.log('test 8 failed');
// Test 9: similar to test 8, but making sure negative numbers don't work either:
errorTriggered = false;
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
try {
    index_1.removeBetween(-1, arr);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 9 passed');
else
    console.log('test 9 failed');
