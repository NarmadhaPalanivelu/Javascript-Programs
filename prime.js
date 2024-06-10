function isPrime(num) {
    // Check if num is less than 2
    if (num < 2) {
        return false;
    }
    // Check for divisibility from 2 to num - 1
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// Test the function
console.log(isPrime(8)); 