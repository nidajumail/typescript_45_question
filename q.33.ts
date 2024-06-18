let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9 ]

for(let ourNumber of numbers){
    let ordinalEnding : string
if(ourNumber === 1){
    ordinalEnding = "st"
}
else if(ourNumber === 2){
    ordinalEnding = 'nd'

}
else if (ourNumber === 3){
    ordinalEnding = 'rd'
}
else {ordinalEnding = 'th'}
console.log(`${ourNumber}${ordinalEnding}`)
}