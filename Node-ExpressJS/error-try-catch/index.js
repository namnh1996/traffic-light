//cach bat loi 1

// function add(a,b){
//     if(typeof a !== "string" ||  typeof b !== "string"){
//         throw new Error("Wrong type");
//     }
//     return a + b;
// }
// try{
//     let result = add('a',1);
// } catch (error){
//     console.log(error);
// }
// console.log("XXX");

//cach bat loi 2
function reject(){
    return new Promise(function(resolve, reject){
        reject(new Error('Promise error'));
    })
}
reject().catch(function(error){
    console.log('Has error', error.message);
})