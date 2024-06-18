var userNames = ["Admin", "Mahad", "Shaheer", "Orhaan", "Balaj"];
userNames.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello ".concat(oneUser, ", Would you like to see status report"));
    }
    else {
        console.log("Hello ".concat(oneUser, ", Thank you for logging in again."));
    }
});
