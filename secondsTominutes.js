const prompt=require("prompt-sync")({sigint:true}); 
let input = prompt("enter the seconds to covert into minutes=>")
let minutes=60;
let answer=input/minutes;
console.log(answer)