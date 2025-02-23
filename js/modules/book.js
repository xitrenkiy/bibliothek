import { getData } from "../services/server";

function cardBook(firstSection, secondSection, thirdSection) {
	
	class Book {
		constructor(name, author, src, status) {
			this.name = name;
			this.author = author;
			this.src = src;
			this.status = status;
		}

		render() {
			const read = document.querySelector(firstSection),
				  readed = document.querySelector(secondSection),
				  future = document.querySelector(thirdSection);

			const div = document.createElement('div');
			div.classList.add('book');
			div.innerHTML = `
					<img src="${this.src}" alt="">
					<h3>${this.name}</h3>
					<p>${this.author}</p>
					<button class="edit">Edit</button>
			`;

			switch(this.status) {
				case firstSection.slice(1): 
					read.prepend(div);
					break;
				case secondSection.slice(1):
					readed.prepend(div);
					break;
				case thirdSection.slice(1):
					future.prepend(div);
					break;
			}
		}
	}

	getData('http://localhost:3000/books')
		.then(data => {
			data.forEach(({name, author, src, status}) => {
				new Book(name, author, src, status).render();
			});
		});

}

export default cardBook;