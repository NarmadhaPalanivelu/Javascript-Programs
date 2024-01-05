const prompt=require("prompt-sync")({sigint:true});

// const numberofmonth = parseInt(prompt("Enter the number of month: "));
// const daysinmonth = parseInt(prompt("enter the days in the month"))
// let solution = numberofmonth * daysinmonth
// console.log("days in the month are=>", solution)

const nameofmonth = parseInt(prompt("enter the month name=>"));
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const monthIndex = monthNames.indexOf(nameofmonth);
// console.log(monthIndex)
const currentdata = new Date(2023, monthIndex+1, 0).getDate()
console.log(currentdata)





