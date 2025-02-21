function login() {
	class User {
		constructor(login, password) {
			this.login = login;
			this.password = password;
		}
	}

	const admin = new User('admin', '12345678');

	const login = document.querySelector('input[name="login"]'),
		  password = document.querySelector('input[name="password"]'),
		  loginBtn = document.querySelector('button'),
		  wrapper = document.querySelector('.wrapper');
	
	loginBtn.addEventListener('click', (e) => {
		e.preventDefault();

		const existError = document.querySelector('.error');
		if (existError) {
			existError.remove();
		}

		if (login.value === admin.login && password.value === admin.password) {
			window.location.href = 'biblio.html';
		} else {
			const div = document.createElement('div');
			div.classList.add('error');

			if (login.value.trim() == '' || password.value.trim() == '') {
				div.textContent = 'Заполните все поля!';
				setTimeout(() => {
					div.remove();
				}, 3000);
			} else {
				div.textContent = 'У вас недостаточно прав, возможность регистрации будет предоставлена в ближайшем будущем.';
				setTimeout(() => {
					div.remove();
				}, 3000)
			}

			wrapper.appendChild(div);
		}
	});
}

export default login;