const prompt=require("prompt-sync")({sigint:true}); 
let input = prompt("enter the number to check perfect or not=>");
let count = 0;
for(let i=1;i<input;i++){
    if(input%i==0){
         count=count+i;         
    }
}
    if(count===parseInt(input)){
        console.log("its a perfect number")
    }
    else{
        console.log("its not perfect number")
    }
    

