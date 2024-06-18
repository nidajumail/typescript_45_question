function show_magicians(magicians) {
    magicians.forEach(function (names) { return console.log(names); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "THE GREAT ".concat(name); });
}
// make an array
var magicians_names = ['Harry Poter', 'Julie', 'Romeo', 'Elbert'];
var copy_magicians_names = magicians_names.slice();
// modify the copied array to include "The Great" with their names
var copy_great_magicians = make_great(copy_magicians_names);
console.log("original array\n");
show_magicians(magicians_names);
console.log("copied array\n");
show_magicians(copy_great_magicians);
