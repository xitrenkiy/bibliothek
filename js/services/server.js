const getData = async (url) => {
	try {
		const res = await fetch(url);

		return await res.json();
	} catch(e) {
		throw new Error('Sometihing went wrong...');
	}
}

const postData = async (url, data) => {
	const res = await fetch(url, {
		method: 'POST',
		headers: {
			"Content-type": "application/json"
		},
		body: data
	});

	return await res.json();
}

const patchData = async (activeId, newStatus) => {
	const res = await fetch(`http://localhost:3000/books/${activeId}`, {
		method: 'PATCH',
		headers: {
			"Content-type": "application/json"
		},
		body: JSON.stringify({
			status:	newStatus
		})
	});

	return await res.json();
}

export { getData };
export { postData };
export { patchData };