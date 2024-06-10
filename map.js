/////using numbers///

// let data=[2,3,4,66,7]
// let result= data.map((x)=>x*4)
// console.log(result)

//using alphabet///

// let datas=['apple','mango','banana','cheerry']
// // let result = datas.map(datas=>"hi"+ datas)

// console.log(result)

//using object/////////////

// let objArray = [
//     { name: "tony" },
//     { age: 56 },
//     { place: "pondy" }
//   ];
// //  --->option1 let result = objArray.map(obj => obj.name || obj.age || obj.place);
//   //--> option 2 let result = objArray.map(objArray => objArray.name || objArray.age || objArray.place);

//   console.log(result);
  
////map using function//

// let numbers=[3,4,65,77,89]
// function mapconcept(num){
//     return num*2;
// }
// let answer = numbers.map(mapconcept)
// console.log(answer)

let data = [1,2, 4, 5, 6, 7];

let answer = data.map(function (ans) {
    if (ans > 2) {
        return ans * 2;
    }
}).filter((datatofilter)=>datatofilter!==undefined)
console.log(answer);
