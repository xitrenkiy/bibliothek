import { patchData } from "../services/server";
import cardBook from "./book";

function editBook(activeForm, booksWrapper) {
	const form = document.querySelector(activeForm),
		  books = document.querySelectorAll(booksWrapper);

	function editStatus(form) {
		let item;

		document.addEventListener('click', (e) => {
			const bookElement = e.target.closest('.book');

			if (bookElement) {
				item = e.target.parentElement.getAttribute('id');
			}
		});

			form.addEventListener('submit', async (e) => {
				e.preventDefault();

				books.forEach(item => {
					item.innerHTML = '';
				});
	
				const formData = new FormData(form);
	
				const json = JSON.stringify(Object.fromEntries(formData));
			
				try {
					await patchData(item, json)
						.then(() => {
							cardBook('.read', '.readed', '.future');
						})
				} catch(e) {
					console.error(e.message);
				}
			});
	} 

	editStatus(form);
}

export default editBook;