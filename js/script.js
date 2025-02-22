'use strict';

import getData from "./modules/server";
import tabs from "./modules/tabs";
import modal from "./modules/modal";

window.addEventListener('DOMContentLoaded', () => {
	tabs('.list', '.books', '.list-item');
	modal('.modal', '.modal-content', '.close', '#add-book-btn');
});