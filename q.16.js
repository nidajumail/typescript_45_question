// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
var guestArray = ["saba", "nida", "huda"];
guestArray.map(function (items) { return console.log("hello,".concat(items, " you are invited to dinner.")); });
var cannotAttend = "huda";
var newGuest = "alina";
guestArray[guestArray.indexOf(cannotAttend)] = newGuest;
console.log("welcome we found a bigger dinner table, so now more space is available.");
// for adding new guest in beggining use unshift method
guestArray.unshift("zimal");
console.log(guestArray);
// for adding name in middle
var middleGuest = "eshaal";
var middleIndex = guestArray.length / 2;
guestArray.splice(middleIndex, 0, middleGuest);
console.log(guestArray);
// for adding name in last of array
guestArray.push("zainab");
console.log(guestArray);
