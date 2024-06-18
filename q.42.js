function show_magicians(magicians) {
    magicians.forEach(function (names) { return console.log(names); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "THE GREAT ".concat(name); });
}
// make an array
var magicians_names = ['Harry Poter', 'Julie', 'Romeo', 'Elbert'];
var great_magicians = make_great(magicians_names);
console.log(great_magicians);
show_magicians(great_magicians);
