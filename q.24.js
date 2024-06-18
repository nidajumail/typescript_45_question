"use strict";
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
Object.defineProperty(exports, "__esModule", { value: true });
// • Test
let Animal = 'lion';
let upperCaseLION = 'LION';
let ten = 10;
let twenty = 20;
let fruits = ["orange", "mango", "banana"];
// • Tests for equality and inequality with strings
console.log("Is animal is equal to lion?");
console.log(Animal == 'lion');
console.log("Is animal is not equal to lion?");
console.log(Animal != 'lion');
// • Tests using the lower case function
console.log("Is upperCaseLION is equal to lowercase lion?");
console.log(upperCaseLION.toLowerCase() == "lion");
console.log("Is uppercaseLION is not equal to lowercase lion?");
console.log(upperCaseLION.toLowerCase() != "lion");
// • Numerical tests involving equality and inequality 
console.log('Is ten is equal to twenty?');
console.log(ten == twenty);
console.log('Is ten is not equal to twenty?');
console.log(ten != twenty);
//  greater than and less than
console.log('Is ten is greater than twenty?');
console.log(ten > twenty);
console.log('Is ten is less than twenty?');
console.log(ten < twenty);
// greater than or equal to, and less than or equal to
console.log('Is ten is greater than and equal to twenty?');
console.log(ten >= twenty);
console.log('Is ten is less than and equal to twenty?');
console.log(ten <= twenty);
// • Tests using "and"  operators
console.log("20 is not equal to  10 and 20 is greater than 10 ");
console.log(twenty != 10 && twenty > 10);
console.log("20 is equal to  10 and 20 is greater than 10 ");
console.log(twenty == 10 && twenty > 10);
// using or operators
console.log("20 is equal to 10 and 20 is greater than 10");
console.log(twenty == 10 || twenty > 10);
console.log("20 is equal to 10 and 20 is less than 10");
console.log(twenty == 10 || twenty < 10);
// • Test whether an item is in a array
console.log("Is banana is include in fruit array?");
console.log(fruits.includes("banana"));
console.log("Is banana is not include in fruit array?");
console.log(!fruits.includes("banana"));
