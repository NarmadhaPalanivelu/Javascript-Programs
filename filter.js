//normal function//

// let data=[3,45,65,23,6789,54]
// let answer=data.filter(data=>(data%2===0))
// console.log(answer)

//filter using fucntion//

function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
  }
  
  let data = [3, 45, 65, 23, 6789, 84];
  let answer = filterEvenNumbers(data);
  
  console.log(answer);