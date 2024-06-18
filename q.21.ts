// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items

interface items {
    name:string
    colour:string
    price:number
}

const fruits: items ={
    name:"guava",
    colour:"green",
    price:1200      
}

const fruits1: items = {

    name:"banana",
    colour:"yellow",
    price:1000
}
console.log(`fruits name: ${fruits.name}, price: ${fruits.price}`)

console.log(`fruits1 name: ${fruits1.name}, price: $${fruits1.price},colour: ${fruits1.colour}`)