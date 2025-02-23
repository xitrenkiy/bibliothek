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

export { getData };
export { postData };