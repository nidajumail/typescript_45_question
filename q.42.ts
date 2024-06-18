function show_magicians(magicians:string[]){
    magicians.forEach(names => console.log(names));
}

function make_great(magicians : string[]){
  return magicians.map(name => `THE GREAT ${name}`)
}
// make an array
    let magicians_names = ['Harry Poter', 'Julie', 'Romeo', 'Elbert']

   let great_magicians= make_great(magicians_names)
   console.log(great_magicians)


   show_magicians(great_magicians)