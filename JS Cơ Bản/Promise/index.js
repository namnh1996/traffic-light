// const fs = require('promise-fs');


// function onDone(song){
//     console.log(song);
// }
// function onError(error){
//     console.log(error);
// }

// function readFile(path){
//     return fs.readFile(path,{encoding:'utf8'});
// }

// readFile('song1.txt')
//     .then(onDone)
//     .then(function(){
//         return readFile('song2.txt');
//     })
//     .then(onDone)
//     .catch(onError);

// fs.readFile('song1.txt',{encoding:'utf8'})
// .then(function(song1){
//     console.log(song1);
// })
// .catch(function(error){
//     console.log(error);
// });

const fs = require('fs');
const co = require('co');
const { readFile } = require('promise-fs');

function readFilePromise(path){
    return new Promise(function(resolve,reject){
        fs.readFile(path,{encoding:'utf8'}, function(err,data){
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        })
    }) 
}

// readFilePromise('song1.txt')
//     .then(function(song1){
//         console.log(song1);
//     })
//     .catch(function(err){
//         console.log(err);
//     });

// Promise.all([
//     readFilePromise('song1.txt'),
//     readFilePromise('song2.txt'),
//     readFilePromise('song3.txt')
// ]).then(function(values){
//     console.log(values);
// })
// .catch(function(err){
//     console.log(err);
// });


//generator function
// co(function*(){
//     // let song1 = yield readFilePromise('song1.txt');
//     // let song2 = yield readFilePromise('song2.txt');
//     // let song3 = yield readFilePromise('song3.txt');
//     let values = yield [
//         readFilePromise('song1.txt'),
//         readFilePromise('song2.txt'),
//         readFilePromise('song3.txt')
//     ]
//     return values;
// }).then(function(values){
//     console.log(values);
// }).catch(function(err){
//     console.log(err);
// });


// let readFiles= co.wrap(function*(files){
//     let values = yield files.map(function(file){
//         return readFilePromise(file);
//     });
//     return values;
// })

// readFiles(['song1.txt', 'song2.txt', 'song3.txt'])
//     .then(function(values){
//         console.log(values);
//     })

async function run(){
    let song1 = await readFilePromise('song1.txt');
    let song2 = await readFilePromise('song2.txt');
    let song3 = await readFilePromise('song3.txt');
    //console.log([song1, song2, song3]);
    return [song1, song2, song3];
}
run().then(function(values){
    console.log(values);
})