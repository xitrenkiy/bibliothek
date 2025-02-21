'use strict';

import login from "./modules/login";
import getData from "./modules/server";
import tabs from "./modules/tabs";
import modal from "./modules/modal";

window.addEventListener('DOMContentLoaded', () => {

	login();
	tabs('.list', '.books', '.list-item');
	modal();
});