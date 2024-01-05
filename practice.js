
////////palindrom number////////////
// let data = 121
// let temp=data.toString()
// // console.log(temp)
// let datas = temp.split("").reverse().join('')
// console.log(datas)
// if(datas==data){
//     console.log('palindrome')
// }
// else{
//     console.log("not a palindrome")
// }

const { indexOf } = require("lodash");

////palindrome using words////

// let words = 'malayalam';
// let cleanedStr = words.replace(/[^A-Za-z0-9]/g,'').toLowerCase();

// let reverse_str = cleanedStr.split('').reverse().join("");

// console.log(reverse_str)

// count the palindrome words==============================================================

// let lines = ['mom',"dad","malayalam","dog","cat","mam"]

// let countpalindorme = 0;
// let countnotpalindrome=0

// lines.forEach((words)=>{ 
//     let cleanedStr = words.replace(/[^A-Za-z0-9]/g,'').toLowerCase();
//     let reverse_str = cleanedStr.split('').reverse().join("");
//     if(cleanedStr===reverse_str){
        
//         countpalindorme++
//     }
//     else{
        
//         countnotpalindrome++
//     }
// });

// console.log("countpalindorme", +countpalindorme)
// console.log("countnotpalindrome", +countnotpalindrome)


//=========find the palindrome==========================================//

// let lines='im bob from keraala, i speak malayalam';
// let changes = lines.split(/\s+/);
// let countpalindorme = 0;
// let countnotpalindrome=0;
// let longestpalnidrome =" "

// changes.forEach((words)=>{ 
//     let cleanedStr = words.replace(/[^A-Za-z0-9]/g,'').toLowerCase();
//     let reverse_str = cleanedStr.split('').reverse().join("");
//     if(cleanedStr===reverse_str){
        
//         countpalindorme++
//     }
    
//     if (cleanedStr.length>longestpalnidrome.length){
//         longestpalnidrome = cleanedStr
//     }
//     else{
        
//         countnotpalindrome++
//     }

// });

// console.log("countpalindorme", +countpalindorme)
// console.log("countnotpalindrome", +countnotpalindrome)
// if(longestpalnidrome){
//     console.log("longestpalnidrome=>", longestpalnidrome)
// }
// else {
//     console.log("not found")
// }

//////////////////extract palindrome word  in the joining word///////////////


// let lines = 'narmadhamalayalamdadteaeye';
// let cleanedStr = lines.replace(/[^A-Za-z0-9]+/g, '').toLowerCase();
// let palindromes = [];
// for (let i = 0; i < cleanedStr.length; i++) {
//     for (let j = i + 2; j <= cleanedStr.length; j++) {
//         let substr = cleanedStr.substring(i, j);
//         let reverseStr = substr.split('').reverse().join('');
//         if (substr === reverseStr) {
//             palindromes.push(substr);
//         }     
//     }
// }
// console.log("Palindromes:", palindromes);

//=====================search number//////////////////////

let data =[2,3,4,6,7,8]
let targetdata =3;
let index = indexOf(targetdata)
for(let i =0;i<data.length;i++){
    
    data[i]===targetdata
    console.log(`${targetdata} is found in the index ${index}`)

}
