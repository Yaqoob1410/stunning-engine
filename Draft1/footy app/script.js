const url = 'https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '00d1f4bd7cmsh13e3d42e93d0988p1a7b8cjsnf1e9cf7e26e9',
		'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
