// let i = 0;
// let intervalID = setInterval(() => {
//     ++i;
//     console.log(i);
//     if(i === 5){
//         clearInterval(intervalID);
//     }
// }, 1000);

async function countFrom(a,b){
    //su dung setIterVal, setTimeOut
    await new Promise(function(resolve, reject){
        let arr = [];
        let i = a;
        // for(i; i <= b; i++){
        //     console.log(i);
        //     arr.push(i);
        // }
        let intervalId = setInterval(() => {
            console.log(i);
            i++;
            arr.push(i);
            if(i > b){
                clearInterval(intervalId);
                resolve(arr);
            }
        }, 1000)
    });
}
countFrom(1,10).then(function(){
    console.log('Done');
})