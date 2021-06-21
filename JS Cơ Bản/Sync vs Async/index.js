const fs = require('fs');

// console.log('start');
// let song1 = fs.readFileSync('song1.txt',{encoding:'utf8'});
// console.log(song1);
// let song2 = fs.readFileSync('song2.txt',{encoding:'utf8'});
// console.log(song2);
// console.log('end');

//Async

console.log('start');
fs.readFile('song1.txt',{encoding:'utf8'}, function(error,data){
    console.log(data);
});
console.log('end');