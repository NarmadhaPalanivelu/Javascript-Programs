const prompt=require("prompt-sync")({sigint:true}); 
// let number = prompt('Enter the number of terms: ');
let number =5
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');
for (var i = 1; i <= number; i++) 
{
    
    console.log(n1);
    nextTerm = n1 + n2;
     n1 = n2;
     n2 = nextTerm; 
}
//nex = 0+1=1
nex=1
0=n2
1=nex