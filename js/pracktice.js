

// function loadusers() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then(res => res.json())
//         .then(data => displayuser(data));

// }
// const ul = document.getElementById('users')

// function displayuser(data) {
//     for (const user of data) {
//         // console.log(user.name);
//         const li = document.createElement('li');
//         li.innerText = `name: ${user.name} email:${user.email}`;
//         ul.appendChild(li);

//     }
// }

function usersloders() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(responce => responce.json())
        .then(data => displayuser(data));
}

const ul = document.getElementById('user')
function displayuser(data) {
    for (const user of data) {
        const li = document.createElement('li');
        li.innerText = `name:${user.namess} email:${user.email}`;
        ul.appendChild(li);
    }
}

function todos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(ref => ref.json())
        .then(data => todosDisplay(data));
}
const todosUl = document.getElementById('todosuser')
function todosDisplay(data) {
    for (const todosuser of data) {
        const todosLi = document.createElement('li');
        todosLi.innerText = `userId:${todosuser.userId} title:${todosuser.title} compleated:${todosuser.completed}`;
        ul.appendChild(todosLi);
    }
}