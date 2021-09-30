function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => dispalPosts(data))
}
loadPost();
const postContainer = document.getElementById('posts')
function dispalPosts(posts) {
    for (const post of posts) {
        const div = document.createElement('div');
        // console.log(div);
        div.classList = 'post';
        div.innerHTML = `<h2>${post.title}</h2> <p>${post.body}</p> `;
        postContainer.appendChild(div);
        console.log(post);

    }
}
