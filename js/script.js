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
	addBook('.add__book', '.books');
	editBook('.category', '.books');
});