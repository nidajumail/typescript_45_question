function make_sandwich(...items:string[]){
    console.log("\n making a sandwich with the following items \n")
items.forEach(singleitem => console.log(singleitem));
console.log("Now enjoy the sandwiches")
}

make_sandwich("cheese", "chiken", "mayo")
make_sandwich("bread", "butter")
make_sandwich("mustard sauce","lattuce", "hot sauce", "eggs", "bell pepper")