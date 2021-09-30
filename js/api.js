function lodedata() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(responce => responce.json())
        .then(data => console.log(data))
}

function loadusers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayuser(data));

}

function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => console.log(data));
}
const ul = document.getElementById('users')

function displayuser(data) {
    for (const user of data) {
        // console.log(user.name);
        const li = document.createElement('li');
        li.innerText = `name: ${user.name} email:${user.email}`;
        ul.appendChild(li);

    }
}