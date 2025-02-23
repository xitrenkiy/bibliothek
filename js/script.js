'use strict';

import { getData } from "./services/server";
import tabs from "./modules/tabs";
import modal from "./modules/modal";
import cardBook from "./modules/book";
import addBook from "./modules/addBook";

window.addEventListener('DOMContentLoaded', () => {
	getData('http://localhost:3000/books');
	tabs('.list', '.books', '.list-item');
	modal('.modal', '.modal-content', '.close', '#add-book-btn');
	cardBook('.read', '.readed', '.future');
	addBook();
});