//==== method 1

// let data = [3,6,76,45,90]
// let sum=0;
// data.forEach(addition)

// function addition(add){
// sum=sum+add
// }

// console.log(sum)

//=== method 2

// const data = [2,3,456,67,54]
// data.forEach(element => {   
    
//     console.log(element)// 
// });

//==method 3

/*const data = ['a','b','c','d']
data.forEach(x=>{
    console.log(x)
})
*/

//== modification of array 

/*const arr = ['a', 'b', 'c'];
const data =[];
arr.forEach((v, i) => {
    data.push(v.toUpperCase())
});
console.log(data)
*/
//== accessing the key of object

/*const data = [
    { name: 'alice', age: 23 },
    { name: 'shal', age: 45 },
    { name: 'goo', age: 67 }
  ];
  
  data.forEach(element => {
    Object.keys(element).forEach(key => {
      console.log(key);
    });
  });
  */
 //== accesing the data
 const data = [
    { name: 'alice', age: 23 },
    { name: 'shal', age: 45 },
    { name: 'goo', age: 67 }
  ];
  data.forEach(element=>{
    Object.values(element).forEach(value=>{
        console.log(value)
    })
  })

