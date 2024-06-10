let gcd,lcm;
let number1 = 10;
let number2 = 20;
for(let i=1; i<=number1 && i<=number2; i++){
    
    if(number1%i==0 && number2%i==0){
     
        gcd=i;

    }
}
lcm = (number1*number2)/gcd;
console.log