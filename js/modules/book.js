import { getData } from "../services/server";

function cardBook(firstSection, secondSection, thirdSection) {
	
	class Book {
		constructor(name, author, src, status, id) {
			this.name = name;
			this.author = author;
			this.src = src;
			this.status = status;
			this.id = id;
		}

		render() {
			const read = document.querySelector(firstSection),
				  readed = document.querySelector(secondSection),
				  future = document.querySelector(thirdSection),
				  regexRead = /\bread\b/g,
				  regexReaded = /\breaded\b/g,
				  regexFuture = /\bfuture\b/g;

			const div = document.createElement('div');
			div.classList.add('book');
			div.setAttribute('id', this.id);
			div.innerHTML = `
					<img src="${this.src}" alt="">
					<h3>${this.name}</h3>
					<p>${this.author}</p>
					<button class="edit">Edit</button>
			`;

			switch(true) {
				case regexRead.test(this.status): 
					read.prepend(div);
					break;
				case regexReaded.test(this.status):
					readed.prepend(div);
					break;
				case regexFuture.test(this.status):
					future.prepend(div);
					break;
			}
		}
	}

	getData('http://localhost:3000/books')
		.then(data => {
			data.forEach(({name, author, src, status, id}) => {
				new Book(name, author, src, status, id).render();
			});
		});

}

export default cardBook;