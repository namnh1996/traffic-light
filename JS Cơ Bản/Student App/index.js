const readlineSync = require('readline-sync'); // Nhap du lieu
const fs = require('fs'); //doc va ghi du lieu

let students = [];

// doc du lieu tu data.json
function loadData(){
    let fileContent = fs.readFileSync('./data.json');
    students = JSON.parse(fileContent);
}

function showMenu(){
    console.log("1. Show all students.");
    console.log("2. Create a student.");
    console.log("3. Save & Exit.");

    let option = readlineSync.question('> ');
    switch(option){
        case '1': 
            showStudents();
            showMenu();
            break;
        case '2':
            createStudent();
            showMenu();
            break;
        case '3':
            saveAndExit();
            break;
        default:
            console.log('Wrong option!');
            showMenu();
            break;
    }
}

function showStudents(){
    for(let student of students){
        console.log(student.name, student.age);
    }
}

function createStudent(){
    let name = readlineSync.question('Name: ');
    let age = readlineSync.question('Age: ');
    let student = {
        name: name,
        age: parseInt(age)
    }
    students.push(student);
}

function saveAndExit(){
    let content  = JSON.stringify(students); // object -> string
    fs.writeFileSync('./data.json',content, { encoding: 'utf8'}); //ghi string vao data.jon
}

function main(){
    loadData();
    showMenu();
}
main();