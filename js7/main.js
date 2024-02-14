function playa(audioname) {
	let audio = new Audio(audioname);
	audio.play();
}

function openclose() {
	let menu = document.querySelector(".menu");
	let but = document.querySelector(".but");
	but.classList.toggle("otstup");
	menu.classList.toggle("vidvin");
}

function openclose2() {
	let menu = document.querySelector(".memmenu");
	let but = document.querySelector(".but2");
	but.classList.toggle("otstup2");
	menu.classList.toggle("vidvin2");
}

function todos() {
	fetch('https://jsonplaceholder.typicode.com/todos')
	.then(response => response.json())
	.then(json => {
		for (let i in json) {
			let doc = document.querySelector("main");
			doc.innerHTML += `<div class="contP">
			<hr>
			<h1>User Id: ${json[i].userId}</h1><br>
			<h1>Id: ${json[i].id}</h1><br>
			<h1>Title: ${json[i].title}</h1><br>
			<h1>Completed: ${json[i].completed}</h1><br>
			</div>`;
		}
	})
}

function posts() {
	fetch('https://jsonplaceholder.typicode.com/posts')
	.then(response => response.json())
	.then(json => {
		for (let i in json) {
			let doc = document.querySelector("main");
			doc.innerHTML += `<div class="contP">
			<hr>
			<h1>User Id: ${json[i].userId}</h1><br>
			<h1>Id: ${json[i].id}</h1><br>
			<h1>Title: ${json[i].title}</h1><br>
			<h1>Completed: ${json[i].body}</h1><br>
			</div>`;
		}
	})
}

const routers = {
	'/': 'main.html',
	'/todos': 'todos.html',
	'/auth': 'auth.html',
	'/posts': 'posts.html',
	'/reg': 'reg.html',
}



const route = (event) => {
	window.history.pushState({}, '', event.target.href);
	handleLocation();
}

document.addEventListener('click', event => {
	event.preventDefault();
	if (event.target.tagName === 'A') {
		route(event);
	}
});



const handleLocation = async () => {
	const path = window.location.pathname;
	const html = await fetch(routers[path]).then((data) => data.text());
	document.querySelector('main').innerHTML = html;
}

window.onpopstate = handleLocation
window.route = route;
handleLocation();