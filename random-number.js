


let number = 10.6;
let number2 = 100;


let floor = Math.floor(number);
let ceil = Math.ceil(number);
let round = Math.round(number);
let max = Math.max(number, number2);
let min = Math.min(number, number2);

let random = Math.random(number)*10;
let randomResult = Math.round(random);


console.log("Floor : "+floor);
console.log("Ceil : "+ceil);
console.log("Round : "+round);
console.log("Random : "+random);
console.log("Maximum : "+max);
console.log("Minimum : "+min);
console.log("1 to 10 random number : "+randomResult);


let num = 10;
console.log("\nRadom number 1 to 1 time print")
for(let i = 1; i<= num ;i++){
    let random2 = Math.random(num);
    let randomResult2 = Math.round(random2);
    console.log(randomResult2);
}









