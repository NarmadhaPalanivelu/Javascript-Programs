let word = "hello"
let length = word.length
let reverse_word = ''
for(let i =length-1;i>=0;i--){
reverse_word = reverse_word+word.charAt(i)
}
console.log(reverse_word)