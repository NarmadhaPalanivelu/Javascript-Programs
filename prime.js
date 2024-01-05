const prompt=require("prompt-sync")({sigint:true}); 
let num=prompt("enter the number=>:")
let count=0
for(let i=2; i<num; i++){
    if(num%i==0){
count++
    }
}
if(count>0){
    console.log("prime no")
}
else{
    console.log("not a prime no")
}
   
