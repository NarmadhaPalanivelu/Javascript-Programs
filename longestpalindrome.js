// function findLongest(str) {
//     let arr = str.split(' ').filter(word => palindrome(word));
//     return arr.reduce((small,long) => small.length > long.length ? small : long);
//   }
//   function palindrome(str) {
//       return str === str.split('').reverse().join('');
//   }


//   console.log(findLongest('im bob from keraala, i speak malayalam'));

// form the palindrome in the given word/

// const isPalindrome = str => str === str.split('').reverse().join('');
function isPalindrome(str) {
    return str === str.split('').reverse().join('');
  }
  
  const findLongestPalindrome = word => {
    const palindromes = [];
  
    for (let i = 0; i < word.length; i++) {
      for (let j = i + 1; j <= word.length; j++) {
        const substring = word.slice(i, j);
        console.log(substring)
        if (isPalindrome(substring)) {
          palindromes.push(substring);
        }
      }
    }
  
    return palindromes.reduce((longest, current) =>
      current.length > longest.length ? current : longest, '');
  };
  
  const inputWord = "youspeakmalayamsowellbeebeebll";
  const longestPalindrome = findLongestPalindrome(inputWord);
  
  console.log("The longest palindrome is:", longestPalindrome);
  

  
  
