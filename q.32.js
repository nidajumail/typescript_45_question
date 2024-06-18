var current_user = ["raza", "usama", "omais", "Sohaib", "farheen"];
var new_user = ["Shaheer", "Mahad", "Raza", "Rabail", "Farheen"];
new_user.forEach(function (true_user) {
    var ourCondition = current_user.some(function (current_one_user) { return current_one_user.toLowerCase() === true_user.toLowerCase(); });
    if (ourCondition) {
        console.log("Sorry ".concat(true_user, " is already taken"));
    }
    else {
        console.log("This username ".concat(true_user, " is available"));
    }
});
