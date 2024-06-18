function show_magicians(magicians:string[]){
    magicians.forEach(names => console.log(names));
}

function make_great(magicians : string[]){
  return magicians.map(name => `THE GREAT ${name}`)
}
// make an array
    let magicians_names = ['Harry Poter', 'Julie', 'Romeo', 'Elbert']

   
let copy_magicians_names=magicians_names.slice()
// modify the copied array to include "The Great" with their names
let copy_great_magicians = make_great(copy_magicians_names) 
console.log("original array\n")
show_magicians(magicians_names)

console.log("copied array\n")
show_magicians(copy_great_magicians)
