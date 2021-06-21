const users = [
    { name: 'Tom', gender: 'male'},
    { name: 'Jerry', gender: 'male'},
    { name: 'Max', gender: 'male'},
    { name: 'Renee', gender: 'female'},
    { name: 'Lisa', gender: 'female'}
];
//var userList = $('#userList');
//var genderFillter = $('#genderFillter');

var userList = document.getElementById('userList');
var genderFiller = document.getElementById('genderFillter');

render(userList, users);

genderFillter.addEventListener('change', function(){
    var selectedGender = this.value;
    if(selectedGender === 'all'){
        render(userList,users);
    }
    else{
    var filleredUsers = users.filter(function(user){
        return user.gender === selectedGender;
    })
    render(userList,filleredUsers);
    }
});

function render(container, items){
    var htmlItems = items.map(function(item){
        return `<li class = "list-group-item">${item.name}</li>`;
    })
    var html = htmlItems.join('');
    container.innerHTML = html;
}