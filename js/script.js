'use strict';

import { getData } from "./services/server";
import tabs from "./modules/tabs";
import modal from "./modules/modal";
import cardBook from "./modules/book";
import addBook from "./modules/addBook";
import editBook from "./modules/editBook";

window.addEventListener('DOMContentLoaded', () => {
	getData('http://localhost:3000/books');
	tabs('.list', '.books', '.list-item');
	modal({
		mainModal:'.modal', 
		content: '.modal-content',
		closeBtn: '.close',
		addBtn: 'add',
		});
	modal({
		mainModal:'#edit__modal', 
		content: '#edit__modal-content',
		closeBtn: '.close',
		editBtn: 'edit'
	});
	cardBook('.read', '.readed', '.future');
	addBook();
	// editBook();

	console.log(getData('http://localhost:3000/books')
		.then(data => {
			console.log(data);
			data.filter(item => {
				const arr =  Object.entries(item);
				arr.filter(element => {
					console.log(element[1] == 'Jordge');
				});
			});
		})
	);
});