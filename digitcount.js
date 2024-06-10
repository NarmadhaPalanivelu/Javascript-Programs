function countDigits(num) {
    let count = 0;
    let temp = num;
    while (temp !== 0) {
        if (num % (temp % 10) === 0) 
        {
            count++;
        }
        temp = Math.floor(temp / 10);
    }
    return count;
}
let result = countDigits(120);
console.log(`Number of digits: ${result}`);

