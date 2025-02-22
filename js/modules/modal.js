function modal(mainModal, content, closeBtn, add) {
	const modal = document.querySelector(mainModal),
		  modalContent = document.querySelector(content),
		  close = document.querySelector(closeBtn),
		  addBtn = document.querySelector(add);

	function openModal() {
		modal.style.display = 'block';
	}

	function closeModal() {
		modal.style.display = 'none';
	}

	addBtn.addEventListener('click', openModal);
	close.addEventListener('click', closeModal);

	modal.addEventListener('click', (e) => {
		if (!modalContent.contains(e.target)) {
			closeModal();
		}
	});

	document.addEventListener('keydown', (e) => {
		if (e.code == 'Escape') {
			closeModal();
		}
	});
}

export default modal;