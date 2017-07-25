/* simple JSON*/
var myDetails = {
    name: "XXX",
    city: "London",
    gender: "Female"
}

/* JSON in array formar */
var myColors = ["Red", "Blue", "Green", "Yellow"];

/* Combination JSON */
var myJson = [{
    name: "XXX",
    city: "London",
    gender: "Female"
}, {
    name: "YYY",
    city: "NewYork",
    gender: "Male"
}];

console.log(" Simple JSON ---" + myDetails.city);
console.log(" ArrayFormat JSON ---" + myColors[2]);
console.log("Combination JSON ---" + myJson[1].gender);
