import { patchData } from "../services/server";

function editBook() {
	const form = document.querySelector('.category');

	function getClicked() {
		
	}

	function editStatus(form) {
		document.addEventListener('click', (e) => {
			form.addEventListener('submit', (e) => {
				e.preventDefault();
	
				const formData = new FormData(form);
	
				const json = JSON.stringify(formData);
	
				patchData(`http://localhost:3000/books${e.target}`, json)
					.then(data => {
						console.log(data);
					})
			});
		});
	} 

	editStatus(form);
}

export default editBook;