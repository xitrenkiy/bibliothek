import { postData } from "../services/server";

function addBook() {
	const form = document.querySelector('.add__book');

	function bindPostData(form) {
		form.addEventListener('submit', (e) => {
			e.preventDefault();

			const formData = new FormData(form);

			const json = JSON.stringify(Object.fromEntries((formData.entries())));

			postData('http://localhost:3000/books', json)
				.then((data => {
					console.log(data);
				}))
				.finally(() => {
					form.reset();
				});
		});
	}

	bindPostData(form);
}

export default addBook;