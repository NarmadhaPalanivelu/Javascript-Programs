//METHOD 1//////////////////////////////////////////////////////
const prompt=require("prompt-sync")({sigint:true});

let num=12345
let reverse_num=0
while(num!=0){
  let rem = num%10;
  reverse_num = reverse_num*10+rem;
  num = Math.floor(num/10)
}
console.log(reverse_num)

///////METHOD 2 USING STRING///////////////////////////////////////////

// let str = prompt("Enter the string to be reversed:"); 
// function reverse_string(string) {
//   return string.split("").reverse().join(""); 
// }
// console.log(reverse_string(str));

 
