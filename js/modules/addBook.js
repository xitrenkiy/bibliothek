import { postData } from "../services/server";
import cardBook from "./book";

function addBook(activeForm, booksWrapper) {
	const form = document.querySelector(activeForm),
		  books = document.querySelectorAll(booksWrapper);

	function bindPostData(form) {
		form.addEventListener('submit', (e) => {
			e.preventDefault();

			books.forEach(item => {
				item.innerHTML = '';
			});

			const formData = new FormData(form);

			const json = JSON.stringify(Object.fromEntries((formData.entries())));

			postData('http://localhost:3000/books', json)
				.then((data => {
					console.log(data);
					cardBook('.read', '.readed', '.future');
				}))
				.finally(() => {
					form.reset();
				});
		});
	}

	bindPostData(form);
}

export default addBook;