//database design
//Homework: 
//Design database for a e-magazine website
//Design database for a e-commerce
//Using node table to make a previous app look nicer.

const classes = [
    {
        id: 1,
        name: '1A',
        teacher: 1
    },
    {
        id: 2,
        name: '2A',
        teacher: 2
    },
    {
        id: 3,
        name: '3A',
        teacher: 3
    },
    {
        id: 4,
        name: '4A',
        teacher: 4
    }
];
const teachers = [
    {
        id: 1,
        name: 'Thao',
        age: 30
    },
    {
        id: 2,
        name: 'Huong',
        age: 30
    },
    {
        id: 3,
        name: 'Hoa',
        age: 30
    },
    {
        id: 4,
        name: 'Chau',
        age: 30
    }
];

const students = [
    { id: 1, nam: 'Nam1', class: 1},
    { id: 1, nam: 'Nam1', class: 1},
    { id: 2, nam: 'Nam2', class: 2},
    { id: 3, nam: 'Nam3', class: 3},
    { id: 4, nam: 'Nam4', class: 4}
]

function getStudentsInClass(classname){
    let classObject = classes.find((x) => {
        return x.name === classname;
    });
    let studentsInClass = students.filter((student) => {
        return student.class === classObject.id;
    });
    return studentsInClass;

}

var result = getStudentsInClass('1A');
console.log(result);