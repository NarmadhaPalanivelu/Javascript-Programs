
//reduce method using functions////
// let data = [3,54,67,55,22]

// let answer=data.reduce(function(previousval,currentval){
//     return(previousval + currentval)
// },0)
// console.log(answer)


/// using without function///

let data = [3,54,67,55,22]
let answer= data.reduce((accumulator,currentvalue)=>accumulator+currentvalue);
console.log(answer)

