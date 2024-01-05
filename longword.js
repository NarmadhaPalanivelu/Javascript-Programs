//method 1/

function findLongest(word) {
    let arr = word.split(" ").reduce(function (longWord, currentWord) {
      return longWord.length > currentWord.length ? longWord : currentWord;
    });
    return arr;
  } 
  console.log(findLongest("apple bubblebee mango treee"));
  
//method 2//
// function findLongestWord(str) {

//     var words = str.split(' ');
//     var maxLength = 0;
//     var longestWord = '';

//     for (var i = 0; i < words.length; i++) {
//       if (words[i].length > maxLength) {
//         maxLength = words[i].length;
//         longestWord = words[i];
//       }
//     }
//     return longestWord;
//   }
//   var sentence = "apple bubblebee mango treee";
//   var longest = findLongestWord(sentence);
//   console.log("The longest word is: " + longest);
  