function tabs(list, selector, listItem) {
	const all = document.querySelectorAll(selector),
		  ul = document.querySelector(list),
		  listStatus = document.querySelectorAll(listItem);

	ul.addEventListener('click', (e) => {
		const target = e.target;
		if (!target.matches(listItem)) return;
		
		listStatus.forEach(item => {
			item.classList.remove('clicked');
		});

		target.classList.add('clicked');
	});
	
	function setActiveById(id, selector) {
		const item = document.querySelector(id),
			  book = document.querySelector(selector);

		item.addEventListener('click', () => {
			all.forEach(item => {
				item.classList.remove('active');
			});
			book.classList.toggle('active');
		});
	}

	setActiveById('#read', '.read');
	setActiveById('#readed', '.readed');
	setActiveById('#future', '.future');
}

export default tabs;