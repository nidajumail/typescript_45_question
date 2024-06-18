function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\n making a sandwich with the following items \n");
    items.forEach(function (singleitem) { return console.log(singleitem); });
    console.log("Now enjoy the sandwiches");
}
make_sandwich("cheese", "chiken", "mayo");
make_sandwich("bread", "butter");
make_sandwich("mustard sauce", "lattuce", "hot sauce", "eggs", "bell pepper");
