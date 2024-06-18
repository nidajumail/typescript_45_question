let current_user = ["Raza","usama","omais","Sohaib","farheen"]
let new_user = ["Shaheer","Mahad","Raza","Rabail","Farheen"]
new_user.forEach(true_user =>{
    let ourCondition=current_user.some(current_one_user => current_one_user.toLowerCase() === true_user.toLowerCase())
    if(ourCondition){console.log(`Sorry ${true_user} is already taken`)}else{console.log(`This username ${true_user} is available`)}
})
