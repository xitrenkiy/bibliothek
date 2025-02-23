function modal({ mainModal, content, closeBtn, addBtn, editBtn }) {
	const modal = document.querySelector(mainModal),
		  modalContent = document.querySelector(content),
		  close = document.querySelectorAll(closeBtn);

	let activeModal = null;

	function openModal(modalType) {
		activeModal = modalType;
		modal.style.display = 'block';
	}

	function closeModal() {
		modal.style.display = 'none';
		activeModal = null;
	}

	document.addEventListener('click', (e) => {
		if (e.target.classList.contains(addBtn)) {
			openModal('add');
		} else if (e.target.classList.contains(editBtn)) {
			openModal('edit');
		}
	});

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

	close.forEach(item => {
		item.addEventListener('click', closeModal);
	});
}

export default modal;