let userNames = ["Admin","Mahad","Shaheer","Orhaan","Balaj"];
userNames = []
if(userNames.length === 0){console.log("sorry! your array is empty  we need to find some users")}

    
userNames.forEach(oneUser =>{if(oneUser === "Admin"){console.log(`Hello ${oneUser}, Would you like to see status report`)}
else{console.log(`Hello ${oneUser}, Thank you for logging in again.`)}})