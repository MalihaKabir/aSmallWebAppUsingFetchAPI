const getUsers = document.querySelector('#getUsers');
const getPosts = document.querySelector('#getPosts');
const outPut = document.querySelector('#output');

getUsers.addEventListener('click', getUsersFunc);
getPosts.addEventListener('click', getPostsFunc);

function getUsersFunc() {
	fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json()).then((result) => {
		let outputOfUser = '<h2 class="mb-4">Users</h2>';
		result.map((user) => {
			outputOfUser += `
                <ul class="list-group mb-4 shadow rounded">
                    <li class="list-group-item list-group-item-secondary">ID: ${user.id}</li>
                    <li class="list-group-item">Name: ${user.name}</li>
                    <li class="list-group-item">Username: ${user.username}</li>
                    <li class="list-group-item">Email: ${user.email}</li>
                </ul>
            `;
		});
		outPut.innerHTML = outputOfUser;
	});
}

function getPostsFunc() {
	fetch('https://jsonplaceholder.typicode.com/posts').then((response) => response.json()).then((result) => {
		let outPutOfPosts = '<h2 class="mb-4">Posts</h2>';
		result.map((post) => {
			outPutOfPosts += `
                <div class="card card-body mb-3 shadow rounded">
                    <h3>${post.title}</h3>
                    <p class="text-left">${post.body}</p>
                </div>
            `;
		});
		outPut.innerHTML = outPutOfPosts;
	});
}
