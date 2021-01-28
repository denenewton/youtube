const axios = require('axios');

test('Should get posts', async function () {
	const response = await axios({
		url: 'http://localhost:3000/posts',
		method: 'get'
	});
	console.log(response.status)
	console.log(response.data)

	const posts = response.data;
	expect(posts).toHaveLength(2);
	const [firstPost] = posts;
	expect(firstPost.id).toBe(1);
	expect(firstPost.title).toBe('JavaScript');
	
});
