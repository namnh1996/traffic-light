//setTimeout(fn,ms);
console.log('Start');
let timeOutID = setTimeout(function(){
    console.log('Finish!');
}, 1000);
console.log('Done');
//clearTimeout(timeOutID);