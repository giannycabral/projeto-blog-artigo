const API_URL = 'https://jsonplaceholder.typicode.com/posts';

async function getPosts() {
    const response = await fetch(API_URL);
    return await response.json();
}

async function createPost(post) {
    const response = await fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
            'Content-type': 'application/json'
        }
    });
    return await response.json();
}

async function deletePost(id) {
    await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
    });
}