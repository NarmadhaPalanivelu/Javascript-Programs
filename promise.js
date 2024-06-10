///basic promise method////////
/*let promise = new Promise(function(resolve,reject){

    resolve()
    reject()
  
});
promise.then(
    function(value){
        console.log("sucess",value)
    },
    function(error){
        console.log("error",error)
    }
);

*/
// using timeout function///////////////////

/*let mypromise = new Promise(function(resolve,reject){
    setTimeout(() => {
        
        resolve("hi")
    }, 2000);
})
mypromise.then(console.log)
*/

let promise = new Promise(function(resolve, reject){

    if(7<2){
        resolve();
        console.log("sucess")   
    }
    else{
        reject();
        console.log("wrong")
    }
});
promise.then(
    function(){
        console.log("sucessful")
    },
    function(){
        console.log("not successfull")
    }
)


