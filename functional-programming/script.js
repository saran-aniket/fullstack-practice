function printName(firstName, callback){
    console.log(firstName);
    // lastName = "None";
    callback();
}

function printLastName(lastName){
    console.log(lastName);
}

printName("Aniket", () => console.log("LNU"));