// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
var guestArray = ["nida", "hira", "waniya"];
// guestArray.map((items)=>console.log(`hello,${items} you are invited to dinner.`));
var cannotAttend = "waniya";
var newGuest = "alina";
guestArray[guestArray.indexOf(cannotAttend)] = newGuest;
// for adding new guest use unshift method
guestArray.unshift("zimal");
var middleGuest = "iqra";
var middleIndex = guestArray.length / 2;
guestArray.splice(middleIndex, 0, middleGuest);
guestArray.push("zainab");
console.log(guestArray);
console.log("we can invite only two people for dinner.");
while (guestArray.length > 2) {
    var removeGuest = guestArray.pop();
    console.log(guestArray);
    console.log("\nsorry! ".concat(removeGuest, " we cannot invite you for dinner."));
}
;
guestArray.map(function (items) { return console.log("\n".concat(items, " You are still invited to dinner")); });
guestArray.pop();
guestArray.pop();
console.log(guestArray);
